import './task-list-item.css';

const TaskListItem = () => {
    return (
        <li className="list-item"> 
        <span className="item">Что-то делаем</span>
        <button className="btn-done">Сделано!</button>
        </li>
    )
}

export default TaskListItem;