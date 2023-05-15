import { useSelector, useDispatch } from 'react-redux/es/exports';
import type { RootState } from '../Redux/Store';
import { eraseTask, taskInsert } from '../Redux/Tasks';

function TextBox(){

  const dispatch = useDispatch()
  const task = useSelector((state:RootState) => state.tasks.task)
  // useEffect(()=>{
  //   task = useSelector((state:RootState) => state.counter.task);
  // },task);

  const textHandle = (e: any) => {
    // console.log(e.target.value)
    dispatch(eraseTask())
    dispatch(taskInsert(e.target.value))
    // console.log('handler...')
    // console.log(task);
  };

  return(
    <input
      className="text-area"
      type="text"
      value={task}
      onChange={textHandle}
      placeholder="Insert your task here:"
    />
  );
}

export default TextBox;