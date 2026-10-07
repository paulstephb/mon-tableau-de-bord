import { useState, useEffect } from "react";
import WeatherWidget from "../components/WeatherWidget";

function Dashboard() {
  //   const [nomUtilisateur, setNomUtilisateur] = useState("visiteur");
  const [secondesActivite, setSecondesActivite] = useState(0);

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
      <p>⏱️ Temps de session : {secondesActivite} secondes</p>{" "}
      {/* <TitreDynamique /> */}
      {/* <Chronometre /> */}
      {/* <TailleFenetre /> */}
      {/* <BlagueAleatoire/> */}
      <WeatherWidget latitude={48.8566} longitude={2.3522} />
    </div>
  );
}

export default Dashboard;
