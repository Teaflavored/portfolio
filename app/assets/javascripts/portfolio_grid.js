$(function(){
  var $items = $(".my-items");
  $items.gridList({rows: 3});
  $items.gridList("resize", 3);

  $(window).resize(function(){
    
    $items.gridList("resize", 3);
  })
})
