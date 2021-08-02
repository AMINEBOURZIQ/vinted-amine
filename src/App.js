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
  const [filters, setFilters] = useState({ sort: "sort=price-desc" });
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const setUser = (token) => {
    Cookies.set("userToken", token);
    setUserToken(token);
  };
  return (
    <Router>
      <Hero
        setUser={setUser}
        userToken={userToken}
        filters={filters}
        setFilters={setFilters}
      ></Hero>
      <Switch>
        <Route path="/login">
          <Login setUser={setUser} userToken={userToken} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/offer/:id">
          {userToken ? (
            <Offer userToken={userToken} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/">
          <Home filters={filters} />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
