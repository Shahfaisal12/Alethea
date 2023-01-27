import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const CharacterGPT = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 320 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 300, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <div className="CharacterGPT-section py-3 py-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="GPT-content">
                            <h1>CharacterGPT makes </h1>
                            <h4 className="mb-3 mb-md-4">Text-To-Character a reality</h4>
                            <p>
                                CharacterGPT is a revolutionary artificial intelligence system
                                that allows users to quickly generate interactive characters
                                with distinct appearances, voices, intelligence, personalities,
                                and identities simply by providing a natural language
                                description.
                            </p>
                            <p>
                                After a character is tokenized, its owner can customize its
                                personality, train its intelligence, trade its generative
                                outputs, and use it across the other dApps on the AI Protocol.{" "}
                            </p>
                            <button
                                className="btn btn-outline-success text-white"
                                type="submit"
                            >
                                {" "}
                                Get CharacterGPT Access{" "}
                                <img src="assets/btn-arrow.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
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
                                <img src="assets/slick-slider1.svg" alt="" />
                                <p className="text-center text-white">Ownable</p>
                            </div>
                            <div className="bg-slick-slider">
                                <img src="assets/slick-slider2.svg" alt="" />
                                <p className="text-center text-white">Generative</p>
                            </div>
                            <div className="bg-slick-slider">
                                <img src="assets/slick-slider3.svg" alt="" />
                                <p className="text-center text-white">Interoperable</p>
                            </div>
                            <div className="bg-slick-slider">
                                <img src="assets/slick-slider4.svg" alt="" />
                                <p className="text-center text-white">Customizable</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterGPT;
