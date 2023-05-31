import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import Task from "./Task";
import { Box } from "@mui/material";

const TodoList = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <Box sx={{ width: "80%", overflow: "auto" }}>
      {tasks.map((item) => (
        <Task task={item} />
      ))}
    </Box>
  );
};
export default TodoList;
