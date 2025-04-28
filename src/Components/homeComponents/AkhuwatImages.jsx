import React from 'react';
import bussinessOwner from '../../Images/Bussiness owners.png'
import Farmer from '../../Images/Farmer.png'

const AkhuwatImages = () => {
  return (
    <div className="container-fluid bg-light py-5">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-5 mb-4 mb-md-0 d-flex justify-content-center m-4">
          <img 
            src={bussinessOwner} 
            alt="Hasina Bibi - Stitching Business" 
            className="img-fluid rounded"
            style={{ height: '600px', maxWidth: '110%', objectFit: 'cover' }}
          />
        </div>
  
        <div className="col-md-5 d-flex justify-content-center m-4">
          <img 
            src={Farmer}
            alt="Farzana Bibi - Beauty Parlour" 
            className="img-fluid rounded"
            style={{ height: '600px', maxWidth: '112%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default AkhuwatImages;