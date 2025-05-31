// 모바일 여부 확인 함수
const checkIsMobile = () => window.innerWidth <= 959;
export let isMobile = checkIsMobile();

// 버튼 요소 선택
const startButton = document.querySelector('.start-button');
const aboutButton = document.querySelector('.about-button');
const mainButton = document.querySelector('.main-button');

// 페이지 이동 이벤트 설정 (한 번만 설정)
if (startButton) {
  startButton.addEventListener('click', () => {
    window.location.href =
      'http://csweb.kyonggi.ac.kr/users/202211461/pages/test.html';
  });
}

if (aboutButton) {
  aboutButton.addEventListener('click', () => {
    window.location.href =
      'http://csweb.kyonggi.ac.kr/users/202211461/pages/about.html';
  });
}

if (mainButton) {
  mainButton.addEventListener('click', () => {
    window.location.href =
      'http://csweb.kyonggi.ac.kr/users/202211461/index.html';
  });
}

// jQuery 요소 선택
const $mobileModalOverlay = $('.mobile-modal-overlay');
const $aboutButton = $('.about-button');
const $mainButton = $('.main-button');
const $mobileModalOpenButton = $('.mobile-modal-open-button');
const $mobileModalCloseButton = $('.mobile-modal-close-button');
const $mobileModalMainButton = $('.mobile-modal-main-button');
const $mobileModalAboutButton = $('.mobile-modal-about-button');

// 모바일 모달 이벤트 (한 번만 설정)
let modalEventsSet = false;

const setupMobileModalEvents = () => {
  if (modalEventsSet) return;

  // 모달 열기
  $mobileModalOpenButton.on('click', () => {
    $mobileModalCloseButton.show();
    $mobileModalMainButton.show();
    $mobileModalAboutButton.show();
    $mobileModalOverlay.fadeIn();
  });

  // 모달 닫기 (닫기 버튼)
  $mobileModalCloseButton.on('click', () => {
    $mobileModalOverlay.fadeOut();
  });

  // 오버레이 클릭 시 모달 닫기
  $mobileModalOverlay.on('click', (e) => {
    if (!$(e.target).closest('.mobile-modal').length) {
      $mobileModalOverlay.fadeOut();
    }
  });

  // 모달 내 버튼 이벤트
  $mobileModalMainButton.on('click', () => {
    window.location.href =
      'http://csweb.kyonggi.ac.kr/users/202211461/index.html';
  });

  $mobileModalAboutButton.on('click', () => {
    window.location.href =
      'http://csweb.kyonggi.ac.kr/users/202211461/pages/about.html';
  });

  modalEventsSet = true;
};

// UI 업데이트 함수
const updateUI = () => {
  isMobile = checkIsMobile();
  if (isMobile) {
    // 모바일 환경 설정
    $aboutButton.hide();
    $mainButton.hide();
    $mobileModalOpenButton.show();

    // 모바일 모달 이벤트 설정 (처음 한 번만)
    setupMobileModalEvents();
  } else {
    // 데스크톱 환경 설정
    $aboutButton.show();
    $mainButton.show();
    $mobileModalOpenButton.hide();

    // 모바일 모달이 열려있다면 닫기
    $mobileModalOverlay.hide();
  }
};

updateUI();

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateUI();
  }, 100);
});

window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    updateUI();
  }, 200);
});
