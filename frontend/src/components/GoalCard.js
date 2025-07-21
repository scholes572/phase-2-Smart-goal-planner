function GoalCard ({ goal, onDelete }) {
    const { name, targetAmount, savedAmount, category, deadline } = goal
    const progress = targetAmount > 0 ? Math.round((savedAmount / targetAmount) * 100) : 0;
    return(
        <div className="goalcard">
              <h3>{name}</h3>
              <p>Category: {category}</p>
              <p>Target: {targetAmount}</p>
              <p>Saved: {savedAmount}</p>
              <p>Deadline: {deadline}</p>
              <p>progress: {progress}%</p>
             <progress value={savedAmount} max={targetAmount > 0 ? targetAmount : 1}></progress>
             <br />
            <button onClick={() => onDelete(goal.id)}>Delete</button>
        </div>
    )
}
export default GoalCard;