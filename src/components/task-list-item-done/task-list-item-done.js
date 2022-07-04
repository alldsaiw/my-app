import './task-list-item-done.css';

const TaskListItemDone = () => {
    return (
        <li className="item-done"> 
        <span className="item">Мы это сделали!</span>
        <button className="btn-done">Переделать!</button>
        </li>
    )
}

export default TaskListItemDone;