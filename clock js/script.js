let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");

window.addEventListener("load", calculateTime)
function calculateTime() {
    var currentDate = new Date();
    var day = currentDate.getDay();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    var days = [ "SUN","MON", "TUE", "WED","THU", "FRI", "SAT"];

    hours=hours % 12;
    hours = hours <10 ? "0" + hours : hours;
    minutes = minutes <10 ? "0" + minutes : minutes;
    

    span1.innerHTML=days[day] + " ";
    span2.innerHTML=hours + " :";
    span3.innerHTML=minutes;
    span4.innerHTML= " " + ampm;

    setTimeout(calculateTime, 200);

}



