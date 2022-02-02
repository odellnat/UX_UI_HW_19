
/*global $ */

$(document).ready(function(){
    $(".toggleImage").click(function(){
      $("#logoImagex").toggleClass("flip");
    });
  });






/*

$(document).ready(function(){
    $(".toggleImage").click(function(){
      $("img").toggleClass("flip");
    });
  });

$( "#toggleImage" ).click(function() {
    $( this ).toggleClass( "flip" );
  });








    $(".toggleImage").click( function() {
        $(".toggleImage").css({'transform': 'rotate(-90deg)'});
        $(".toggleImage").toggleClass()
    });


var rotation = 0;

$(".logoImage").click( function(degrees) {
    $(this).css({'-webkit-transform' : 'logoImage('+ degrees +'deg)',
                 '-moz-transform' : 'logoImage('+ degrees +'deg)',
                 '-ms-transform' : 'logoImage('+ degrees +'deg)',
                 'transform' : 'logoImage('+ degrees +'deg)'});
};

$('.logoImage').click(function() {
    rotation += 90;
    $(this).rotate(rotation);
});





$(document).ready(function() {
    $( ".toggle" ).click( function() {
        $("#compassImage").toggleClass('flip');
    });
});





$('.logoImage').on("hover", function() {
    $(this).find('.logoImage').rotate(90);
});




$(".logoImage").on("click", function(){
  var angle = 0
  $(".logoImage").rotate(angle + 90deg);
});


$(document).ready(function () {
    var timerinterval = 1,     // rotate every X ms 
        degperint = 3,         // rotate X degree per interval
        target = $(".logoImage"),   // which element?
        degrees = 0,
        active = false,
        firststart = false,
        easefirststart = false;
    
    function rotatenow() {
        if (active === true) {
            if (degrees > 359) {
                degrees = 0;    // 360 degrees closes the circle
            } else {
                degrees += degperint;    // add degree-per-interval to rotation
            }

            setRotation(degrees);
        }
    }
    
    function setRotation(deg) {
            target.css({    // rotate element via css
                '-webkit-transform': 'rotate(' + deg + 'deg)',
                    '-moz-transform': 'rotate(' + deg + 'deg)',
                    '-ms-transform': 'rotate(' + deg + 'deg)',
                    'transform': 'rotate(' + deg + 'deg)'
            });       
    }
    
    function easeBack() {
        if (active == false) {
            degrees= (8 * degrees) / 9;   
            setRotation(degrees);
        }
    }
    target.hover(function () {
        active = true;    // activate rotation on every hover
        // only start a timer on first hover
        if (firststart===false) { myintv = setInterval(rotatenow, timerinterval); }
        firststart = true; // we have hovered before
    }, function () {
        active = false;
        if (easefirststart == false)
            setInterval(easeBack, timerinterval);
        easefirststart = true;
        if (degrees < 1) {
            degrees=0;
        }
    });
});










/*

$(".logoImage").on("hover", function(){
    var img=this.find("img")
})


function fade() {
$('.preloader').fadeOut("slow");
}
setTimeout(fade, 3000);





$(".searchButton").on("click", function(){
  $(".searchButton").toggleClass("active");
  if ($(".searchButton").hasClass("active")) {
    $(".searchBar").css("height", "100vh");
    $("#searchForm").css("opacity","1");
    $(".searchIcon").removeClass("fa-search").addClass("fa-times");
  }
  else {
    $(".searchBar").css('height', "0vh");
    $("#searchForm").css("opacity","0");
    $(".searchIcon").removeClass("fa-times").addClass("fa-search");
  }
});







$(".toggle").click(function(){
  $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});
 
*/