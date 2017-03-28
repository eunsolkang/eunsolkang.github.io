$(document).mouseup(function (e) {
  if($('#open').css('display') != 'none')
  {
    var container = $(".project-pop-outline");
    if (!container.is(e.target) && container.has(e.target).length === 0){
      window.location.href = "#close"
    }
  }

});
