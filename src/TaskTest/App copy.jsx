import './App.css'
import TaskList from './TaskList'
import { tasks,taskArr,tasksMain } from './tasks'

function App() {

  return (
    <>
      {Object.keys(tasks).map(k => <TaskList title={k} tasks={tasks[k]} />)}
      
      {/* {taskArr.map(v => <TaskList title={v} tasks={tasksMain.filter(tm=>tm.category==v)} />)} */}
    </>
  )
}

export default App
