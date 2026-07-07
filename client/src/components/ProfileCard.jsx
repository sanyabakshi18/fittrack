function ProfileCard({
  name,
  setName,
  weight,
  setWeight,
  height,
  setHeight,
  goal,
  setGoal,
}) {
  return (
    <div className="card">
      <h3>👤 Profile</h3>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <br /><br />

      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      >
        <option>Muscle Gain</option>
        <option>Fat Loss</option>
        <option>Maintenance</option>
      </select>
    </div>
  );
}

export default ProfileCard;