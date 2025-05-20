import { questionArr, personalityScores, resultArr } from './db.js';

const selectButton1 = document.body.querySelector('.selectButton1');
const selectButton2 = document.body.querySelector('.selectButton2');
const questionNumberSpan = document.body.querySelector('.questionNumberSpan');
const questionTextSpan = document.body.querySelector('.questionTextSpan');
const toResultPageButton = document.body.querySelector('.toResultPageButton');

let currrentQuestionNumber = 0;
let recomendStyleArr;

const nextQuestion = () => {
  questionNumberSpan.innerText = 'Q' + (currrentQuestionNumber + 1);
  questionTextSpan.innerText = questionArr[currrentQuestionNumber].questionText;
  selectButton1.innerText = questionArr[currrentQuestionNumber].option[0].text;
  selectButton2.innerText = questionArr[currrentQuestionNumber].option[1].text;
};
const toResultPage = () => {
  selectButton1.classList.add('hidden');
  selectButton2.classList.add('hidden');
  toResultPageButton.classList.remove('hidden');
  recomendStyleArr = Object.entries(personalityScores).sort(
    (a, b) => b[1] - a[1]
  );
};
const handleButtonClick = (optionIndex) => {
  const impact = questionArr[currrentQuestionNumber].option[optionIndex].impact;
  Object.keys(impact).forEach((key) => {
    personalityScores[key] += impact[key];
  });
  if (currrentQuestionNumber < questionArr.length - 1) {
    currrentQuestionNumber++;
    nextQuestion();
  } else {
    toResultPage();
  }
};

//실행부
nextQuestion();
toResultPageButton.addEventListener('click', () => {
  window.location.href = `${window.location.origin}/result.html?data=${btoa(
    JSON.stringify(recomendStyleArr)
  )}`;
});
selectButton1.addEventListener('click', () => handleButtonClick(0));
selectButton2.addEventListener('click', () => handleButtonClick(1));
