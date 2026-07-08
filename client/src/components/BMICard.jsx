function BMICard({ bmi, bmiCategory }) {
  return (
    <div className="card">
      <h3>📊 BMI Calculator</h3>

      {bmi ? (
        <>
          <h2>{bmi}</h2>
          <p>{bmiCategory}</p>
        </>
      ) : (
        <p>
          Enter weight and height to calculate BMI.
        </p>
      )}
    </div>
  );
}

export default BMICard;