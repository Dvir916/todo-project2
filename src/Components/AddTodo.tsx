import { useEffect, useState } from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { Box, Button, TextField } from "@mui/material";
import { gql, useMutation } from "@apollo/client";

interface AddTodoProps {
  refetchTasks: () => void;
}

const MUTATION_INSERT_TASK = gql`
  mutation CreateTask($text: String!) {
    createTask(text: $text) {
      id
      text
      isComplete
    }
  }
`;

const AddTodo: React.FC<AddTodoProps> = ({ refetchTasks }) => {
  const [taskText, setTaskText] = useState("");
  const [insertNewTask, insertResult] = useMutation(MUTATION_INSERT_TASK, {
    variables: { text: taskText },
  });

  useEffect(() => {
    if (!insertResult.loading && insertResult.data) {
      refetchTasks();
      alertify.success("Task was Inserted successfully!");
      setTaskText("");
    }
  }, [insertResult.loading]);

  const addTask = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (taskText) {
      insertNewTask();
    } else {
      alertify.alert("Error:", "the task must contain text!", () => {
        alertify.warning("Please enter your task");
      });
    }
  };

  return (
    <Box sx={{ display: "flex", marginTop: "5%" }}>
      <Box>
        <TextField
          type="text"
          placeholder="Insert your task here:"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          label="Task"
        />
      </Box>
      <Button onClick={addTask} variant="contained">
        SEND
      </Button>
    </Box>
  );
};
export default AddTodo;
