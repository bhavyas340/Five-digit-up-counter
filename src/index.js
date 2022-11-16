import "./styles.css";
var start = document.getElementById("btn");
// var input = document.querySelector("input");

start.addEventListener("click", function getVal() {
  var val = document.getElementById("myInput").value;
  var d1 = document.getElementById("d5");
  var d2 = document.getElementById("d4");
  var d3 = document.getElementById("d3");
  var d4 = document.getElementById("2");
  var d5 = document.getElementById("d1");
  // for(let i=0;i<val;i++){

  // d1.innerText = i;
  i++;
  let j = 0;
  if (d1.innerText + d2.innerText <= val) {
    if (i <= 9) {
      d1.innerText = i;
      // clearInterval(my);
    } else if (j <= 9) {
      j++;
      d2.innerText = j;
    } else {
      clearInterval(my);
    }
  }
  // }
  console.log(val);
});
var my = setInterval(getVal, 1000);
var i = 0;
function getVal() {
  var val = document.getElementById("myInput").value;
  var d1 = document.getElementById("d5");
  var d2 = document.getElementById("d4");
  var d3 = document.getElementById("d3");
  var d4 = document.getElementById("2");
  var d5 = document.getElementById("d1");
  // for(let i=0;i<val;i++){

  // d1.innerText = i;
  i++;
  let j = 0;
  if (d1.innerText + d2.innerText <= val) {
    if (i <= 9) {
      d1.innerText = i;
      // clearInterval(my);
    } else if (j <= 9) {
      j++;
      d2.innerText = j;
    } else {
      clearInterval(my);
    }
  }
  clearInterval(my);
  // }
  console.log(val);
}
