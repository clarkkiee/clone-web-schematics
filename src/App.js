import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import {Helmet} from "react-helmet"
import About from './components/about/About';

function App() {
  return (
      <div className="App">
        <Helmet>
          <title>Schematics 2023 x UBS Gold</title>
        </Helmet>
        <Navbar/>
        <Hero/>
        <About id="about"/>
      </div>
  );
}

export default App;
