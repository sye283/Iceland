$(document).ready(function() {

  // $('.imageslider').animate({backgroundPosition : '-=2px'}, 20, 'linear', slide);

  $(".places16").hide();
  $(".places17").hide();
  $(".places18").hide();
  $(".places19").hide();

   $("#2016").click(function(){
     if ($(".places16").is(":visible")) {
         $(".places16").hide(200, "linear");
       } else {
         $(".places17").hide(200, "linear");
         $(".places18").hide(200, "linear");
         $(".places19").hide(200, "linear");
         $(".places16").delay(200).show(200, "linear");
       }
    });

    $("#2017").click(function(){
      if ($(".places17").is(":visible")) {
          $(".places17").hide(200, "linear");
        } else {
          $(".places16").hide(200, "linear");
          $(".places18").hide(200, "linear");
          $(".places19").hide(200, "linear");
          $(".places17").delay(200).show(200, "linear");
        }
     });

     $("#2018").click(function(){
       if ($(".places18").is(":visible")) {
           $(".places18").hide(200, "linear");
         } else {
           $(".places17").hide(200, "linear");
           $(".places16").hide(200, "linear");
           $(".places19").hide(200, "linear");
           $(".places18").delay(200).show(200, "linear");
         }
      });

      $("#2019").click(function(){
        if ($(".places19").is(":visible")) {
            $(".places19").hide(200, "linear");
          } else {
            $(".places17").hide(200, "linear");
            $(".places18").hide(200, "linear");
            $(".places16").hide(200, "linear");
            $(".places19").delay(200).show(200, "linear");
          }
       });

    (function slide(){
      $('.imageslider').animate({backgroundPosition : '-=2px'}, 20, 'linear', slide);
    })();

});
