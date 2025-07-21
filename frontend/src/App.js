import { useEffect, useState } from "react";
import GoalList from "./components/GoalList";
import GoalForm from "./components/GoalForm";
import DepositForm from "./components/DepositForm";

function App() {
  const [goals, setGoals] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  function addGoal(newGoal) {
    setGoals([...goals, newGoal]);
  }

  function deleteGoal(id) {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "DELETE"
    }).then(() => {
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
    });
  }

  function updateGoal(updatedGoal) {
    const updatedGoals = goals.map((goal) =>
      goal.id === updatedGoal.id ? updatedGoal : goal
    );
    setGoals(updatedGoals);
  }

  return (
    <div className="App">
      <h1>Smart Goal Planner</h1>
      <GoalForm onAddGoal={addGoal} />
      <GoalList goals={goals} onDeleteGoal={deleteGoal} />
      <DepositForm goals={goals} onDeposit={updateGoal} />
    </div>
  );
}

export default App;
