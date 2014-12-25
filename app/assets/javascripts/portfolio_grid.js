$(function(){
  var $items = $(".my-items");
  $items.gridList({rows: 3});
  $items.gridList("resize", 3);

  $(window).resize(function(){

    $items.gridList("resize", 3);
  })


  $items.find(".items").on("click", function(e){
    var $clickedBox = $(e.currentTarget);
    var $nonClickedBoxes = $clickedBox.siblings();

    $clickedBox.addClass("active");
    $nonClickedBoxes.removeClass("active");

    $items.find(".items").each(function(listEl){
      if ($(this).hasClass("active")){
        $items.gridList("resizeItem", $(this), 3, 3, "active");
      } else {
        $items.gridList("resizeItem", $(this), 1, 1);
      }
    })

  })
})
