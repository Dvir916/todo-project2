import AddTodo from "./Components/AddTodo";
import DBDataInitializer from "./Components/InitializeData";
import TodoList from "./Components/TodoList";
import { Box, styled } from "@mui/material";

const AppHeader = styled(Box)({
  background: "linear-gradient(to bottom, #add8e6, #90ee90)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white",
});

function App() {
  return (
    <Box>
      <Box>
        <AppHeader>
          <DBDataInitializer />
          <AddTodo />
          <TodoList />
        </AppHeader>
      </Box>
    </Box>
  );
}

export default App;
