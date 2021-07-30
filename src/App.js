import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offer from "./Containers/Offer";
import Home from "./Containers/Home";
import Signup from "./Containers/Signup";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
