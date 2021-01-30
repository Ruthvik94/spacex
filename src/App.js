import "./App.css";
import Composed from "./components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <Router>
      <div className="App-body">
        <h1 aria-label="app title">SpaceX Launch Programs</h1>
        <div className="app-grid">
          <Switch>
            <Route path="/" component={Composed} />
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
