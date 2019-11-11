console.log("JS connected"); // this to check that our script is connected to out HTML

var body = document.getElementsByTagName('body');// query select body 
// change the font family of the body to 'Arial, sans-serif' Hint: use .style to acess CSS properties
// change the backgroundColor to a color of your choice
body.style ="font-family:Arial, sans-serif";
var nickname =  document.getElementById("nickname");// qurey select the ID nickname
//add some value to nickname Hint: innerHTML
nickname.innerHTML = "Salah";
// query select favorites byID
var favorites =  document.getElementById("favorites");
// query select hometown byID
var hometown =  document.getElementById("hometown");
// feed both favorites and homwtown with values that represents you i.e hometown.innerHTML = 'Riyadh';
favorites.innerHTML = "coding";
hometown.innerHTML = "Riyadh";
//change the color of all selectors to colors of your choice, it better be good LOL

nickname.style="color:blue";
favorites.style="color:green";
hometown.style="color:red";
// https://www.w3schools.com/jsref/prop_style_color.asp
