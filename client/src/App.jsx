import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import GoalCard from "./components/GoalCard";
import ProfileCard from "./components/ProfileCard";
import BMICard from "./components/BMICard";

function App() {
  const [weeklyProgress, setWeeklyProgress] = useState(() => {
  return JSON.parse(
    localStorage.getItem("weeklyProgress")
  ) || {};
});
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
const [notes, setNotes] = useState(() => {
  return localStorage.getItem("notes") || "";
});
const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("darkMode") === "true";
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
    "weeklyProgress",
    JSON.stringify(weeklyProgress)
  );
}, [weeklyProgress]);

  
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
useEffect(() => {
  localStorage.setItem("notes", notes);
}, [notes]);
useEffect(() => {
  localStorage.setItem("darkMode", darkMode);
}, [darkMode]);

  const completedGoals =
    (workout ? 1 : 0) +
    (protein ? 1 : 0) +
    (water ? 1 : 0) +
    (sleep ? 1 : 0);
    useEffect(() => {
  const today = new Date().toLocaleDateString(
    "en-US",
    { weekday: "long" }
  );

  setWeeklyProgress((prev) => ({
    ...prev,
    [today]: completedGoals,
  }));
}, [completedGoals]);
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
 
  




const achievements = [
  {
    title: "🥉 First Workout",
    unlocked: workout,
  },
  {
    title: "💧 Hydration Hero",
    unlocked: waterIntake >= waterGoal,
  },
  {
    title: "🍗 Protein Master",
    unlocked: proteinIntake >= proteinGoal,
  },
  {
    title: "🔥 Consistency Beast",
    unlocked: streak >= 7,
  },
];
const bmi =
  weight && height
    ? (
        Number(weight) /
        Math.pow(Number(height) / 100, 2)
      ).toFixed(1)
    : null;

let bmiCategory = "";

if (bmi) {
  if (bmi < 18.5) bmiCategory = "Underweight";
  else if (bmi < 25) bmiCategory = "Healthy Weight";
  else if (bmi < 30) bmiCategory = "Overweight";
  else bmiCategory = "Obese";
}

  return (
    <div className={darkMode ? "dark-mode" : " "}>
    
      <Navbar />
      

      <div className="container">
        <div className="card">
         <h2>Today's Workout</h2>
<p>{todaysWorkout}</p>
        </div>
          <div className="card">
  <button
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode
      ? "☀️ Switch to Light Mode"
      : "🌙 Switch to Dark Mode"}
  </button>
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

<ProfileCard
  name={name}
  setName={setName}
  weight={weight}
  setWeight={setWeight}
  height={height}
  setHeight={setHeight}
  goal={goal}
  setGoal={setGoal}
/>
<BMICard
  bmi={bmi}
  bmiCategory={bmiCategory}
/>
 <div className="card">
  <h3>🎯 Your Goals</h3>

  <p>Protein Goal: {proteinGoal}g</p>
  <p>Water Goal: {waterGoal}ml</p>
  <p>Fitness Goal: {goal}</p>
</div>


<div className="dashboard-grid">


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
  <h3>🏅 Athlete Level</h3>

  <h2>Level {level}</h2>

  <p>{xp} / 100 XP</p>

  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{ width: `${xp}%` }}
    ></div>
  </div>

  <p>{100 - xp} XP to next level</p>
</div>

<div className="card">
  <h3>🏆 Achievements</h3>

  <div className="achievement-grid">
    {achievements.map((achievement) => (
      <div
        key={achievement.title}
        className="achievement"
      >
        {achievement.unlocked
          ? achievement.title
          : `🔒 ${achievement.title}`}
      </div>
    ))}
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
    
    <div className="card">
  <h3>📝 Daily Notes</h3>

  <textarea
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
    placeholder="How was today's workout?"
    rows="5"
  />

  <p>
    {notes.length} characters
  </p>
</div>
<div className="card">
  <h3>📈 Weekly Progress</h3>

  {[
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ].map((day) => (
    <p key={day}>
      {day}: {weeklyProgress[day] || 0}/4
    </p>
  ))}
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

        
  );
}

export default App;