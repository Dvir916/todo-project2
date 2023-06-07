import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import { Box, styled } from "@mui/material";
import { setTasks } from "./Redux/TaskSlice";
import { useDispatch } from "react-redux";
import useFetch from "use-http";
import { useEffect } from "react";

const AppHeader = styled(Box)({
  background: "linear-gradient(to bottom, #add8e6, #90ee90)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white",
});

function App() {
  const dispatch = useDispatch();
  const { get, data, loading } = useFetch("/Tasks", {}, []);

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const DBdata = await get();
        dispatch(setTasks(DBdata));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getAllTasks();
  }, [data, loading]);

  return (
    <AppHeader>
      <AddTodo />
      <TodoList />
    </AppHeader>
  );
}

export default App;
