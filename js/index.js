const startButton = document.body.querySelector('.startButton');
const toAboutButton = document.body.querySelector('.aboutButton');
const toMainButton = document.body.querySelector('.mainButton');

if (startButton != null) {
  startButton.addEventListener('click', () => {
    window.location.href = `../test.html`;
  });
}

toAboutButton.addEventListener('click', () => {
  window.location.href = `../about.html`;
});
toMainButton.addEventListener('click', () => {
  qd;
  window.location.href = `../index.html`;
});
