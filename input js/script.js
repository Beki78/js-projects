let input = document.getElementById("input");
let output = document.getElementById("output");
let myButton = document.getElementById("myButton");


myButton.addEventListener("click", function get(){
  let text=input.value;
  output.innerHTML=text;
  output.style.color="Green"
})
