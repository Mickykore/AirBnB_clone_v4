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
});
