// var First_slide = document.getElementById("firstSlide");
// var Second_slide = document.getElementById("secondSlide");
// var Third_slide = document.getElementById("thirdSlide");
// let colorone = "";
// let colorthree = "";
// let colortwo = "";
// First_slide.oninput = function () {
//   // console.log("First Slider", First_slide.value);
//   document.getElementById("Red").innerHTML = First_slide.value;
//   colorone = First_slide.value;
// };
// Second_slide.oninput = function () {
//   // console.log("Second Slider", Second_slide.value);
//   colortwo = Second_slide.value;
//   document.getElementById("Green").innerHTML = Second_slide.value;
// };
// Third_slide.oninput = function () {
//   // console.log("Third Slider", Third_slide.value);
//   colorthree = Third_slide.value;
//   document.getElementById("Blue").innerHTML = Third_slide.value;
// };

// document.getElementById("start").addEventListener("click", function () {
//   document.getElementById("start").style.backgroundColor =
//     "rgb(" +
//     First_slide.value +
//     "," +
//     Second_slide.value +
//     "," +
//     Third_slide.value +
//     ")";
//   console.log(
//     First_slide.value + "," + Second_slide.value + "," + Third_slide.value
//   );
//   document.getElementById("title").style.color =
//     "rgb(" +
//     First_slide.value +
//     "," +
//     Second_slide.value +
//     "," +
//     Third_slide.value +
//     ")";
//   console.log(colorone + "," + colortwo + "," + colorthree);
// });

function change(e) {
  let first = 0;
  let second = 0;
  let third = 0;
  if (e.target.name == "first") {
    document.getElementById("Red").innerHTML = e.target.value;
    first = e.target.value;
  } else if (e.target.name == "second") {
    second = e.target.value;
    document.getElementById("Green").innerHTML = e.target.value;
  } else if (e.target.name == "third") {
    third = e.target.value;
     document.getElementById("Blue").innerHTML = e.target.value;
  }
  document.getElementById("title").style.color =
    "rgb(" + first + "," + second + "," + third + ")";
  document.getElementById("start").style.backgroundColor =
    "rgb(" + first + "," + second + "," + third + ")";
    document.getElementById("container").style.backgroundColor =
      "rgb(" + first + "," + second + "," + third + ")";
      
}
