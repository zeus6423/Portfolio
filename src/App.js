
import './App.css';
import Header from '../src/components/header/Header'
import Nav from "../src/components/nav/Nav"
import About from "../src/components/about/About"
import Services from "../src/components/services/Services"
import Experience from "../src/components/experience/Experience"
import Portfolio from "../src/components/portfolio/Portfolio"
import Testimonials from "../src/components/testimonials/Testimonials"
import Contact from './components/contact/Contact';
import Footer from '../src/components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
