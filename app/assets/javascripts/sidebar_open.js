$(function(){



  $("span.side-bar-open").on("click", function(){
    var opened = $("#sidebar").hasClass("open")

    var open = function(){
      $("#sidebar").addClass("open")

      var windowWidth = $(window).width()
      var sidebarWidth = $("#sidebar").width()
      var currentBodyWidth = $("body").width()
      var newBodyPercent = (currentBodyWidth - sidebarWidth) / windowWidth * 100
      //adjust width of body
      $("body").animate({
        width: newBodyPercent + "%"
      }, 500)


    }

    var close = function(){
      $("#sidebar").removeClass("open")
      $("body").animate({
        width: "100%"
      }, 500)
    }

    if (opened) {
      close()
    } else {
      open();
    }
  })
})
