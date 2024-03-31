import Task from "./Task"

function TaskList({title,tasks}) {
    // debugger
    return (
        <div>
            <h1>{title}</h1>
            {tasks.map(t => <Task task={t} />)

            }
        </div>
    )
}

export default TaskList
