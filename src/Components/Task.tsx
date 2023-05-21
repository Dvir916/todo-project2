import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { useState } from "react";
import { earseTaskFromList } from "../Redux/Tasks";
import React from "react";

const Task = ({ text, id }: { text: string; id: string }) => {
  const taskIdList = useSelector((state: RootState) => state.tasks.Id);
  const [strikeLine, setStrikeLine] = useState(false);
  const dispatch = useDispatch();

  const deleteTask = () => {
    const index = taskIdList.findIndex((item) => item === id);
    if (index !== -1) {
      dispatch(earseTaskFromList(index));
    }
  };

  const complateTask = () => {
    strikeLine ? setStrikeLine(false) : setStrikeLine(true);
  };

  return (
    <div className="show-list">
      <div
        style={{ display: "flex", marginLeft: "10px", wordBreak: "break-all" }}
        className={strikeLine ? "strikethrough" : ""}
      >
        {text}
      </div>
      <button type="submit" onClick={complateTask} className="marginLeft">
        Done
      </button>
      <button type="submit" onClick={deleteTask} className="sixty">
        Delete
      </button>
    </div>
  );
};
export default Task;
