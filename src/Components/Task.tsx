const Task = ({ text }: { text: string }) => {
  const deleteTask = (e: any) => {
    const todo = e.target.parentNode;
    todo.remove();
  };

  const complateTask = (e: any) => {
    const to = e.target.parentNode.firstChild;
    to.classList.toggle("strikeLine");
  };

  return (
    <div className="show-list">
      <div className="flex">{text}</div>
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
