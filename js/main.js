$(document).ready(function(){
  // function di next
  $("next").click(

  function (){
    var imgActive = $("img.active");
    imgActive.removeClass("active");

    if(imgActive.hasClass("last") == true) {
      var nextImg = $("img.first");
    } else {
      var nextImg = imgActive.next();
    }

    nextImg.addClass("active");
  }

  );
});
