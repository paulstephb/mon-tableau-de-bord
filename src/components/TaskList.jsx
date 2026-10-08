import { useTasks } from '../context/TasksContext';

function TaskList() {
  const { state, dispatch } = useTasks();

  // Filtrer selon le filtre actif
  const tasksFiltrees =
    state.filter === 'all'
      ? state.tasks
      : state.filter === 'done'
      ? state.tasks.filter((t) => t.done)
      : state.tasks.filter((t) => !t.done);

  return (
    <div>
      {/* Boutons de filtre */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {['all', 'active', 'done'].map((f) => (
          <button
            key={f}
            onClick={() => dispatch({ type: 'FILTRER', payload: f })}
            style={{
              padding: '6px 12px',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              background: state.filter === f ? '#3b82f6' : 'white',
              color: state.filter === f ? 'white' : '#64748b',
              cursor: 'pointer',
              fontWeight: state.filter === f ? 'bold' : 'normal',
            }}
          >
            {f === 'all' && `Toutes (${state.tasks.length})`}
            {f === 'active' && `Actives (${state.tasks.filter((t) => !t.done).length})`}
            {f === 'done' && `Terminées (${state.tasks.filter((t) => t.done).length})`}
          </button>
        ))}
      </div>

      {/* Liste des tâches */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasksFiltrees.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              marginBottom: '8px',
              background: '#f8fafc',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
            }}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => dispatch({ type: 'COMPLETER', payload: task.id })}
            />
            <span
              style={{
                flex: 1,
                textDecoration: task.done ? 'line-through' : 'none',
                color: task.done ? '#94a3b8' : '#1e293b',
              }}
            >
              {task.titre}
            </span>
            <button
              onClick={() => dispatch({ type: 'SUPPRIMER', payload: task.id })}
              style={{
                color: '#ef4444',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      {tasksFiltrees.length === 0 && (
        <p style={{ color: '#94a3b8', textAlign: 'center' }}>
          Aucune tâche à afficher.
        </p>
      )}
    </div>
  );
}

export default TaskList;