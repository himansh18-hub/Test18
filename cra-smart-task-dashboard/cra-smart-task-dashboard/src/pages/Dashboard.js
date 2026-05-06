import { useCallback, useState } from "react";

import useTasks from "../hooks/useTasks";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import SearchBar from "../components/SearchBar";
import ThemeToggle from "../components/ThemeToggle";

const Dashboard = () => {

    const { tasks, addTask, deleteTask } = useTasks();

    const [search, setSearch] = useState("");

    const stableDelete = useCallback((id) => {
        deleteTask(id);
    }, [deleteTask]);

    return (<div className="container" >
        <h1> Smart Task Dashboard </h1>
        <SearchBar search={search} setSearch={setSearch} />
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks}
            search={search}
            deleteTask={stableDelete} />
    </div>
    );
};

export default Dashboard;
