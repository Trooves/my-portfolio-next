export async function GET() {
    const projets = [
      {
        id: 1,
        titre: "Projet de jeu vidéo",
        description: "Projet de jeu vidéo web pour le CNAM.",
        lien: "https://projet1.fr",
        technologies: ["React", "JavaScript", "CSS", "Phaser"]
      },
      {
        id: 2,
        titre: "Site E-commerce",
        description: "Plateforme e-commerce responsive avec panier d'achat, paiement sécurisé et gestion de compte utilisateur.",
        lien: "https://projet2.fr",
        technologies: ["React", "Node.js"]
      },
      {
        id: 3,
        titre: "Portfolio",
        description: "Création de portfolio",
        lien: "https://projet3.fr",
        technologies: ["React", "Next", "TailwindCSS"]
      }
    ];
  
    return Response.json(projets);
  }