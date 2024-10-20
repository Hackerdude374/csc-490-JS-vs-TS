import React, { useState, useEffect } from "react";
import FormValidation from "./FormValidation";
import TypeInferenceDemo from "./TypeInferenceDemo";
import AutocompleteDemo from "./AutocompleteDemo";
const API_URL = "http://localhost:3001";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/tasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = () => {
    fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newTask }),
    })
      .then((res) => res.json())
      .then((task) => {
        setTasks([...tasks, task]);
        setNewTask("");
      });
  };

  const markAsComplete = (id) => {
    fetch(`${API_URL}/tasks/${id}`, { method: "PUT" })
      .then(() => {
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, completed: true } : task
          )
        );
      });
  };

  const deleteTask = (id) => {
    fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" })
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">To-Do List (JavaScript)</h1>
      
      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
        />
        <button 
          className="bg-blue-500 text-white p-2 rounded"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      <ul className="mb-8">
        {tasks.map((task) => (
          <li key={task.id} className="mb-2">
            <span className={task.completed ? "line-through" : ""}>
              {task.name}
            </span>
            {!task.completed && (
              <button
                className="ml-2 bg-green-500 text-white p-1 rounded"
                onClick={() => markAsComplete(task.id)}
              >
                Complete
              </button>
            )}
            <button
              className="ml-2 bg-red-500 text-white p-1 rounded"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-4">Demonstrations</h2>
      <div className="space-y-4">
        <FormValidation />
        <TypeInferenceDemo />
        <AutocompleteDemo />
      </div>
    </div>
  );
};

export default App;