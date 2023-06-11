import Tasks from "./Task";
import { Box } from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import { Task } from "../interfaceTypes";

interface props {
  tasks: Task[];
  refetch: () => void;
}

const TodoList: React.FC<props> = ({ tasks, refetch }) => {
  return (
    <Box sx={{ width: "80%", overflow: "auto" }}>
      {tasks.map((item: Task) => (
        <Tasks task={item} key={item.id} fetchData={refetch} />
      ))}
    </Box>
  );
};
export default TodoList;
