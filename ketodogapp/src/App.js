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
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute path="/resources" component={Resources} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/mealplan" component={MealPlan} />
        </Switch>

        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={Login} />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
