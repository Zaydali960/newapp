import React from "react";

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
              Why Choose an Akhuwat Loan?
            </h2>
            <p>
              Akhuwat Foundation stands out as a unique loan provider in
              Pakistan, offering ethical, interest-free loans (Qarz-e- Hasna)
              aimed at helping those in need. Unlike traditional banks, Akhuwat
              prioritizes social welfare over profit. They offer loans for
              various purposes, such as business, education, and healthcare,
              with no hidden fees or processing charges. Applications can be
              submitted both online and in person at local branches, promoting a
              community-focused approach. Akhuwat's mission is to alleviate
              poverty by providing accessible, transparent, and cost-free
              financial assistance, empowering individuals to improve their
              quality of life.
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
                    <h2 className="display-4 text-center fw-bold">14K+</h2>
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
