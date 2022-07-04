import './task-list-item.css';

const TaskListItem = () => {
    return (
        <li> 
        <span className="item">Что-то делаем</span>
        <input type="checkbox" className="important"/> <span className="txt">Важно!</span>
        <button className="btn-done">Сделано!</button>
        </li>
    )
}

export default TaskListItem;