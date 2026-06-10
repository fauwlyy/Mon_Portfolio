// ============================================
// DONNÉES PROJETS — à personnaliser librement
// ============================================

const PROJECTS = {
  ira: {
    title: "IRA",
    eyebrow: "Souls-like 3D · 2025–2026",
    tags: ["Souls-like 3D", "Unreal Engine 5", "Blueprint", "Gameplay Programming"],
    description: `Dans un empire né d'une guerre sans fin, les Dreadborn ont pris le pouvoir et fondé Deador, une dystopie dictatoriale à l'allure romaine, bâtie sur les ruines des Solari. Lorsque le Voidwalker a massacré ses parents, Kaia Valdrik, dernière héritière Solari, a juré vengeance.

Depuis, elle vit loin des cités impériales, au sein de la résistance Solari, traquant sans relâche la créature responsable de la chute de sa lignée. Mais plus elle s'approche du Voidwalker, plus elle sent quelque chose d'étrange se réveiller en elle.`,
    details: [
      { label: "Durée", value: "8 mois" },
      { label: "Période", value: "2025–2026" },
      { label: "Moteur", value: "Unreal Engine 5" },
      { label: "Rôle", value: "Gameplay Programming" },
      { label: "Équipe", value: "2 personnes" },
      { label: "Genre", value: "Souls-like 3D" },
    ],
    mainImage: "https://fauwlyy.github.io/Mon_Portfolio/assets/images/IRA.png",
    videoUrl: "https://www.youtube.com/embed/Wy5PBMCPGxM",
    screenshots: [],
    link: "https://fauwly.itch.io/ira",
    linkLabel: "Voir sur itch.io",
  },

  gecko: {
    title: "Gecko Pulco",
    eyebrow: "Platformer 3D · 2025",
    tags: ["Platformer 3D", "Unity 6", "Cartoon", "Gameplay Programming"],
    description: `Vous incarnez Pulco, un gecko dont la famille a été enlevée par des aigles dans le monde céleste. Dernier à être capturé, il doit braver les dangers du ciel, affronter des ennemis redoutables et retrouver les siens avant de rentrer sain et sauf chez lui.

Un platformer 3D cartoon avec une direction artistique colorée et dynamique, conçu sur Unity 6.`,
    details: [
      { label: "Durée", value: "4 mois" },
      { label: "Période", value: "2025" },
      { label: "Moteur", value: "Unity 6" },
      { label: "Rôle", value: "Gameplay Programming" },
      { label: "Genre", value: "Platformer 3D" },
      { label: "Style", value: "Cartoon" },
    ],
    mainImage: "https://fauwlyy.github.io/Mon_Portfolio/assets/images/gecko-pulco.png",
    screenshots: [],
    link: "https://fauwly.itch.io/gecko-pulco",
    linkLabel: "Voir sur itch.io",
  },

  "before-sunrise": {
    title: "Before Sunrise",
    eyebrow: "Platformer 2D · 2024",
    tags: ["Platformer 2D", "Unity 6", "Gameplay Programming", "Level Design"],
    description: `Vous êtes un vampire réveillé après 100 ans, affamé. Vos réserves ont disparu. Il reste du sang au grenier, mais l'aube approche, prête à vous brûler. Vous devez faire vite, ou ce réveil sera votre dernier.

Un platformer 2D construit sur l'urgence et la pression temporelle. Gameplay et Level Design réalisés en 4 mois sur Unity 6.`,
    details: [
      { label: "Durée", value: "4 mois" },
      { label: "Période", value: "2024" },
      { label: "Moteur", value: "Unity 6" },
      { label: "Rôle", value: "Gameplay + Level Design" },
      { label: "Genre", value: "Platformer 2D" },
    ],
    mainImage: "https://fauwlyy.github.io/Mon_Portfolio/assets/images/before-sunrise.png",
    screenshots: [],
    link: "https://fauwly.itch.io/before-sunrise",
    linkLabel: "Voir sur itch.io",
  },

  "lost-souls": {
    title: "Lost Souls",
    eyebrow: "Platformer 2D · 2024",
    tags: ["Platformer 2D", "Unity 2022", "Puzzle", "Level Design"],
    description: `Trois êtres fantomatiques coincés entre la vie et la mort doivent trouver leur chemin pour trouver la paix de leur âme. Ils doivent résoudre des énigmes et récolter des fragments d'âmes de leur passé pour atteindre leur but.

Un platformer-puzzle 2D développé sur Unity 2022 en équipe, avec un fort accent sur l'ambiance et le level design narratif.`,
    details: [
      { label: "Durée", value: "4 mois" },
      { label: "Période", value: "2024" },
      { label: "Moteur", value: "Unity 2022" },
      { label: "Rôle", value: "Gameplay + Level Design" },
      { label: "Genre", value: "Platformer 2D Puzzle" },
    ],
    mainImage: "https://fauwlyy.github.io/Mon_Portfolio/assets/images/lost-souls.png",
    screenshots: [],
    link: "https://fauwly.itch.io/lost-souls",
    linkLabel: "Voir sur itch.io",
  },
  "qdi": {
    title: "Qui devinera l'image ?",
    eyebrow: "Jeu vocal · 2024",
    tags: ["Jeu vocal", "Unity", "Game Design", "1 semaine"],
    description: `Tu incarnes un personnage qui doit trouver le mot correspondant à l'image devant lui pour ne pas tomber et perdre la partie. Le jeu se fait entièrement avec la voix.

Un projet court réalisé en une semaine, explorant une mécanique de contrôle inhabituelle basée sur la reconnaissance vocale.`,
    details: [
      { label: "Durée", value: "1 semaine" },
      { label: "Période", value: "2024" },
      { label: "Moteur", value: "Unity" },
      { label: "Rôle", value: "Game Design" },
      { label: "Contrôle", value: "Voix uniquement" },
    ],
    mainImage: "https://fauwlyy.github.io/Mon_Portfolio/assets/images/qui-devinera-l'image.png",
    screenshots: [],
    link: "https://fauwly.itch.io/quidevineralimage",
    linkLabel: "Voir sur itch.io",
  },
};

