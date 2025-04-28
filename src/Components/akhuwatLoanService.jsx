import React from 'react';
import CountUp from 'react-countup';

const AkhuwatLoanServices = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto" , fontSize:"22px"}}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Loan Services in Pakistan: Making Goals and Progress Possible</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        Akhuwat offers a range of custom loan services that can help you and your business get on the path to financial freedom and success. Akhuwat gives easy, interest-free loans to help you make your dreams come true, whether you want to go to school, start or grow a business, or buy a house.
        </p>
      </div>

      {/* Personal Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">1. Personal loans can help you reach your goals.</h2>
          <p>
          Akhuwat's personal loan service can help you get the money you need for any reason, like a medical issue, a family event, or something personal. You don't have to worry about paying high interest rates. Our personal loans with no interest are meant to help you relax about money so you can concentrate on what really counts in life.

          </p>
          <ul>
            <li>Eligibility: Clear and simple requirements.</li>
            <li>Repayment plans that are flexible and can be changed to fit your needs.</li>
            <li>Get the help you need right when you need it with quick processing.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center"
                >
                  <img
                    src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-12-29-at-14.13.32_589854b3.jpg"
                    alt="Money Received"
                    className="img-fluid  wm-100 h-100 mt-5"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="start-0 bg-success text-white p-0"
                    style={{ maxWidth: "100%" }}
                  >
                    <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                    <h2 className="display-4 text-center fw-bold">
                      <CountUp end={14} duration={3} suffix="K+" />
                      </h2>
                  </div>
                </div>
      </div>

      {/* Business Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">2.Business loans give entrepreneurs the tools they need to succeed.</h2>
          <p>
          It can be hard to start or grow a business, but Akhuwat's business loan services can help you get the money you need to make your plans come true. We offer interest-free loans to businesses of all sizes, from small start-ups to well-known brands. This lets business owners focus on growth and long-term success.

          </p>
          <ul>
            <li>You can get a loan for both short-term and long-term needs.</li>
            <li>Services that are clear: there are no secret costs or fees.</li>
            <li>Loans are available for all kinds of businesses, from shopping to technology and more.</li>
          </ul>
        </div>
        
      </div>

      {/* Education Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">3. Getting an education loan can help you succeed.</h2>
          <p>
          Akhuwat believes that education has the power to change things. Our student loans give them the money they need to keep going to school and reach their academic goals. Our interest-free loans make sure that money problems won't get in the way of your success, whether it's for school, books, or living costs.
          </p>
          <ul>
            <li>Loan coverage is available for all or part of the cost of education.</li>
            <li>Interest-free loans are made so that students can focus on their studies without any distractions.</li>
            <li>Flexible Repayment: It's easy to pay back the loan after you finish school.</li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3 "
                >
                  <img
                    src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/11/WhatsApp-Image-2024-06-12-at-3.15.37-PM-768x768-1.jpeg" 
                    alt="Money Received"
                    className="img-fluid  wm-100 h-80 mt-5"
                    style={{ objectFit: "cover" }}
                  />
                  {/* <div
                    className="start-0 bg-success text-white p-0"
                    style={{ maxWidth: "100%" }}
                  >
                    <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                    <h2 className="display-4 text-center fw-bold">14K+</h2>
                  </div>*/}
                
      </div>
      </div>
            

      {/* Housing Loans Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">4. Housing loans: getting the money you need to buy a home</h2>
          <p>
          Home ownership is one of the greatest achievements in life, and Akhuwat's housing loans can help you get closer to this milestone. Our Non-interest-bearing housing loans enable you to buy or renovate your house without any significant financial burden.
          </p>
          <ul>
            <li>Flexible loans can be used to buy homes or fix them up.</li>
            <li>Simple paperwork makes the process easy, and approval comes quickly.</li>
            <li>Affordable Repayment Terms: Comfortable and manageable terms.</li>
          </ul>
        </div>
        
        
      </div>
    </div>
  );
};

export default AkhuwatLoanServices;