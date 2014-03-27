var stackoverflow_path = 'http://arcane-springs-5149.herokuapp.com/' + gon.stackoverflow_id;
$.get(stackoverflow_path, function(data) {
  data = data['items'][0];
  var $list = $('<ul>');
  $('<li>').html('reputation '+data['reputation']).append_to($list);
  $('<li>').html('badges gold '+data['badge_counts']['gold']).append_to($list);
  $('<li>').html('badges silver '+data['badge_counts']['silver']).append_to($list);

  // $.each(data, function(item) {
  //   var $element = $('<li>').html(data[item]);
  //   $list.append($element);
  // });
  $('#stackoverflow-details-container').append($list);
});