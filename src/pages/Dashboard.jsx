import { useState, useEffect } from "react";
// import WeatherWidget from "../components/WeatherWidget";
import { useTasks } from "../context/TasksContext";

function Dashboard() {
  //   const [nomUtilisateur, setNomUtilisateur] = useState("visiteur");
  const [secondesActivite, setSecondesActivite] = useState(0);

  const { state } = useTasks();
  const totalTasks = state.tasks.length;
  const tachesEnCours = state.tasks.filter((t) => !t.done).length;

  //   useEffect(() => {
  //     document.title = `Tableau de Bord - ${nomUtilisateur}`;
  //   }, [nomUtilisateur]);

  useEffect(() => {
    const idTimer = setInterval(() => {
      setSecondesActivite((s) => s + 1);
    }, 1000);
    return () => {
      clearInterval(idTimer);
    };
  }, []);

  return (
    <div className="app">
      <h2>Tableau de bord</h2>
      <p>Bienvenue sur votre espace personnel !</p>
      <p>⏱️ Temps de session : {secondesActivite} secondes</p>
      <div
        style={{
          padding: "12px",
          marginBottom: "20px",
          background: "#f8fafc",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
        }}
      >
        <h3 style={{ marginBottom: "12px", color: "#334155" }}>Mes tâches</h3>
        <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
          <strong>{tachesEnCours}</strong> tache{totalTasks > 1 ? "s" : ""} en
          cours sur <strong>{totalTasks}</strong> au total.
        </p>
        {tachesEnCours === 0 && totalTasks > 0 && (
          <p style={{ color: "#10b981", fontSize: "14px", marginTop: "8px" }}>
            🎉 Félicitations ! Vous avez terminé toutes vos tâches.
          </p>
        )}
      </div>
      {/* <TitreDynamique /> */}
      {/* <Chronometre /> */}
      {/* <TailleFenetre /> */}
      {/* <BlagueAleatoire/> */}
      {/* <WeatherWidget latitude={48.8566} longitude={2.3522} /> */}{" "}
    </div>
  );
}

export default Dashboard;
