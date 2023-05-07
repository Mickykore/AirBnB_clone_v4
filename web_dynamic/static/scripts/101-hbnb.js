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
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  // 4. Fetch places
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    type: 'GET',
    dataType: 'json',
    success: function (places) {
      for (let i = 0; i < places.length; i++) {
        $('.places').append(`<article>
          <div class="title_box">
          <h2> ${places[i].name}</h2>
          <div class="price_by_night">${{ places[i].price_by_night }}</div>
          </div>
          <div class="information">
          <div class="max_guest">${places[i].max_guest}
          ${places[i].max_guest > 1 ? 'Guests' : 'Guest'}</div>
          <div class="number_rooms">${places[i].number_rooms}
          ${places[i].number_rooms > 1 ? 'Bedrooms' : 'Bedroom'}</div>
          <div class="number_bathrooms">${places[i].number_bathrooms}
          ${places[i].number_bathrooms > 1 ? 'Bathrooms' : 'Bathroom'}</div>
          </div>
          <div class="user">
          </div>
          <div class="description">
          ${places[i].description}
          </div>
          </article>
          `
          );
      }
    }

  })
  
});
