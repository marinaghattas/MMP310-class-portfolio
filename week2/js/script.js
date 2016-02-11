var submit = document.getElementById("submit");
submit.onclick = function() {
    
    var name = document.getElementById("name").value;
    console.log(name);
    
    var movies = document.getElementById("movies").value;
    console.log(movies);
    
    var gender = document.getElementById("gender").value;
    console.log(gender);
    
    var Month = document.getElementById("Month").value;
    console.log(Month);
    
    var day = document.getElementById("day").value;
    console.log(day);
    
    var year = document.getElementById("year").value;
    console.log(year);
    
    var message = document.getElementById("message");
    message.innerHTML = "HELLO " + name + ", I like " + movies +", I am a " + gender +
        ", And my date of birth is " + Month +", "+ day +" "+ year + ".<br><br> "+ " WELCOME TO MY WEBSITE." ;
};