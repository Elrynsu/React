
export default function AddTask({ taskList, setTaskList, task, setTask }) {

    function handleSubmit(ev) {
        ev.preventDefault();

        if (task.id) {
            const date = new Date();
            const updatedTaskList = taskList.map((curTask) => (
                curTask.id === task.id 
                    ? {id: task.id, name: ev.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} 
                    : curTask
            ))
            setTaskList(updatedTaskList);
            setTask({id: null, name: ''});
            ev.target.task.value = '';
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: ev.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }

            setTaskList([...taskList, newTask]);
            setTask({id: null, name: ''});
            ev.target.task.value = '';
        }

    }

    return (
        <div>
            <section className="addTask">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="task" value={task.name || ''} autoComplete="off" placeholder="add task" maxLength="25" onChange={e => setTask({...task, name: e.target.value})}/>
                    <button type="submit">
                        {task.id ? 'Update' : 'Add'}
                    </button>

                </form>
            </section>

        </div>
    )
}
