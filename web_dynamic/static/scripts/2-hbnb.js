$(document).ready(function () {
  let checked = [];
  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
      checked.push($(this).attr('data-name'));
    } else {
      checked = checked.filter(e => e !== $(this).attr('data-name'));
    }
    // alert(checked);
    $('.amenities > h4').text(checked);
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    }
  });
});
