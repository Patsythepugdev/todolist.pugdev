// src/App.jsx
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Cargar desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem("todoTasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    } else {
      // Tarea de ejemplo por defecto
      setTasks([
        {
          desc: "Soccer practice",
          date: new Date().toISOString().split("T")[0],
          added: new Date().toLocaleString(),
          isCompleted: false,
          category: {
            id: 5,
            name: "Sport",
            img: "https://iili.io/dL9hYsj.png"
          }
        }
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = ({ desc, date, category }) => {
    const newTask = {
      desc,
      date,
      added: new Date().toLocaleString(),
      isCompleted: false,
      category
    };
    setTasks([...tasks, newTask]);
  };

  const handleCompleteTask = (index) => {
    const updated = [...tasks];
    updated[index].isCompleted = !updated[index].isCompleted;
    setTasks(updated);
  };

  const handleDeleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="todo-container">
      <h1>To Do List</h1>
      <TaskForm
        onAddTask={handleAddTask}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <h2>My Tasks</h2>
      <TaskList
        tasks={tasks}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
