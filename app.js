const headerText = document.querySelector(".header-text");

window.onscroll = () => {
  headerText.style.transform = `translateY(${window.scrollY * 0.01}px)`;
};

console.log("Made with love by Rahul Ketan Modi");
