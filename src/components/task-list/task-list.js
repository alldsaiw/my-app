import './task-list.css';
import TaskListItem from '../task-list-item/task-list-item';

const TaskList = () => {
    return (
        <ul className="tasklist">
            <h2 className="list">Сделать</h2>
            <TaskListItem/>
            <TaskListItem/>
            <TaskListItem/>
        </ul>
    )
}

export default TaskList;
