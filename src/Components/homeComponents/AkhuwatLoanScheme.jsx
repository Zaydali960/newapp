import React from 'react';
import lonSchemeImg from '../../Images/SchemeLoanImg.png'

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">Credit Scheme for the Akhuwat Foundation</h1>
            
            <p className="mb-4 fw-bold mt-1">
            The Akhuwat Foundation has made a helpful plan that anyone can use. It only needs a small amount of paperwork, which makes the application process easy and quick. The Akhuwat Foundation has become very famous all over Pakistan because it offers loan amounts that are easy for everyone to afford.
            </p>
            
            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
              If this process seems complicated to you, don't worry—just call the Akhuwat head office number, and someone will help you right away.
              </p>
            </div>
          </div>
          
          <div className="col-lg-7 ml-3">
            <img 
              src={lonSchemeImg} 
              alt="Akhuwat Loan Scheme Details in Urdu" 
              className="img-fluid"
              style={{height:"500px"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default AkhuwatLoanScheme;