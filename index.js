'use strict';

let questionNumber = 0;
let amountCorrect = 0;
let amountWrong = 0;

function startQuiz(){
  $('main').on('click keypress', '.startButton', () => {
    $('.startScreen').remove(); 
    generateQuestion();
    updateScore();
  });
}

function generateQuestion(){
  $('main').append(`
    <section class="quizForm">
      <div class="question-1">
        <h1>Question ${questionNumber + 1} of ${data.length}</h1>
        <h2>${data[questionNumber].question}</h2>
        <form>
          <fieldset>
            <label class="answerOption">
              <input type="radio" value="${data[questionNumber].answers[0]}" name="answer" required="">
              <span>${data[questionNumber].answers[0]}</span>
            </label>
            <label class="answerOption">
              <input type="radio" value="${data[questionNumber].answers[1]}" name="answer" required="">
              <span>${data[questionNumber].answers[1]}</span>
            </label>
            <label class="answerOption">
              <input type="radio" value="${data[questionNumber].answers[2]}" name="answer" required="">
              <span>${data[questionNumber].answers[2]}</span>
            </label>
            <label class="answerOption">
              <input type="radio" value="${data[questionNumber].answers[3]}" name="answer" required="">
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
  $('main').submit(event => {
    event.preventDefault();
    let selectedAnswer = $('input:checked').val();
    let correctAnswer = `${data[questionNumber].answers[data[questionNumber].correctAnswer]}`;
    if( selectedAnswer === correctAnswer){
      $('.correct-or-wrong-text').text('CORRECT');
      amountCorrect++;
    }
    else{ 
      $('.correct-or-wrong-text').text('WRONG');
      amountWrong++;
    }
    $('.submitButton').removeClass('submitButton').addClass('nextButton').text('next');
    $('fieldset').prop( 'disabled', true );
    updateScore();
  });
}

function handleNext(){
  $('main').on('click keypress', '.nextButton', () => {
    questionNumber++;
    $('.quizForm').remove();
    generateQuestion();
  });
}

function updateScore(){
  $('.score').text(`SCORE: ${amountCorrect} correct, ${amountWrong} wrong`);
}

$(()=>{
  startQuiz();
  handleSubmit();
  handleNext();
});
