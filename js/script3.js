$(function(){

  $("#sub_img a").hover(function(){

    $("#main_image img").attr("src", $(this).attr("href"));

    return false;
  },function(){
    $("#main_image img").attr("src","images/dogeza.jpg");

  });
});
