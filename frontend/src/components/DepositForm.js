import { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [amount, setAmount] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const goal = goals.find((g) => g.id === parseInt(selectedGoal));
    const updatedGoal = {
      ...goal,
      savedAmount: goal.savedAmount + Number(amount),
    };

    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ savedAmount: updatedGoal.savedAmount }),
    })
      .then((res) => res.json())
      .then(onDeposit);

    setAmount("");
    setSelectedGoal("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select
        value={selectedGoal}
        onChange={(e) => setSelectedGoal(e.target.value)}
        required
      >
        <option value="">Select a goal</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
