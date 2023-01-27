import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AiProtocole = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='AiProtocole-section py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="GPT-content">
                            <h1>The AI Protocol utilizes the</h1>
                            <h4 className='mb-3 mb-md-4'>TArtificial Liquid Intelligence (ALI) Utility Token</h4>
                            <p>The ALI Utility Token is the native ERC-20 Utility Token of the AI Protocol and the decentralized applications built on it. The ALI Utility Token regulates, incentivizes, and rewards the various participants of the AI Protocol.</p>
                            <button className="btn btn-outline-success text-white mb-4 mb-md-0" type="submit">Learn More About the ALI Utility Token <img src="assets/btn-arrow.svg" alt="" /></button>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            arrows={false}
                            ssr={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all 1"
                            transitionDuration={1000}
                            containerClass="carousel-container"
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            <div className="bg-slick-slider">
                                <img src="assets/protocol1.svg" alt="" />
                                <p className="text-center text-white">Enables the creation of iNFTs</p>
                            </div>
                            <div className="div">
                                <img src="assets/protocol2.svg" alt="" />
                                <p className="text-center text-white">Enables access to AI Systems like CharacterGPT</p>
                            </div>
                            <div className="div">
                                <img src="assets/protocol3.svg" alt="" />
                                <p className="text-center text-white">Enables Governance of the AI Protocol</p>
                            </div>
                            <div className="div">
                                <img src="assets/protocol4.svg" alt="" />
                                <p className="text-center text-white">Enables transactions between iNFTs</p>
                            </div>
                            <div className="div">
                                <img src="assets/protocol4.svg" alt="" />
                                <p className="text-center text-white">Enables transactions within the AI Protocol</p>
                            </div>
                            <div className="div">
                                <img src="assets/protocol4.svg" alt="" />
                                <p className="text-center text-white">Enables Intelligence Upgrades for iNFTs</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AiProtocole