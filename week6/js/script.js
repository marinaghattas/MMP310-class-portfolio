function toaddlist() {
    var input = document.getElementById("input")
    var text = document.createTextNode(input.value)
    var newMessage = document.createElement("br")
    input.value = "";
    message.appendChild(text)
    document.getElementById("message").appendChild(newMessage)
}

function toremovelist() {
    document.getElementById("message").innerHTML = "";
}
