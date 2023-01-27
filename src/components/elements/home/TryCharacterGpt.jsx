import React from "react";

const TryCharacterGpt = () => {
  return (
    <div className="TryCharacterGpt-section py-3 py-md-5">
      <div className="container">
        <div className="bg-trycharacter-gpt">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="try-gpt">
                <h1 className="mb-4">Try CharacterGPT at:</h1>
                <h1 className="mb-4">
                  <img src="./assets/ailogo.svg" className="img-fluid" alt="" />
                </h1>
                <div className="mb-4">
                  <p className="mb-4  p-lg-0">
                    Alethea AI is proud to partner with MyCharacter.ai to enable
                    democratized access to CharacterGPT.
                  </p>
                  <p className="mb-4  p-lg-0">
                    MyCharacter.ai is a decentralized Application (dApp) built
                    on the AI Protocol that leverages CharacterGPT to enable the
                    generation of a variety of interactive and emotionally
                    expressive AI Characters.
                  </p>
                </div>
                <div className="d-lg-block d-none mt-0 mt-md-5">
                  <a
                    href="/"
                    target="_blank"
                    className="btn btn-outline-success text-white"
                  >
                    Visit MyCharacter.ai
                    <img src="assets/btn-arrow.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-md-6">
                  <div className="feature-img mt-3 mt-md-0 d-flex justify-content-center">
                    <img src="assets/brad.svg" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-img mt-3 mt-md-0 d-flex justify-content-center">
                    <img src="assets/elon.svg" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-img mt-3 d-flex justify-content-center">
                    <img src="assets/taylor.svg" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-img mt-3 d-flex justify-content-center">
                    <img
                      src="assets/ronaldo.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center mt-4">
                <div className="d-lg-none d-block">
                  <a
                    href="/"
                    target="_blank"
                    className="btn btn-outline-success text-white"
                  >
                    Visit MyCharacter.ai
                    <img src="assets/btn-arrow.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryCharacterGpt;
