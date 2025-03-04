import { useEffect, useState } from 'react'

import AddTask from './components/AddTask'
import Header from './components/Header'
import ShowTask from './components/ShowTask'

import './App.css'
import Footer from './components/Footer'


function App() {
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
    const [task, setTask] = useState({});

    useEffect(() => {
        localStorage.setItem("tasklist", JSON.stringify(taskList))
    }, [taskList])

    return (
        <div className='App'>
            <Header />
            <AddTask
                taskList={taskList}
                setTaskList={setTaskList}
                task={task}
                setTask={setTask}
            />
            <ShowTask
                taskList={taskList}
                setTaskList={setTaskList}
                task={task}
                setTask={setTask}
            />
            <Footer />
        </div>
    )
}

export default App
