
import React, { useState } from "react";

function TaskList({ tasks, deleteTask, toggleComplete, editTask }) {
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (id, text) => {
    setEditId(id);
    setNewText(text);
  };

  const handleSave = (id) => {
    editTask(id, newText);
    setEditId(null);
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          {editId === task.id ? (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button onClick={() => handleSave(task.id)}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
              <button onClick={() => handleEdit(task.id, task.text)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
