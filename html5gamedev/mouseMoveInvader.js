$(document).ready(function(){

var invader = $("#container > img");

/* Easy way to set invader's position to the middle of the window - 
   using percentages in css mess with 'animate' function */
invader.css({
  "position" : "relative",
  "top" : $(window).height()/2 - invader.height()/2 + "px",
  "left" : $(window).width()/2 - invader.width()/2 + "px"
});

var rightEdge = $(window).width() - invader.width();
var bottomEdge = $(window).height() - invader.height();
var position = invader.offset();
var x = position.top; 
var y = position.left;

$(document).mousemove(function(e){
  var x = e.pageX - invader.width()/2 + "px";
  var y = e.pageY - invader.height()/2 + "px";

  setTimeout(animateInvader(x, y), 5000);

});  

  function animateInvader(x, y){
  
    invader.animate({
      "top" : y,
      "left" : x
    }, 1, 'linear');

  }

 
});
