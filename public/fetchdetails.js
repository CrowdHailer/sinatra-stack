var stackoverflow_path = 'http://arcane-springs-5149.herokuapp.com/' + gon.stackoverflow_id;
$.get(stackoverflow_path, function(data) {
  alert(data);
  console.log(data);
  $('#stackoverflow-details-container').append(data);
});