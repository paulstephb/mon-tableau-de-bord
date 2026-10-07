import {Link} from 'react-router-dom';
import taches from '../data/taches';

function Tasks() {
  return (
    <div>
      <h1>Liste des tâches</h1>
      <ul>
        {taches.map((tache) => (
          <li key={tache.id}>
            <Link to={`/tasks/${tache.id}`}>{tache.titre}</Link> - {tache.statut}
          
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;