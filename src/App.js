import "./App.css";
import Cards from "./components/cards";
import Filters from "./components/filters";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <Router>
      <div className="App-body">
        <h1 aria-label="app title">SpaceX Launch Programs</h1>
        <div className="app-grid">
          <Switch>
            <Route exact path="/">
              <>
                <Filters />
                <Cards />
              </>
            </Route>
            <Route path="/:year?/:launch?/:land?">
              <>
                <Filters />
                <Cards />
              </>
            </Route>
          </Switch>
        </div>
      </div>
      <footer className="fixed-bottom alert-secondary p-1 m2">
        <h5
          aria-label="developed by Ruthvik Kumar"
          className="text-center text-info"
        >
          Developed by: <span>Ruthvik Kumar</span>
        </h5>
      </footer>
    </Router>
  );
}

export default App;
