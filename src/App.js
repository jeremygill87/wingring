import React, { Component } from "react";
import { BrowserRouter as Rouer, Route, Switch} from "react-router-dom";
import Banner from "./components/banner/banner";
import Raters from "./components/raterspage/raterspage";
import Sidebar from "./components/sidebar/sidebar";
import Welcome from "./components/welcomescreen/welcomescreen";
import Wings from "./components/wingspage/wingspage";
import About from "./components/aboutpage/aboutpage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <Sidebar/>
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