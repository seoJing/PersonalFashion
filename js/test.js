import { questionArr, personalityScores } from './db.js';
import { createElement } from './createElementHelper.js';

// DOM 요소 선택
const progressList = document.querySelector('.progress-list');
const swiperWrapper = document.querySelector('.swiper-wrapper');

// 상태 관리 변수
let selectedIndexes = Array(questionArr.length).fill(null);
let answeredCount = 0;
let isDone = false;
let recomendStyleArr;
let swiper;
let resultSlideCreated = false; // 결과 슬라이드 생성 여부 체크

// Swiper 초기화 함수
function initSwiper() {
  questionArr.forEach((item, index) => {
    const slide = createElement('div', ['swiper-slide'], '', `slide${index}`);

    const question = createElement('div', 'question');
    const questionNumberSpan = createElement(
      'h4',
      'question-number',
      'Q' + (index + 1)
    );
    const questionTextSpan = createElement(
      'span',
      'question-text',
      item.questionText
    );

    const selectButtonDiv = createElement('div', 'select-button-container');
    const selectButton1 = createElement(
      'button',
      ['select-button-1', `question${index}`],
      item.option[0].text
    );
    const selectButton2 = createElement(
      'button',
      ['select-button-2', `question${index}`],
      item.option[1].text
    );

    selectButton1.addEventListener('click', (e) =>
      handleButtonClick(0, e, index)
    );
    selectButton2.addEventListener('click', (e) =>
      handleButtonClick(1, e, index)
    );

    question.append(questionNumberSpan, questionTextSpan);
    selectButtonDiv.append(selectButton1, selectButton2);
    slide.append(question, selectButtonDiv);

    swiperWrapper.appendChild(slide);
  });

  // 초기 결과 슬라이드 생성 (미완료 상태)
  createResultSlide();

  swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,
    spaceBetween: 50,
    mousewheel: true,
    keyboard: {
      enabled: true,
    },
    on: {
      slideChange: function () {
        updateProgress();
      },
    },
  });
}

// 결과 페이지로 이동하는 슬라이드 생성 함수
function createResultSlide() {
  if (resultSlideCreated) return; // 이미 생성된 경우 리턴

  const toResultSlide = createElement(
    'div',
    ['swiper-slide'],
    '',
    `slideResult` // 고유한 ID 사용
  );
  const question = createElement('div', 'question');
  const questionNumberSpan = createElement(
    'h4',
    'question-number',
    '아직 모든 답변에 응답하지 않았어요'
  );
  const questionTextSpan = createElement(
    'span',
    'question-text',
    '모든 답변에 응답해야 결과를 볼 수 있어요'
  );

  question.append(questionNumberSpan, questionTextSpan);
  toResultSlide.append(question);
  swiperWrapper.appendChild(toResultSlide);

  resultSlideCreated = true;
}

// 결과 슬라이드 업데이트 함수
function updateResultSlide() {
  const resultSlide = document.querySelector('#slideResult');
  if (!resultSlide) return;

  const questionNumberSpan = resultSlide.querySelector('.question-number');
  const questionTextSpan = resultSlide.querySelector('.question-text');
  const question = resultSlide.querySelector('.question');

  // 기존 결과 버튼 제거 (있다면)
  const existingButton = resultSlide.querySelector('.result-button');
  if (existingButton) {
    existingButton.remove();
  }

  if (isDone) {
    questionNumberSpan.innerText = '모든 질문이 끝났어요';
    questionTextSpan.innerText = '무슨 결과가 나올까요?';

    const resultButton = createElement('button', 'result-button', '결과보기');
    resultButton.addEventListener('click', () => {
      // 성격 점수 계산
      calculatePersonalityScores();

      // 결과 정렬 및 페이지 이동
      recomendStyleArr = Object.entries(personalityScores).sort(
        (a, b) => b[1] - a[1]
      );

      // 결과 데이터를 URL 매개변수로 전달
      window.location.href = `https://csweb.kyonggi.ac.kr/users/202211461/page/result.html?data=${btoa(
        JSON.stringify(recomendStyleArr)
      )}`;
    });

    resultSlide.append(resultButton);
  }
}

// 성격 점수 계산 함수
function calculatePersonalityScores() {
  // 성격 점수 초기화
  Object.keys(personalityScores).forEach((key) => {
    personalityScores[key] = 0;
  });

  // 선택한 답변에 따라 점수 계산
  selectedIndexes.forEach((optionIndex, i) => {
    if (optionIndex !== null) {
      const impact = questionArr[i].option[optionIndex].impact;
      Object.keys(impact).forEach((key) => {
        personalityScores[key] += impact[key];
      });
    }
  });
}

// 버튼 클릭 처리 함수
function handleButtonClick(optionIndex, e, slideIndex) {
  // 선택한 버튼 스타일 변경
  e.target.classList.add('selected');

  // 다른 버튼 선택 해제
  if (e.target.nextElementSibling) {
    e.target.nextElementSibling.classList.remove('selected');
  } else if (e.target.previousElementSibling) {
    e.target.previousElementSibling.classList.remove('selected');
  }

  // 처음 응답하는 질문인 경우 응답 카운트 증가
  if (selectedIndexes[slideIndex] === null) {
    answeredCount++;
  }

  // 선택한 옵션 저장
  selectedIndexes[slideIndex] = optionIndex;

  // 진행 상태 업데이트
  const progressLi = document.querySelector(`.progress-item-${slideIndex}`);
  if (progressLi) {
    progressLi.classList.add('answered');
  }
  updateProgress();

  // 모든 질문에 응답했는지 확인
  if (answeredCount >= questionArr.length) {
    isDone = true;
    updateResultSlide(); // 결과 슬라이드 업데이트
  }

  // 다음 슬라이드로 이동 (마지막 질문이 아닌 경우)
  if (slideIndex < questionArr.length - 1) {
    swiper.slideNext();
  } else if (isDone) {
    // 마지막 질문이고 모든 답변이 완료된 경우 결과 슬라이드로 이동
    swiper.slideTo(swiper.slides.length - 1);
  }
}

// 진행 상태 목록 생성 함수
function createProgressList() {
  questionArr.forEach((question, index) => {
    const li = createElement('li', `progress-item-${index}`);
    const text = createElement(
      'span',
      `progress-text-${index}`,
      question.questionText,
      '',
      index
    );
    const a = createElement(
      'a',
      `progress-link-${index}`,
      '',
      '',
      index,
      `#slide${index}`
    );

    a.addEventListener('click', (event) => {
      event.preventDefault();
      swiper.slideTo(index);
    });

    a.appendChild(text);
    li.appendChild(a);
    progressList.appendChild(li);
  });
}

// 진행 상태 업데이트 함수
function updateProgress() {
  const answeredCount = selectedIndexes.filter((i) => i !== null).length;
  const total = questionArr.length;
  const percent = Math.round((answeredCount / total) * 100);

  $('.progress-bar').css('width', percent + '%');
  $('.progress-percent').text(percent + '%');
}

// 초기화 및 실행
document.addEventListener('DOMContentLoaded', () => {
  createProgressList();
  initSwiper();
});
