import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import NavBar from './components/NavBar.tsx';
import Slider from './components/Slider.tsx';
import GreatStory from './components/Story.tsx';
import Gallary from './components/Gallary.tsx';
import OfferSection from './components/OfferSection.tsx';
import CountupSection from './components/CountupSection.tsx';
import IdeasSection from './components/IdeasSection.tsx';
import OurTeam from './components/OurTeam.tsx';
import LogoSlider from './components/logos.tsx';
import InfoSection from "./components/InfoSection.tsx";
import Characteristics from "./components/Characteristics.tsx";
import WhatWeDo from './components/WhatWeDo.tsx';
import SmallGallry from "./components/SmallGallary.tsx";
import Footer from './components/Footer.tsx';

function App() {

  return (

    <div className="App">

      <NavBar/>
      <Slider/>
      <GreatStory/>
      <Gallary/>
      <OfferSection/>
      <CountupSection/>
      <IdeasSection/>
      <OurTeam/>
      <LogoSlider/>
      <InfoSection/>
      <Characteristics/>
      <WhatWeDo/>
      <SmallGallry/>
      <Footer/>
      
    </div>
  );
}

export default App;
