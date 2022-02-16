// Comment out any lab secontion to see it in action
// LAB 1 - Line 10 - 01/27/22 - 02/01/22
// LAB 2 - Line 18 - 02/02/22
// LAB 3 - Line 33 - 02/08/22
// LAB 4 - Line 68 - 02/10/22
// LAB 5 - Line 124 - 02/15/2022



// Lab 1 - 01/27/22 - 02/01/22 - 01/03/22
// GOAL: change big pic SRC on small pic that was clicked
function imgChange(obj) {
  document.getElementById('big_pic').src = obj.src;
}



// Lab 2 - 02/08/22
// GOAL: Change images to new set of images on double click
/*
document.addEventListener("dblclick", function(){
  document.getElementById('pic1').src = "images/pic5.jpg";
  document.getElementById('pic2').src = "images/pic6.png";
  document.getElementById('pic3').src = "images/pic7.png";
  document.getElementById('pic4').src = "images/pic8.png";

  document.getElementById('big_pic').src = "images/pic5.jpg";
});
*/



// Lab 3 - 02/08/22
// GOAL: change img array SRC on double click
/*
var arr = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.png","pic6.png","pic7.png","pic8.jpg"];
const PATH = "images/";
var bool = true;
var bigPic = document.getElementById('big_pic');

bigPic.addEventListener("dblclick", function(){
  function displayImg1(arr){
    document.getElementById('big_pic').src = PATH + arr[0];
    document.getElementById('pic1').src = PATH + arr[0];
    document.getElementById('pic2').src = PATH + arr[1];
    document.getElementById('pic3').src = PATH + arr[2];
    document.getElementById('pic4').src = PATH + arr[3];
  }
  function displayImg2(arr){
    document.getElementById('big_pic').src = PATH + arr[4];
    document.getElementById('pic1').src = PATH + arr[4];
    document.getElementById('pic2').src = PATH + arr[5];
    document.getElementById('pic3').src = PATH + arr[6];
    document.getElementById('pic4').src = PATH + arr[7];
  }
  if(bool){
    displayImg2(arr);
    bool = false;
  }else{
    displayImg1(arr);
    bool = true;
  }
});
*/



// Lab 4 - 02/10/22
// GOAL: no hard coded SRC, create all img elemnts in JS
var arr1 = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg"]
var arr2 = ["pic5.png","pic6.png","pic7.png","pic8.jpg"]
const PATH = "images/";
var bool = true;
var bigPic = document.getElementById('big_pic');
// Double Click event of big picture
bigPic.addEventListener("dblclick", function(){
  if(bool){
    displayImg(arr2);
    bool = false;
  }else{
    displayImg(arr1);
    bool = true;
  }
function displayImg(arr){
  bigPic.src = PATH + arr[0];
  for(i=1; i<arr.length+1;i++){
    var imgs = document.getElementsByTagName('img');
    imgs[i].src = PATH + arr[i-1];
  }
}
});
// get Big and Small container objects
var bigContainer = document.getElementById('bigpic_container');
var smallContainer = document.getElementById('pic_container');
window.addEventListener('load', function(){
  createList();
});
// Create img elements
function createList() {
  big_pic.src = PATH +  arr1[0];
  for (i = 0; i < arr1.length; i++) {
    var pic_container = document.createElement("img");
    pic_container.src = PATH + arr1[i];
    pic_container.className = "pic";

    pic_container.addEventListener("click", picClick);
    smallContainer.appendChild(pic_container);
  }
}
// set SRC of each image made
function changeImages(anArray) {
  var arr1 = document.getElementsByTagName("img");
  for (i = 0; i < arr1.length; i++) {
    arr1[i].src = PATH + anArray[i];
  }
}
function picClick(e) {
  document.getElementById('big_pic').src = e.target.src;
}




// Lab 5 - 02/15/2022
// GOAL: change big img src randomly every second
window.addEventListener('load', function(){
  this.setInterval(randNum, 1000);
});
function randNum(){
  console.log("img change");
  let randNumGen = Math.floor(Math.random()*arr1.length);
  document.getElementById('big_pic').src = PATH + arr1[randNumGen];
}























// Josh being extra
// this was worth losing points 🥲
var progOuter = document.getElementById('prog');
var progInner = progOuter.firstChild;
var progCount = 0;
var tog = 0;
window.addEventListener('load', function(){
  // every 16 miliseconds, count goes up by 10
  // width of prog bar is 600px
  // 1000 miliseconds for picture change
  // 600px divied by 10 (increment of counter every 16.6666667 milliseconds)
  // this makes the width of inner green progrss bar 600px after 1 second
  this.setInterval(function(){
    // if prog width is 600px, reset it
    if(progCount>=600){
      // toggle so bar doesnt always go from left to right
      tog++;
      // set count back to 0 (if it is 600)
      progCount=0;}

    // Toggle 1 -
    if(tog%2==0){
      // set width of green bar to the count
      progInner.style.width = progCount+"px";
      // rotate the inner green bar back to default
      progOuter.style.transform = "rotate(0deg)";}
    /// Toggle 2 - reverse the way the green progress bar expands
    // this creates the effect of the bar going off screen
    else{
      // set width of green bar to 600px minus the count (this causes it to shrink rather than expan)
      progInner.style.width = 600-progCount+"px";
      // flip the bar backwards after every iteration (for flow effect)
      progOuter.style.transform = "rotate(180deg)";
    }
    // increment count by 10 every 16.6666667 seconds
    // causes count to be 600 after 1 second *the length that it takes img to change)
    // since you want progress to be at 100% (600px in this case) after 1 second
    progCount+=10;
  }, 16.6666667);
});
