import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import CompteurAvance from "../components/CompteurAvance";

function Settings() {
  const { theme } = useTheme();

  return (
    <div>
      <h1>Paramètres</h1>

      <section
        style={{
          padding: "20px",
          marginBottom: "20px",
          background: theme === "light" ? "#f8fafc" : "#1e293b",
          borderRadius: "12px",
          border: theme === "light" ? "1px solid #e2e8f0" : "1px solid #334155",
        }}
      >
        <h2>Apparence</h2>
        <p>
          Thème actuel :{" "}
          <strong>{theme === "light" ? "Clair ☀️" : "Sombre 🌙"}</strong>
        </p>
        <ThemeToggle />
      </section>
      <section
        style={{
          padding: "20px",
          marginBottom: "20px",
          background: theme === "light" ? "#f8fafc" : "#1e293b",
          borderRadius: "12px",
          border: theme === "light" ? "1px solid #e2e8f0" : "1px solid #334155",
        }}
      >
        <h2>Compteur Avancé</h2>
        <CompteurAvance />
      </section>
    </div>
  );
}

export default Settings;
