import { useState, useEffect } from 'react';

function TailleFenetre() {
  // 1. Initialisation de l'état avec un objet contenant largeur et hauteur
  const [taille, setTaille] = useState({
    largeur: window.innerWidth,
    hauteur: window.innerHeight,
  });

  useEffect(() => {
    // Fonction qui met à jour l'état lors du redimensionnement
    const handleResize = () => {
      setTaille({
        largeur: window.innerWidth,
        hauteur: window.innerHeight,
      });
    };

    // 2. Abonnement à l'événement 'resize' de la fenêtre au montage
    window.addEventListener('resize', handleResize);

    // 3. Nettoyage : désabonnement au démontage pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Tableau vide : l'effet s'exécute une seule fois au montage[cite: 6]

  // 5. Bonus : Logique d'affichage selon la largeur[cite: 6]
  let typeAppareil = "Desktop 🖥️";
  if (taille.largeur < 640) {
    typeAppareil = "Mobile 📱";
  } else if (taille.largeur <= 1024) {
    typeAppareil = "Tablette 💻";
  }

  return (
    <div className='divTest' style={{ textAlign: "center", padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Détecteur de taille de fenêtre</h2>
      
      {/* 4. Affichage dynamique des dimensions[cite: 6] */}
      <p style={{ fontSize: "1.2rem" }}>
        Largeur : <strong>{taille.largeur} px</strong> – Hauteur : <strong>{taille.hauteur} px</strong>[cite: 6]
      </p>

      {/* Affichage du bonus */}
      <p style={{ fontSize: "1.1rem", color: "#007bff", fontWeight: "bold" }}>
        Type d'écran : {typeAppareil}
      </p>
    </div>
  );
}

export default TailleFenetre;