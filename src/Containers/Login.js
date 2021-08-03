import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  let history = useHistory();
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
    if (!password || !mail) {
      alert("Merci de saisir un email et un mots de passe");
    } else {
      try {
        console.log("ici");
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          {
            email: mail,
            password: password,
          }
        );
        setUser(response.data.token);

        history.push("/");
      } catch (error) {
        alert("La connexion a échoué 😱 réessayez ! ");
      }
    }
  };

  return (
    <div>
      <div className="formContainer">
        <form className="formVinted" action="" onSubmit={handelSubmit}>
          <input type="mail" placeholder="email" onChange={mailChange} />
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={passChange}
          />
          <input className="submit" type="submit" value="Se connecter" />
        </form>
      </div>
    </div>
  );
};

export default Login;
