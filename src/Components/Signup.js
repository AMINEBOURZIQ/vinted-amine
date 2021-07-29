import Hero from "./Hero";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [username, setUsername] = useState("");
  const usernameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
  };

  const [mail, setMail] = useState("");
  const mailChange = (event) => {
    const newMail = event.target.value;
    setMail(newMail);
  };
  const [password, setPassword] = useState("");
  const passChange = (event) => {
    const newPass = event.target.value;
    setPassword(newPass);
  };
  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: mail,
          username: username,
          password: password,
        }
      );
      alert("Merci pour votre inscription");
      console.log(response);
    } catch (error) {
      alert("L'inscription a échoué");
    }
  };

  return (
    <div>
      <Hero></Hero>
      <div className="formContainer">
        <form className="formVinted" action="" onSubmit={handelSubmit}>
          <input type="text" placeholder="username" onChange={usernameChange} />
          <input type="mail" placeholder="email" onChange={mailChange} />
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={passChange}
          />
          <input type="submit" value="s'inscrire" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
