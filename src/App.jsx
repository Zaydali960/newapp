
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import SuccessStory from './Components/successStory';
import AkhuwatLoanService from './Components/akhuwatLoanService';
import AkhuwatBussinessLoan from './Components/akhuwatBussinessLoan';
import AkhuwatHouseLoan from './Components/akhuwatHouseLoan';
import AboutUs from './Components/aboutUs';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndCondition from './Components/TermsAndCondition';
import Disclaimer from './Components/Disclaimer';
import ContactUS from './Components/contactUs';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {
  return (
    <Router>

      <div className='whatsapp'>
        
        {/* 923428347762 */}
        <a target="_blank" aria-label="Chat on WhatsApp" href="https://wa.me/923428347762?text="> <i style={{ color: '#0dc143' }} className="fa fa-whatsapp" aria-hidden="true"></i> </a>
      </div>
      <div className='phonenum'>
        
        {/* 923428347762 */}
        <a aria-label="Chat on WhatsApp" href="tel:923428347762"> <i style={{ color: '#0dc143' }} className="fa fa-phone-square" aria-hidden="true"></i> </a>
      </div>
      <div className="overflow-hidden whitespace-nowrap relative" style={{ backgroundColor: '#108515' }}>
        <div className="d-flex headlineMove" style={{ fontWeight: 'bold', width: 'max-content' }}>
          <p className="p-2 m-0 text-white">
          Since 2001, Dr. Amjad Saqib’s visionary leadership, integrity, compassion, and dedication have empowered millions through interest-free loan services. For Easy Loan service please contact Akhuwat Head Office No. 03428347762
          </p>
          <p className="p-2 m-0 text-white">
          Since 2001, Dr. Amjad Saqib’s visionary leadership, integrity, compassion, and dedication have empowered millions through interest-free loan services. For Easy Loan service please contact Akhuwat Head Office No. 03428347762
          </p>
        </div>
      </div>

      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/success-story">
          <SuccessStory />
        </Route>
        <Route exact path="/akhuwat-loan-service">
          <AkhuwatLoanService />
        </Route>
        <Route exact path="/akhuwat-bussiness-loan">
          <AkhuwatBussinessLoan />
        </Route>
        <Route exact path="/akhuwat-house-loan">
          <AkhuwatHouseLoan />
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/contact-us">
          <ContactUS />
        </Route>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/disclaimer">
          <Disclaimer />
        </Route>
        <Route exact path="/terms-and-conditions">
          <TermsAndCondition />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
