
import { useDispatch, useSelector } from 'react-redux';
import { AddTaskAction } from './actions/taskActions';
import { useState } from 'react';
import './App.css';

function App() {

  const [task, setTask] = useState();

  const dispatch = useDispatch();
  const Task = useSelector((state) => state.Task);
  const { tasks } = Task;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTaskAction(task));
  };

  return <>
    <div className="App">
      <header className="App-header">
        <h2>To Do List App</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Enter a Task'
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }} 
            onChange={(e) => setTask(e.target.value)}
          />
          <button type='submit'
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Enter</button>
        </form>
        <ul className='allTasks'>
          {tasks && 
           tasks.map((t) => (
              <li key = {t.id} className='singleTask'>
                <span className='taskText'>{t.task}</span>
                <button
                  style={{
                    borderRadius: 25,
                    padding: 10,
                    // marginLeft: 25,
                    border: "1px solid white",
                    color: "white",
                    backgroundColor: "orangered",
                  }}>Delete</button>
              </li>
            ))
          }
          
        </ul>
      </header>
    </div>
  </>
}

export default App;
