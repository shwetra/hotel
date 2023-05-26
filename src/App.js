import './App.css';
import Navbar from './Components/Navbar';
import { AllRoutes } from './Components/AllRoutes';
import Footer from './Components/Footer';
import About from './Components/About';
import ContactForm from './Components/Contact';
import { Offershow } from './Components/Offershow';
import { AddHotel } from './Components/AddHotel';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <AllRoutes/>


 
  {/* <ContactForm/> */}
    </div>
  );
}

export default App;
