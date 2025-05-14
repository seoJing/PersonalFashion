import { questionArr, personalityScores } from './db.js';
import { createElement } from './createElementHelper.js';
import { PATH } from './path.js';

const progressUl = document.body.querySelector('.progressUl');
const progressDiv = document.body.querySelector('.progressDiv');

let selectedIndexes = Array(questionArr.length).fill(null);
let recomendStyleArr;
let swiper;

const initSwiper = () => {
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  questionArr.forEach((item, index) => {
    const slide = createElement('div', 'swiper-slide', '', `slide${index}`);

    const question = createElement('div', 'question');
    const questionNumberSpan = createElement(
      'h4',
      'questionNumberSpan',
      'Q' + (index + 1)
    );
    const questionTextSpan = createElement(
      'span',
      'questionTextSpan',
      item.questionText
    );

    const selectButtonDiv = createElement('div', 'selectButtonDiv');
    const selectButton1 = createElement(
      'button',
      ['selectButton1', `question${index}`],
      item.option[0].text
    );
    const selectButton2 = createElement(
      'button',
      ['selectButton2', `question${index}`],
      item.option[1].text
    );

    selectButton1.addEventListener('click', (e) =>
      handleButtonClick(0, e, index)
    );
    selectButton2.addEventListener('click', (e) =>
      handleButtonClick(0, e, index)
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
};

const toResultPage = () => {
  const toResultPageButton = createElement(
    'button',
    'toResultPageButton',
    '결과보기'
  );

  toResultPageButton.addEventListener('click', () => {
    selectedIndexes.forEach((optionIndex, i) => {
      if (optionIndex !== null) {
        const impact = questionArr[i].option[optionIndex].impact;
        Object.keys(impact).forEach((key) => {
          personalityScores[key] += impact[key];
        });
      }
    });

    recomendStyleArr = Object.entries(personalityScores).sort(
      (a, b) => b[1] - a[1]
    );
    window.location.href = `${PATH.RESULT}?data=${btoa(
      JSON.stringify(recomendStyleArr)
    )}`;
  });

  progressDiv.appendChild(toResultPageButton);
};

const handleButtonClick = (optionIndex, e, slideIndex) => {
  e.target.classList.add('selected');
  if (e.target.nextElementSibling != null)
    e.target.nextElementSibling.classList.remove('selected');
  else if (e.target.previousElementSibling != null)
    e.target.previousElementSibling.classList.remove('selected');

  selectedIndexes[slideIndex] = optionIndex;

  const progressLi = document.querySelector(`.progressLi${slideIndex}`);
  progressLi.classList.add('answered');
  updateProgress();

  if (slideIndex < questionArr.length - 1) {
    swiper.slideNext();
  } else {
    if (!document.querySelector('.toResultPageButton')) {
      toResultPage();
    }
  }
};

const createProgressLi = () => {
  questionArr.forEach((e, i) => {
    const li = createElement('li', `progressLi${i}`);
    const text = createElement(
      'span',
      `progressText${i}`,
      e.questionText,
      '',
      i
    );
    const a = createElement('a', `progressA${i}`, '', '', i, `#slide${i}`);

    a.addEventListener('click', (event) => {
      event.preventDefault();
      swiper.slideTo(i);
    });

    a.appendChild(text);
    li.appendChild(a);
    progressUl.appendChild(li);
  });
};

const updateProgress = () => {
  const answeredCount = selectedIndexes.filter((i) => i !== null).length;
  const total = questionArr.length;
  const percent = Math.round((answeredCount / total) * 100);

  $('.progressBar').css('width', percent + '%');
  $('.progressPercent').text(percent + '%');
};

// 초기화 및 실행
document.addEventListener('DOMContentLoaded', () => {
  createProgressLi();
  initSwiper();
});
