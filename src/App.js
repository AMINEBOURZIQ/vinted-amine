import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offer from "./Containers/Offer";
import Home from "./Containers/Home";
import Hero from "./Components/Hero";
import Signup from "./Containers/Signup";
import Login from "./Containers/Login";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom"; //rappel

import { useState } from "react";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const setUser = (token) => {
    Cookies.set("userToken", token);
    setUserToken(token);
  };
  return (
    <Router>
      <Hero setUser={setUser} userToken={userToken}></Hero>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/login">
          <Login setUser={setUser} userToken={userToken} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/offer/:id">
          {userToken ? <Offer /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
