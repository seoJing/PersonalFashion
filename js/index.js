const startButton = document.body.querySelector('.startButton');
const aboutButton = document.body.querySelector('.aboutButton');
const mainButton = document.body.querySelector('.mainButton');

const isMobile = window.matchMedia('(pointer: coarse)').matches;
if (startButton != null) {
  startButton.addEventListener('click', () => {
    window.location.href = `../test.html`;
  });
}

aboutButton.addEventListener('click', () => {
  window.location.href = `../about.html`;
});
mainButton.addEventListener('click', () => {
  window.location.href = `../index.html`;
});

const $mobileModalDiv = $('.mobileModalDiv');
const $aboutButton = $('.aboutButton');
const $mainButton = $('.mainButton');
const $mobileModalOpenButton = $('.mobileModalOpenButton');
const $mobileModalCloseButton = $('.mobileModalCloseButton');
const $mobileModalMainButton = $('.mobileModalMainButton');
const $mobileModalAboutButton = $('.mobileModalAboutButton');

$mobileModalDiv.hide();

if (isMobile) {
  $aboutButton.hide();
  $mainButton.hide();
  $mobileModalOpenButton.show();

  $mobileModalOpenButton.on('click', function () {
    $mobileModalCloseButton.show();
    $mobileModalMainButton.show();
    $mobileModalAboutButton.show();
    $mobileModalDiv.slideDown();
  });

  $mobileModalCloseButton.on('click', function () {
    $mobileModalCloseButton.hide();
    $mobileModalMainButton.hide();
    $mobileModalAboutButton.hide();
    $mobileModalDiv.slideUp();
  });

  $mobileModalMainButton.on('click', function () {
    window.location.href = `../index.html`;
  });
  $mobileModalAboutButton.on('click', function () {
    window.location.href = `../about.html`;
  });
} else {
  $mobileModalOpenButton.hide();
}
//예시ㅇ에시 이빈다
//예시ㅇ에시 이빈다
