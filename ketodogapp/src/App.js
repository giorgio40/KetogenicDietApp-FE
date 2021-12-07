import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import MealPlan from "./Components/MealPlan";
import Resources from "./Components/Resources";
import About from "./Components/About";
import PrivateRoute from "./Components/PrivateRoute";
import React from "react";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
    <Nav/>
      <main>
        <Switch>
          <PrivateRoute path="/user/home" component={Home} />
          <PrivateRoute path="/user/resources" component={Resources} />
          <PrivateRoute path="/user/about" component={About} />
          <PrivateRoute path="/user/mealplan" component={MealPlan} />
          

          <Route exact path="/" component={SignUp} />
          <Route path="/login" component={() => Login} />
          </Switch>
      </main>
    </div>
  );
}

export default App;
