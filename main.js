const time = document.getElementById("time")
const greeting = document.getElementById("greeting")
const name = document.getElementById("name")
const focus = document.getElementById("focus")

const showAmpm = true;


function showtime(){ 
    //let today = new Date(2019 , 06 , 06 , 13 , 33 ,30);
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    const ampm = hour >=12 ? "PM" : "AM"

    hour = hour % 12 || 12

    time.innerHTML = `${hour}<span>:</span>${addzero(min)}<span>:</span>${addzero(sec)} ${showtime ? ampm : ""}`

    setTimeout(showtime , 1000)
}

function addzero(n){
    return(parseInt(n , 10) < 10 ? "0" : "") + n;
}

function setbgandgreet(){
    //let today = new Date(2019 , 06 , 06 , 13 , 33 ,30);
    let today = new Date();
    let hour = today.getHours();
    if (hour < 12) {
        //morning
        greeting.textContent = "Good morning"
        document.body.style.backgroundImage = " url(https://images.pexels.com/photos/915972/pexels-photo-915972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
        document.body.style.backgroundSize = "cover"
    }
    else if(hour >12 && hour < 18){
        //afternoon
        greeting.textContent = "Good afternoon"
        document.body.style.backgroundImage = " url(https://images.pexels.com/photos/61135/pexels-photo-61135.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundPosition = "center"
        document.body.style.color = "white"
    }
    else {
        //evening
        greeting.textContent = "Good evening"
        document.body.style.backgroundImage = " url(https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundPosition = "center"
        document.body.style.color = "white"
    }
}

//get name 

function getname(){
    if(localStorage.getItem("name") === null){
        name.textContent = "[Enter Name]"
    }
    else{
        name.textContent = localStorage.getItem("name");
    }
}
// f setname

function setname(e){
    if (e.type === "keypress") {
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem("name" , e.target.innerText);
            e.blur();
        }
    } else {
        localStorage.setItem("name" , e.target.innerText);
    }
}

//set focus
function setfocus(e){
    if (e.type === "keypress") {
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem("focus" , e.target.innerText);
            e.blur();
        }
    } else {
        localStorage.setItem("focus" , e.target.innerText);
    }
}

// get focus
function getFocus(){
    if(localStorage.getItem("focus") === null){
        focus.textContent = "[Enter Focus]"
    }
    else{
        focus.textContent = localStorage.getItem("focus");
    }
}

name.addEventListener("keypress" , setname);
name.addEventListener("blur" ,setname);
focus.addEventListener("keypress" , setfocus);
focus.addEventListener("blur" ,setfocus);

getname();
showtime();
setbgandgreet();
getFocus();
setname();
