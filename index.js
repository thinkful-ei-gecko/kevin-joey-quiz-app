'use strict';

let questionNumber = 0;
let amountCorrect = 0;
let amountWrong = 0;
const diceImage = `<img src="https://png2.kisspng.com/sh/dc93024927e664ccce5e3d60c5d4694a/L0KzQYm3VsA4N6lAfZH0aYP2gLBuTfQzOF54keV9ZX2wdLrqhb1lfZ9sfdH3cz3ngrLujB50NZ56jNN3dIOwfbL6lPUubGM1RadrMUnmRbS7UvVmapI8Rqk5N0G5R4m9UcUzQGU2TagDNEG8QoO1kP5o/kisspng-d20-system-dice-dungeons-dragons-mutants-maste-d20-5b19c5c42eeba7.7071678615284156841922.png" alt= "a 20 sided dice for dungeons and dragons">`;

function startQuiz(){
  $('main').on('click keypress', '.startButton', () => {
    $('.startScreen').remove(); 
    generateQuestion();
    updateScore();
    $('header').append(`${diceImage}`);
  });
  
}

function generateQuestion(){
  $('body').css('background-color', 'white');
  $('main').append(`
    <section class="quizForm">
      <div class="question-1">
        <h1>Question ${questionNumber + 1} of ${data.length}</h1>
        <h3>${data[questionNumber].question}</h3>
        <form>
          <fieldset>
            <label class="answerOption">
              <input type="radio" value="${data[questionNumber].answers[0]}" name="answer" required>
              <span>${data[questionNumber].answers[0]}</span>
            </label>
            <label class="answerOption">
              <input type="radio" value="${data[questionNumber].answers[1]}" name="answer" required>
              <span>${data[questionNumber].answers[1]}</span>
            </label>
            <label class="answerOption">
              <input type="radio" value="${data[questionNumber].answers[2]}" name="answer" required>
              <span>${data[questionNumber].answers[2]}</span>
            </label>
            <label class="answerOption">
              <input type="radio" value="${data[questionNumber].answers[3]}" name="answer" required>
              <span>${data[questionNumber].answers[3]}</span>
            </label>
          </fieldset>
          <p class="correct-or-wrong-text"></p>
          <button type="submit" class="submitButton">Submit</button>
        </form>
      </div>
    </section>
  `);
}

function handleSubmit(){
  $('main').on('submit', event => {
    event.preventDefault();
    const selectedAnswer = $('input:checked').val();

    const theQuestion = data[questionNumber];
    const indexOfCorrectAnswer = theQuestion.correctAnswer;
    const correctAnswer = `${theQuestion.answers[indexOfCorrectAnswer]}`;

    // apply "correct answer" CSS style here (border around the element)
    let allRadioElements = $(':radio').toArray();
    for (let i = 0; i < allRadioElements.length; i++) {
      if ($(allRadioElements[i]).attr('value') === correctAnswer){
        $(allRadioElements[i]).parent().addClass('correctHighlight');
        break;
      }
    }

    if (selectedAnswer === correctAnswer){
      $('.correct-or-wrong-text').text('correct!');
      amountCorrect++;
    }
    else { 
      $('.correct-or-wrong-text').text('wrong!');
      amountWrong++;
    }
    $('.submitButton').removeClass('submitButton').addClass('nextButton').text('next');
    $('fieldset').prop('disabled', true);
    updateScore();
  });
}

function handleNext(){
  $('main').on('click keypress', '.nextButton', () => {
    questionNumber++;
    $('.quizForm').remove();
    if (questionNumber === data.length) {
      removeScoreHeader();
      goToEndScreen();
    }
    else {
      generateQuestion();
    }
  });
}

function updateScore(){
  
  $('.score').text(`${amountCorrect} correct, ${amountWrong} wrong`);
}

function removeScoreHeader(){
  $('.score').empty();
}

function resetAllVariables(){
  questionNumber = 0;
  amountCorrect = 0;
  amountWrong = 0;
}

function goToEndScreen(){
  $('main').append(`
    <section class="endScreen">
      <h1>Here's your score</h1>
      <p class="finalScore">
        ${amountCorrect} out of ${data.length} correct
      </p>
      <button type="button" class="restartButton">Start Over</button>
    </section>
  `);
}

function restart(){
  $('main').on('click keypress', '.restartButton', () => {
    $('.endScreen').remove();
    resetAllVariables();
    initializeStartScreen();
  });
}

function initializeStartScreen(){
  $('main').append(`
    <section class="startScreen">
      <h1>How Well Do You Know "Dungeons & Dragons"?</h1>
      ${diceImage} 
      <button type="button" class="startButton">Begin Quiz</button>
    </section>
  `);
}

$(() => {
  initializeStartScreen();
  startQuiz();
  handleSubmit();
  handleNext();
  restart();
});
