var login

function addUser(){
    login = document.getElementById("user").value
    localStorage.setItem("user",user)
    window.location = "kwitter_room.html"
}