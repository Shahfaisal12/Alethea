import React from "react";

const JoinNetwork = () => {
    return (
        <div className="CharacterGPT-section py-3 py-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="GPT-content">
                            <h1>Join the growing network of iNFTs on the AI Protocol</h1>
                            <p className="my-5">
                                Create and customize your iNFT’s personality, train the AI
                                Systems in the Intelligence Layer, build dApps on the AI
                                Protocol, offer unique AI Services, and unlock the full
                                potential of the Generative AI revolution!
                            </p>
                            <button
                                className="btn btn-outline-success text-white"
                                type="submit"
                            >
                                Learn More
                                <img src="assets/btn-arrow.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                        <img src="assets/protocol/joingroup.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinNetwork;
