import React, {useEffect, useState} from 'react';


const Crousal = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className="container-fluid py-5 d-flex justify-content-center" style={{ backgroundColor: '#f2f5fa', height:'600px'}}>
      <div className="row mt-5" style={{width:'80%'}}>
        <div className={`col-md-6 ${isMobile? "col-12 mb-4 mb-md-0":""}`}>
          <h1 className={`${isMobile?"fw-bold fs-3 fs-md-1":"display-5 fw-bold mt-5"}`}>
            Akhuwat Loan Scheme – Pakistan’s Leading Loan Provider
          </h1>
        </div>
        <div className="col-md-6 text-center mt-3">
          <img className="img-fluid"
            src="https://akhuwatloanschemepk.com/wp-content/uploads/2025/04/drsaqib.jpg"
            alt="Akhuwat Loan Scheme"
            style={{ maxHeight: '315px', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Crousal;
