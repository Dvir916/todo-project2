import TaskItem from "./TaskItem";
import { Box } from "@mui/material";
import { Task } from "../interfaceTypes";

interface TodoListProps {
  tasks: Task[];
  refetchTasks: () => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, refetchTasks }) => {
  return (
    <Box sx={{ width: "80%", overflow: "auto" }}>
      {tasks.map(item => (
        <TaskItem task={item} key={item.id} refetchTasks={refetchTasks} />
      ))}
    </Box>
  );
};
export default TodoList;
