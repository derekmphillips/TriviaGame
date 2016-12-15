var panel = $('#quiz-area');


$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});


var questions = [{
  question: "1 . 'Last Dance' by Donna Summer was a popular disco song featured on the soundtrack to this disco movie",
  answers: ["Can't Stop the Music", "Thank God it's Friday", "Xanadu", "Saturday Night Fever"],
  correctAnswer: "Thank God it's Friday"
}, {
  question: "2 . 'Summer Night City' and 'Dancing Queen' were big disco hits for this band composed of two married couples",
  answers: ["Tavares", "The Sylvers", "Rose Royce", "ABBA"],
  correctAnswer: "ABBA"
}, {
  question: "3 . Don't Leave Me This Way was a big disco hit for this female vocalist",
  answers: ["Donna Summer", "Diana Ross", "Thelma Houston", "Gloria Gaynor"],
  correctAnswer: "Thelma Houston"
}, {
  question: "4 . Which song was a big hit for disc jockey Rick Dees?",
  answers: ["Disco Scoobie-Doo", "Disco Duck", "Disco Mickey Mouse", "Disco Dinosaur"],
  correctAnswer: "Disco Duck"
}, {
  question: "5 . What artist recorded 'The Hustle'?",
  answers: ["Tavares", "Chuck Mangione", "Van McCoy", "Andy Gibb"],
  correctAnswer: "Van McCoy"
}, {
  question:  "6 . What heavy metal act released the disco hit 'I Was Made for Lovin' You'?",
  answers: ["AC/DC", "KISS", "Judas Priest", "Black Sabbath"],
  correctAnswer: "KISS"
}, {
  question: "7 . What was the name of the disco in the film Saturday Night Fever?",
  answers: ["2001 Odyssey", "Brooklyn Xanadu", "Bay Bridge Bolero", "The Rainbow Room"],
  correctAnswer: "Brooklyn Xanadu"
}, {
  question: "8 . What was Andrea True's profession prior to recording 'More More More'?",
  answers: ["porn star", "White House aide", "cartoon voice artist", "chemical engineer"],
  correctAnswer: "porn star"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:45,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('Time is Up');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};