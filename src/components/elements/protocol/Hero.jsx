import React from 'react'

const Hero = () => {
    return (
        <div className='Protocol-hero-section py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div class="text-content">
                            <h3>Intelligence
                                <br /> Tokenized.
                            </h3>
                            <p>The AI Protocol is the property rights backbone of the Generative AI Economy.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-end">
                        <div className="img-section">
                            <img src="assets/protocol/coins.svg" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero