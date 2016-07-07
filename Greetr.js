(function(global, $) {

    var Greetr = function(firstname, lastname, language) {
      return new Greetr.init(firstname, lastname, language)
    }

    var supportedLangs = ['en', 'es'];

    var greetings = {
      en: 'Hello',
      es: 'Hola'
    };

    var formalGreetings = {
      en: 'Greetings',
      es: 'Saludos'
    };

    var logMessages = {
      en: 'Logged in',
      es: 'Inicio sesion'
    };

    Greetr.prototype = {

      fullName: {
        return this.fullname + ' ' + this.lastname;
      },

      validate: function() {
        supportedLangs.indexOf(this.lanuage)
      }

    };

    Greetr.init = function(firstname, lastname, language) {
      var self = this;

      self.firstname = firstname || "";
      self.lastname = lastname || "";
      self.laguage = language || "en";
    }

    Greetr.init.prototype = Greetr.prototpe;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
