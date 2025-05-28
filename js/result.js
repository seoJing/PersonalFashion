import { resultArr } from './db.js';
import { isMobile } from './index.js'; // isMobile 변수 그대로 사용

// DOM 요소 선택
const heroSubtitle = document.querySelector('.hero-subtitle');
const heroDescription = document.querySelector('.hero-description');

const heroImageSrc1 = document.querySelector('.hero-img1 img');
const heroImageSrc2 = document.querySelector('.hero-img2 img');
const heroImageSrc3 = document.querySelector('.hero-img3 img');


const restartButton = document.querySelector('.restart-button');
const shareButton = document.querySelector('.share-button');

const secondStyleSubtitle = document.querySelector('.second-style-subtitle');
const secondStyleDescription = document.querySelector(
  '.second-style-description'
);

const secondStyleImageSrc1 = document.querySelector('.second-style-img1 img'); 
const secondStyleImageSrc2 = document.querySelector('.second-style-img2 img'); 
const secondStyleImageSrc3 = document.querySelector('.second-style-img3 img'); 


const youtubeTitle = document.querySelector('.youtube-title');
const youtubeName = document.querySelector('.youtube-name');
const youtubeVideo = document.querySelector('.youtube-video');
const youtubeIcon = document.querySelector('.youtube-icon');

// URL 파라미터 파싱 (수정 없음)
function parseUrlData() {
  const urlParams = new URLSearchParams(window.location.search);
  const encodedData = urlParams.get('data');

  if (!encodedData) {
    console.error('URL 파라미터에 데이터가 없습니다.');
    return null;
  }

  try {
    return JSON.parse(atob(encodedData));
  } catch (error) {
    console.error('데이터 파싱 오류:', error);
    return null;
  }
}

// 결과 데이터 로드 및 표시 (수정 없음)
function loadResultData() {
  const decodeData = parseUrlData();

  if (!decodeData) return;

  const firstRecomendStyle = resultArr.find(
    (item) => item.key === decodeData[0][0]
  );

  const secondRecomendStyle = resultArr.find(
    (item) => item.key === decodeData[1][0]
  );

  if (!firstRecomendStyle || !secondRecomendStyle) {
    console.error('스타일 데이터를 찾을 수 없습니다.');
    return;
  }

  setFirstStyleContent(firstRecomendStyle);
  setSecondStyleContent(secondRecomendStyle);
  setYoutubeContent(firstRecomendStyle);
  setupButtons(firstRecomendStyle, decodeData);
}


function setFirstStyleContent(style) {
  document.querySelector('.hero-title').innerText = '당신과 어울리는 스타일은?';
  heroSubtitle.innerText = style.title;
  heroDescription.innerText = style.description;

  heroImageSrc1.src = style.img[0];
  heroImageSrc2.src = style.img[1];
  heroImageSrc3.src = style.img[2];
}

function setSecondStyleContent(style) {
  document.querySelector('.second-style-title').innerText = '이런 스타일은 어때요?';
  secondStyleSubtitle.innerText = style.title;
  secondStyleImageSrc1.src = style.img[0];
  secondStyleImageSrc2.src = style.img[1];
  secondStyleImageSrc3.src = style.img[2];
  secondStyleDescription.innerText = style.description;
}

// 유튜브 콘텐츠 설정
function setYoutubeContent(style) {
  youtubeTitle.innerText = `${style.title}과 관련된 유튜브`;
  youtubeName.innerText = style.youtube.name;
  youtubeVideo.src = style.youtube.src;
  youtubeIcon.src = style.youtube.icon;
  youtubeIcon.addEventListener('click', () => {
    window.open(style.youtube.link);
  });
}

// 버튼 이벤트 설정
function setupButtons(style, data) {
  // 다시하기 버튼
  restartButton.addEventListener('click', () => {
    window.location.href = './index.html';
  });

  // 공유하기 버튼
  shareButton.addEventListener('click', () => {
    const shareUrl = `https://csweb.kyonggi.ac.kr/users/202211461/page/result-${
      style.key
    }.html?data=${btoa(JSON.stringify(data))}`;

    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        alert('링크가 복사되었습니다!');
      })
      .catch((err) => {
        console.error('클립보드 복사 실패:', err);
        alert('링크 복사에 실패했습니다.');
      });
  });
}

function moblieRandering() {
  const mainWrapper = document.getElementById('main-wrapper');
  const mainSlideFirst = document.getElementById('main-slide-first');
  const mainSlideSecond = document.getElementById('main-slide-second');
  const mainSlideYoutube = document.getElementById('main-slide-youtube');
  const heroBox = document.querySelector('.hero-box');

  const swiperContainer = document.getElementById('main-container');
  if (swiperContainer) {
    swiperContainer.classList.remove('swiper-container');
    swiperContainer.classList.remove('swiper-initialized');
    swiperContainer.classList.remove('swiper-horizontal');
  }

  // 모바일에서 슬라이드 순서를 1-2-3으로 재배치
  if (mainWrapper && mainSlideFirst && mainSlideSecond && mainSlideYoutube) {
    mainWrapper.innerHTML = '';
    mainWrapper.appendChild(mainSlideFirst); 
    mainWrapper.appendChild(mainSlideSecond);
    mainWrapper.appendChild(mainSlideYoutube);
  }

  const mainSection = document.getElementById('main-section');
  if (mainSection && heroBox) {
    mainSection.appendChild(heroBox);
  }
}

// 스위퍼 초기화
function initSwiper() {
  const mainSwiper = new Swiper('#main-container', {
    centeredSlides: true,
    slideToClickedSlide: true,
    initialSlide: 1,
    slidesPerView: 3,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
      scale: 0.85,
    },
  });
}

// 초기화 및 실행
document.addEventListener('DOMContentLoaded', () => {
  loadResultData();
  if (isMobile) moblieRandering();
  else initSwiper();
});