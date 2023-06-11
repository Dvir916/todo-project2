import { useEffect, useState } from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { Box, Button, TextField } from "@mui/material";
import { gql, useMutation } from "@apollo/client";

interface propFetchingTasks {
  refetchTasks: () => void;
}

const AddTodo: React.FC<propFetchingTasks> = ({ refetchTasks }) => {
  const MUTATION_INSERT_TASK = gql`
    mutation CreateTask($text: String) {
      createTask(text: $text) {
        id
        text
        isComplete
      }
    }
  `;

  const [taskText, setTaskText] = useState("");
  const [SHOULDRefetch, setSHOULDRefetch] = useState(true);
  const [insertNewTask] = useMutation(MUTATION_INSERT_TASK, {
    variables: { text: taskText },
  });

  useEffect(() => {
    refetchTasks();
  }, [SHOULDRefetch]);

  const addTask = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (taskText) {
      try {
        insertNewTask();
        setSHOULDRefetch(!SHOULDRefetch);
        alertify.success("Task was Inserted successfully!");
        setTaskText("");
      } catch (error) {
        console.error(error);
      }
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
