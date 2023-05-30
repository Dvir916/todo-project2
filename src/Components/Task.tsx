import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { changeStatus, earseTaskFromList } from "../Redux/Tasks";
import React from "react";
import { Checkbox, Box } from "@mui/material";
import { Delete } from "@mui/icons-material";

interface TaskProps {
  text: string;
  index: number;
}

const Task: React.FC<TaskProps> = ({ text, index }) => {
  const tasksArray = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const isComplateByIndex = () => {
    return tasksArray[index].isComplate;
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
    <Box className="show-list">
      <Box
        sx={{ display: "flex", marginLeft: "10px", wordBreak: "break-all" }}
        className={isComplateByIndex() ? "strikethrough" : ""}
      >
        {text}
      </Box>

      <Box className={"marginLeft"}>
        <Checkbox checked={isComplateByIndex()} onChange={completeTask} />
      </Box>

      <Box className="sixty">
        <Delete onClick={deleteTask} />
      </Box>
    </Box>
  );
};
export default Task;
