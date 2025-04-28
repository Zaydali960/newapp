
import React from 'react';
import CountUp from 'react-countup';
const AkhuwatHouseLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto", fontSize:'22px' }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Housing Loan: Making your dream home come true</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        If you want to make or buy your dream home, an Akhuwat house loan is the best option. Many people want to own their own home, but they can't because they don't have enough money. This is especially true for people who don't have much. People and families all over Pakistan who want to own a home but can't because traditional housing loans are too expensive are lucky to have Akhuwat's interest-free housing loans.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Advantages of an Akhuwat loan for home financing with no interest</h2>
          <p>
          One of the best things about the Akhuwat home loan is that there is no interest charge at all. Traditional home loans usually have high interest rates, but Akhuwat's loan has low interest rates that make bills affordable for families with low incomes.
          </p>
          <ul>
            <li>No Need for Collateral: Traditional housing loans usually need collateral like land or other assets. The Akhuwat Foundation's loan doesn't need any collateral, so it can be used by more people.</li>
            <li>Plans for affordable repayment: Akhuwat gives borrowers a variety of easy-to-handle repayment choices based on their income and ability to pay back the loan. This personalized method helps make sure that paying back the loan doesn't become too expensive.</li>
            <li>Getting more people to use money: Akhuwat's interest-free home loans help support financial inclusion by giving people, especially those from low-income families, access to loans they would not have been able to get from traditional banks. With this help, they can become landlords and become more financially stable.</li>
            <li>Making living conditions better: The main goal of Akhuwat Foundation's house loan is to give people the tools they need to improve their living situations so they can live in safe, secure, and comfortable homes.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-12-29-at-14.13.32_589854b3.jpg"
            alt="Money Received"
            className="img-fluid wm-100 h-100"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">SUPPORTING FAMILIES</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={14} duration={3} suffix="K+" /></h2>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Who Can Apply?</h2>
          <p className=''>
            Akhuwat Housing Loan is open to all Pakistani citizens who have a genuine need for housing support. Whether you're looking to build a new home, buy your first house, or renovate your current living space, this loan service is crafted for you.
          </p>
          <ul>
            <li>Low-income families and individuals are encouraged to apply.</li>
            <li>Applicants must provide basic documentation including CNIC and residence proof.</li>
            <li>Community involvement and endorsements strengthen your application.</li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3">
          <img
            src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-06-12-at-3.15.37-PM-768x768-1.jpeg" 
            alt="Housing Help"
            className="img-fluid wm-100 h-80"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">HOMES BUILT</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={8000} duration={3} suffix="+" /></h2>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-12">
          <h2 className="fw-bold mb-3 text-center">How to Apply for an Akhuwat Housing Loan</h2>
          <ul>
            <li><strong>Eligibility:</strong> Must be a Pakistani citizen with a need for housing assistance.</li>
            <li><strong>Documentation:</strong> Provide your CNIC, proof of income, and a description of your housing project.</li>
            <li><strong>Application Submission:</strong> Visit your nearest Akhuwat branch and submit your application.</li>
            <li><strong>Processing and Approval:</strong> Applications are reviewed carefully, and successful applicants are notified promptly.</li>
            <li><strong>Fund Disbursement:</strong> Funds are released after approval as per agreed-upon terms.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatHouseLoan;

