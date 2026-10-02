import { useEffect, useState } from "react";

function BlagueAleatoire() {
  const [blague, setBlague] = useState(null);
  const [loading, setLoading] = useState(true);
  const [compteurBlague, setCompteurBlague] = useState(0);

  useEffect(() => {
    async function chargerBlague() {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );
      const data = await res.json();
      setBlague(data);
      setLoading(false);
    }
    chargerBlague();
  }, [compteurBlague]);
  if (loading) return <p>⏳ Chargement d'une blague...</p>;
  return (
    <div>
      <p>
        <strong>Type :</strong>
        {blague.type}
      </p>
      <p>
        <strong>Question :</strong> {blague.setup}
      </p>
      <p>
        <strong>Réponse :</strong> {blague.punchline}
      </p>
      <button onClick={() => setCompteurBlague(compteurBlague + 1)}>
        Nouvelle blague
      </button>
    </div>
  );
}

export default BlagueAleatoire;
