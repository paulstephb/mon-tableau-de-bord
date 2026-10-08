import { useState } from 'react';
import { useTasks } from '../context/TasksContext';

function TaskForm() {
  const [titre, setTitre] = useState('');
  const { dispatch } = useTasks();

  function handleSubmit(e) {
    e.preventDefault();
    const titreNettoye = titre.trim();
    if (titreNettoye === '') return;

    dispatch({ type: 'AJOUTER', payload: titreNettoye });
    setTitre('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}
    >
      <input
        type="text"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        placeholder="Ajouter une tâche..."
        style={{
          flex: 1,
          padding: '10px 14px',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          fontSize: '14px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          borderRadius: '8px',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Ajouter
      </button>
    </form>
  );
}

export default TaskForm;