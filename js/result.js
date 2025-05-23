import { resultArr } from './db.js';
import { isMobile } from './index.js';

// DOM 요소 선택
const heroTitle = document.querySelector('.hero-title');
const heroDescription = document.querySelector('.hero-description');
const heroCharacteristics = document.querySelector('.hero-characteristics');
const heroImg1 = document.querySelector('.hero-img1');
const heroImg2 = document.querySelector('.hero-img2');
const heroImg3 = document.querySelector('.hero-img3');

const restartButton = document.querySelector('.restart-button');
const shareButton = document.querySelector('.share-button');

const secondStyleSubtitle = document.querySelector('.second-style-subtitle');
const secondStyleDescription = document.querySelector(
  '.second-style-description'
);
const secondStyleCharacteristics = document.querySelector(
  '.second-style-characteristics'
);
const secondStyleImg1 = document.querySelector('.second-style-img1');
const secondStyleImg2 = document.querySelector('.second-style-img2');
const secondStyleImg3 = document.querySelector('.second-style-img3');

const youtubeTitle = document.querySelector('.youtube-title');
const youtubeName = document.querySelector('.youtube-name');
const youtubeVideo = document.querySelector('.youtube-video');
const youtubeIcon = document.querySelector('.youtube-icon');

// URL 파라미터 파싱
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

// 결과 데이터 로드 및 표시
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

// 첫 번째 추천 스타일 콘텐츠 설정
function setFirstStyleContent(style) {
  heroTitle.innerText = style.title;
  heroDescription.innerText = style.description;

  const characteristicsList = document.createElement('ul');
  style.characteristics.forEach((characteristic) => {
    const listItem = document.createElement('li');
    listItem.textContent = characteristic;
    characteristicsList.appendChild(listItem);
  });
  heroCharacteristics.appendChild(characteristicsList);

  heroImg1.src = style.img[0];
  heroImg2.src = style.img[1];
  heroImg3.src = style.img[2];
}

// 두 번째 추천 스타일 콘텐츠 설정
function setSecondStyleContent(style) {
  secondStyleSubtitle.innerText = style.title;
  secondStyleImg1.src = '../img/' + style.img[0];
  secondStyleImg2.src = '../img/' + style.img[1];
  secondStyleImg3.src = '../img/' + style.img[2];
  secondStyleDescription.innerText = style.description;
  secondStyleCharacteristics.innerText = style.characteristics;
}

// 유튜브 콘텐츠 설정
function setYoutubeContent(style) {
  youtubeTitle.innerText = `${style.title}과 관련된 유튜브`;
  youtubeName.innerText = style.youtube.name;
  youtubeVideo.src = style.youtube.src;
  youtubeIcon.src = style.youtube.icon;
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

function moblieRandering() {}

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
