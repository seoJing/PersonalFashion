import { questionArr, personalityScores } from './db.js';
import { createElement } from './createElementHelper.js';

const selectButton1 = document.body.querySelector('.selectButton1');
const selectButton2 = document.body.querySelector('.selectButton2');
const progressUl = document.body.querySelector('.progressUl');
const progressDiv = document.body.querySelector('.progressDiv');

const hero = document.body.querySelector('.hero');

let selectedIndexes = Array(questionArr.length).fill(null);
let currentQuestionNumber = 0;
let currentScroll = 500;
let recomendStyleArr;

const nextQuestion = () => {
  const heroBox = createElement(
    'div',
    'heroBox',
    '',
    `heroBox${currentQuestionNumber}`
  );
  const question = createElement('div', 'question');
  const questionNumberSpan = createElement(
    'h4',
    'questionNumberSpan',
    'Q' + (currentQuestionNumber + 1)
  );
  const questionTextSpan = createElement(
    'span',
    'questionTextSpan',
    questionArr[currentQuestionNumber].questionText
  );

  const selectButton = createElement('div', 'selectButton');
  const selectButton1 = createElement(
    'button',
    ['selectButton1', `qusetion${currentQuestionNumber + 1}`],
    questionArr[currentQuestionNumber].option[0].text
  );
  const selectButton2 = createElement(
    'button',
    ['selectButton2', `qusetion${currentQuestionNumber + 1}`],
    questionArr[currentQuestionNumber].option[1].text
  );

  selectButton1.addEventListener('click', (e) => handleButtonClick(0, e));
  selectButton2.addEventListener('click', (e) => handleButtonClick(1, e));

  question.append(questionNumberSpan, questionTextSpan);
  selectButton.append(selectButton1, selectButton2);
  heroBox.append(question, selectButton);

  hero.appendChild(heroBox);
  window.scrollTo({
    top: currentScroll,
    left: 0,
    behavior: 'smooth', // 부드럽게 스크롤
  });
  currentScroll += 700;
};
const toResultPage = () => {
  const toResultPageButton = createElement(
    'button',
    'toResultPageButton',
    '결과보기'
  );

  toResultPageButton.addEventListener('click', () => {
    selectedIndexes.forEach((optionIndex, i) => {
      const impact = questionArr[i].option[optionIndex].impact;
      Object.keys(impact).forEach((key) => {
        personalityScores[key] += impact[key];
      });
    });

    recomendStyleArr = Object.entries(personalityScores).sort(
      (a, b) => b[1] - a[1]
    );
    window.location.href = `../result.html?data=${btoa(
      JSON.stringify(recomendStyleArr)
    )}`;
  });

  progressDiv.appendChild(toResultPageButton);
};
const handleButtonClick = (optionIndex, e) => {
  e.target.classList.add('selected');
  if (e.target.nextElementSibling != null)
    e.target.nextElementSibling.classList.remove('selected');
  else if (e.target.previousElementSibling != null)
    e.target.previousElementSibling.classList.remove('selected');

  let clickIndex = e.target.classList[1].slice(8);
  if (selectedIndexes[clickIndex - 1] === null) {
    if (currentQuestionNumber < questionArr.length - 1) {
      currentQuestionNumber++;
      nextQuestion();
    } else {
      toResultPage();
    }
  }

  selectedIndexes[clickIndex - 1] = optionIndex;
  const progressLi = document.querySelector(`.progressLi${clickIndex - 1}`);
  progressLi.classList.add('answered');

  updateProgress();
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
    const a = createElement('a', `progressA${i}`, '', '', i, `#heroBox${i}`);
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
//실행부

selectButton1.addEventListener('click', (e) => handleButtonClick(0, e));
selectButton2.addEventListener('click', (e) => handleButtonClick(1, e));
createProgressLi();
