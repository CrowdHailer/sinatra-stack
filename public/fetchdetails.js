var stackoverflow_path = 'http://arcane-springs-5149.herokuapp.com/' + gon.stackoverflow_id;
$.get(stackoverflow_path, function(data) {
  data = data['items'][0];
  var $list = $('<ul>');
  $('<li>').html('reputation '+data['reputation']).appendTo($list);
  $('<li>').html('badges gold '+data['badge_counts']['gold']).appendTo($list);
  $('<li>').html('badges silver '+data['badge_counts']['silver']).appendTo($list);

  // $.each(data, function(item) {
  //   var $element = $('<li>').html(data[item]);
  //   $list.append($element);
  // });
  $('#stackoverflow-details-container').append($list);
});