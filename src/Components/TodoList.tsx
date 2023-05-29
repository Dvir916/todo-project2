import Task from "./Task";
import "../App.css";
import React, { useEffect, useState } from "react";
import { useFetch } from "use-http";

const TodoList = () => {
  const { data, loading, error } = useFetch(`/data/all`, {}, []);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, [data]);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="eityperc">
      {data?.map(
        (
          item: { text: string; id: string; isComplete: boolean },
          index: React.Key
        ) => (
          <Task
            key={index}
            text={item.text}
            id={item.id}
            complete={item.isComplete}
          />
        )
      )}
    </div>
  );
};
export default TodoList;