// Traductions EN
const PROJECTS_EN = {
  ira: {
    ...PROJECTS.ira,
    eyebrow: "Souls-like 3D · 2025–2026",
    description: `In an empire born from endless war, the Dreadborn seized power and founded Deador — a Roman-aesthetic dictatorial dystopia built on the ruins of the Solari. When the Voidwalker slaughtered her parents, Kaia Valdrik, last Solari heir, swore revenge.

She now lives far from the imperial cities, within the Solari resistance, relentlessly hunting the creature behind her lineage's fall. But the closer she gets to the Voidwalker, the more she feels something strange awakening inside her.`,
    details: [
      { label: "Duration", value: "8 months" },
      { label: "Period", value: "2025–2026" },
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Role", value: "Gameplay Programming" },
      { label: "Team", value: "2 people" },
      { label: "Genre", value: "Souls-like 3D" },
    ],
    linkLabel: "View on itch.io",
  },
  gecko: {
    ...PROJECTS.gecko,
    eyebrow: "3D Platformer · 2025",
    description: `Play as Pulco, a gecko whose family was kidnapped by eagles in the celestial world. Last to be caught, he must brave the dangers of the sky, face fearsome enemies, and rescue his family before returning home safely.

A colorful 3D cartoon platformer built on Unity 6.`,
    details: [
      { label: "Duration", value: "4 months" },
      { label: "Period", value: "2025" },
      { label: "Engine", value: "Unity 6" },
      { label: "Role", value: "Gameplay Programming" },
      { label: "Genre", value: "3D Platformer" },
      { label: "Style", value: "Cartoon" },
    ],
    linkLabel: "View on itch.io",
  },
  "before-sunrise": {
    ...PROJECTS["before-sunrise"],
    eyebrow: "2D Platformer · 2024",
    description: `You are a vampire awakened after 100 years, starving. Your reserves are gone. There's blood in the attic, but dawn is approaching, ready to burn you. You must move fast — or this awakening will be your last.

A 2D platformer built on urgency and time pressure. Gameplay and Level Design completed in 4 months on Unity 6.`,
    details: [
      { label: "Duration", value: "4 months" },
      { label: "Period", value: "2024" },
      { label: "Engine", value: "Unity 6" },
      { label: "Role", value: "Gameplay + Level Design" },
      { label: "Genre", value: "2D Platformer" },
    ],
    linkLabel: "View on itch.io",
  },
  "lost-souls": {
    ...PROJECTS["lost-souls"],
    eyebrow: "2D Platformer · 2024",
    description: `Three ghostly beings stuck between life and death must find their way to peace. They must solve puzzles and collect soul fragments from their past to reach their goal.

A 2D puzzle-platformer developed on Unity 2022, with strong emphasis on atmosphere and narrative level design.`,
    details: [
      { label: "Duration", value: "4 months" },
      { label: "Period", value: "2024" },
      { label: "Engine", value: "Unity 2022" },
      { label: "Role", value: "Gameplay + Level Design" },
      { label: "Genre", value: "2D Puzzle Platformer" },
    ],
    linkLabel: "View on itch.io",
  },
  "qdi": {
    ...PROJECTS["qdi"],
    eyebrow: "Voice game · 2024",
    description: `You play as a character who must find the word matching the image in front of them — or fall and lose. The game is played entirely with your voice.

A short one-week project exploring an unusual control mechanic based on voice recognition.`,
    details: [
      { label: "Duration", value: "1 week" },
      { label: "Period", value: "2024" },
      { label: "Engine", value: "Unity" },
      { label: "Role", value: "Game Design" },
      { label: "Control", value: "Voice only" },
    ],
    linkLabel: "View on itch.io",
  },
};

const isEN = document.documentElement.lang === 'en';
const projectData = isEN ? PROJECTS_EN : PROJECTS;
