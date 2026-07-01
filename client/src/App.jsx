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
  const [proteinIntake, setProteinIntake] = useState(() => {
  return Number(localStorage.getItem("proteinIntake")) || 0;
});
const [waterIntake, setWaterIntake] = useState(() => {
  return Number(localStorage.getItem("waterIntake")) || 0;
});
const [xp, setXp] = useState(() => {
  return Number(localStorage.getItem("xp")) || 0;
});

const [level, setLevel] = useState(() => {
  return Number(localStorage.getItem("level")) || 1;
});
const [name, setName] = useState(() => {
  return localStorage.getItem("name") || "";
});

const [weight, setWeight] = useState(() => {
  return localStorage.getItem("weight") || "";
});

const [height, setHeight] = useState(() => {
  return localStorage.getItem("height") || "";
});

const [goal, setGoal] = useState(() => {
  return localStorage.getItem("goal") || "Muscle Gain";
});

  const [workoutSchedule, setWorkoutSchedule] = useState(() => {
  const savedSchedule = localStorage.getItem("workoutSchedule");
  

  return savedSchedule
    ? JSON.parse(savedSchedule)
    : {
        Monday: "Chest Day 💪",
        Tuesday: "Back Day 🦍",
        Wednesday: "Leg Day 🦵",
        Thursday: "Shoulder Day ⚡",
        Friday: "Arm Day 💥",
        Saturday: "Cardio Day 🏃",
        Sunday: "Cheat & Recovery Day 🍕",
      };
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
  useEffect(() => {
  localStorage.setItem("proteinIntake", proteinIntake);
}, [proteinIntake]);
useEffect(() => {
  localStorage.setItem("waterIntake", waterIntake);
}, [waterIntake]);
  useEffect(() => {
  localStorage.setItem(
    "workoutSchedule",
    JSON.stringify(workoutSchedule)
  );
}, [workoutSchedule]);
useEffect(() => {
  localStorage.setItem("xp", xp);
}, [xp]);

useEffect(() => {
  localStorage.setItem("level", level);
}, [level]);
useEffect(() => {
  let earnedXP = 0;

  if (workout) earnedXP += 50;
  if (proteinIntake >= proteinGoal) earnedXP += 20;
  if (waterIntake >= waterGoal) earnedXP += 20;

  setXp(earnedXP);
}, [workout, proteinIntake, waterIntake]);
useEffect(() => {
  if (xp >= 100) {
    setLevel((prev) => prev + 1);
    setXp(0);
  }
}, [xp]);
useEffect(() => {
  localStorage.setItem("name", name);
}, [name]);

useEffect(() => {
  localStorage.setItem("weight", weight);
}, [weight]);

useEffect(() => {
  localStorage.setItem("height", height);
}, [height]);

useEffect(() => {
  localStorage.setItem("goal", goal);
}, [goal]);


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
  
const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
});

const todaysWorkout = workoutSchedule[today];
const proteinGoal =
  weight && goal === "Muscle Gain"
    ? Math.round(weight * 2)
    : weight && goal === "Fat Loss"
    ? Math.round(weight * 1.8)
    : weight
    ? Math.round(weight * 1.5)
    : 150;
const waterGoal = weight
  ? Math.round(weight * 35)
  : 3000;


  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card">
         <h2>Today's Workout</h2>
<p>{todaysWorkout}</p>
        </div>
        <div className="hero-card">
  <h1>
  🔥 {name ? `Welcome, ${name}` : "FitTrack"}
</h1>
  <p>Build consistency. Build strength.</p>

  <h2>{streak} Day{streak !== 1 ? "s" : ""} Streak</h2>

  <p>
    {completedGoals}/4 goals completed today
  </p>
</div>
<div className="card">
  <h3>🎯 Your Goals</h3>

  <p>Protein Goal: {proteinGoal}g</p>
  <p>Water Goal: {waterGoal}ml</p>
  <p>Fitness Goal: {goal}</p>
</div>
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
<div className="card">
  <h3>🏅 Athlete Level</h3>

  <h2>Level {level}</h2>

  <p>{xp} / 100 XP</p>

  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{ width: `${xp}%` }}
    ></div>
  </div>
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
  <div className="card">
  <h3>🍗 Protein Tracker</h3>

  <h2>
    {proteinIntake} / {proteinGoal}g
  </h2>

  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{
        width: `${Math.min(
          (proteinIntake / proteinGoal) * 100,
          100
        )}%`,
      }}
    ></div>
  </div>

  <button
    onClick={() =>
      setProteinIntake(proteinIntake + 25)
    }
  >
    +25g Protein
  </button>
</div>
<div className="card">
  <h3>💧 Water Tracker</h3>

  <h2>
    {waterIntake} / {waterGoal} ml
  </h2>

  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{
        width: `${Math.min(
          (waterIntake / waterGoal) * 100,
          100
        )}%`,
      }}
    ></div>
  </div>

  <button
    onClick={() =>
      setWaterIntake(waterIntake + 250)
    }
  >
    +250 ml
  </button>
</div>
  <div className="card">
  <h3>📅 Edit Workout Schedule</h3>

  {Object.keys(workoutSchedule).map((day) => (
    <div key={day} style={{ marginBottom: "10px" }}>
      <label>{day}: </label>

      <input
        type="text"
        value={workoutSchedule[day]}
        onChange={(e) =>
          setWorkoutSchedule({
            ...workoutSchedule,
            [day]: e.target.value,
          })
        }
      />
    </div>
  ))}
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