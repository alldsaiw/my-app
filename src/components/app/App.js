import AppHeader from '../app-header/app-header';
import FormAdd from '../form-add/form-add';
import TaskList from '../task-list/task-list';
import TaskListDone from '../task-list-done/task-list-done';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <FormAdd/>
      <TaskList/>
      <TaskListDone />
    </div>
  );
}

export default App;
