import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Details from "./components/pages/details/Details";
import Tranding from "./components/pages/tranding/Tranding";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <section className="wrapper">
          <aside className="aside-container">
            <Navbar />
          </aside>

          <main className="main-container">
            <Switch>
              <Route exact path="/tranding" component={Tranding} />
              <Route path={`/details/:id`} component={Details} />
            </Switch>
          </main>
        </section>
      </Router>
    </>
  );
}

export default App;
