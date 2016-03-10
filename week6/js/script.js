var add = document.getElementById("add");
add.onclick = function() {

    var input = document.getElementById("input").value;

    var message = document.createElement("message");

    message.innerHTML  = input;

}
