import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import Task from "./Task";
import "../App.css";
import React from "react";

const TodoList = () => {
  const taskTextList = useSelector((state: RootState) => state.tasks.TaskList);
  const taskIdList = useSelector((state: RootState) => state.tasks.Id);

  return (
    <div className="eityperc">
      {taskTextList.map((item, index) => (
        <Task text={item} id={taskIdList[index]} />
      ))}
    </div>
  );
};
export default TodoList;
