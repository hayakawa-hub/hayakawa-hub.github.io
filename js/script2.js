$(function(){
  var interval =7000;

  var duration = 2000;


  var timer;

  timer =  setInterval(slideTimer,interval);

  function slideTimer(){
    $("#mawasu ul").animate({"left":"-=844px"},duration,
  function(){
    $(this).append($("#mawasu li:first-child"));

    $(this).css("left",-1000);
  });
  }
})
