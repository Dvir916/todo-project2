import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import Task from "./Task";
import "../App.css";
import React from "react";

const TodoList = () => {
  const tasksArray = useSelector((state: RootState) => state.tasks);

  return (
    <div className="eityperc">
      {tasksArray.map((item, index) => (
        <Task text={item.TaskList} index={index} />
      ))}
    </div>
  );
};
export default TodoList;
