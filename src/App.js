import { useState } from "react";
import "./App.css";
import BmiList from "./components/BmiList";
import BmiScore from "./components/BmiScore";
import Form from "./components/Form";

function App() {
  const [doWeight, setdoWeight] = useState({weight: '', type: ''})
  const [bmiScore, setbmiScore] = useState("00")
  const [userName, setuserName] = useState('')
  const [bmiType, setbmiType] = useState("")

  const result = (bmi, weight, range) => {
    var output;
    if(bmi > 24.9){
      output = {weight: (weight - range.normal.high).toFixed(2), type: 'positive'}
    }
    else if(bmi < 18.5){
      output = {weight: (weight - range.normal.low).toFixed(2), type: 'negative'}
    }
    else{
      output = {weight: 0, type: 'normal'}
    }
  }
  const [bmiRange, setbmiRange] = useState({
    underWeight : {low: ''},
    normal : {low: '' , high: ''},
    overWeight : {low: '' , high: ''},
    obesityOne : {low: '' , high: ''},
    obesityTwo : {low: '' , high: ''},
    obesityThree : {high: ''},
  })
  //const [secondC, setsecondC] = useState(false)
  const data = (w, h, n) => {
    const score = (w / (h * h)).toFixed(2)
    const type = weightType(score)
    
    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };
    const comment = result(score,w,range)
    setdoWeight(comment)
    setbmiRange(range)
    setbmiType(type)
    setbmiScore(score)
    setuserName(n)
  };
  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  };
  // function to get weight from bmi and height
  const calWeight = (b, h) => (b * h * h).toFixed(2);
  
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 mx-2">
        <Form getData={data} />
      </div>
      <div className="row justify-content-center mt-5">
        <div className=" col-12 col-sm-6 mb-5">
          <BmiScore bmiScore={bmiScore} bmiType={bmiType} userName={userName}/>
        </div>
        <div className=" col-12 col-sm-6 ">
          <BmiList rangeData={bmiRange} bmi={bmiScore}/>
        </div>
      </div>
    </div>
  );
}

export default App;