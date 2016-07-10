var g = G$('Ryan', 'Gosling');
g.greet().setLang('en').greet(true);

$('#login').click(function() {
  var loginGreetr = G$('John', 'Doe');

  $('#logindiv').hide();

  loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})
