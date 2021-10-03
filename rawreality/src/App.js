import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Switch, Route} from 'react-router-dom'
import NavMenu from './Components/NavBar/NavMenu'
import LogoWidget from './Components/NavBar/LogoWidget';
import SectionContainer from './Components/Containers/SectionContainer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
      <NavMenu categorias={["About us", "Contacto"]}>
      <LogoWidget/>
      </NavMenu>
      </header>
      <SectionContainer>
        <div>Esta es la seccion 1</div>
      </SectionContainer>
      <SectionContainer>
        <div>Esta es la seccion 2</div>
      </SectionContainer>
    </div>
    </BrowserRouter>
  );
}

export default App;
