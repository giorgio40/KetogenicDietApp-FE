import React, { useState } from 'react';
import { axiosAuth } from "../Axios/axiosAuth"

function MealPlan () {

const [formState , setFormState] = useState({
  weight:""
})
const [data, setData] = useState([])
  

 const handleChange = (event) => {
   
    
    setFormState({...formState,[event.target.name] : event.target.value});
    parseInt(formState);
  }

 const handleSubmit =(e)  => {
    e.preventDefault(); 
    axiosAuth().get( "/dogs/dog/ " + formState.weight)
    .then((res)=>{
     setData(res.data)
    })
    .catch((err) => {console.log(err.message);});
  }
    return (
    <> <h3>Meal Plans</h3>
        <div>
            <p>Here you will select your dogs weight and then you will see the complete and balanced meal plan</p>
            <p>There is a few things you will need to have in order to start the diet.First, you will need a scale to meaure out exactly the portions in grams.</p>
            <p> The diet is for a days worth of food for your dog. It contains several supplemnts to make it complete and balanced.</p>
            <p>PLEASE DONT COOK THE FaTS! Cooked fats can lead to pancreatitis. The meal plan is meant to be served raw. At ketopet sanctuary all the dogs that had cancer were fed raw even ones undergoing chemo and never had a problem</p> 
        </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="weight">
          Please Select your dog's weight:
          <select value={formState.weight} onChange={handleChange}  name="weight" id="weight">
            <option value="1">10</option>
            <option value="2">20</option>
            <option value="3">30</option>
            <option value="4">40</option>
            <option value="5">50</option>
            <option value="6">60</option>
            <option value="7">70</option>
            <option value="8">80</option>
            <option value="9">90</option>
            <option value="10">100 </option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>




   </>
    );
  
}

export default MealPlan;