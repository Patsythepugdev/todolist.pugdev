// src/components/TaskList.jsx
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return <p style={{ textAlign: "center", color: "#555" }}>No hay tareas, añadir tareas</p>;
  }

  return (
    <ul id="todo-list">
      {tasks.map((task, i) => (
        <TaskItem
          key={i}
          task={task}
          onComplete={() => onCompleteTask(i)}
          onDelete={() => onDeleteTask(i)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
