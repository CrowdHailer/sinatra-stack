var stackoverflow_path = 'http://arcane-springs-5149.herokuapp.com/' + gon.stackoverflow_id;
$.get(stackoverflow_path, function(data) {
  data = data['items'][0];
  var $list = $('<ul>').addClass('inline-list'); 
  console.log(data);
	$('<li>').html('Location: '+data['location']).appendTo($list);
	$('<li>').html('Reputation: '+data['reputation']).appendTo($list);
	$('<li>').html('Gold Badges: '+data['badge_counts']['gold']).appendTo($list);
	$('<li>').html('Silver Badges: '+data['badge_counts']['silver']).appendTo($list);
	$('<li>').html('Bronze Badges: '+data['badge_counts']['bronze']).appendTo($list);
  $('#stackoverflow-details-container').append($list);
});