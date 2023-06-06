import AddTodo from "./Components/AddTodo";
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
    <div>
      <div className="App">
        <AppHeader>
          <AddTodo />
          <TodoList />
        </AppHeader>
      </div>
    </div>
  );
}

export default App;
