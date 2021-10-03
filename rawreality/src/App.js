import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Switch, Route} from 'react-router-dom'
import NavMenu from './Components/NavBar/NavMenu'
import LogoWidget from './Components/NavBar/LogoWidget';
import SectionContainer from './Components/Containers/SectionContainer';
import LandingCard from './Components/Cards/LandingCard';
import AboutUsCard from './Components/Cards/AboutUsCard';
import ServiceCardContainer from './Components/Containers/ServiceCardContainer';
import FooterContainer from './Components/Containers/FooterContainer';
import ContactCard from './Components/Cards/ContactCard';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
      <NavMenu categorias={["Servicios","Nosotros", "Contacto"]}>
      <LogoWidget/>
      </NavMenu>
      </header>
      <SectionContainer>
        <LandingCard/>
      </SectionContainer>
      <SectionContainer>
        <AboutUsCard/>
      </SectionContainer>
      <SectionContainer>
      <ServiceCardContainer/>
      </SectionContainer>  
      <FooterContainer>
        <ContactCard/>
      </FooterContainer>
    </div>
    </BrowserRouter>
  );
}

export default App;
