import Logo from "./images/Logo.png"; // 
import './App.css';
import NavbarComp from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import About from 'pages/About';


function App() {
  return (
    <div>
      <div className="app-header">
      <img src={Logo} alt="Company Logo" className="app-logo" />
       <h1 className="app-heading">
      RIFT  NAKURU < br/>
      INSURANCE AGENCIES LTD < br/>
      SECURING YOUR FUTURE
      </h1>
      </div>

      <NavbarComp />
      <Hero />
      <Features />
      <About />
    </div>
  );
}

export default App;

