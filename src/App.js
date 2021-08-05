import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Chart from "./chart";

function App() {
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [value, setvalue] = useState('')
 

  const calculate = (e) => {
    e.preventDefault();
if(height<100) return alert("min height is 100cm")
    const bmi =( weight*10000)/(height*height)
    setvalue(bmi)

    axios.post("http://localhost:3001",{weight,height}).then((res)=>{
      console.log(res.data)
    })
  };

  return (
      <div>
    <div className="App">

      <form className="calculator" onSubmit={calculate}>
        <h2>BMI Calculator</h2>
        <div className="form-floating">
          <input
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            type="number"
            required
            value={height}
            onChange={(e)=>setheight(e.target.value)}
            />
          <label>Height(cm)</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            type="number"
            required
            value={weight}
            onChange={(e)=>setweight(e.target.value)}
            
            />
          <label >Weight(kg)</label>
          <input
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            readOnly
            value={value}   
            />
         
          <button className="btn btn-primary" type="submit">
            Calculate
          </button>
        </div>
      </form>
    </div>
      <Chart/>
     </div>
  );
}

export default App;
