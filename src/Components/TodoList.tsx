import { useDispatch } from "react-redux";
import Tasks from "./Task";
import { Box } from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { setTasks } from "../Redux/TaskSlice";
import { Task } from "../interfaceTypes";

const TodoList = () => {
  const QUERY_ALL_TASKS = gql`
    query Tasks {
      tasks {
        id
        text
        isComplete
      }
    }
  `;

  const { data, loading, refetch } = useQuery(QUERY_ALL_TASKS);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setTasks(data.tasks));
    }
  }, [data]);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <Box sx={{ width: "80%", overflow: "auto" }}>
      {data.tasks.map((item: Task) => (
        <Tasks task={item} key={item.id} fetchData={refetch} />
      ))}
    </Box>
  );
};
export default TodoList;
