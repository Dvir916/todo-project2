import { useDispatch } from "react-redux";
import { insertTask } from "../Redux/TaskSlice";
import { useState } from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { Box, Button, TextField } from "@mui/material";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");

  const addTask = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (taskText.length > 0) {
      dispatch(insertTask(taskText));
      alertify.success("Task was Inserted successfully!");
      setTaskText("");
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
          label="Task:"
        />
      </Box>
      <Button onClick={addTask} variant="contained">
        SEND
      </Button>
    </Box>
  );
};
export default AddTodo;
