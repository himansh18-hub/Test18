import { useMemo } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, search, deleteTask }) => {

  const filteredTasks = useMemo(() => {
    return tasks.filter(task =>
      task.title.toLowerCase().includes(
        search.toLowerCase()
      )
    );
  }, [tasks, search]);

  return (
    <div>
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;