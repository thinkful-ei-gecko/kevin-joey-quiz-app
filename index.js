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
              <input type="radio" value="Answer" name="answer" required="">
              <span>${data[questionNumber].answers[0]}</span>
            </label>
            <label class="answerOption">
              <input type="radio" value="Answer" name="answer" required="">
              <span>${data[questionNumber].answers[1]}</span>
            </label>
            <label class="answerOption">
              <input type="radio" value="Answer" name="answer" required="">
              <span>${data[questionNumber].answers[2]}</span>
            </label>
            <label class="answerOption">
              <input type="radio" value="Answer" name="answer" required="">
              <span>${data[questionNumber].answers[3]}</span>
            </label>
            <button type="submit" class="submitButton">Submit</button>
          </fieldset>
        </form>
      </div>
    </section>
  `);
}
function checkAnswer(){
  $('form').on('click keypress', event =>{
    let selectedAnswer = $('input:checked').val();
    let correctAnswer = `${data[questionNumber].answers[correctAnswer]}`;
    if( selectedAnswer === correctAnswer){
        
    }
    else{}
  });
}
$(()=>{
  startQuiz();
  
});
