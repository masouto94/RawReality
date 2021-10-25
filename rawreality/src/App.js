import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Switch, Route} from 'react-router-dom'
import NavMenu from './Components/NavBar/NavMenu'
import { categories } from './Utils/Categories';
import LogoWidget from './Components/NavBar/LogoWidget';
import SectionContainer from './Components/Containers/SectionContainer';
import LandingCard from './Components/Cards/LandingCard';
import AboutUsCard from './Components/Cards/AboutUsCard';
import ServiceBarCard from './Components/Cards/ServiceBarCard';
import ServiceCard from './Components/Cards/ServiceCard';
import FooterContainer from './Components/Containers/FooterContainer';
import ContactCard from './Components/Cards/ContactCard';
import Portfolio from './Components/Cards/Portfolio';
import {servicios} from './Utils/Services';
import PacksCardContainer from './Components/Containers/PacksCardContainer';
import { portfolioImages } from './Utils/PortfolioImages';
import WhatsappButton from './Components/Buttons/WhatsappButton';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
      <NavMenu categorias={categories}>
      <LogoWidget/>
      </NavMenu>
      </header>
    <WhatsappButton/>
      <SectionContainer id={"LandingContainer"} url={'/logos/MaskGroup.png'}>
        <LandingCard/>
      </SectionContainer>

      <SectionContainer>
        <AboutUsCard/>
      </SectionContainer>

    {/* No tiene container */}
      <ServiceBarCard servicios={servicios}/>

    {/* Genera un container por cada card */}
      <ServiceCard servicios={servicios}/>

    <SectionContainer>
    <PacksCardContainer/>
    </SectionContainer>
    
    <SectionContainer>
        <Portfolio portfolio={portfolioImages}/>
        </SectionContainer>



<FooterContainer>
        
        <ContactCard/>
      </FooterContainer>

    </div>
    </BrowserRouter>
  );
}

export default App;
