import GoalCard from "./GoalCard";

function GoalList({ goals, onDeleteGoal, onUpdateGoal }) {
    return (
        <section>
            <h2>Your Goals</h2>
            <div className="goal-list">
                {goals.map((goal) => (
                    <GoalCard
                        key={goal.id}
                        goal={goal}
                        onDelete={onDeleteGoal}
                        onUpdate={onUpdateGoal}
                    />
                ))}
            </div>
        </section>
    );
}

export default GoalList;