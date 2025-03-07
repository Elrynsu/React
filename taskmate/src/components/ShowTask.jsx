
export default function ShowTask({ taskList, setTaskList, task, setTask }) {

    function handleEdit(id) {
        const selectedTask = taskList.find((task => task.id === id));
        setTask(selectedTask)

    }

    function handleDelete(id) {
        const updatedTaskList = taskList.filter((task => task.id !== id));
        setTaskList(updatedTaskList);
    }

  
    return (
    <div>
      <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{taskList.length}</span>

            </div>
            <button className="clearAll" onClick={() => setTaskList([])} >Clear All</button>
        </div>
        <ul>
            { taskList.map((task) => (
                <li key={task.id} >
                <p>
                    <span className="name">{task.name}</span>
                    <span className="time">{task.time}</span>
                </p>
                <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
                <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
            </li>
            ))}
            
        </ul>
      </section>
    </div>
  )
}
