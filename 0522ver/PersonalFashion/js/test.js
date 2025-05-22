import { questionArr, personalityScores } from './db.js';
import { createElement } from './createElementHelper.js';

// DOM 요소 선택
const progressList = document.querySelector('.progress-list');
const progressContainer = document.querySelector('.progress-container');

// 상태 관리 변수
let selectedIndexes = Array(questionArr.length).fill(null);
let answeredCount = 0;
let recomendStyleArr;
let swiper;

// Swiper 초기화 함수
function initSwiper() {
  const swiperWrapper = document.querySelector('.swiper-wrapper');

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

// 결과 페이지로 이동하는 버튼 생성 함수
function createResultButton() {
  const resultButton = createElement('button', 'result-button', '결과보기');

  resultButton.addEventListener('click', () => {
    // 성격 점수 계산
    calculatePersonalityScores();

    // 결과 정렬 및 페이지 이동
    recomendStyleArr = Object.entries(personalityScores).sort(
      (a, b) => b[1] - a[1]
    );

    // 결과 데이터를 URL 매개변수로 전달
    window.location.href = `./result.html?data=${btoa(
      JSON.stringify(recomendStyleArr)
    )}`;
  });

  progressContainer.appendChild(resultButton);
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
  progressLi.classList.add('answered');
  updateProgress();

  // 모든 질문에 응답했는지 확인
  if (answeredCount < questionArr.length) {
    // 다음 슬라이드로 이동
    swiper.slideNext();
  } else if (!document.querySelector('.result-button')) {
    // 모든 질문에 응답했고 결과 버튼이 없으면 생성
    createResultButton();
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
