import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offer from "./Containers/Offer";
import Home from "./Containers/Home";
import Hero from "./Components/HomeHero";
import SimpleHero from "./Components/SimpleHero";
import Signup from "./Containers/Signup";
import Login from "./Containers/Login";
import Cookies from "js-cookie";
import Publish from "./Containers/Publish";
import Payment from "./Containers/Payment";
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
      <Switch>
        <Route path="/login">
          <SimpleHero setUser={setUser} userToken={userToken}></SimpleHero>
          <Login setUser={setUser} userToken={userToken} />
        </Route>
        <Route path="/signup">
          <SimpleHero setUser={setUser} userToken={userToken}></SimpleHero>
          <Signup />
        </Route>
        <Route path="/offer/:id">
          <SimpleHero setUser={setUser} userToken={userToken}></SimpleHero>
          <Offer userToken={userToken} />
        </Route>
        <Route path="/publish">
          <SimpleHero setUser={setUser} userToken={userToken}></SimpleHero>
          <Publish userToken={userToken} />
        </Route>
        <Route path="/payment/">
          <SimpleHero setUser={setUser} userToken={userToken}></SimpleHero>
          <Payment />
        </Route>
        <Route exact path="/">
          <Hero
            setUser={setUser}
            userToken={userToken}
            filters={filters}
            setFilters={setFilters}
          ></Hero>
          <Home filters={filters} />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
