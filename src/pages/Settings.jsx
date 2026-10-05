import { useState, useEffect } from 'react';

function Settings() {
  const [nomUtilisateur, setNomUtilisateur] = useState('Visiteur');

  // Titre dynamique de la page (repris de la fiche 10.1)
  useEffect(() => {
    document.title = `Paramètres — ${nomUtilisateur}`;
    return () => { document.title = 'Mon Tableau de Bord'; };
  }, [nomUtilisateur]);

  return (
    <div>
      <h2>Paramètres</h2>
      <div style={{ marginTop: '16px' }}>
        <label>
          Votre prénom :
          <input
            type="text"
            value={nomUtilisateur}
            onChange={(e) => setNomUtilisateur(e.target.value)}
            style={{ marginLeft: '8px', padding: '6px 12px', borderRadius: '6px', border: '1px solid #d1d5db' }}
          />
        </label>
        <p style={{ marginTop: '8px', color: '#6b7280' }}>
          Bonjour, {nomUtilisateur} ! Ce nom sera bientôt partagé à toutes les pages grâce à useContext (fiche 10.5).
        </p>
      </div>
    </div>
  );
}

export default Settings;
