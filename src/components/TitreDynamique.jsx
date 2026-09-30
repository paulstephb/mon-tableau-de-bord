import { useEffect, useState } from "react";

function TitreDynamique() {
  const [compteur, setCompteur] = useState(0);

  useEffect(() => {
    document.title = `compteur: ${compteur}`;
  }, [compteur]);

  useEffect(() => {
    console.log("✨ Composant monté !");
  }, []);
  return (
    <div className="divTest">
      {" "}
      <h2>compteur: {compteur}</h2>
      <button onClick={() => setCompteur(compteur + 1)}>+1</button>
    </div>
  );
}

export default TitreDynamique;
