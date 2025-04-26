
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
     <div className="overflow-hidden whitespace-nowrap relative" style={{ backgroundColor: '#108515' }}>
  <div className="d-flex headlineMove" style={{ fontWeight: 'bold', width: 'max-content' }}>
    <p className="p-2 m-0 text-white">
      Akhuwat Foundation Loan 2025 Scheme. How To apply for loan today online in Pakistan. Best Akhuwat loan services. اخوت فاؤنڈیشن لون 2025 سکیم۔ پاکستان میں آج ہی قرض کے لیے آن لائن اپلائی کرنے کا طریقہ۔ اخوت قرض کی بہترین خدمات
    </p>
    <p className="p-2 m-0 text-white">
      Akhuwat Foundation Loan 2025 Scheme. How To apply for loan today online in Pakistan. Best Akhuwat loan services. اخوت فاؤنڈیشن لون 2025 سکیم۔ پاکستان میں آج ہی قرض کے لیے آن لائن اپلائی کرنے کا طریقہ۔ اخوت قرض کی بہترین خدمات
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

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
