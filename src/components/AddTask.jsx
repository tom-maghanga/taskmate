import React from 'react'

function AddTask({taskList, setTasks, task, setTask}) {
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(task.id){

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
            <input type="text" name="task" value={task.name} autoComplete="off" placeholder="add task" />
            <button type='submit'>Add Task</button>
        </form>
    </section>
  )
}

export default AddTask