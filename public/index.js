$(document).ready(function() {
  
  $('#show-password-form').click(function() {
    var target = $(this).attr('data-target')
    console.log(target)
    $(target).collapse('toggle');
  });
  
  var toggle_btn = new ToggleButton('#delete-image', {tooltip: 1});
  
  var file_preview = new FilePreview({
    container: '#avatar-preview',
    clear: '#image-preview-clear',
    btn: '#image-preview-btn'
  });  
  
  // enables tooltips
  $('[data-toggle="tooltip"]').tooltip({trigger: 'hover'});
  
  //console.log('index - loaded');
  var page_links = $('#page-nav a');
  if(page_links.length > 0) {
    var pathname = window.location.pathname.split(/[#?]/)[0];
    var active = page_links.toArray().map($).find(function(el) {
      return el.attr('href') == pathname;
    });
    if(active.length == 1) {
      page_links.removeClass('active');
      active.addClass('active');
    }
  }
  
});
