import React from 'react';

const AkhuwatAdvantage = () => {
  return (
    <div className="container-fluid py-5" style={{ maxWidth: '100%' }}>
      <h1 className="text-center mb-5 display-4 fw-light">The Good Things About Akhuwat</h1>
      
      <div className="d-flex justify-content-center">
        <div className="row mx-auto" style={{ width: '85%', maxWidth: '1200px' }}>
          <div className="col-md-4 px-3 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center p-4">
                <h2 className="card-title mb-3 fw-bold">A History of Dependability</h2>
                <p className="card-text">
                A helpful plan has been made public by the Akhuwat Foundation. It only needs a few pieces of paperwork; it doesn't need a lot of proof. The foundation has set loan limits that are easy for everyone to reach. This has helped Akhuwat become very famous in Pakistan.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 px-3 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center p-4">
                <h2 className="card-title mb-3 fw-bold">Full financial<br /> solutions</h2>
                <p className="card-text">
                Akhuwat Foundation offers many different types of financial products and services, such as personal loans, business loans, and microfinance, all of which are tailored to your specific wants and goals. We want to help you every step of the way, whether you want to be a business, a seasoned worker, or a leader in your community.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 px-3 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center p-4">
                <h2 className="card-title mb-3 fw-bold">Putting the customer first</h2>
                <p className="card-text">
                Your happiness comes first.  Our skilled staff is dedicated to giving you personalized service, clear communication, and top-notch help at all times while you're working with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatAdvantage;