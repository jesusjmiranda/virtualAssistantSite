import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar/Navbar";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.App}>
      <header>
        <div>
          <Navbar />
        </div>
      </header>
      <main className={classes.app_main}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
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
