import React from 'react'
import Footer from './Footer'
const Aboutus = () => {
  return (
    <div className='row justify-content-center'>
      <h1 className='display-3 text-info'>About us</h1>
      <div className='col-md-6'>
        <div className='card shadow p-4 m-3'>
          <img src="images/team.jpg" alt="our team" />
        </div>
      </div>
      <div className='col-md-6 justify-content-start '>
          <p>We are a retail pharmaceutical company serving both walk in and corporate clients. We stock a wide range of quality pharmaceuticals at very competitive prices.We have the best customer service and ensure our clients receive the best from our staff.
            Products are delivered to customers using 2NK delivery services across the country. Ensure you specify the county in which you want your products to be delivered through our email. </p>
          <ul>
          <h2 className='display-2'>Our Mission</h2>
          <li>To provide pharmacy services that meet utmost international standards and satisfy our clients’ needs through integrity, professionalism, reliability, convenience and accountability.</li>
          <h2 className='display-2'>Our vision</h2>
          <li>To be the leading pharmacy services provider in Kenya.</li>
        </ul>
      </div>
      <div>
        <Footer/>
      </div>
        
    </div>
    
  )
}

export default Aboutus