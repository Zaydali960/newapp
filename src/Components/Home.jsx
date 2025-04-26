import React from 'react'
import Crousal from './homeComponents/Crousal'
import Cards from './homeComponents/Cards'
import AkhuwatLoanBanner from './homeComponents/AkhuwatLoanBanner'
import ApplyLoanDes from './homeComponents/ApplyLoanDes'
import AkhuwatLoanStatus from './homeComponents/AkhuwatLoanStatus'
import WhyChooseAkhuwat from './homeComponents/WhyChooseAkhuwat'
import AkhuwatLoanInstruction from './homeComponents/AkhuwatLoanInstruction'
import AkhuwatLoanScheme from './homeComponents/AkhuwatLoanScheme'
import AkhuwatAdvantage from './homeComponents/AkhuwatAdvantage'
import AkhuwatImages from './homeComponents/AkhuwatImages'


const Home = () => {
  return (
    <div>
      <Crousal />
      <Cards />
      <AkhuwatLoanBanner />
      <ApplyLoanDes />
      <AkhuwatLoanStatus />
      <WhyChooseAkhuwat />
      <AkhuwatLoanInstruction />
      <AkhuwatLoanScheme />
      <AkhuwatAdvantage />
      <AkhuwatImages />

    </div>
  )
}

export default Home
