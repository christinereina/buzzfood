$(document).ready(function() {
    $("form#quiz").submit(function(event) {
      event.preventDefault();
      const question1 = parseInt($("input:radio[name=q1]:checked").val());
      console.log(question1);
      const question2 = parseInt($("input:radio[name=q2]:checked").val());
      console.log(question2;
      const question3 = parseInt($("input:radio[name=q3]:checked").val());
      console.log(question3);
      const question4 = parseInt($("input:radio[name=q4]:checked").val());
      console.log(question4);
      const question5 = parseInt($("input:radio[name=q5]:checked").val());
      console.log(question5);
      const result = question1 + question2 + question3 +  question4 + question5;
      console.log(result);

  });
});