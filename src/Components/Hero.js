import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Modal from "react-modal";
import Signup from "../Containers/Signup";
Modal.setAppElement("#root");

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="container">
      <div className="hero">
        <img src={logo} alt="" />
        <input type="text" placeholder="Recherche des articles" />
        <button onClick={toggleModal}>
          s'inscrire
          {/* <Link to="/signup"></Link> */}
        </button>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <Signup></Signup>

          <button className="closeSignup" onClick={toggleModal}>
            x
          </button>
        </Modal>

        <button>se connecter</button>
        <button className="sell">vends des articles</button>
      </div>
    </div>
  );
};

export default Hero;
