var submit = document.getElementById("submit");
submit.onclick = function() {
    
    
    var responses = [];
    var responseElements = document.getElementsByClassName("response");
    
    
    for (var i = 0; i < responseElements.length; i++)
        responses.push(responseElements[i].value);
        
 
    var message = document.getElementById("message");
    
    message.innerHTML = "HELLO " + responses[0] + ", I like " + responses[1] +", I am a " + responses[2] +
        ", And my date of birth is " + responses[3] +", "+ responses[4] +" "+ responses[5] + ".<br><br> "+ " WELCOME TO MY WEBSITE." ;
};