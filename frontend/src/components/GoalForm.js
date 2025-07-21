import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
    const [formData, setFormData] = useState({
        name: "",
        targetAmount: "",
        savedAmount: "",
        category: "",
        deadline: "",
    })
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();

        const newGoal = {
            ...formData,
            targetAmount: Number(formData.targetAmount),
            savedAmount: Number(formData.savedAmount),
        };

        fetch("http://localhost:3000/goals", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newGoal),
        })
        .then((res) => res.json())
        .then((data) => {
            onAddGoal(data)
            setFormData({
                name: "",
                targetAmount: "",
                savedAmount: "",
                category: "",
                deadline: "",
            })
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Goal</h2>
            <input
            type ="text"
            name="name"
            placeholder="Goal name"
            value={formData.name}
            onChange={handleChange}
            required
            />
            <input 
            type="number"
            name="savedAmount"
            placeholder="Amount already saved"
            value={formData.savedAmount}
            onChange={handleChange}
            />
            <input 
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
            />
            <input 
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            />
            <button type="submit">Add Goal</button>
        </form>
    )
}

export default GoalForm;