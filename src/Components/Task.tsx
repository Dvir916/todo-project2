import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { changeStatus, earseTaskFromList } from "../Redux/Tasks";
import React from "react";
import { Checkbox, Box } from "@mui/material";
import { Delete } from "@mui/icons-material";
import useFetch from "use-http";
import { Tasks } from "../interfaceTypes";

const Task: React.FC<Tasks> = ({ text, id, isComplete }) => {
  const tasksArray = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const { del, patch } = useFetch(`/data`);

  const isComplateById = () => {
    return tasksArray[tasksArray.findIndex((item) => item.id === id)]
      .isComplete;
  };

  const deleteTask = () => {
    try {
      console.log(id);
      del(`/deleteTask/${id}`);
      dispatch(earseTaskFromList(id));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const completeTask = () => {
    try {
      patch(`/setStatus/${id}`, {
        complete: !isComplete,
      });
      dispatch(changeStatus(id));
    } catch (error) {
      console.error("Status error:", error);
    }
  };

  return (
    <Box className="show-list">
      <Box
        sx={{ display: "flex", marginLeft: "10px", wordBreak: "break-all" }}
        className={isComplateById() ? "strikethrough" : ""}
      >
        {text}
      </Box>

      <Box className={"marginLeft"}>
        <Checkbox checked={isComplateById()} onChange={completeTask} />
      </Box>

      <Box className="sixty">
        <Delete onClick={deleteTask} />
      </Box>
    </Box>
  );
};
export default Task;
