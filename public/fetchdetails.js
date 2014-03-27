var stackoverflow_path = 'http://arcane-springs-5149.herokuapp.com/' + gon.stackoverflow_id;
$.get(stackoverflow_path, function(data) {
  data = data['items'][0];
  var $list = $('<li>'); 
  alert(data);
  console.log(data);
  $.each(data function(item) {
    console.log(item);
  });
  $('#stackoverflow-details-container').append(data);
});