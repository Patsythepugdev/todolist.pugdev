// src/components/TaskItem.jsx
const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <li className={`todo-item ${task.isCompleted ? "completed" : ""}`}>
      <img src={task.category.img} alt={task.category.name} />
      <div>
        <strong>{task.category.name}</strong> - <span className="task-desc">{task.desc}</span>
        <br />
        <small>Added on: {task.added}</small>
        <br />
        <small className="task-date">Task due: {task.date}</small>
      </div>
      <div className="todo-actions">
        <button className="complete-btn" onClick={onComplete}>Complete</button>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
