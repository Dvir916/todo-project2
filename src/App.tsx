import { useSelector } from 'react-redux';
import './App.css';
import Importer from './Components/Importer';
import type { RootState } from './Redux/Store';

function App() {
  // const task = useSelector((state:RootState) => state.counter.task)
  const taskList = useSelector((state:RootState)=> state.tasks.TaskList)
  // const dispatch = useDispatch()

  const deleteTask = (e: any) => {
    const todo = e.target.parentNode;
    todo.remove();
  };

  const complateTask = (e: any) => {
    const to = e.target.parentNode.firstChild;
    to.classList.toggle('strikeLine');
  };

  const reRender = () =>
    taskList.map(item => (
      <div className="show-list">
        <div className="flex">{item}</div>
        <button type="submit" onClick={complateTask} className="marginLeft">
          Done
        </button>
        <button type="submit" onClick={deleteTask} className="sixty">
          Delete
        </button>
      </div>
    ));
  
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Importer/>
          <div className="eityperc">{reRender()}</div>
        </header>
      </div>

    </div>
  );
}

export default App;
