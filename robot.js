// eyes on/off
$(".flash").click(function () {
  $(".brain").toggleClass("laser");
});

// random color for background
$(".color").click(function () {
  var number = Math.floor(Math.random() * 255);
  alert(number);
});

// variables
$(".color").click(function () {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

  alert(red + "," + green + "," + blue);
});

// assign each named color a random number 0-255
// display the three values in an alert window

// generate an rgba value in an alert window rgb to css to change color

$("body").css("background", randomRGBA);

var randomRGBA = "rgba(" + red + "," + green + "," + blue + ",1)";
alert(randomRGBA);

// a image that can dance across screen

// @keyframes dance {
//   from{
//     left: 800px;
//   }
// }
// @-webkit-keyframes dance{
//   from{
//     left: 800px;
//   }
//   }
// }
// @-moz-keyframes dance {
//   from{
//     left: 800px;
//   }
// }

// img {
//     animation: dance 4s infinite;
//   -webkit-animation: dance 4s infinite;
//   -moz-animation: dance 4s infinite;
//   position: absolute;
//   top: 200px;
//   left: 400px;
// }

$(".moves").click(function () {
  $("img").toggle();
});
