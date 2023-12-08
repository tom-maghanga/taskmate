import React from 'react'

function ShowTask({taskList, setTasks, task, setTask}) {

    const handleDelete = (id) =>{
        console.log(id);
        
        const updatedTaskList = taskList.filter( todo => todo.id !== id);
        console.log("deleting");
        setTasks(updatedTaskList);
    }

    const handleEdit = (id) =>{
        const selectedtask = taskList.find(todo => todo.id===id);
        setTask(selectedtask);

    }
    
  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{taskList.length}</span>
                
            </div>
            <button className="clearAll" onClick={() =>{setTasks([])}}>Clear All</button>

        </div>
        
        <ul>
            {taskList?.map((task)=>( 
                
            <li key={task.id}>
                <p>
                    <span className='name'>{task.name}</span>
                    <span className='time'>{task.time}</span>
                </p>
                <button className='bi bi-pencil-square' onClick={() => handleEdit(task.id)}>Edit</button>
                <button className='bi bi-trash' onClick={() => handleDelete(task.id)}>Delete</button>

            </li>
            ))}
        </ul>
    </section>
  )
}

export default ShowTask