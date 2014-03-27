var stackoverflow_path = 'http://arcane-springs-5149.herokuapp.com/' + gon.stackoverflow_id;
$.get(stackoverflow_path, function(data) {
  data = data['items'][0];
  var $list = $('<ul>'); 
  console.log(data);
  $.each(data, function(item) {
    var $element = $.('<li>').html(data[item]);
    $list.append($element);
    console.log(item);
  });
  $('#stackoverflow-details-container').append($list);
});