import { useDispatch } from "react-redux/es/exports";
import "../App.css";
import { insertTask } from "../Redux/Tasks";
import { useState } from "react";
import React from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import { Box, Button, TextField } from "@mui/material";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [tasksText, setTasksText] = useState("");

  const addTask = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (tasksText.length > 0) {
      dispatch(insertTask(tasksText));
      alertify.success("Task was Inserted successfully!");
      setTasksText("");
    } else {
      alertify.alert("Error:", "the task must contain text!", function () {
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
          value={tasksText}
          onChange={(e) => setTasksText(e.target.value)}
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
