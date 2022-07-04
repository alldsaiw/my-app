import './task-list.css';
import TaskListItem from '../task-list-item/task-list-item';

const TaskList = () => {
    return (
        <ul className="tasklist">
            <TaskListItem/>
            <TaskListItem/>
            <TaskListItem/>
        </ul>
    )
}

export default TaskList;
