function GoalCard({ goal }) {
  const { name, category, targetAmount, savedAmount, deadline } = goal;

  const progressPercent = Math.min((savedAmount / targetAmount) * 100, 100).toFixed(0);

  return (
    <div className="goal-card">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Saved: ${savedAmount} / ${targetAmount}</p>
      <p>Deadline: {deadline}</p>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
      </div>
    </div>
  );
}

export default GoalCard;
