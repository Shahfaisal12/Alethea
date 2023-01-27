import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const SatyConnect = () => {
  return (
    <div className="SatyConnect-section py-5">
      <div className="container">
        <div className="row">
          <div class="bg-stay-connect d-flex flex-wrap">
            <div className="col-md-5">
              <div class="stay-text">
                <h2>Stay Connected</h2>
                <p>
                  Sign up for our newsletter to stay updated about Alethea AI
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div class="stay-input mt-5 mt-md-0">
                <Form className="d-flex w-100">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="me-2 border-0"
                    aria-label="Search"
                  />
                  <Button
                    variant="outline-success"
                    type="submit"
                    className="btn btn-black px-3 px-md-5"
                  >
                    Subscribe
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatyConnect;
