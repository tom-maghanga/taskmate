
import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';

function App() {
  const[taskList, setTasks] = useState([]);
  const[task, setTask] = useState({});
  return (
    <div className="App">
        <Header/>
        <AddTask 
                task = {task} setTask = {setTask}
                taskList = {taskList} setTasks={setTasks} />
        <ShowTask 
                task = {task} setTask = {setTask}
                taskList = {taskList} setTasks={setTasks} />
        
    </div>
  );
}

export default App;
