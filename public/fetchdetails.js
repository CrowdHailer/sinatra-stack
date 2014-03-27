var stackovweflow_path = 'http://arcane-springs-5149.herokuapp.com/' + gon.stackoverflow_id;
$.get(stackovweflow_path, function(data) {
  $('#stackoverflow-details-container').append(data);
});