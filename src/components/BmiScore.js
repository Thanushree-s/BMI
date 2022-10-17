
function BmiScore({ bmiScore, bmiType , userName}) {
  console.log(bmiScore)
  return (
    <div className="text-center shadow rounded p-4">
      <div>{userName} Your BMI Score</div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">
          {bmiScore}
        </div>
      </div>
      <div className="fs-3 fw-bold text-primary">{bmiType}</div>
    </div>
  );
}

export default BmiScore;
