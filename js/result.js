import { resultArr } from './db.js';
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

const youtubeTitle = document.body.querySelector('.youtubeTitle');
const youtubeName = document.body.querySelector('.youtubeName');
const youtubeVideo = document.body.querySelectorAll('.youtubeVideo');
const youtubeIcon = document.body.querySelector('.youtubeIcon');

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

youtubeTitle.innerText = `${firstRecomendStyle.title}과 관련된 유튜브`;
youtubeName.innerText = firstRecomendStyle.youtube.name;
youtubeVideo.forEach((e, i) => {
  if (firstRecomendStyle.youtube.src[i]) {
    e.src = firstRecomendStyle.youtube.src[i];
  }
});
youtubeIcon.src = firstRecomendStyle.youtube.icon;

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
  // 먼저 중첩된 자식 스위퍼를 초기화
  const nestedSwiper = new Swiper('.swiper-container-nested', {
    pagination: {
      el: '.swiper-pagination-nested',
      clickable: true,
    },
    navigation: {
      nextEl: '.youtube-next',
      prevEl: '.youtube-prev',
    },
    slidesPerView: 1,
    loop: true,
  });

  // 그 다음 부모 스위퍼 초기화
  const mainSwiper = new Swiper('#main-container', {
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,
    initialSlide: 1,
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
});
