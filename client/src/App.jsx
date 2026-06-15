import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import GoalCard from "./components/GoalCard";

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

  const [streak, setStreak] = useState(() => {
    return Number(localStorage.getItem("streak")) || 0;
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

  useEffect(() => {
    localStorage.setItem("streak", streak);
  }, [streak]);

  const completedGoals =
    (workout ? 1 : 0) +
    (protein ? 1 : 0) +
    (water ? 1 : 0) +
    (sleep ? 1 : 0);
    const progressPercentage = (completedGoals / 4) * 100;

  useEffect(() => {
    if (completedGoals === 4 && streak === 0) {
      setStreak(1);
    }
  }, [completedGoals, streak]);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card">
          <h2>Today's Workout: Leg Day 🦵</h2>
        </div>
        <div className="hero-card">
  <h1>🔥 FitTrack</h1>
  <p>Build consistency. Build strength.</p>

  <h2>{streak} Day{streak !== 1 ? "s" : ""} Streak</h2>

  <p>
    {completedGoals}/4 goals completed today
  </p>
</div>
<div className="card">
  <h3>🏆 Achievements</h3>

  <div className="achievement-grid">
    <div className="achievement">
      🥉 First Workout
    </div>

    <div className="achievement">
      💧 Hydration Hero
    </div>

    <div className="achievement">
      🍗 Protein Master
    </div>

    <div className="achievement">
      🔥 Consistency Beast
    </div>
  </div>
</div>

        <div className="card">
          <h3>Daily Goals</h3>

          <h3>Progress: {completedGoals} / 4</h3>
          <div className="progress-bar">
  <div
    className="progress-fill"
    style={{ width: `${progressPercentage}%` }}
  ></div>
</div>

          {completedGoals === 4 && (
            <p>🎉 All goals completed today!</p>
          )}

          <GoalCard
  label="Complete Workout"
  checked={workout}
  onChange={() => setWorkout(!workout)}
/>

         <GoalCard 
         label="Complete Protein"
        checked={protein}
        onChange={()=> setProtein(!protein)}
        />
          <GoalCard
              label="Compleye Water Intake of 3L"
              checked={water}
              onChange={() => setWater(!water)}
            />
            

          <GoalCard
              label="Complete Sleep of 8 hours"
              checked={sleep}
              onChange={() => setSleep(!sleep)}
            />
            

          <br />

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
          <p>{streak} Day{streak !== 1 ? "s" : ""}</p>
        </div>
      </div>
    </div>
  );
}

export default App;