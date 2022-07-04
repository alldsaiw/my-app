import './task-list-done.css'
import TaskListItemDone from '../task-list-item-done/task-list-item-done';

const TaskListDone = () => {
    return (
        <ul className="task-list-done">
            <h2 className="header-done">Сделано</h2>
            <TaskListItemDone/>
            <TaskListItemDone/>
            <TaskListItemDone/>
        </ul>
    )
}

export default TaskListDone;