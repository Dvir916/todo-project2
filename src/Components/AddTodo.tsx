import { useDispatch } from "react-redux/es/exports";
import "../App.css";
import { insertTaskList } from "../Redux/Tasks";
import { useState } from "react";
import React from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [tasksText, setTasksText] = useState("");

  const textHandle = (text: string) => {
    setTasksText(text);
  };

  const addTask = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (tasksText.length > 0) {
      dispatch(insertTaskList(tasksText));
      setTasksText("");
    } else {
      window.alert("the task must contain text!");
    }
  };

  return (
    <div style={{ display: "flex", marginTop: "5%" }}>
      <div>
        <input
          type="text"
          className="form__input"
          placeholder="Insert your task here:"
          value={tasksText}
          onChange={(e) => textHandle(e.target.value)}
        />
        <label className="form__label">Task</label>
      </div>
      <button className="button" onClick={addTask}>
        SEND
      </button>
    </div>
  );
};
export default AddTodo;
