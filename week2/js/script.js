var submit = document.getElementById("submit");
submit.onclick = function() {
    
    var name = document.getElementById("name").value;
    console.log(name);
    
    var movies = document.getElementById("movies").value;
    console.log(movies);
    
    var gender = document.getElementById("gender").value;
    console.log(gender);
    
    var message = document.getElementById("message");
    message.innerHTML = "hello" + name + ", i like " + movies +", I am a " + gender +" ,welcome to my website." ;
};