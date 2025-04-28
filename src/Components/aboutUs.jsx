
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Infographic from '../Images/Infograph.png'

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'21px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">About Us</h1>

              <p className="mb-4">
              Hello, and welcome to Akhuwat Loan, your trustworthy Pakistani lender. The Akhuwat Loan company was started in 2023 by Dr. Amjad Saqib with the goal of making it easy for people all over the country to get low-interest loans. Our main goal is to remove financial barriers so that people can reach their personal and business goals. We are committed to giving our valued clients clear, reliable, and quick financial solutions that are tailored to their specific wants.
              </p>
              <div className="my-5 text-center p-4">
                <img 
                  src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/03/Akhuwat-Loan-Scheme-2024-Apply-Online.jpg" 
                  alt="Akhuwat Loan Logo" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">Our Mission</h2>

              <p className="mb-4">
              The only thing we want to do is help people who need money the most. We are sure that everyone, no matter how much money they have, should be able to find affordable loan choices. We want to give our clients the tools they need to handle their money well and raise their standard of living by giving them low-interest loans with flexible payment plans.

              </p>

              <p className="mb-4">
                We know that many people in Pakistan have trouble with money. We know how hard it can be to get a loan, which is why we're dedicated to making our loan services simple, quick, and clear. Our goal is to get rid of the things that make it hard to get money and to offer solutions that are easy to use and tailored to each client's specific needs.
              </p>

              <h2 className="fw-bold mt-5 mb-4">Why is Akhuwat Loan the Best Option?</h2>

              <ol className="fw-light mx-5">
                <li>Low rates of interest</li>
                <p>The fact that our interest rates are some of the lowest in Pakistan makes it easier for you to take money from us.</p>
                <li>Quick Process for Approval</li>
                <p>Because we know you need money quickly, we've made the application process as easy as possible so that you can get approved quickly without all the trouble that usually comes with going to a bank.</p>
                <li>Different Loan Choices</li>
                <p>We have a lot of different loan options that can be tailored to your needs, whether you need a personal loan, business financing, help with school, or emergency funds.                </p>
                <li>Fully open and honest</li>
                <p>We make sure there aren't any fees or terms that are hard to understand. Because we're committed to being completely honest, you'll know everything about a loan before you agree to it.</p>
                <li>Tailor-made Answers</li>
                <p>We spend time getting to know your specific financial position and then offer flexible payment plans and loan amounts that work best for you.</p>
              </ol>

              <h2 className="fw-bold mt-5 mb-4">Our Founder – Dr. Amjad Saqib</h2>

              <p className="mb-4">
              Akhuwat Loan was started by Dr. Amjad Saqib, a creative leader and generous donor. Akhuwat Loan's mission is driven by Dr. Saqib's unwavering dedication to financial inclusion. He is known for his unwavering work in social welfare and economic empowerment, especially in underserved areas. Under his leadership, the group has grown into a major institution that gives thousands of people in Pakistan hope and money.

              </p>
              <div className="my-5 text-center">
                <img 
                  src={Infographic}
                  alt="Akhuwat Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
              <p className="mb-4">
              The success of Akhuwat Loan has been greatly helped by Dr. Saqib's in-depth understanding of Pakistan's financial system and his strong desire to help others. Akhuwat Loan's values are based on his strong believe in fair and easy access to financial services. These values show up in every part of the services we provide.
              </p>


              <h2 className="fw-bold mt-5 mb-4">What We Stand For</h2>

              <ul className="fw-light mx-5">
                <li><strong>Being honest</strong><br />Being open and honest is how we do business, and it's the basis of the strong, trust-based relationships we build with every client.</li>
                <li><strong>Focused on Customers</strong><br />We do everything for our clients. We are committed to giving each client the best service possible by making sure they get personalised help and the best financial options for their needs.</li>
                <li><strong>New ideas</strong><br />We are always using new financial tools to meet our customers' changing needs in a faster and more efficient way. </li>
                <li><strong>Being Socially Responsible</strong><br />We are dedicated to making the neighbourhood a better place. We want to help people, companies, and communities grow their economies through our loan programs. This is called "sustainable development."</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Our Ways to Get Financing</h2>

              <p className="mb-4">
                We offer a wide variety of loan services to meet the diverse needs of our clients, including:
              </p>

              <ul className="fw-light mx-5">
                <li>Personal Loans</li>
                <p >Flexible financing can help you pay for important things like school, medical bills, or situations that you didn't expect.</p>
                <li>Loans for businesses</li>
                <p>Help for business owners and businesspeople who need money to run, grow, or expand their businesses.</p>
                <li>College Loans</li>
                <p>Students can get affordable financial aid to help them reach their educational goals without having to worry about money.</p>
                <li>Quick Loans</li>
                <p>People who need instant financial help during tough times can get loans quickly and easily.                </p>
                <li>Loans with no interest</li>
                <p>These loans, which are readily accessible to people who qualify, give money without charging interest, which makes it easier to pay them back.</p>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Our Promise to Pakistan</h2>

              <p className="mb-4">
              Akhuwat Loan is happy to be a Pakistani organisation that works to promote growth and economic empowerment all over the country. We are committed to giving people and companies the chances they need to succeed. We want to help Pakistan's economy grow and improve the lives of its people by making financial services more available and low-cost.
              </p>

              <p className="mb-4">
              If you need help with starting a business, going to school, or meeting a pressing financial need, we are here for you. The goal of our organisation is to provide everyone with the money they need to succeed.
              </p>
              <div className="my-5 text-center">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALmdhxA9KF3l9mBQ9HH7zYqH-wnm1S1qdJQ&s" 
                  alt="Akhuwat Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
              <h2 className="fw-bold mt-5 mb-4">Join the family of Akhuwat Loans.</h2>

              <p className="mb-4">
              When you join Akhuwat Loan, you get more than just a loan. You also get a trusted partner who will help you with your money all the way through. We want to help you make smart decisions about your money and reach your goals without any stress or trouble.
              </p>

              <p className="mb-4">
              Get a loan today and see what makes Akhuwat Loan different. With our quick, safe, and reliable banking services, we can help you make your dreams come true.

              </p>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3 ">
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

export default AboutUs;

