import { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [amount, setAmount] = useState("");
  const [selectedGoalId, setSelectedGoalId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const goal = goals.find((g) => String(g.id) === selectedGoalId);
    if (!goal) return;
    const updatedAmount = goal.savedAmount + parseFloat(amount);

    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ savedAmount: updatedAmount })
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        onDeposit(updatedGoal);
        setAmount("");
        setSelectedGoalId("");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>

      <select
        value={selectedGoalId}
        onChange={(e) => setSelectedGoalId(e.target.value)}
      >
        <option value="">Select Goal</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
