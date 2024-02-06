import demonsRespiteThumbnail from "../../assets/demons-respite.PNG";

export const PROJECTS = [
  {
    title: "Demon's Respite",
    currentStatus: undefined,
    description: {
      text: "An 8-bit arcade style game made using JS canvas. This was my first official software development project which helped solidify a ton of basic coding concepts while working with new languages and tools. The entire app is powered by a 'SceneManager' class which works alongside a hierarchy of classes that each handle their own portion of gameplay. This project taught me core fundamentals of web development, the benefits of having class hierarchies, and the importance of file modularity.",
      keyWords: [
        "arcade",
        "game",
        "canvas.",
        "solidify",
        "basic",
        "concepts",
        "taught",
        "fundamentals",
        "development,",
        "benefits",
        "hierarchies,",
        "importance",
        "modularity.",
      ],
    },
    skillSet: ["JavaScript", "HTML", "CSS", "Git", "First Project"],
    thumbnail: demonsRespiteThumbnail,
    gitUrl: "https://github.com/Joseph-Galante/Demons-Respite",
    appUrl: "https://joseph-galante.github.io/Demons-Respite/",
  },
  {
    title: "Component Library",
    currentStatus: "Upcoming",
    description: {
      text: "An entirely frontend application showcasing the various components used throughout my other projects. As such, this library will always be expanding along with my experience as a software developer. Also included, are some example pages and layouts for common use cases for the components.",
      keyWords: [
        "frontend",
        "showcasing",
        "components",
        "always",
        "expanding",
        "included,",
        "example",
        "layouts",
      ],
    },
    skillSet: ["React", "JavaScript", "HTML", "CSS", "Git", "AWS"],
    thumbnail: undefined,
    gitUrl: "https://github.com/Joseph-Galante/Component-Library",
    appUrl: undefined,
  },
];
