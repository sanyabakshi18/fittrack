import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="card">
          <h2>Today's Workout: Leg Day 🦵</h2>
        </div>

        <div className="card">
          <h3>Daily Goals</h3>
          <ul>
            <li>☐ Complete Workout</li>
            <li>☐ Consume 200g Protein</li>
            <li>☐ Drink 3L Water</li>
            <li>☐ Sleep 8 Hours</li>
          </ul>
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