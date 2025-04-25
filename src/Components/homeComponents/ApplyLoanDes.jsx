import React, {useEffect, useState} from 'react';

const ApplyLoanDes = () => {

      const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
        useEffect(() => {
          const handleResize = () => setIsMobile(window.innerWidth < 768);
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);

  return (
    <section
      className="text-white text-center d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('https://akhuwatloanschemepk.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-12-29-at-14.13.32_190a4a14.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: isMobile ? '60vh' : '55vh'
      }}
    >
      <div className="bg-dark bg-opacity-50  rounded py-4" style={{ height: isMobile ? '60vh' : '55vh', width: '100%'}}>
        <h1 className={`fw-light fw-normal ${isMobile?'fs-3 fs-md-1':"p-4"}`}>
          Apply Today For The Akhuwat Loan That Suits Your Needs Perfectly
        </h1>
        <p className={`fs-5  mx-auto pb-4 my-4 ${isMobile?'fs-3 fs-md-1 fw-light':"fw-normal mt-2"}`} style={{ maxWidth: "800px", paddingBottom:'45px' }}>
          Financial freedom is the cornerstone of a fulfilling and rewarding life. It’s about having the ability to make choices that align with your goals, values, and aspirations without being hindered by financial constraints. In this chapter, we delve deep into the essence of financial freedom, exploring what it means to be financially independent and how you can achieve this state of empowerment with the help of Akhuwat Loan Apply.
        </p>
      </div>
    </section>

  )
}

export default ApplyLoanDes
