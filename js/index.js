// Your code goes here
//========================================= Selectors
//---------------------------
const signUpBtn = document.querySelectorAll(".btn");
//---------------------------
const content = document.querySelectorAll("p");
//---------------------------
const contentHeaders = document.querySelectorAll("h2");
//---------------------------
const intro = document.querySelector(".intro");
//---------------------------
const contentSection = document.querySelector(".content-section");
console.log(contentSection)
//---------------------------
//========================================= SignUpBtn

signUpBtn[0].addEventListener("mouseover", function(e) {
  {
    e.target.style.borderColor = "lightblue";
  }
  TweenMax.to(signUpBtn[0], 1, { scale: 1.1 });
});
signUpBtn[0].addEventListener("mouseout", function(e) {
  {
    e.target.style.color = "lightblue";
    e.target.style.backgroundColor = "coral";
  }
  TweenMax.to(signUpBtn[0], 1, { scale: 1 });
});
//---------------------------
signUpBtn[1].addEventListener("mouseover", function(e) {
  {
    e.target.style.borderColor = "lightblue";
  }
  TweenMax.to(signUpBtn[1], 1, { scale: 1.1 });
});
signUpBtn[1].addEventListener("mouseout", function(e) {
  {
    e.target.style.color = "lightblue";
    e.target.style.backgroundColor = "coral";
  }
  TweenMax.to(signUpBtn[1], 1, { scale: 1 });
});
//---------------------------
signUpBtn[2].addEventListener("mouseover", function(e) {
  {
    e.target.style.borderColor = "lightblue";
  }
  TweenMax.to(signUpBtn[2], 1, { scale: 1.1 });
});
signUpBtn[2].addEventListener("mouseout", function(e) {
  {
    e.target.style.color = "lightblue";
    e.target.style.backgroundColor = "coral";
  }
  TweenMax.to(signUpBtn[2], 1, { scale: 1 });
});

//========================================= Content
signUpBtn[0].addEventListener('click', function(){
     {content[6].style.color = 'blue';}
     TweenMax.to(content[6], 1, {scale: 1.1});
   });
//---------------------------
signUpBtn[1].addEventListener('click', function(){
     {content[7].style.color = 'blue';}
     TweenMax.to(content[7], 1, {scale: 1.1});
   });
//---------------------------
signUpBtn[2].addEventListener('click', function(){
     {content[8].style.color = 'blue';}
     TweenMax.to(content[8], 1, {scale: 1.1});
   });
//========================================= Content Headers
//--------------------------- Main Header
window.addEventListener("load", e => {
    TweenMax.to(contentHeaders[0].style.color = 'blue');
    TweenMax.to(contentHeaders[0], 5, {boxShadow:"0px 0px 30px lightblue", padding: "10px", margin: "10px"});
  });
//--------------------------- Sub Header
window.addEventListener("load", e => {
    TweenMax.to(contentHeaders[1].style.color = 'lightblue');
  });
//--------------------------- Sub Header
window.addEventListener("load", e => {
    TweenMax.to(contentHeaders[2].style.color = 'lightblue');
  });
//--------------------------- Sub Header
window.addEventListener("load", e => {
    TweenMax.to(contentHeaders[3].style.color = 'lightblue');
  });
//========================================= Container Divs
//---------------------------
intro.addEventListener("mouseover", function(e) {
    {
      e.target.style.color = "lightblue";
      e.target.style.backgroundColor = "coral";
    }
    TweenMax.to(intro, 1, { scale: 1 });
  });
//---------------------------
target.addEventListener("mouseover", function(e) {
    {
      e.target.style.color = "lightblue";
      e.target.style.backgroundColor = "coral";
    }
    TweenMax.to(e.target, 1, { scale: 1 });
  });
//---------------------------
//---------------------------
//---------------------------
//=========================================
