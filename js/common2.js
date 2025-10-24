
          $('.tabs-hover a').hover(function () {
            $(this).tab('show');
          });



   
var clicktag = 0;
 $(".menu-button").click(function(){
        if (clicktag == 0) {
          clicktag = 1;
          $(this).toggleClass("cross");
          $(".nav-down").slideUp("slow");
          $(".nav-click").removeClass("active");
          if($(".nav-list").is(":hidden"))
          {
            $(".nav-list").slideDown("slow");  
          }else{
            $(".nav-list").slideUp("slow");
              }
          setTimeout(function () { clicktag = 0 }, 700);
        }

  }); 
   $(".nav-click").click(function(){
          if($(this).parents("li").find(".nav-down").is(":hidden"))
          {
            $(".nav-click").removeClass("active");
            $(this).addClass("active");
            $(".nav-down").slideUp("slow");
            $(this).parents("li").find(".nav-down").slideDown("slow");  
          }else{
            $(this).parents("li").find(".nav-down").slideUp("slow");
            $(this).removeClass("active");
              }
  });
          $('.search-a').click(function () {
            $(".modal-box").fadeIn();
          });
          $('.modal-back').click(function () {
            $(".modal-box").fadeOut();
          });





 $('.tabs-hover a').hover(function () {
            $(this).tab('show');
          });
		  
		  
		  











