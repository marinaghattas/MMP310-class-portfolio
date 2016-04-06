var submit = document.getElementById("submit");
submit.onclick = function () {

    document.querySelector("#form").style.display = "none";

    var name = document.getElementById("name").value;
    var old = document.getElementById("old").value;
    var sport = document.getElementById("sport").value;
    var color = document.getElementById("color").value;
    var food = document.getElementById("food").value;
    var place = document.getElementById("place").value;

    var story = document.getElementById("story");

    if (name.length > 1 && old.length > 1  && sport.length > 1 && color.length > 1 && food.length > 1 && place.length > 1) {
    story.innerHTML = "My name is " + name + " and I am " + old + "years old. My favorite sport is " + sport + " My favorite color is " + color + ". i love " + food + " and i really want to go visit " + place + ". " + "<br> <br> Thank you " + "☺.";
}
    else{
        story.innerHTML = "                 Try again";
    }
}
