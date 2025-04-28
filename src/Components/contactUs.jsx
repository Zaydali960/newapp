
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'22px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Contact Us – Akhuwat Loans</h1>

              <p className="mb-4">
              At Akhuwat Loan, we're dedicated to giving you great customer service and making it easy to meet all of your financial needs. Our skilled team is here to help you through the whole process, whether you want to apply for a loan, have questions about our services, or need help with a current application. We work hard to make the process easy and reassuring by keeping you aware and sure of everything at all times.
              </p>

              <p className="mb-4">
              Don't be afraid to get in touch with us through any of the following channels. We put your concerns first and try to react quickly to make sure you have a smooth experience.
              </p>

             

              <h2 className="fw-bold mt-5 mb-4">Get in Touch With Us</h2>

              <div className="contact-methods">
                <div className="contact-method mb-4">
                  <h3 className="fw-bold">1. Send us an email</h3>
                  <p>
                  If you need help with anything, our customer service team is ready to help you via email. Send us a message if you need help with your loan application, have general questions, or need help with a loan you already have. We promise to get back to you within 24 hours so that we can help you quickly and effectively.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">2. Call us</h3>
                  <p>
                  Would you like to talk directly? Call our customer service number to talk to one of our helpful staff members. We're here to answer any questions you have about the loan goods, who can get them, and how to apply. Our phone lines are open from 9 a.m. to 6 p.m., Monday through Friday (Pakistan Standard Time).
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">3. Come to our office</h3>
                  <p>
                  You are welcome to come to our office in person if you are near Islamabad. Meeting with one of our loan experts in person gives you more personalised help and helps you fully understand the loan process. We promise to give you one-on-one talks to help you make smart choices about your money.
                  </p>
                </div>
              </div>

              <div className="office-address mb-4">
                <h2 className="fw-bold">Office Address: Dasti Loan</h2>
                <p>F-6, Islamabad, Islamabad Capital Territory, Pakistan.</p>
              </div>

              <div className="map-container mb-4 text-center p-5">
                <img 
                  src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/10/map-1536x860.png" 
                  alt="Office Location Map" 
                  className="img-fluid rounded  p-5" 
                />
              </div>

              <div className="quote-section mb-4">
                <h3 className="fw-bold">Get a Free Quote on a Loan Today!</h3>
                <p>
                Get in touch with us for a personalised loan consultation, whether you're ready to apply or not sure which loan choice is best for you. Our skilled staff will help you through the application process, answer all your questions, and get the best terms possible. At Dasti Loan, we're committed to helping you reach your financial goals by giving you options that are made just for you.
                </p>
              </div>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3">
            <div
              className="sticky-top pr-3"
              style={{ top: "0", paddingRight: "22px" }}
            >
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;

