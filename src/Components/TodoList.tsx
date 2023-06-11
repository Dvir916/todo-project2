import Tasks from "./Task";
import { Box } from "@mui/material";
import { Task } from "../interfaceTypes";

interface propsTodoList {
  tasks: Task[];
  refetchTasks: () => void;
}

const TodoList: React.FC<propsTodoList> = ({ tasks, refetchTasks }) => {
  return (
    <Box sx={{ width: "80%", overflow: "auto" }}>
      {tasks.map((item: Task) => (
        <Tasks task={item} key={item.id} refetchTasks={refetchTasks} />
      ))}
    </Box>
  );
};
export default TodoList;
