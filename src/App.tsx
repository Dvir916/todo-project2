import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import { Box, styled } from "@mui/material";
import { setTasks } from "./Redux/TaskSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

const AppHeader = styled(Box)({
  background: "linear-gradient(to bottom, #add8e6, #90ee90)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white",
});

function App() {
  const QUERY_ALL_TASKS = gql`
    query Tasks {
      tasks {
        id
        text
        isComplete
      }
    }
  `;

  const { data, refetch } = useQuery(QUERY_ALL_TASKS);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setTasks(data.tasks));
    }
  }, [data]);

  return (
    <AppHeader>
      <AddTodo fetchData={refetch} />
      <TodoList />
    </AppHeader>
  );
}

export default App;
