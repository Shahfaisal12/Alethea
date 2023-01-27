import React from "react";
import { Button } from "react-bootstrap";

const Build = () => {
  return (
    <div className="SatyConnect-section py-5">
      <div className="container">
        <div className="row">
          <div class="bg-stay-connect d-flex flex-wrap">
            <div className="col-md-8">
              <div class="stay-text">
                <h2>Build with us on the AI Protocol</h2>
                <p>
                  The Al Protocol Institute is looking to support the
                  development of dApps on the AI Protocol. We encourage you to
                  apply for a developer grant and develop alongside Alethea AI.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              <div class="btn-Developer mt-5 mt-md-0">
                <Button
                  variant="outline-success"
                  type="submit"
                  className="btn btn-black px-3 px-md-5"
                >
                  Developer Grants
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
