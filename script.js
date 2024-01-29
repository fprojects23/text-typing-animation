const text = document.querySelector(".last-text");

const moreText = () => {
  setTimeout(() => {
    text.textContent = "Programmer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Content Creator";
  }, 5000);
};

moreText();
setInterval(moreText, 5000);
