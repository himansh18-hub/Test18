import { useEffect, useState } from "react";
import axios from "axios";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );

    setTasks(response.data);
  };

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };

    setTasks(prev => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(prev =>
      prev.filter(task => task.id !== id)
    );
  };

  return {
    tasks,
    addTask,
    deleteTask
  };
};

export default useTasks;