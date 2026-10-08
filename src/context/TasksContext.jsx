/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer } from 'react';

// État initial avec des tâches de démonstration
const initialState = {
  tasks: [
    { id: 1, titre: 'Configurer React Router', done: true },
    { id: 2, titre: 'Ajouter le thème dark/light', done: true },
    { id: 3, titre: 'Implémenter useReducer', done: false },
    { id: 4, titre: 'Créer les custom hooks', done: false },
    { id: 5, titre: 'Formulaire avancé de tâche', done: false },
  ],
  filter: 'all', // 'all' | 'active' | 'done'
  nextId: 6,
};

// Reducer — toute la logique de mise à jour est centralisée ici
function tasksReducer(state, action) {
  switch (action.type) {
    case 'AJOUTER':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: state.nextId, titre: action.payload, done: false },
        ],
        nextId: state.nextId + 1,
      };

    case 'SUPPRIMER':
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };

    case 'COMPLETER':
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? { ...t, done: !t.done } : t
        ),
      };

    case 'FILTRER':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}

// Créer le contexte
const TasksContext = createContext(null);

// Provider
export function TasksProvider({ children }) {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

// Hook personnalisé
export function useTasks() {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks doit être utilisé dans un <TasksProvider>');
  }
  return context;
}