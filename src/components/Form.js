import React, { useState } from "react";

function Form({getData}) {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [alert1, setalert] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault();
    if((isNaN(parseInt(weight)) && isNaN(parseInt(height))) || isNaN(parseInt(weight)) || isNaN(parseInt(height))){
      alert("please enter number only");
      setalert(true);
    }
    else{
      const name = prompt("Enter your name....")
      setalert(false)
      getData(weight,height,name)

    }
  };
  /*let alertMessage
  if(alert1){
    alertMessage = <p style={{color:"red"}}>please enter valid fields</p>
  }
  else{
    alertMessage = ''
  }*/
  return (
    <div className="col-sm-4 shadow rounded px-5">
      <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Weight(kg) :</label>
              <input
                type="text"
                className="form-control"
                value={weight}
                onChange={(e) => setweight(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col col-sm-6">
            <div className="my-3">
              <label className="form-label">Height(m) :</label>
              <input
                type="text"
                className="form-control"
                value={height}
                onChange={(e) => setheight(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-primary my-3" value="Get BMI" />
      </form>
      {/*{alertMessage}*/}
      {alert1 === true ? <p style={{color:"red"}}>please enter valid fields</p>:null}
    </div>
  );
}

export default Form;
