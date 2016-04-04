var submit = document.getElementById("submit");
submit.onclick = function() {

  var name = document.getElementById("name").value;
  var old = document.getElementById("old").value;
  var sport = document.getElementById("sport").value;
  var color = document.getElementById("color").value;
  var food = document.getElementById("food").value;
  var place = document.getElementById("place").value;

    var story = document.getElementById("story");
  story.innerHTML = "My name is " +
  name + " and I am" + old + "My favorite sport is " + sport + " My favorite color is " + color +  ". i love " + food + " and i really want to go visit " + place + " Thank you" +  "." ;
}
