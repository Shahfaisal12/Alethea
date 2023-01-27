import React from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { Link } from "react-router-dom";

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

const Header = () => {
  const { activate, deactivate } = useWeb3React();
  const { active } = useWeb3React();

  return (
    <div className="Header-section">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">
              <img src="assets/atl-logo.svg" className="img-fluid" alt="" />{" "}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/protocolai">
                    AI Protocol
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/charactergpt">
                    CharacterGPT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/dapp">
                    dApps
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">
                    Research
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/">
                    About
                  </a>
                </li>
              </ul>

              {active === false ? (
                <button
                  onClick={() => {
                    activate(Injected);
                  }}
                  className="btn btn-outline-success text-white"
                  type="submit"
                >
                  Connect
                </button>
              ) : (
                <button
                  className="btn btn-outline-danger text-white"
                  onClick={deactivate}
                >
                  Disconnect
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
