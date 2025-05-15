import { resultArr, mbtiDescriptions } from './db.js';
import { PATH } from './path.js';

const heroTitle = document.body.querySelector('.heroTitle');
const heroDescription = document.body.querySelector('.heroDescription');
const heroCharacteristics = document.body.querySelector('.heroCharacteristics');
const heroImg1 = document.body.querySelector('.heroImg1');
const heroImg2 = document.body.querySelector('.heroImg2');
const heroImg3 = document.body.querySelector('.heroImg3');

const restartButton = document.body.querySelector('.restartButton');
const shareButton = document.body.querySelector('.shareButton');

const secondStyleSubtitle = document.body.querySelector('.secondStyleSubtitle');
const secondStyleDescription = document.body.querySelector(
  '.secondStyleDescription'
);
const secondStyleCharacteristics = document.body.querySelector(
  '.secondStyleCharacteristics'
);
const secondStyleImg1 = document.body.querySelector('.secondStyleImg1');
const secondStyleImg2 = document.body.querySelector('.secondStyleImg2');
const secondStyleImg3 = document.body.querySelector('.secondStyleImg3');

const mbtiSubtitle1 = document.body.querySelector('.mbtiSubtitle1');
const mbtiSubtitle2 = document.body.querySelector('.mbtiSubtitle2');
const mbtiImg1 = document.body.querySelector('.mbtiImg1');
const mbtiImg2 = document.body.querySelector('.mbtiImg2');
const mbtiDescription1 = document.body.querySelector('.mbtiDescription1');
const mbtiDescription2 = document.body.querySelector('.mbtiDescription2');

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
heroImg1.src = firstRecomendStyle.img[0];
heroImg2.src = firstRecomendStyle.img[1];
heroImg3.src = firstRecomendStyle.img[2];

secondStyleSubtitle.innerText = secondRecomendStyle.title;
secondStyleImg1.src = '../img/' + secondRecomendStyle.img[0];
secondStyleImg2.src = '../img/' + secondRecomendStyle.img[1];
secondStyleImg3.src = '../img/' + secondRecomendStyle.img[2];
secondStyleDescription.innerText = secondRecomendStyle.description;
secondStyleCharacteristics.innerText = secondRecomendStyle.characteristics;

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

restartButton.addEventListener('click', () => {
  window.location.href = `${PATH.INDEX}`;
});
shareButton.addEventListener('click', () => {
  navigator.clipboard
    .writeText(
      `https://csweb.kyonggi.ac.kr/users/202211461/page/result-${firstRecomendStyle.key}.html?data=${encodedData}`
    )
    .then(() => {
      alert('링크가 복사되었습니다!');
    });
});
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,
    spaceBetween: 100,
    initialSlide: 1,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
      initialSlide: 1,
      scale: 0.85,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
