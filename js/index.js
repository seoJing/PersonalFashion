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
  // 모바일 모드일 때
  $aboutButton.hide();
  $mainButton.hide();
  $mobileModalOpenButton.show();

  // 모바일 모달 열기 버튼 클릭 이벤트
  $mobileModalOpenButton.on('click', function () {
    $mobileModalCloseButton.show();
    $mobileModalMainButton.show();
    $mobileModalAboutButton.show();
    $mobileModalDiv.slideDown();
  });

  // 모바일 모달 닫기 버튼 클릭 이벤트
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
  // PC 모드일 때
  $mobileModalOpenButton.hide();
}
