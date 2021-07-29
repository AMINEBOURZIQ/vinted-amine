import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offer from "./Components/Offer";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
