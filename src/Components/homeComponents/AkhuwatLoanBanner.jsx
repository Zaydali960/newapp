import React from 'react';
import centerImg from '../../Images/loangraphic.png'
const AkhuwatLoanBanner = () => {
  return (
    <div className="container my-4">
      <div className="row ">
        {/* Left column with text */}
        <div className="col-md-6 p-5 d-flex align-items-center order-2">
          <div>
            <p className="fs-6 fw-light">
              Welcome to Akhuwat Loan Scheme, your gateway to financial empowerment and prosperity. In today’s dynamic and ever-evolving economic landscape, attaining financial freedom transcends being merely a goal; it represents a journey toward a brighter, more secure future. At Akhuwat Loan Apply, we understand the importance of financial independence and are dedicated to providing you with the tools, resources, and support you need to unlock your true potential and realize your dreams.
            </p>
            <p className="mt-3">
              How to Apply for Akhuwat Loan – <a href="/" className="text-primary text-decoration-none fw-bold">ApplyAkhuwatLoan</a>:
            </p>
          </div>
        </div>

        {/* Right column with image content */}
        <div className="col-md-6  p-0 d-flex justify-content-center order-1 ">
          <img data-aos-duration="1500" data-aos="fade-left" src={centerImg} alt="" style={{ maxWidth: "75%", height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default AkhuwatLoanBanner;