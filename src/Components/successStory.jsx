
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Infograph from '../Images/Infograph.png'
import IslamicInfo from '../Images/Interest-Free Micro Loans.png'
import getLoan from '../Images/Add a subheading.png'

const SuccessStory = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light"style={{fontSize:'22px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? 'col-12' : 'col-lg-9'}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Success Story: Getting loans from Akhuwat to build a better future</h1>
              
              <p className="mb-4">
              Stability with money is important for achieving goals and dreams in today's world where things change quickly. Swift Loans' goal is not just to help people get money; we also want to give them the tools they need to reach their goals.

              </p>
              
              <p className="mb-4">
              This success story shows how Akhuwat Loans have helped many people, including businesses, students, and people who were having trouble with money reach their goals. By making loans easy to get, reasonable, and clear, we've changed lives and made dreams come true, one loan at a time.
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={getLoan}
                  alt="Akhuwat Loan Logo" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">1: Creating a Firm Foundation</h2>
              
              <p className="mb-4">
              Akhuwat Loan was created in 2024 to help regular Pakistanis with their money problems. Dr. Amjad Shah, the company's founder, saw a hole in the financial market where many people were having trouble getting loans that they could pay. Most loans from traditional banks and financial institutions had high interest rates, difficult application processes, and strict eligibility requirements. This made it nearly impossible for the average person to get the money they needed. That's why Akhuwat Loan was made: so that all Pakistanis, no matter their background or income, could get easy access to low-interest loans.
              </p>
              
              <p className="mb-4">
              In its early stages, Akhuwat Loan wanted to change the way people in Pakistan think about borrowing money by making it easier to get loans, dropping interest rates, and making sure that loans were approved quickly. These efforts worked, and the Akhuwat Loan Scheme quickly became a well-known name in loans, helping many people become financially stable and successful.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">2: A Student's Journey - Making Dreams Come True</h2>
              
              <p className="mb-4">
              One of Akhuwat Loan's most encouraging success stories is that of Hassan Ahmed, a smart student from Lahore who wanted to go to college and study engineering. Hassan's family had a hard time paying for his school because they were poor. Even though he did very well in school, he had to face the heartbreaking chance of giving up on his dreams because he didn't have enough money.
              </p>
              
              <p className="mb-4">
              Hassan found Akhuwat Loan while looking for ways to get a college loan. The foundation had an easy-to-understand student loan scheme with low rates and flexible payment plans. Hassan quickly applied for the loan with little paperwork by using Akhuwat Loan's online platform. The process was quick and clear, and his loan was accepted within 24 hours, giving him the money he needed to keep going to school.
              </p>
              
              <p className="mb-4">
              Hassan graduated from one of Pakistan's best engineering schools and is now doing very well as a construction engineer. His story shows how Akhuwat Loan can help turn money problems into opportunities and dreams into reality.
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={Infograph}
                  alt="Akhuwat Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">3: Boosting Small Businesses - The Story of a Shopkeeper</h2>
              
              <p className="mb-4">
              Sarah Khan runs a small store in Karachi, which is a very busy city. She started out with little money, but she quickly learned that she needed more to help her business grow. Traditional banks kept turning down her loan requests because she didn't have enough security or official business paperwork.
              </p>
              
              <p className="mb-4">
              Sarah was down and out when she heard about Akhuwat Loan from another shopkeeper. She chose to apply because she was interested in the business loan choices that Akhuwat Loan Scheme offered. The process was simple, and unlike banks, Akhuwat did not need a lot of security. Sarah decided to get a quick loan from Akhuwat Loan Center because she needed to quickly add more items to her store and fix it up.
              </p>
              
              <p className="mb-4">
              Sarah's loan was accepted quickly, and she got the money she needed to restock her store and make improvements. With this help, her business did really well, and in just one year, her income doubled. Sarah's store is now one of the most famous in her neighborhood, and she says that the quick help she got from Akhuwat Loan is a big reason for her success.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">4: When it matters most, support - financial help in times of trouble</h2>
              
              <p className="mb-4">
              Emergencies can happen at any time, and not having enough money saved for them makes things even more stressful. When you need an emergency loan in Pakistan, Akhuwat Loan can really help. We have seen a lot of people get through tough times with the help of our quick and reliable loans.

              </p>
              
              <p className="mb-4">
              Emergencies can happen at any time, and not having enough money saved for them makes things even more stressful. When you need an emergency loan in Pakistan, Akhuwat Loan can really help. We have seen a lot of people get through tough times with the help of our quick and reliable loans.

              </p>
              
              <p className="mb-4">
              Ali went to Akhuwat Loan and asked for a quick loan because he needed money right away. His application was accepted right away, and he got the money he needed right away to pay for his medical care. The different ways he could pay back his debts helped him get back on his feet financially without going into too much debt.
              </p>
              
              <p className="mb-4">
              Today, Ali is happy and healthy. His story shows how Akhuwat Loan helps people get important money when they need it most, so that sudden situations don't ruin their lives.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">5: Home Financing Solutions - Making Dreams Come True</h2>
              
              <p className="mb-4">
              Many people want to own their own home, but rising property prices have made it hard for the normal Pakistani to do so. Through its housing loan choices in Pakistan, Akhuwat Loan has helped many people and families reach their goal of owning their own home.
              </p>
              
              <p className="mb-4">
              Farhan Sheikh's story is one of these. He is a worker from Rawalpindi’s middle class. Farhan and his family had a dream for years to own a home, but rising home prices made it impossible for them to do so, even though they saved a lot of money.
              </p>
              
              <p className="mb-4">
              Then Farhan went to Akhuwat Loan to get a loan backed by property. Farhan was able to get a home loan that helped him make the down payment on the house of his dreams. The application process was easy and quick. Thanks to Akhuwat Loan's help, Farhan and his family can now enjoy living in their own home, which was their dream.
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={IslamicInfo}
                  alt="Akhuwat Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">6: Making agriculture's backbone stronger</h2>
              
              <p className="mb-4">
              Not only does Akhuwat Loan help workers in cities, but our agriculture loan in Pakistan also helps people in rural areas of Pakistan get the money they need. A lot of farmers have trouble getting the loans they need to buy seeds, fertilizer, or new farming tools that will help them get better crop yields.
              </p>
              
              <p className="mb-4">
              Look at the case of Ghulam Abbas, a farmer from Multan. Ghulam had been farming for many years, but his earnings were always low because he used old farming methods. It was clear to Ghulam that he needed to buy new tools to increase his crop yield and help his family's finances. Traditional banks, on the other hand, wouldn't give him money because farming is risky.
              </p>
              
              <p className="mb-4">
              Within a week of applying for a farm loan through Akhuwat Loan, Ghulam was given the money. He was able to buy a new tractor, set up an irrigation system, and buy good plants with the money. As a result? Ghulam's crop yield tripled, and his income went through the roof. Ghulam is now a great farmer and also shares his knowledge with others in his community by encouraging them to use Akhuwat Loan to get money.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">Putting it all together - how Akhuwat Loan has helped</h2>
              
              <p className="mb-4">
              There are many people whose lives have been changed by Akhuwat Loan. Hassan, Sarah, Ali, Farhan, and Ghulam are just a few. Akhuwat Loan has always given people who need it the money they need to achieve, whether they were students trying to get into college, business owners growing their companies, people in urgent situations, or farmers looking for money.
              </p>
              
              <p className="mb-4">
              We at Akhuwat Loan Scheme 2025 are very proud of the good things we've done for people all over Pakistan. Our commitment to providing loans that are fair, easy to understand, and cheap removes financial barriers and opens up new possibilities. We're here to make that future possible, one loan at a time, because we're sure that every Pakistani deserves a chance at a better life.

              </p>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3 ">
            <div className="sticky-top pr-3" style={{ top: '0', paddingRight:'22px' }}>
              <Sidebar />
            </div>
          </div>
        )}
        
        
      </div>
    </div>
  );
};

export default SuccessStory;

