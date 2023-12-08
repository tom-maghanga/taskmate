import React from 'react'

function AddTask({taskList, setTasks, task, setTask}) {
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(task);
    if(task.id){
      const date = new Date();
      const updateTask = taskList.map((todo) => (
        todo.id ===task.id ?  {id: task.id, name: e.target.task.value, time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
      ));
      setTask(updateTask);

    }else{
      const date = new Date();
      const newTask = {id : date.getTime(), name: e.target.task.value, time : `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
      setTasks([...taskList, newTask]);
      e.target.task.value = "";
    }
  

  }
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task.name}  autoComplete="off" placeholder="add task" onChange={e => setTask({...task, name: e.target.value})}/>
            <button type='submit'>Add Task</button>
        </form>
    </section>
  )
}

export default AddTask