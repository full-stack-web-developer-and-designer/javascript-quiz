function submitAnswers(){
    var total = 5;
    var score = 0;

    // Get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    // Validation
    for(i=1; i<=total; i++){
        if(eval('q' + i) == null || eval('q' + i) == '') {
            alert("You missed question " + i);
            return false;
        }
    }
    // Set Correct Answers
    var answers = ["a","a","a","b","a"];

    // Check Answers
    for(i=1; i<=total; i++){
        if(eval('q' + i) == answers[i-1]){
            score++;
        }
    }
    // Display Results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>'+ score +'</span> out of <span>' + total + '</span>.</h3>'
    alert ('You scored ' + score + ' out of ' + total + '.');

    return false;
}
// Get the current year for footer info
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

// Find the element with the id "currentYear"
let currentYearElement = document.getElementById("currentYear");

// Update the content of the element with the current year
currentYearElement.textContent = currentYear;