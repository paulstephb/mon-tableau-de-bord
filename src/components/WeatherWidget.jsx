import { useState, useEffect } from "react";

function WeatherWidget({ latitude, longitude }) {
  const [meteo, setMeteo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    async function chargerMeteo() {
      try {
        setLoading(true);
        setErreur(null);

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&timezone=Europe/Paris`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);

        const data = await res.json();
        setMeteo(data.current);
      } catch (err) {
        setErreur(err.message);
      } finally {
        setLoading(false);
      }
    }

    chargerMeteo();
  }, [latitude, longitude]);

  if (loading) return <p>⏳ Chargement de la météo...</p>;
  if (erreur) return <p>❌ Impossible de charger la météo : {erreur}</p>;

  return (
    <div className="weather-widget">
      <h3>Meteo actuelle</h3> <p>🌡️ {meteo.temperature_2m} °C</p>
    </div>
  );
}

export default WeatherWidget;
