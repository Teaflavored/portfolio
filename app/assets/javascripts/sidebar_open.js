$(function(){

  if ($("#sidebar").height() < 630){
    $("div.mail").css("display", "none");
  } else {
    $("div.mail").css("display", "block");
  }

  var sidebarOpenFn = function(){
    if ($("div#portfolio-content").hasClass("opened")){
      window.togglePortfolio();
    }
    var opened = $("#sidebar").hasClass("open");

    var open = function(){
      $("#sidebar").addClass("open");

      var windowWidth = $(window).width();
      var sidebarWidth = $("#sidebar").width();
      var currentBodyWidth = $("body").width();
      var newBodyPercent = (currentBodyWidth - sidebarWidth) / windowWidth * 100;
      //adjust width of body
      $("body").animate({
        width: newBodyPercent + "%"
      }, 500);


    }

    var close = function(){
      $("#sidebar").removeClass("open");
      $("body").animate({
        width: "100%"
      }, 500);
    }

    if (opened) {
      close();
    } else {
      open();
    }
  }

  window.toggleSidebar = sidebarOpenFn;

  $(window).on("resize", function(){
    if ($("#sidebar").hasClass("open")){
      var windowWidth = $(window).width();
      var sidebarWidth = $("#sidebar").width();
      var currentBodyWidth = $("body").width();
      var newBodyPercent = (windowWidth - sidebarWidth) / windowWidth * 100;


      $("body").css({
        "width": newBodyPercent + "%"
      });

    }
    if ($("#sidebar").height() < 630){
      $("div.mail").css("display", "none");
    } else {
      $("div.mail").css("display", "block");
    }
  });

  $("span.side-bar-open").on("click", sidebarOpenFn);
  $("button.about-me").on("click", sidebarOpenFn);
})
