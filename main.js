function check(){
     
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var correct = 0;


if (question1=="17") {
    correct++;
}
if (question2=="James") {
    correct++;
}
if (question3=="In un polsino di pelle") {
    correct++;
}
if (question4=="Perché sopravvivono bevendo sangue animale") {
    correct++;
}
if (question5=="La spagnola") {
    correct++;
}
if (question6=="Preannuncia gli eventi") {
    correct++;
}
if (question7=="Il puma") {
    correct++;
}

var messages = ["Ottimo lavoro :) ", "Ci sei quasi..", "Puoi fare di meglio!", "Riprova :( "];


var range;

if (correct < 6 && correct > 1) {
    range = 2
}
if (correct > 4) {
    range = 1;
}
if (correct > 6) {
    range = 0;
}
if (correct < 2) {
    range = 3;
}

document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "Hai svolto " + correct + " domande corrette.";


}
