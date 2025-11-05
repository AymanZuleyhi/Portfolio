const listOfTechnologies = [
  {
    name: "HTML",
    src: "https://cdn.simpleicons.org/html5/E34F26",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    name: "React",
    src: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "NodeJs",
    src: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "Express",
    src: "https://cdn.simpleicons.org/express/000000",
  },
  {
    name: "MongoDB",
    src: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  {
    name: "Shopify",
    src: "https://cdn.simpleicons.org/shopify/7AB55C",
  },
  {
    name: "Wix",
    src: "https://cdn.simpleicons.org/wix/000000",
  },
  {
    name: "Vercel",
    src: "https://cdn.simpleicons.org/vercel/000000",
  },
  {
    name: "Render",
    src: "https://cdn.simpleicons.org/render",
  },
  {
    name: "Firebase",
    src: "https://cdn.simpleicons.org/firebase/DD2C00",
  },
];

const listOfProjects = [
  {
    video:
      "https://res.cloudinary.com/dhzq0yjf2/video/upload/v1762327449/Video_ru3xsr.webm",
    logo: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762327447/Pokedex_ext9gr.png",
    h1: "Pokedex",
    description:
      "A modern, user-friendly Pokédex that lets users explore and search for Pokémon, view detailed stats, download images and information, and even save their favorite Pokémon for quick access.",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    urls: {
      code: {
        frontEnd: "https://github.com/AymanZuleyhi/Pokedex",
        backEnd: "",
      },
      live: "https://pokedex-seven-red.vercel.app/",
    },
  },
  {
    video:
      "https://res.cloudinary.com/dhzq0yjf2/video/upload/v1762327433/Video_fbtdfg.webm",
    logo: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762327431/Crunchy_bzks90.png",
    h1: "Crunchy",
    description:
      "A full-stack recipe application where users can create accounts, upload their favorite recipes, and easily filter through a diverse collection to find new culinary ideas.",
    technologies: [
      "React",
      "CSS",
      "NodeJs",
      "Express",
      "MongoDB",
      "Vercel",
      "Render",
    ],
    urls: {
      code: {
        frontEnd: "https://github.com/AymanZuleyhi/Crunchy",
        backEnd: "https://github.com/AymanZuleyhi/Crunchy-server",
      },
      live: "https://crunchy-two.vercel.app/",
    },
  },
  {
    video:
      "https://res.cloudinary.com/dhzq0yjf2/video/upload/v1762327339/Video_sixz6y.webm",
    logo: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762327336/AdelineSportswear_lwoqgd.png",
    h1: "Adeline Sportswear",
    description:
      "A clothing brand focused on activewear. This website makes it easy for customers to browse, find, and buy sportswear items, with email marketing managed through Klaviyo.",
    technologies: ["Shopify"],
    urls: {
      live: "https://adelinesportswear.com/",
    },
  },
  {
    video:
      "https://res.cloudinary.com/dhzq0yjf2/video/upload/v1762327376/Video_beby8v.webm",
    logo: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762327374/Adhominem_p4fufb.png",
    h1: "Adhominem",
    description:
      "Developed a custom search bar to enable users to easily filter and browse through all available products on the site.",
    technologies: ["Wix", "HTML", "CSS", "JavaScript"],
    urls: {
      code: "",
      live: "https://www.adhominem.co/",
    },
  },
  {
    video:
      "https://res.cloudinary.com/dhzq0yjf2/video/upload/v1762327418/Video_lnbgrl.webm",
    logo: "https://res.cloudinary.com/dhzq0yjf2/image/upload/v1762327413/BeatGrabber_wsdi3e.png",
    h1: "BeatGrabber",
    description:
      "Developed a tool to convert audio from YouTube and SoundCloud to MP3 format, allowing for quick and easy personal downloads. The tool performs direct, API-free conversions using FFmpeg and yt-dlp.",
    technologies: ["HTML", "CSS", "JavaScript", "NodeJs", "Express"],
    urls: {
      code: {
        frontEnd: "https://github.com/AymanZuleyhi/BeatGrabber",
        backEnd: "https://github.com/AymanZuleyhi/BeatGrabber-server",
      },
      live: "",
    },
  },
];

export { listOfTechnologies, listOfProjects };
