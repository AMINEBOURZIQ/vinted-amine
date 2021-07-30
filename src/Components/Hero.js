import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Modal1 from "react-modal";
import Modal2 from "react-modal";
import Signup from "../Containers/Signup";
import Login from "../Containers/Login";
Modal1.setAppElement("#root");
Modal2.setAppElement("#root");

const Hero = ({ setUser }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function toggleModal1() {
    setIsOpen1(!isOpen1);
  }
  function toggleModal2() {
    setIsOpen2(!isOpen2);
  }
  return (
    <div className="container">
      <div className="hero">
        <img src={logo} alt="" />
        <input type="text" placeholder="Recherche des articles" />
        <button onClick={toggleModal1}>
          s'inscrire
          {/* <Link to="/signup"></Link> */}
        </button>
        <Modal1
          isOpen={isOpen1}
          onRequestClose={toggleModal1}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <Signup setUser={setUser}></Signup>

          <button className="closeSignup" onClick={toggleModal1}>
            x
          </button>
        </Modal1>

        <button onClick={toggleModal2}>se connecter</button>
        <Modal2
          isOpen={isOpen2}
          onRequestClose={toggleModal2}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <Login setUser={setUser}></Login>

          <button className="closeSignup" onClick={toggleModal2}>
            x
          </button>
        </Modal2>
        <button className="sell">vends des articles</button>
      </div>
    </div>
  );
};

export default Hero;
