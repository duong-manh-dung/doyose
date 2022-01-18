$(".iframe-box iframe.active").before('<i class="fas fa-caret-left"></i>');

$(".iframe-box").click(function() {
  $(".iframe-box iframe").removeClass('active');
  $(this).children('iframe').addClass('active');
  $("i").remove();
  $(this).children('iframe').before('<i class="fas fa-caret-left"></i>');

  var link = $(this).children('iframe').attr('src');
  $(".big-video").children("iframe").attr('src', link);
})
