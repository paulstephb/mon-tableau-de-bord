import { useState, useEffect } from "react";
// import Chronometre from "./components/Chronometre";
// import TitreDynamique from "./components/TitreDynamique";
import "./App.css";
// import TailleFenetre from "./components/TaileFenetre";

function App() {
  const [nomUtilisateur, setNomUtilisateur] = useState("visiteur");
  const [secondesActivite, setSecondesActivite] = useState(0);

  useEffect(() => {
    document.title = `Tableau de Bord - ${nomUtilisateur}`;
  }, [nomUtilisateur]);

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
      <h1>Bienvenue {nomUtilisateur} !</h1>
      <p>⏱️ Temps de session : {secondesActivite} secondes</p>
      <input type="text" placeholder="User..." onChange={(e) => setNomUtilisateur(e.target.value)}/>
      {/* <TitreDynamique /> */}
      {/* <Chronometre /> */}
      {/* <TailleFenetre /> */}
    </div>
  );
}

export default App;
