$(document).ready(function() {
    $("form#quiz").submit(function(event) {
      event.preventDefault();

      const question1 = parseInt($("input:radio[name=q1]:checked").val());
      const question2 = parseInt($("input:radio[name=q2]:checked").val());
      const question3 = parseInt($("input:radio[name=q3]:checked").val());
      const question4 = parseInt($("input:radio[name=q4]:checked").val());
      const question5 = parseInt($("input:radio[name=q5]:checked").val());
      const result = (question1 + question2 + question3 +  question4 + question5);

      if (result < 6 ) {
        $("#ruby").slideToggle();
        $(".quizForm").hide();
      }

      else if (result === 7 || result < 10) {
        $("#python").fadeToggle();
        $(".quizForm").hide();
      }

      else if (result === 10 || result < 16) {
        $("#js").toggle();
        $(".quizForm").hide();

    } else {
      alert("please fill out all quiz answers first - buzzfood")
    }

    $('.retake').click(function(){
      location.reload();
    })
  });
});