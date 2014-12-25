$(function(){
  var $portfolioLink = $("a.portfolio-link");
  var $portfolioContent = $("div#portfolio-content");
  var $mainContent = $("div#center-pane");

  var linkDoNothing = function(e){
    e.preventDefault();
    return false;
  };

  var openPortfolio = function(e){
    if ($("#sidebar").hasClass("open")){
      window.toggleSidebar();
    }


    if (!$portfolioContent.hasClass("opened")){
      //expand portfolio area
      $portfolioContent.css("width", "100%");
      //add class opened
      $portfolioContent.addClass("opened");
      //addblur
      $mainContent.addClass("blur");

      //disabled link
      $portfolioLink.unbind();
      $portfolioLink.on("click", linkDoNothing);

      $portfolioContent.on("transitionend", function(){
        //re-enable link
        $portfolioLink.unbind();
        $portfolioLink.on("click", openPortfolio);
      })


    } else {
      $portfolioContent.css("width", "0%");
      $portfolioContent.removeClass("opened");

      $portfolioLink.unbind();
      $portfolioLink.on("click", linkDoNothing);


      $portfolioContent.one("transitionend", function(){
        $mainContent.removeClass("blur");

        $portfolioLink.unbind();
        $portfolioLink.on("click", openPortfolio);
      });

    }
  }

  window.togglePortfolio = openPortfolio;


  $portfolioLink.on("click", openPortfolio);
})
