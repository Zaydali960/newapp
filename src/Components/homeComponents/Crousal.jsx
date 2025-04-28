import React, {useEffect, useState} from 'react';
import mainImage from '../../Images/amjad.png'

const Crousal = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className="container-fluid py-5 d-flex justify-content-center mainCarousal" style={{ height:'600px'}}>
      <div className="row" style={{width:'80%'}}>
        <div className={`col-md-6 ${isMobile? "col-12 mb-4 mb-md-0":""} d-flex align-items-center`}>
          <h1   data-aos-duration="1500" data-aos="fade-right" className={`${isMobile?"fw-bold fs-3 fs-md-1":"display-5 fw-bold"}`}>
          The Akhuwat Loan Program is Pakistan's best loan company.
          </h1>
        </div>
        <div className="col-md-6 text-center">
          <img className="img-fluid brand-image"
          data-aos="fade-left"
            data-aos-duration="1500"
            src={mainImage}
            alt="Akhuwat Loan Scheme"
            style={{ maxHeight: '600px', objectFit: 'contain',scale:window.innerWidth<768?1.4:1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Crousal;
