var len
$(document).ready(function(){
  len = $('.project-pop').length;
});
$(document).mouseup(function (e) {
  for (var i=0; i<len; i++)
  {
    var text = "#open"+i;
    if($(text).css('display') != 'none')
    {
      var container = $(".project-pop-outline");
      if (!container.is(e.target) && container.has(e.target).length === 0){
        window.location.href = "#close"
      }
    }
  }

});
