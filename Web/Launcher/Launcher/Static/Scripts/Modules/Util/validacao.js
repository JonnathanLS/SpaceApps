var s;
var validacaoJs = {
    settings: {
        numericFieldTarget: $('.campo-numerico'),
        numericFieldTargetDelegation: '.campo-numerico-delegate'
    },

    init: function () {
        s = this.settings;
        this.events();
    },

    events: function () {
        s.numericFieldTarget.keypress(function () {
            return numericField();
        });

        $('body').on('keypress', s.numericFieldTargetDelegation, function () {
            return numericField();
        });
    }
};

$(function () {
    console.log('validacao.js');

    validacaoJs.init();
});

function numericField() {
    if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;
}