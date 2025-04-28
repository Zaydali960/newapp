import React from 'react';
import CountUp from 'react-countup';

const AkhuwatBusinessLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1100px", margin: "0 auto", fontSize: '22px' }}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Business Loan:Helping business owners all over Pakistan</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        With the Akhuwat Business Loan, Pakistani businesspeople can get the money they need to start their own businesses. Starting or growing a business can be hard, especially if you don't have a lot of money. Akhuwat's interest-free loans are a great option for people who can't get loans from regular banks. The Akhuwat Foundation's goal is to give businesspeople the tools they need to grow their businesses, become financially independent, and make a real difference in the economy of the country.
        </p>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          
Akhuwat's loan program can help you make your dreams come true, whether you want to open a store, start a service-based business, or put money into small-scale manufacturing.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Akhuwat Home Loan Pros - Interest-Free Financing</h2>
          <p>Akhuwat Business Loan offers several features designed to empower entrepreneurs:</p>
          <ul>
            <li><strong>Interest-Free Financing:</strong> No burden of high-interest repayments that typically prevent business growth.</li>
            <li><strong>No Collateral Required:</strong> Easy access to funds without putting personal assets at risk.</li>
            <li><strong>Flexible Repayment Terms:</strong> Loan repayments are customized to suit your business’s cash flow, making it easier to stay on track.</li>
            <li><strong>Support for Small Businesses:</strong> Helping small-scale entrepreneurs create jobs, stimulate local economies, and improve community well-being.</li>
            <li><strong>Encouraging Financial Inclusion:</strong> Providing underserved communities access to financial resources, which promotes a more inclusive economy.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-12-29-at-14.13.32_589854b3.jpg"
            alt="Business Loan Support"
            className="img-fluid wm-100 h-100"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">SUPPORTING ENTREPRENEURS</p>
            <h2 className="display-4 text-center fw-bold">
  <CountUp end={14} duration={3} suffix="K+" />
</h2>
          </div>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Steps to Take to Get an Akhuwat Business Loan</h2>
          <p>
          It's easy and doesn't take much time to apply for an Akhuwat business loan. Just do these simple things:
          </p>
          <ul>
            <li><strong>Check Your Eligibility:</strong> You have to be a Pakistani national from a low-income family and have a good business idea or a small business that is already up and running.</li>
            <li><strong>Prepare the paperwork:</strong> Get important papers together, like your Computerized National Identity Card (CNIC), proof of where you live, and information about your business.</li>
            <li><strong>Send in your application:</strong> You can apply online at the main Akhuwat site. Our team will help you with any papers you need and with the whole application process.</li>
            <li><strong>Authorization and Payment:</strong> The loan amount will be sent to you right away after your application is reviewed and accepted.</li>
            <li><strong>Paying back:</strong> Pay back the loan in easy-to-handle installments as decided upon in the repayment plan.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center p-3">
          <img
            src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-06-12-at-3.15.37-PM-768x768-1.jpeg"
            alt="Entrepreneur Support"
            className="img-fluid wm-100 h-80"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">BUSINESSES SUPPORTED</p>
            <h2 className="display-4 text-center fw-bold">
  <CountUp end={8000} duration={3} suffix="+" />
</h2>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">Why Choose Akhuwat Business Loan?</h2>
          <p>
            Akhuwat Business Loans are designed to help entrepreneurs at every stage of their journey—from idea development to scaling their businesses. By providing interest-free loans without the need for collateral, Akhuwat is removing barriers to entrepreneurship and enabling individuals to achieve financial independence.
          </p>
          <p>
            Akhuwat’s focus on small businesses contributes significantly to community development by generating jobs, stimulating the local economy, and supporting the livelihood of families across Pakistan.
          </p>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">Join the Akhuwat Movement Today!</h2>
          <p>
            If you are ready to take the next step in building your business, Akhuwat Business Loans can help you make that dream a reality. Visit your nearest Akhuwat branch or apply online today, and start your journey towards becoming a successful entrepreneur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatBusinessLoan;
