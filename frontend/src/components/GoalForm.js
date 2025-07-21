import { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
    savedAmount: 0,
    createdAt: new Date().toISOString().split("T")[0],
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newGoal) => {
        onAddGoal(newGoal);
        setFormData({
          name: "",
          targetAmount: "",
          category: "",
          deadline: "",
          savedAmount: 0,
          createdAt: new Date().toISOString().split("T")[0],
        });
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input
        type="text"
        name="name"
        placeholder="Goal Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="targetAmount"
        placeholder="Target Amount"
        value={formData.targetAmount}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
