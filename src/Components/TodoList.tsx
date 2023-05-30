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
      {tasksArray.map((item, index) => (
        <Task text={item.taskText} index={index} />
      ))}
    </Box>
  );
};
export default TodoList;
