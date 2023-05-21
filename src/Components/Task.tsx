import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { useState } from "react";
import { changeStatus, earseTaskFromList } from "../Redux/Tasks";
import React from "react";
import { Checkbox } from "@mui/material";
import { Delete } from "@mui/icons-material";

const Task = ({ text, id }: { text: string; id: string }) => {
  const taskIdList = useSelector((state: RootState) => state.tasks.Id);
  const IsComplateTask = useSelector(
    (state: RootState) => state.tasks.IsComplate
  );

  const isComplateById = (id: string) => {
    const idIndex = taskIdList.indexOf(id);
    const isComplate = IsComplateTask[idIndex];
    return isComplate;
  };

  const dispatch = useDispatch();

  const deleteTask = () => {
    const index = taskIdList.findIndex((item) => item === id);
    if (index !== -1) {
      dispatch(earseTaskFromList(index));
    }
  };

  const complateTask = () => {
    const index = taskIdList.findIndex((item) => item === id);
    dispatch(changeStatus(index));
  };

  return (
    <div className="show-list">
      <div
        style={{ display: "flex", marginLeft: "10px", wordBreak: "break-all" }}
        className={isComplateById(id) ? "strikethrough" : ""}
      >
        {text}
      </div>

      <div className={"marginLeft"}>
        <Checkbox
          checked={isComplateById(id)}
          onChange={complateTask}
        ></Checkbox>
      </div>

      <div className="sixty">
        <Delete onClick={deleteTask} />
      </div>
    </div>
  );
};
export default Task;
