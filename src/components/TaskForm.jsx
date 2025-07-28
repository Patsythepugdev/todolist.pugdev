// src/components/TaskForm.jsx
import { useState } from "react";

const TaskForm = ({ onAddTask, selectedCategory, setSelectedCategory }) => {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const categories = [
    { id: 1, name: "Meeting", img: "https://iili.io/dL9hVmF.png" },
    { id: 2, name: "Bills", img: "https://iili.io/dL9hMe1.png" },
    { id: 3, name: "Work", img: "https://iili.io/dL9h7Wb.png" },
    { id: 4, name: "School", img: "https://iili.io/dL9h5zu.png" },
    { id: 5, name: "Sport", img: "https://iili.io/dL9hYsj.png" },
    { id: 6, name: "Cleaning", img: "https://iili.io/dL9hG5P.png" },
    { id: 7, name: "Other", img: "https://iili.io/dL9hl0Q.png" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc || !date || !selectedCategory) return;
    onAddTask({ desc, date, category: selectedCategory });
    setDesc("");
    setDate("");
    setSelectedCategory(null);
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <h3>click on a category:</h3>
      <div className="categories">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category"
            style={{
              borderColor: selectedCategory?.id === cat.id ? "#2b8ffa" : "transparent"
            }}
            onClick={() => setSelectedCategory(cat)}
          >
            <img src={cat.img} alt={cat.name} />
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      <label htmlFor="desc">Task description:</label>
      <input
        id="desc"
        type="text"
        value={desc}
        placeholder="E.g. Sports"
        onChange={(e) => setDesc(e.target.value)}
      />

      <label htmlFor="date">Select a date:</label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button id="add-task" type="submit">Add task</button>
    </form>
  );
};

export default TaskForm;
