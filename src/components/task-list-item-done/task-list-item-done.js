import './task-list-item-done.css';

const TaskListItemDone = () => {
    return (
        <li> 
        <span className="item">Мы это сделали!</span>
        <button className="btn-done">Переделать!</button>
        </li>
    )
}

export default TaskListItemDone;