import React from "react";
import CountUp from 'react-countup';

const WhyChooseAkhuwat = () => {
  return (
    <section
      className="container-fluid p-0"
      style={{ backgroundColor: "#f7f8f9" }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-12 mb-3">
            <p className="text-uppercase fw-bold">SERVICES</p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="fw-bold mb-4 display-5">
            Why Akhuwat Loans Are a Good Choice?
            </h2>
            <p>
            The Akhuwat Foundation is one of a kind in Pakistan because it gives out moral, interest-free loans (Qarz-e-Hasna) to help people who need them. Akhuwat is not like other banks in that it cares more about helping people than making money. They offer loans for many reasons, like business, schooling, and health care, and there are no hidden fees or processing costs. People can apply online or in person at local branches, which emphasizes a method that is driven by the community. The goal of Akhuwat is to reduce poverty by giving people easy access to clear, free financial help that helps them improve their lives.
            </p>
          </div>

          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-12-29-at-14.13.32_589854b3.jpg"
                    alt="Money Received"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 bg-success text-white p-4 rounded-bottom"
                    style={{ width: "100%" }}
                  >
                    <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                    <h2 className="display-4 text-center fw-bold"><CountUp end={14} duration={3} suffix="K+" />
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-29-at-6.25.22-PM.jpeg"
                    alt="Founder"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 bg-dark text-white p-4 rounded-bottom"
                    style={{ width: "100%" }}
                  >
                    <p className="mb-0 text-center">ESTABLISHED SINCE</p>
                    <h2 className="display-4 text-center fw-bold">2003</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAkhuwat;
