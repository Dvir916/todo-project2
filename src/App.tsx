import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import { Box, styled } from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import { Task } from "./interfaceTypes";

const AppHeader = styled(Box)({
  background: "linear-gradient(to bottom, #add8e6, #90ee90)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white",
});

const QUERY_ALL_TASKS = gql`
  query Tasks {
    tasks {
      id
      text
      isComplete
    }
  }
`;

interface QueryTasks {
  tasks: Task[];
}

const App = () => {
  const { data, loading, refetch } = useQuery<QueryTasks>(QUERY_ALL_TASKS);

  return (
    <AppHeader>
      <AddTodo refetchTasks={refetch} />
      {!loading ? (
        <TodoList tasks={data!.tasks} refetchTasks={refetch} />
      ) : (
        <>Loading...</>
      )}
    </AppHeader>
  );
};

export default App;
