$(document).ready(function() {

  $("body").css("display", "none");
    $("body").fadeIn(400);
    // to fade out before redirect
    $('a').click(function(e){
        redirect = $(this).attr('href');
        e.preventDefault();
        $('body').fadeOut(400, function(){
            document.location.href = redirect
        });
    });

  $(".places16").hide();
  $(".places17").hide();
  $(".places18").hide();
  $(".places19").hide();

   $("#2016").click(function(){
     if ($(".places16").is(":visible")) {
         $(".places16").fadeOut(200, "linear");
       } else {
         $(".places17").fadeOut(200, "linear");
         $(".places18").fadeOut(200, "linear");
         $(".places19").fadeOut(200, "linear");
         $(".places16").delay(200).fadeIn(200, "linear");
       }
    });

    $("#2017").click(function(){
      if ($(".places17").is(":visible")) {
          $(".places17").fadeOut(200, "linear");
        } else {
          $(".places16").fadeOut(200, "linear");
          $(".places18").fadeOut(200, "linear");
          $(".places19").fadeOut(200, "linear");
          $(".places17").delay(200).fadeIn(200, "linear");
        }
     });

     $("#2018").click(function(){
       if ($(".places18").is(":visible")) {
           $(".places18").fadeOut(200, "linear");
         } else {
           $(".places17").fadeOut(200, "linear");
           $(".places16").fadeOut(200, "linear");
           $(".places19").fadeOut(200, "linear");
           $(".places18").delay(200).fadeIn(200, "linear");
         }
      });

      $("#2019").click(function(){
        if ($(".places19").is(":visible")) {
            $(".places19").fadeOut(200);
          } else {
            $(".places17").fadeOut(200);
            $(".places18").fadeOut(200);
            $(".places16").fadeOut(200);
            $(".places19").delay(200).fadeIn(200);
          }
       });

    (function slide(){
      $('.imageslider').animate({backgroundPosition : '-=2px'}, 20, 'linear', slide);
    })();



    // about page~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    $(".abouttext").hide();
    $(".logo1").click(function(){
      $(".logo1").hide();
      $(".text1").fadeIn(500);
      $(".text1").show();
     });
    $(".text1").click(function(){
       $(".text1").hide();
       $(".logo1").fadeIn(500);
       $(".logo1").show();
      });

    $(".logo2").click(function(){
      $(".logo2").hide();
      $(".text2").fadeIn(500);
      $(".text2").show();
     });
    $(".text2").click(function(){
       $(".text2").hide();
       $(".logo2").fadeIn(500);
       $(".logo2").show();
      });

    $(".logo3").click(function(){
      $(".logo3").hide();
      $(".text3").fadeIn(500);
      $(".text3").show();
     });
    $(".text3").click(function(){
       $(".text3").hide();
       $(".logo3").fadeIn(500);
       $(".logo3").show();
      });
      $(".logo4").click(function(){
        $(".logo4").hide();
        $(".text4").fadeIn(500);
        $(".text4").show();
       });
      $(".text4").click(function(){
         $(".text4").hide();
         $(".logo4").fadeIn(500);
         $(".logo4").show();
        });
        $(".logo5").click(function(){
          $(".logo5").hide();
          $(".text5").fadeIn(500);
          $(".text5").show();
         });
        $(".text5").click(function(){
           $(".text5").hide();
           $(".logo5").fadeIn(500);
           $(".logo5").show();
          });

});
