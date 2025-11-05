import {
  hero,
  about,
  contact,
  PROJECTS,
  desktopMenu,
  mobileMenu,
  hamburgerMenu,
  hamburgerMenuButton,
} from "./elements.js";

const navOptions = ["Home", "About", "Projects", "Contact"];
const sections = [hero, about, contact, PROJECTS];

/* ------------------------- Handle active item ------------------------- */

// Shared callback for both observers
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const section = entry.target;
      const id = section.className.toUpperCase(); // assuming nav text matches class

      let item;

      switch (id) {
        case "HERO": {
          item = "Home";
          break;
        }
        case "ABOUT": {
          item = "About";
          break;
        }
        case "PROJECTS": {
          item = "Projects";
          break;
        }
        case "CONTACT": {
          item = "Contact";
          break;
        }
      }

      const menuItems = Array.from(desktopMenu.children);

      menuItems.map((eachItem) => {
        eachItem.textContent === item
          ? (eachItem.style.fontWeight = "Bold")
          : (eachItem.style.fontWeight = "normal");
      });
    }
  });
};

// Create two observers with different thresholds
const observerProjects = new IntersectionObserver(callback, { threshold: 0.2 });
const observerOthers = new IntersectionObserver(callback, { threshold: 0.3 });

// Observe each section with the correct observer
sections.forEach((section) => {
  if (section === PROJECTS) {
    observerProjects.observe(section);
  } else {
    observerOthers.observe(section);
  }
});

/* ------------------------- Navigation ------------------------- */
const handleNavigation = (option) => {
  let target;

  switch (option) {
    case "Home": {
      target = hero;
      break;
    }
    case "About": {
      target = about;
      break;
    }
    case "Projects": {
      target = PROJECTS;
      break;
    }
    case "Contact": {
      target = contact;
      break;
    }
  }

  target.scrollIntoView({ block: "start" });

  mobileMenu.style.display = "none";
  hamburgerMenu.className = "";
  hamburgerMenu.classList.add("fa-solid", "fa-bars");
  hamburgerMenuButton.className = "hamburger-menu_button";
};

/* ------------------------- Create the menu ------------------------- */
const createNavMenu = () => {
  navOptions.map((option) => {
    const desktopP = document.createElement("p");
    const mobileP = document.createElement("p");

    desktopP.textContent = option;
    desktopP.onclick = (e) => handleNavigation(option);
    mobileP.textContent = option;
    mobileP.onclick = (e) => handleNavigation(option);

    desktopMenu.appendChild(desktopP);
    mobileMenu.appendChild(mobileP);
  });
};

createNavMenu();

/* ------------------------- Toggle the mobile menu ------------------------- */
hamburgerMenu.classList.add("fa-solid", "fa-bars");

const toggleMobileMenu = () => {
  if (hamburgerMenu.classList[1] === "fa-bars") {
    // Show
    hamburgerMenu.className = "";
    hamburgerMenu.classList.add("fa-solid", "fa-xmark");
    hamburgerMenuButton.classList.add("active");
    mobileMenu.style.display = "flex";
  } else {
    // Hide
    hamburgerMenu.className = "";
    hamburgerMenu.classList.add("fa-solid", "fa-bars");
    mobileMenu.style.display = "none";
    hamburgerMenuButton.className = "hamburger-menu_button";
  }
};

hamburgerMenuButton.addEventListener("click", toggleMobileMenu);
