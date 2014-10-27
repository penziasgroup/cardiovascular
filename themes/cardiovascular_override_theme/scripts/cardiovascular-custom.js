jQuery(document).ready(function($) {

if($('body').hasClass('page-faculty')) {
  $('.bio-full-toggle a').click(
    function() {
      $(this).parent().parent().toggleClass('open').children('.bio-full').slideToggle(200);
      return false;
    }
  );
}

}); // end of doc ready