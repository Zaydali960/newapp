import React, { useState } from "react";

const AkhuwatLoanStatus = () => {
  const [cnicNumber, setCnicNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`CNIC number ${cnicNumber} submitted`);
  };

  return (
    <div className="container py-5" >
      <div className="row align-items-center justify-content-center">
        {/* Left Column: Image + Form in a box */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="shadow rounded p-4 bg-white">
            <img
              src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/10/akhuwat-loan-apply_2024.webp"
              alt="Akhuwat Loan Banner"
              className="img-fluid rounded mb-3"
            />
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Enter Your CNIC Number"
                  value={cnicNumber}
                  onChange={(e) => setCnicNumber(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-info text-white w-100 py-3" style={{backgroundColor:'#108515'}}>
                Proceed <i className="ms-2">→</i>
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="col-md-6 p-5">
          <h2 className="fw-bold mb-3">Check the status of your loan online at any time</h2>
          <p>
          Applying for an Akhuwat loan is now possible online. To check on the status of your loan, give your valid CNIC and the mobile number that the Akhuwat Loan Department has on file. If you have any problems while trying to check the state of your loan online, you can call the Akhuwat Loan WhatsApp Helpline for help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatLoanStatus;

