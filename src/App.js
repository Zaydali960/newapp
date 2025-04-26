
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import SuccessStory from './Components/successStory';
import AkhuwatLoanService from './Components/akhuwatLoanService';
import AkhuwatBussinessLoan from './Components/akhuwatBussinessLoan';
import AkhuwatHouseLoan from './Components/akhuwatHouseLoan';
import AboutUs from './Components/aboutUs';
import ContactUS from './Components/contactUs';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {
  return (
    <Router>
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

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
