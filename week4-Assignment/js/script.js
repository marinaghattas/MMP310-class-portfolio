var messages = [
    "No", "Not today", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

document.getElementById('blackcircle').onclick = function () {
    var message = messages[Math.floor(Math.random() * messages.length)];
    $('#blackcircle').effect("shake");
    $('#bluecircle').effect("shake");
    $('#eight').effect("shake");

    document.getElementById('answerContainer').innerHTML = "Answer:  " + message;
}

document.getElementById('blackcircle').animate = function () {
    var message = messages[Math.floor(Math.random() * messages.length)];
}
