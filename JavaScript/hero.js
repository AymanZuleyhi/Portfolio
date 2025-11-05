import { heroButton, contact } from "./elements.js";

const navigateToContactSection = () => {
  contact.scrollIntoView();
};

heroButton.addEventListener("click", navigateToContactSection);
