import "../App.css";
import { useState } from "react";
import React from "react";
import { useFetch } from "use-http";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const AddTodo = () => {
  const [task, setTask] = useState("");

  const { post, error, loading } = useFetch();

  const insertTask = async (task: object | BodyInit | undefined) => {
    try {
      await post("/data/addTask", task);
    } catch (error) {
      console.error(error);
    }
    setTask("");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const updateText = (value: string) => {
    setTask(value);
  };

  const addTask = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const taskDB = { text: task };
    taskDB.text.length > 0
      ? insertTask(taskDB)
      : alertify.alert("Error", "Task cannot be empty!", function () {
          alertify.warning("Enter task");
        });
  };

  return (
    <div style={{ display: "flex", marginTop: "5%" }}>
      <div>
        <input
          type="text"
          className="form__input"
          placeholder="Insert your task here:"
          value={task}
          onChange={(e) => updateText(e.target.value)}
        />
        <label className="form__label">Task</label>
      </div>
      <input
        className="button"
        type="submit"
        placeholder="SEND"
        onClick={addTask}
      />
    </div>
  );
};
export default AddTodo;
