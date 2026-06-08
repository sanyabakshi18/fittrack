import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [workout, setWorkout] = useState(false);
  const [protein, setProtein] = useState(false);
  const [water, setWater] = useState(false);
  const [sleep, setSleep] = useState(false);

  return (
    <div>
      <Navbar />

      <div className="container">
        <h2>Today's Workout: Leg Day 🦵</h2>

        <div className="card">
          <h3>Daily Goals</h3>

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
      </div>
    </div>
  );
}

export default App;