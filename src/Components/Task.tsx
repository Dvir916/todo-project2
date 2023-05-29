import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { changeStatus, earseTaskFromList } from "../Redux/Tasks";
import React from "react";
import { Checkbox } from "@mui/material";
import { Delete } from "@mui/icons-material";

const Task = ({ text, index }: { text: string; index: number }) => {
  const tasksArray = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const isComplateByIndex = () => {
    return tasksArray[index].IsComplate;
  };

  const deleteTask = () => {
    if (index !== -1) {
      dispatch(earseTaskFromList(index));
    }
  };

  const completeTask = () => {
    dispatch(changeStatus(index));
  };

  return (
    <div className="show-list">
      <div
        style={{ display: "flex", marginLeft: "10px", wordBreak: "break-all" }}
        className={isComplateByIndex() ? "strikethrough" : ""}
      >
        {text}
      </div>

      <div className={"marginLeft"}>
        <Checkbox
          checked={isComplateByIndex()}
          onChange={completeTask}
        ></Checkbox>
      </div>

      <div className="sixty">
        <Delete onClick={deleteTask} />
      </div>
    </div>
  );
};
export default Task;
