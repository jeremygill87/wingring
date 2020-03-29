import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Banner from "./components/banner/banner";
import Raters from "./components/raterspage/raterspage";
import Welcome from "./components/welcomescreen/welcomescreen";
import Wings from "./components/wingspage/wingspage";
import About from "./components/aboutpage/aboutpage";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Welcome/>}/>
            <Route exact path="/about" render={() => <About/>}/>
            <Route exact path="/raters" render={() => <Raters/>}/>
            <Route exact path="/wings" render={() => <Wings/>}/>
          </Switch> 
        </div>
      </Router>
      </div>
      
    )
  }
}

export default App;