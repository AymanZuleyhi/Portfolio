import { allProjects } from "./elements.js";
import { listOfTechnologies, listOfProjects } from "./general.js";

const getSingleProjectImage = (name) => {
  const image = listOfTechnologies.find(
    (technology) => technology.name === name
  );

  return image;
};

const generateAllProjects = () => {
  listOfProjects.map((project, i) => {
    // Create all of the required elements for each project.
    const projectContainer = document.createElement("div");
    const projectHeadline = document.createElement("div");
    const projectInformation = document.createElement("div");
    const projectTechnologies = document.createElement("div");
    const projectControls = document.createElement("div");
    const video = document.createElement("video");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const codeLink = document.createElement("a");
    const liveLink = document.createElement("a");

    //Buttons
    const gitHubButton = document.createElement("button");
    const gitHubImage = document.createElement("img");
    const gitHubButtonText = document.createElement("p");
    const liveViewButton = document.createElement("button");
    const liveIcon = document.createElement("i");
    const liveButtonText = document.createElement("p");

    // Front-end, or back-end selection
    const categorySelector = document.createElement("div");
    const frontEndNavigation = document.createElement("a");
    const backEndNavigation = document.createElement("a");
    const frontEndText = document.createElement("p");
    const backEndText = document.createElement("p");

    // Add the classes.
    projectContainer.classList.add("project");
    projectHeadline.classList.add("project-headline");
    projectInformation.classList.add("project-information");
    projectTechnologies.classList.add("project-technologies");
    projectControls.classList.add("project-controls");
    gitHubButton.classList.add("github-button");

    categorySelector.appendChild(frontEndText);
    categorySelector.appendChild(backEndText);
    video.src = project.video;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playInline = true;
    video.playbackRate = 2.0;
    img.src = project.logo;
    h3.textContent = project.h1;
    p.textContent = project.description;
    gitHubImage.src = "https://cdn.simpleicons.org/github/000000";
    gitHubButtonText.textContent = "Code";

    const toggleCategory = () => {
      const styles = window.getComputedStyle(categorySelector);

      categorySelector.style.display =
        styles.display === "grid" ? "none" : "grid";
    };

    gitHubButton.onclick = toggleCategory;
    liveIcon.classList.add("fa-solid", "fa-arrow-up-right-from-square");
    liveButtonText.textContent = "Live";
    codeLink.target = "_blank";
    liveLink.href = project.urls.live;
    liveLink.target = "-blank";

    // Create the technology images.
    project.technologies.map((technology) => {
      const img = document.createElement("img");

      const imageInfo = getSingleProjectImage(technology);

      img.src = imageInfo.src;
      img.alt = imageInfo.alt;

      projectTechnologies.appendChild(img);
    });

    // Append the elements.
    projectHeadline.appendChild(img);
    projectHeadline.appendChild(h3);

    projectInformation.appendChild(projectHeadline);
    projectInformation.appendChild(p);
    projectInformation.appendChild(projectTechnologies);

    // Don't show the "Code" button if the website is build on Shopify, or Wix.
    if (project.urls.code) {
      if (!project.urls.code.backEnd.length) {
        // If the project doesn't have a back-end.
        codeLink.href = project.urls.code.frontEnd;
      }

      if (project.urls.code.backEnd.length !== 0) {
        // If the project has a back-end.
        frontEndText.textContent = "Front-end";
        backEndText.textContent = "Back-end";

        frontEndNavigation.appendChild(frontEndText);
        backEndNavigation.appendChild(backEndText);

        frontEndNavigation.href = project.urls.code.frontEnd;
        backEndNavigation.href = project.urls.code.backEnd;

        frontEndNavigation.target = "-blank";
        backEndNavigation.target = "_blank";

        categorySelector.appendChild(frontEndNavigation);
        categorySelector.appendChild(backEndNavigation);
        categorySelector.classList.add("category-selector");

        gitHubButton.appendChild(categorySelector);
      }

      gitHubButton.appendChild(gitHubImage);
      gitHubButton.appendChild(gitHubButtonText);
      codeLink.appendChild(gitHubButton);
      projectControls.appendChild(codeLink);
    }

    // Don't show the live button.
    if (project.urls.live !== "") {
      liveViewButton.appendChild(liveIcon);
      liveViewButton.appendChild(liveButtonText);
      liveLink.appendChild(liveViewButton);
      projectControls.appendChild(liveLink);
    }

    projectInformation.appendChild(projectControls);

    if (i % 2 === 0) {
      projectContainer.appendChild(video);
      projectContainer.appendChild(projectInformation);
    } else {
      projectContainer.appendChild(projectInformation);
      projectContainer.appendChild(video);
    }

    allProjects.appendChild(projectContainer);
  });
};

generateAllProjects();
