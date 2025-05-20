import { resultArr, mbtiDescriptions } from './db.js';

const heroTitle = document.body.querySelector('.heroTitle');
const heroDescription = document.body.querySelector('.heroDescription');
const heroCharacteristics = document.body.querySelector('.heroCharacteristics');
const heroImg1 = document.body.querySelector('.heroImg1');
const heroImg2 = document.body.querySelector('.heroImg2');
const heroImg3 = document.body.querySelector('.heroImg3');
const restartButton = document.body.querySelector('.restartButton');
const shareButton = document.body.querySelector('.shareButton');

const secondStyleSubtitle = document.body.querySelector('.secondStyleSubtitle');
const secondStyleImg = document.body.querySelector('.secondStyleImg');

const leastStyleSubtitle = document.body.querySelector('.leastStyleSubtitle');
const leastStyleImg = document.body.querySelector('.leastStyleImg');

const mbtiSubtitle1 = document.body.querySelector('.mbtiSubtitle1');
const mbtiSubtitle2 = document.body.querySelector('.mbtiSubtitle2');
const mbtiImg1 = document.body.querySelector('.mbtiImg1');
const mbtiImg2 = document.body.querySelector('.mbtiImg2');
const mbtiDescription1 = document.body.querySelector('.mbtiDescription1');
const mbtiDescription2 = document.body.querySelector('.mbtiDescription2');

const swiperWrapper = document.body.querySelector('.swiper-wrapper');
const swiperDiv = document.body.querySelector('.swiper');

// URL 파라미터 파싱
const urlParams = new URLSearchParams(window.location.search);
const encodedData = urlParams.get('data');
const decodeData = JSON.parse(atob(encodedData));
const firstRecomendStyle = resultArr.find(
  (item) => item.key === decodeData[0][0]
);
const secondRecomendStyle = resultArr.find(
  (item) => item.key === decodeData[1][0]
);
const leastRecomendStyle = resultArr.find(
  (item) => item.key === decodeData[decodeData.length - 1][0]
);

// 기본 정보 설정
heroTitle.innerText = firstRecomendStyle.title;
heroDescription.innerText = firstRecomendStyle.description;

const characteristicsList = document.createElement('ul');
firstRecomendStyle.characteristics.forEach((characteristic) => {
  const listItem = document.createElement('li');
  listItem.textContent = characteristic;
  characteristicsList.appendChild(listItem);
});
heroCharacteristics.appendChild(characteristicsList);

// 이미지 설정
heroImg1.src = '../img/' + firstRecomendStyle.celebrities[0] + '.png';
heroImg2.src = '../img/' + firstRecomendStyle.celebrities[1] + '.png';
heroImg3.src = '../img/' + firstRecomendStyle.celebrities[2] + '.png';

secondStyleSubtitle.innerText = secondRecomendStyle.title;
secondStyleImg.src = '../img/' + secondRecomendStyle.celebrities[0] + '.png';
leastStyleSubtitle.innerText = leastRecomendStyle.title;
leastStyleImg.src = '../img/' + leastRecomendStyle.celebrities[0] + '.png';
mbtiSubtitle1.innerText = firstRecomendStyle.mbti[0];
mbtiSubtitle2.innerText = firstRecomendStyle.mbti[1];
mbtiImg1.src =
  '../img/' + mbtiDescriptions[firstRecomendStyle.mbti[0]] + '.png';
mbtiImg2.src =
  '../img/' + mbtiDescriptions[firstRecomendStyle.mbti[1]] + '.png';
mbtiDescription1.innerText =
  mbtiDescriptions[firstRecomendStyle.mbti[0]].description;
mbtiDescription2.innerText =
  mbtiDescriptions[firstRecomendStyle.mbti[1]].description;

// 슬라이더 초기화 함수
async function initializeSwiper() {
  // 슬라이드 아이템 클래스 추가
  const slideItems = swiperWrapper.querySelectorAll('li');
  slideItems.forEach((item) => {
    item.classList.add('swiper-slide');
  });

  const pagination = document.createElement('div');
  pagination.className = 'swiper-pagination';

  swiperDiv.appendChild(pagination);

  // Swiper 초기화
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  return swiper;
}

// 추천 아이템 생성 함수
function createRecommendItem(item) {
  const li = document.createElement('li');
  li.className = 'swiper-slide';

  const image = document.createElement('img');
  const span = document.createElement('span');
  const a = document.createElement('a');

  image.src = item.img;
  image.alt = item.name;
  span.innerText = item.name;
  a.href = item.link;
  a.target = '_blank';

  a.appendChild(image);
  a.appendChild(span);
  li.appendChild(a);

  // 드래그 방지
  a.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });
  image.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });
  return li;
}

// 아이템 로드 및 슬라이더 초기화
async function loadRecommendItems() {
  // 추천 아이템 추가
  firstRecomendStyle.items.forEach((item) => {
    const itemElement = createRecommendItem(item);
    swiperWrapper.appendChild(itemElement);
  });

  // Swiper 초기화
  await initializeSwiper();
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', loadRecommendItems);

// 버튼 이벤트 리스너
restartButton.addEventListener('click', () => {
  window.location.href = `${window.location.origin}/index.html`;
});

shareButton.addEventListener('click', () => {
  navigator.clipboard
    .writeText(
      `${window.location.origin}/pages/result-${firstRecomendStyle.key}.html?data=${encodedData}`
    )
    .then(() => {
      alert('링크가 복사되었습니다!');
    });
});
