import { useState, useEffect } from "react";

function Chronometre() {
  const [secondes, setSecondes] = useState(0);
  const [enMarche, setEnmarche] = useState(false);
  useEffect(() => {
    if (!enMarche) return;
    const idTimer = setInterval(() => {
      setSecondes((s) => s + 1);
    }, 1000);
    return () => {
      clearInterval(idTimer);
    };
  }, [enMarche]);

  function reinitialiser() {
    setSecondes(0);
    setEnmarche(false);
  }
  return (
    <div className="divTest">
      <h3>Time elapsed: {secondes}</h3>
      <div>
        <button onClick={() => setEnmarche(!enMarche)}>
          {enMarche ? "Pause" : "Démarrer"}
        </button>
        <button onClick={reinitialiser}>reinitialiser</button>
      </div>
    </div>
  );
}

export default Chronometre;
