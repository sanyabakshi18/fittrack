import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [workout, setWorkout] = useState(() => {
  return localStorage.getItem("workout") === "true";
});

const [protein, setProtein] = useState(() => {
  return localStorage.getItem("protein") === "true";
});

const [water, setWater] = useState(() => {
  return localStorage.getItem("water") === "true";
});

const [sleep, setSleep] = useState(() => {
  return localStorage.getItem("sleep") === "true";
});
 useEffect(() => {
  localStorage.setItem("workout", workout);
}, [workout]);

useEffect(() => {
  localStorage.setItem("protein", protein);
}, [protein]);

useEffect(() => {
  localStorage.setItem("water", water);
}, [water]);

useEffect(() => {
  localStorage.setItem("sleep", sleep);
}, [sleep]);

  const completedGoals =
    (workout ? 1 : 0) +
    (protein ? 1 : 0) +
    (water ? 1 : 0) +
    (sleep ? 1 : 0);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card">
          <h2>Today's Workout: Leg Day 🦵</h2>
        </div>

        <div className="card">
  <h3>Daily Goals</h3>

  <h3>Progress: {completedGoals} / 4</h3>

  {completedGoals === 4 && (
    <p>🎉 All goals completed today!</p>
  )}

  <div>
    <input
      type="checkbox"
      checked={workout}
      onChange={() => setWorkout(!workout)}
    />
    Complete Workout
  </div>

  <div>
    <input
      type="checkbox"
      checked={protein}
      onChange={() => setProtein(!protein)}
    />
    Consume 200g Protein
  </div>

  <div>
    <input
      type="checkbox"
      checked={water}
      onChange={() => setWater(!water)}
    />
    Drink 3L Water
  </div>

  <div>
    <input
      type="checkbox"
      checked={sleep}
      onChange={() => setSleep(!sleep)}
    />
    Sleep 8 Hours
  </div>

  {/* ADD BUTTON HERE */}
  <button
    onClick={() => {
      setWorkout(false);
      setProtein(false);
      setWater(false);
      setSleep(false);
    }}
  >
    Reset Day
  </button>

</div>

        <div className="card">
          <h3>Current Streak 🔥</h3>
          <p>1 Day</p>
        </div>
      </div>
    </div>
  );
}

export default App;