import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Modal1 from "react-modal";
import Modal2 from "react-modal";
import Signup from "../Containers/Signup";
import Login from "../Containers/Login";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
Modal1.setAppElement("#root");
Modal2.setAppElement("#root");

const Hero = ({ setUser, userToken, filters, setFilters }) => {
  let history1 = useHistory();
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const disconnect = () => {
    setUser(null);
    Cookies.remove("userToken");
    history1.push("/");

    setIsOpen1(false);
    setIsOpen2(false);
  };

  function toggleModal1() {
    setIsOpen1(!isOpen1);
  }
  function toggleModal2() {
    setIsOpen2(!isOpen2);
  }
  const handelSearch = (event) => {
    filters.title = event.target.value;
    console.log(filters);
  };

  return (
    <div className="container">
      <div className="hero">
        <img src={logo} alt="" onClick={() => history1.push("/")} />
        <input
          type="text"
          placeholder="Recherche des articles"
          onChange={handelSearch}
        />
        {userToken ? (
          <button onClick={disconnect}>
            Se déconnecter <Link to="/"></Link>
          </button>
        ) : (
          <div>
            {/* Modals */}
            <button onClick={toggleModal1}>s'inscrire</button>
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
            {/* Fin Modals */}
          </div>
        )}

        <button className="sell">vends des articles</button>
      </div>
    </div>
  );
};

export default Hero;
