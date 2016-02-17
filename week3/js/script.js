var submit = document.getElementById("submit");
submit.onclick = function() {
    
    
    var responses = [];
    var responseElements = document.getElementsByClassName("response");
    
    
    for (var i = 0; i < responseElements.length; i++)
        responses.push(responseElements[i].value);
        
    console.log(responseElements);
    
    
//    var myArray = [name, movies, gender, Month, day, year];
//    var myArray = document.getElementById("myArray");
    
    
//    var name = document.getElementById("name").value;
//    console.log(name);
//    
//    var movies = document.getElementById("movies").value;
//    console.log(movies);
//    
//    var gender = document.getElementById("gender").value;
//    console.log(gender);
//    
//    var Month = document.getElementById("Month").value;
//    console.log(Month);
//    
//    var day = document.getElementById("day").value;
//    console.log(day);
//    
//    var year = document.getElementById("year").value;
//    console.log(year);
//    
    var message = document.getElementById("message");
    
    message.innerHTML = "HELLO " + responses[0] + ", I like " + responses[1] +", I am a " + responses[2] +
        ", And my date of birth is " + responses[3] +", "+ responses[4] +" "+ responses[5] + ".<br><br> "+ " WELCOME TO MY WEBSITE." ;
};