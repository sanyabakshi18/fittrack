import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [workout, setWorkout] = useState(false);
  const [protein, setProtein] = useState(false);
  const [water, setWater] = useState(false);
  const [sleep, setSleep] = useState(false);

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