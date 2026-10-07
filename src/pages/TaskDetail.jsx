import {useParams, useNavigate} from 'react-router-dom';
import taches from '../data/taches';

function TaskDetail() {
const { id } = useParams();
const tache = taches.find((t) => t.id === parseInt(id));
const navigate = useNavigate();

function handleRetour() {
  navigate(-1);
}

if (!tache) {
  return (
    <div>
      <h2>`Tâche non trouvée(${id})`</h2>
      <button onClick={handleRetour}>Retour</button>
    </div>
  )
}

  function handleTerminer() {
    
    alert(`La tâche "${tache.titre}" a été marquée comme terminée !`);
    navigate('/tasks');
  }

return (
    <div>
        <button  onClick={handleRetour}>Retour</button>
        <h2>{tache.titre}</h2>
        <p>{tache.description}</p>
        <p>Statut: {tache.statut}</p>
        <p>Date de création: {tache.dateCreation}</p>
        {tache.statut !== 'terminée' && (
            <button onClick={handleTerminer}>marquer comme terminée</button>
        )}
    </div>
);  

}

export default TaskDetail;