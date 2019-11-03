$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');
      console.log(headphonesColor)
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

  $('.cable-choose input').on('click', function(){
    var checked = $(this).attr('data-image');
    var radiostate = $(this).attr('id')
    $('.active').removeClass('active');
    $('.left-column img[data-image = ' + checked + ']').addClass('active');
    $(this).addClass('active');
    if (radiostate === 'purple')
    {
   console.log('pink')
      $('input:radio[value=pink]').prop("checked", false)
    } else {
   console.log('pink')
   $('input:radio[value=purple]').prop("checked", false)
    }
  })
});
