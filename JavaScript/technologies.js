import { iconsContainer } from "./elements.js";
import { listOfTechnologies } from "./general.js";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "NodeJs",
  "Express",
  "MongoDB",
  "Vercel",
  "Render",
];

const generateListOfTechnologiesForHero = () => {
  listOfTechnologies.map((technology) => {
    if (technologies.includes(technology.name)) {
      const img = document.createElement("img");

      img.src = technology.src;
      img.alt = technology.name;

      iconsContainer.appendChild(img);
    }
  });
};

generateListOfTechnologiesForHero();
