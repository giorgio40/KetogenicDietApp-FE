import { Switch, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import MealPlan from "./Components/MealPlan";
import Resources from "./Components/Resources";
import About from "./Components/About";
import PrivateRoute from "./Components/PrivateRoute";
import React from "react";
import Home from "./Components/Home";
import { SliderData } from "./Components/SliderData";

function App() {
  return (
    <>
      <div className="App">
        
          <Switch>
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute path="/resources" component={Resources} />
            <PrivateRoute
              path="/about"
              render={(props) => <About {...props} slides={SliderData} />}
            />
            <PrivateRoute path="/mealplan" component={MealPlan} />
          </Switch>

          <Route exact path="/" component={SignUp} />
          <Route path="/login" component={Login} />
        
      </div>
    </>
  );
}

export default App;
