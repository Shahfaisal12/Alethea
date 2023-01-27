import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
// import { useWeb3React } from "@web3-react/core";

const Hero = () => {
  const [lgShow, setLgShow] = useState(false);

  // const { active, chainId, account } = useWeb3React();
  return (
    <div className="Hero-section py-5">
      <div className="container">
        <div className="row">
          {/*  <div className="text-white">Connection Status: {active}</div>
              <div className="text-white">Account: {account}</div>
              <div className="text-white">Network ID: {chainId}</div> */}
        </div>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="text-content">
              <h4>Alethea AI is proud to introduce</h4>
              <h1 className="my-3 my-md-4">CharacterGPT</h1>
              <p>
                The world's first Multimodal AI System that generates
                interactive AI Characters from a description in natural
                language. In short, CharacterGPT enables Text-to-Character
                creation.
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="video-container">
              <button
                className="bg-transparent"
                onClick={() => setLgShow(true)}
              >
                <img src="assets/video.svg" className="w-100" alt="" />
              </button>
            </div>
          </div>
        </div>
        <Modal
          size="xl"
          show={lgShow}
          dialogClassName="modal-90w"
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/2x5YwGgT-ds?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Hero;
