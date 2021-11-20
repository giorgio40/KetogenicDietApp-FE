import './App.css';
import Nav from './Components/Nav';
import {Routes,Route } from "react-router-dom"
import SignUp from "./Components/SignUp";
function App() {
  return (
    <div className="App">
      <Nav />
      <SignUp />
      <Routes>
        <Route path="/" />
        <Route path="/resources" />
        <Route path="/about" />
        <Route path="/mealplan" />
      </Routes>
    </div>
  );
}

export default App;
