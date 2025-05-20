const startButton = document.body.querySelector('.startButton');
const toAboutButton = document.body.querySelector('.aboutButton');
const toMainButton = document.body.querySelector('.mainButton');

if (startButton != null) {
  startButton.addEventListener('click', () => {
    window.location.href = `${window.location.origin}/test.html`;
  });
}

toAboutButton.addEventListener('click', () => {
  window.location.href = `${window.location.origin}/about.html`;
});
toMainButton.addEventListener('click', () => {
  window.location.href = `${window.location.origin}/index.html`;
});
