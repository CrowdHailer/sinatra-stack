var stackoverflow_path = 'http://arcane-springs-5149.herokuapp.com/' + gon.stackoverflow_id;
$.get(stackoverflow_path, function(data) {
  $('#stackoverflow-details-container').append(data);
});