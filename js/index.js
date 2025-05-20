// 모바일 여부 확인 (터치 포인트와 화면 크기 모두 고려)
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
const isSmallScreen = window.innerWidth <= 768; // 768px 이하를 모바일로 간주
const isMobile = isTouchDevice || isSmallScreen;

// 버튼 요소 선택
const startButton = document.querySelector('.start-button');
const aboutButton = document.querySelector('.about-button');
const mainButton = document.querySelector('.main-button');

// 페이지 이동 이벤트 설정
if (startButton) {
  startButton.addEventListener('click', () => {
    window.location.href = './test.html';
  });
}

aboutButton.addEventListener('click', () => {
  window.location.href = './about.html';
});

mainButton.addEventListener('click', () => {
  window.location.href = './index.html';
});

// 모바일 모달 관련 기능
const $mobileModalOverlay = $('.mobile-modal-overlay');
const $aboutButton = $('.about-button');
const $mainButton = $('.main-button');
const $mobileModalOpenButton = $('.mobile-modal-open-button');
const $mobileModalCloseButton = $('.mobile-modal-close-button');
const $mobileModalMainButton = $('.mobile-modal-main-button');
const $mobileModalAboutButton = $('.mobile-modal-about-button');

if (isMobile) {
  // 모바일 환경 설정
  $aboutButton.hide();
  $mainButton.hide();
  $mobileModalOpenButton.show();

  // 모달 열기
  $mobileModalOpenButton.on('click', () => {
    $mobileModalCloseButton.show();
    $mobileModalMainButton.show();
    $mobileModalAboutButton.show();
    $mobileModalOverlay.fadeIn(); // 오버레이 전체 보여줌
  });

  // 모달 닫기 (닫기 버튼)
  $mobileModalCloseButton.on('click', () => {
    $mobileModalOverlay.fadeOut();
  });
  // 오버레이 클릭 시 모달 닫기 (모달 내부 클릭은 무시)
  $mobileModalOverlay.on('click', (e) => {
    if (!$(e.target).closest('.mobile-modal').length) {
      $mobileModalOverlay.fadeOut();
    }
  });
  // 모달 내 버튼 이벤트
  $mobileModalMainButton.on('click', () => {
    window.location.href = './index.html';
  });

  $mobileModalAboutButton.on('click', () => {
    window.location.href = './about.html';
  });
} else {
  // 데스크톱 환경 설정
  $mobileModalOpenButton.hide();
}

// 화면 크기 변경 시 모바일 여부 재확인
window.addEventListener('resize', () => {
  const newIsSmallScreen = window.innerWidth <= 768;
  const newIsMobile = isTouchDevice || newIsSmallScreen;

  // 모바일 상태가 변경된 경우에만 UI 업데이트
  if (newIsMobile !== isMobile) {
    location.reload(); // 간단하게 페이지 새로고침으로 처리
  }
});
