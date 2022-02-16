// when window loads, has ANONYMOUS function
window.addEventListener('load', function(){
  console.log("window loaded with ANONYMOUS function");
});

// when window loads, has DECLARED function
window.addEventListener('load', myFunction);
function myFunction(){
  console.log("window loaded with DECLARED function");
}


// gets all divs in page and puts them in an array
var div = document.getElementsByTagName('div');

var button1 = div[1];
var subtext1 = div[2];

var button2 = div[3];
var subtext2 = div[4];

// when clicking button1 once
button1.addEventListener('click', function(){
  subtext1.innerHTML = "button 1 has been clicked"
});
// when clicking button1 twice
button1.addEventListener('dblclick', function(){
  subtext1.innerHTML = "button 1 has been DOUBLE clicked"
});


// when moving mouse over button1
button2.addEventListener('mouseover', function(){
  subtext2.innerHTML = "Mouse over button 2"
});
// when moving mouse out of button1
button2.addEventListener('mouseout', function(){
  subtext2.innerHTML = "Mouse out button 2"
});
