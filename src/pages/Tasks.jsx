import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function Tasks() {
  return (
    <div>
      <h1>Mes tâches</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default Tasks;