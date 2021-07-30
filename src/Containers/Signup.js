import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  let history = useHistory();
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
    if (mail.indexOf("@") === -1) {
      alert("Merci de saisir une adresse mail valide 🤓");
    } else {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          {
            email: mail,
            username: username,
            password: password,
          }
        );
        setUser(response.data.token);
        alert(
          `${response.data.account.username.toUpperCase()} Merci pour votre inscription ✅`
        );
        history.push("/");
      } catch (error) {
        alert("L'inscription a échoué 😱 réessayez ! ");
      }
    }
  };

  return (
    <div>
      <div className="formContainer">
        <form className="formVinted" action="" onSubmit={handelSubmit}>
          <input type="text" placeholder="username" onChange={usernameChange} />
          <input type="mail" placeholder="email" onChange={mailChange} />
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={passChange}
          />
          <input className="submit" type="submit" value="S'inscrire" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
