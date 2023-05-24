import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { changeStatus } from "../Redux/Tasks";
import React from "react";
import { Checkbox } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useFetch } from "use-http";

const Task = ({
  text,
  id,
  complate,
}: {
  text: string;
  id: string;
  complate: boolean;
}) => {
  const taskIdList = useSelector((state: RootState) => state.tasks.Id);
  const IsComplateTask = useSelector(
    (state: RootState) => state.tasks.IsComplate
  );
  const apiUrl = `http://localhost:4000/data/deleteTask`;

  const options = {
    method: "DELETE",
  };

  const { del, loading, error } = useFetch(apiUrl, options);

  const handleDelete = async () => {
    try {
      const response = await del(`${id}`);
      console.log("Delete response:", response);
    } catch (error) {
      console.error("Delete error:", error);
    }
    window.location.reload();
  };

  const isComplateById = (id: string) => {
    const idIndex = taskIdList.indexOf(id);
    const isComplate = IsComplateTask[idIndex];
    return isComplate || complate;
  };

  const dispatch = useDispatch();

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
        <Delete onClick={handleDelete} />
      </div>
    </div>
  );
};
export default Task;
