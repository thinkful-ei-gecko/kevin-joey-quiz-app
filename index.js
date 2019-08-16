'use strict';
let questionNumber = 0;

function startQuiz(){
  $('.quiz-screen').on('click keypress', '.startButton', event => {
    //console.log(event)
    $('.quiz-screen').remove(); 
    generateQuestion();
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
            <p class="correct-or-wrong-text"></p>
            <button type="button" class="submitButton">Submit</button>
          </fieldset>
        </form>
      </div>
    </section>
  `);
}

function handleSubmit(){
  $('main').on('click keypress', '.submitButton', event => {
    let selectedAnswer = $('input:checked').val();
    console.log(selectedAnswer);
    let rightAnswer = `${data[questionNumber].answers[data[questionNumber].correctAnswer]}`;
    console.log(rightAnswer);
    if( selectedAnswer === rightAnswer){
      $('.correct-or-wrong-text').text('CORRECT');
    }
    else{ 
      $('.correct-or-wrong-text').text('WRONG');
    }
  });
}
$(()=>{
  startQuiz();
  handleSubmit();
});
