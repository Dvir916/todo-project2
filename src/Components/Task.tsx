import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useFetch } from "use-http";

const Task = ({
  text,
  id,
  complete,
}: {
  text: string;
  id: string;
  complete: boolean;
}) => {
  const { del, patch } = useFetch(`/data`);
  const [iscomplete, setIsComplete] = useState(complete);

  const deleteTask = async () => {
    try {
      await del(`/deleteTask/${id}`);
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const completeTask = async () => {
    try {
      await patch(`/setStatus/${id}`, {
        complete: !iscomplete,
      });
    } catch (error) {
      console.error("Status error:", error);
    }
    setIsComplete(!iscomplete);
  };

  return (
    <div className="show-list">
      <div
        style={{ display: "flex", marginLeft: "10px", wordBreak: "break-all" }}
        className={iscomplete ? "strikethrough" : ""}
      >
        {text}
      </div>

      <div className={"marginLeft"}>
        <Checkbox onChange={completeTask} checked={iscomplete}></Checkbox>
      </div>

      <div className="sixty">
        <Delete onClick={deleteTask} />
      </div>
    </div>
  );
};
export default Task;
