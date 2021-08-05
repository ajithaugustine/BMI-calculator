import React ,{useEffect,useState}from 'react'
import axios from "axios";
import {Bar} from 'react-chartjs-2'

function Chart() {
    const [height, setheight] = useState('')
    const [weight, setweight] = useState('')
    const [bmi, setbmi] = useState('')
   useEffect(() => {
   const fetchdata = async ()=>{

    axios.get('https://bmi-calculator-server.herokuapp.com').then((res)=>{
      const alldata = res.data
      setheight(alldata.map((data)=>data.height))
      setweight(alldata.map((data)=>data.weight))
      setbmi(alldata.map((data)=>data.bmi))
    }).catch((err)=>{
console.log(err)
    }) }
   fetchdata()
  
  }, [])


    return (
        <div className='chart'>
            <Bar data={{  labels: weight,
  datasets: [
    {
      label: 'Height',
      backgroundColor: 'rgba(75,192,192,1)',
      data: height
    },
    {
        label: 'BMI',
      backgroundColor: 'rgba(175,102,192,1)',
      data: bmi
    }
  ]}} />
            
        </div>
    )
}

export default Chart
