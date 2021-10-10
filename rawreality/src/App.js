import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Switch, Route} from 'react-router-dom'
import NavMenu from './Components/NavBar/NavMenu'
import LogoWidget from './Components/NavBar/LogoWidget';
import SectionContainer from './Components/Containers/SectionContainer';
import LandingCard from './Components/Cards/LandingCard';
import AboutUsCard from './Components/Cards/AboutUsCard';
import ServiceBarCard from './Components/Cards/ServiceBarCard';
import ServiceCard from './Components/Cards/ServiceCard';
import FooterContainer from './Components/Containers/FooterContainer';
import ContactCard from './Components/Cards/ContactCard';
import Portfolio from './Components/Cards/Portfolio';
import {servicios} from './Components/Containers/ServiceCardContainer';

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

      <ServiceBarCard servicios={servicios}/>

      <ServiceCard servicios={servicios}/>

      <SectionContainer>
        <Portfolio/>
      </SectionContainer>  

      <FooterContainer>
        <ContactCard/>
      </FooterContainer>

    </div>
    </BrowserRouter>
  );
}

export default App;
