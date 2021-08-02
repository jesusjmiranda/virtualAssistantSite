import { Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar/Navbar";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.App}>
      <header>
        <div className="App">
          <Navbar />
        </div>
      </header>
      <main className={classes.app_main}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
