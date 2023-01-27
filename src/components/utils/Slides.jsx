import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Slides = () => {
  return (
    <div className='Carousel-section py-3 py-md-5'>
      <div className="container">
        <div className="mb-5">
          <h1 className="mb-0 text-white"> CharacterGPT can be used to create </h1>
          <h2 className="">AI Characters for a wide variety of use cases: </h2>
        </div>
        <Carousel swipeable={false}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={false}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={5000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px">
          <div className="bg-carousel-content">
            <img src="assets/carousel-img/twins.svg" className='img-fluid d-block mb-3' alt="" />
            <p>Digital Twins</p>
          </div>
          <div className="bg-carousel-content">
            <img src="assets/carousel-img/digital.svg" className='img-fluid d-block mb-3' alt="" />
            <p>Digital Guides</p>
          </div>
          <div className="bg-carousel-content">
            <img src="assets/carousel-img/digital-company.svg" className='img-fluid d-block mb-3' alt="" />
            <p>Digital Companions</p>
          </div>
          <div className="bg-carousel-content">
            <img src="assets/carousel-img/vir-ass.svg" className='img-fluid d-block mb-3' alt="" />
            <p>Virtual Assistants</p>
          </div>
          <div className="bg-carousel-content">
            <img src="assets/carousel-img/lic-col.svg" className='img-fluid d-block mb-3' alt="" />
            <p>Licensed AI Collectibles</p>
          </div>
          <div className="bg-carousel-content">
            <img src="assets/carousel-img/npc.svg" className='img-fluid d-block mb-3' alt="" />
            <p>AI NPCs</p>
          </div>
          <div className="bg-carousel-content">
            <img src="assets/carousel-img/parody.svg" className='img-fluid d-block mb-3' alt="" />
            <p>Parody & Satire</p>
          </div>

        </Carousel>
      </div>
    </div>
  )
}

export default Slides