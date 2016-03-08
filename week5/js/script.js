var correct1 = 50;
var correct2 = "christmasEve";
var correct3 = "berlin";

var message1 = document.getElementById("message1");
var message2 = document.getElementById("message2");
var message3 = document.getElementById("message3");

var final1 = document.getElementById("final1");
var final2 = document.getElementById("final2");
var final3 = document.getElementById("final3");


final1.onclick = function () {

    var answer1 = document.getElementsByName("questions");
    var answer1Boolean = false;
    for (var i = 0; i < answer1.length; i++) {
        if (answer1[i].checked && answer1[i].value == correct1) {
            answer1Boolean = true;

        }
    }
    if (answer1Boolean) {
        message1.innerHTML = "Your answer is correct";
    } else {
        message1.innerHTML = "Try again";
    }
}
final2.onclick = function () {
    var answer2 = document.getElementsByName("day");
    var answer2Boolean = false;
    for (var i = 0; i < answer2.length; i++) {
        if (answer2[i].checked && answer2[i].value == correct2) {
            answer2Boolean = true;

        }
    }
    if (answer2Boolean) {
        message2.innerHTML = "Your answer is correct";
    } else {
        message2.innerHTML = "Try again";
    }

}

final3.onclick = function () {
    var answer3 = document.getElementsByName("capital");
    var answer3Boolean = false;
    for (var i = 0; i < answer3.length; i++) {
        if (answer3[i].checked && answer3[i].value == correct3) {
            answer3Boolean = true;

        }
    }
    if (answer3Boolean) {
        message3.innerHTML = "Your answer is correct";
    } else {
        message3.innerHTML = "Try again";
    }

}

/*if (question1 == number50)*/
