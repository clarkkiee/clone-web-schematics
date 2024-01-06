import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import {Helmet} from "react-helmet"
import About from './components/about/About';
import Events from './components/events/Events';
import Sponsor from './components/sponsor/Sponsor';
import Footer from './components/Footer/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';


function App() {
  return (
      <div className="App">
        <Helmet>
          <title>Schematics 2023 x UBS Gold</title>
        </Helmet>
        <div className='overflow-hidden box-border'>
          <Navbar/>
          <Hero/>
          <About/>
          <Events/>
          <Sponsor/>
          <Footer/>
        </div>
        <SpeedInsights/>
      </div>
  );
}

export default App;
