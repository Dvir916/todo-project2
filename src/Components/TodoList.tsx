import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import Task from "./Task";
import "../App.css";
import React from "react";
import { Box } from "@mui/material";

const TodoList = () => {
  const tasksArray = useSelector((state: RootState) => state.tasks);

  return (
    <Box className="eityperc">
      {tasksArray.map((item) => (
        <Task text={item.text} id={item.id} isComplete={item.isComplete} />
      ))}
    </Box>
  );
};
export default TodoList;
