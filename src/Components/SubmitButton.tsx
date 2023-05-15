import '../App.css';
import { eraseTask } from '../Redux/Importer';
import { useDispatch,useSelector } from 'react-redux';
import { insertTaskList } from '../Redux/Importer';
import type { RootState } from '../Redux/Store';

function SubmitButton(){

    const task = useSelector((state:RootState) => state.tasks.task)
    const dispatch = useDispatch()

    const addTask = (e: any) => {
        e.preventDefault();
        dispatch(insertTaskList(task))
        // setTaskList((prev: string[]) => [...prev, task]);
        dispatch(eraseTask())
      };

    return(
        <input className="submit-button" type="submit" onClick={addTask}/>
        
    );
}

export default SubmitButton;
