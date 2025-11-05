import { copyButton, hoverDiv, copySuccesfull, userEmail } from "./elements.js";

/* ---------- Copy the email to the clipboard ---------- */
const copyEmailToClipboard = () => {
  const email = "ayman.a.zulehi@gmail.com";

  navigator.clipboard.writeText(email);

  copyButton.style.background = "grey";
  copyButton.style.cursor = "not-allowed";
  hoverDiv.style.display = "none";
  copySuccesfull.style.display = "flex";
  userEmail.style.backgroundColor = "rgb(69, 115, 242)";
  userEmail.style.color = "white";

  setTimeout(() => {
    copyButton.style.background =
      "linear-gradient(to bottom, rgb(128, 206, 255), rgb(49, 147, 208))";
    copyButton.style.cursor = "pointer";
    copySuccesfull.style.display = "none";
    hoverDiv.style.display = "";
    userEmail.style.backgroundColor = "";
    userEmail.style.color = "";
  }, 2000);
};

copyButton.addEventListener("click", copyEmailToClipboard);
