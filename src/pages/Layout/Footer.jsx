import React from 'react'

const Footer = () => {
  return (
    <div className="Footer-section">
    <hr className='border-top' />
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="logo mb-3">
              <img src="assets/atl-logo.svg" alt="" />
            </div>
            <p>Alethea AI is a research and development studio building at the intersection of two of the most transformative technologies of our time: Generative AI and Blockchain. Our mission is to use these technologies to enable decentralized ownership and democratic governance of AI. We believe that this will be the key to unlocking the full potential of AI and that it will ultimately benefit humanity as a whole.</p>
          </div>
          <div className="col-md-3">
            <h3 className='mb-3'>Explore</h3>
            <div className="d-flex justify-content-between">
              <div className="">
                <div className="menu-items mb-2">
                  <a href="/">About Us</a>
                </div>
                <div className="menu-items mb-2">
                  <a href="/">AI Protocol</a>
                </div>
                <div className="menu-items mb-2">
                  <a href="/">Research</a>
                </div>
              </div>
              <div className="divs">
                <div className="menu-items mb-2">
                  <a href="/">CharacterGPT</a>
                </div>
                <div className="menu-items mb-2">
                  <a href="/">APrivacy Policy</a>
                </div>
                <div className="menu-items mb-2">
                  <a href="/">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <h3 className='mb-3'>Community</h3>
            <div className="social-icons d-flex justify-content-between">
            <a href="/"><img src="assets/twitter.svg" alt="" /> </a>
            <a href="/"><img src="assets/tiktok.svg" alt="" /> </a>
            <a href="/"><img src="assets/youtube.svg" alt="" /> </a>
            <a href="/"><img src="assets/LinkedIn.svg" alt="" /> </a>
            <a href="/"><img src="assets/Exclude.svg" alt="" /> </a>
            <a href="/"><img src="assets/discord.svg" alt="" /> </a>
            </div>
          </div>
        </div>
        <hr className='border-top' />
        <div className="copyright text-white py-3 text-center">
          <p className='mb-0'>© Copyright 2023, All Rights Reserved by Alethea AI</p>
        </div>
      </div>
    </div>
  )
}

export default Footer