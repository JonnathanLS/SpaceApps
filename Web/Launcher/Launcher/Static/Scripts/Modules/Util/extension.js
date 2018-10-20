var s;
var extensionJs = {
    settings: {
        currencyFormatTarget: $('.data-currency-format'),
        dateMaskTextBox: '.custom-date-mask'
    },

    init: function() {
        s = this.settings;
        this.events();
    },

    events: function () {
        //Quando "document" carregar,
        //todos os campos que recebem a "class" definida em currencyFormatTarget
        //terão seus textos formatados para tipo "moeda".
        $.each(s.currencyFormatTarget, function () {
            try {
                var new_value = setCurrencyFormat($(this).val());
                $(this).val(new_value);
            }
            catch{

            }
        });

        $(s.currencyFormatTarget).keyup(function () {
            const numberWithCommas = (number) => {
                var newNumber = number.replace(/\./g,'');
                return newNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }
            var newValue = numberWithCommas($(this).val());
            $(this).val(newValue);
        });

        loadDateMaskTextBoxEvents();
    }
}

$(function () {
    console.log('extension.js');

    extensionJs.init();
});

function loadDateMaskTextBoxEvents() {
    $('body').on('input propertychange paste keyup keydown', s.dateMaskTextBox, function (e) {
        var valor = $(e.target).val();
        var comprimento = valor.length;
        if (comprimento >= 10) {
            $(e.target).val($(e.target).val().substring(0, 10));
            return;
        }
        var ultimoDigito = valor[valor.length - 1];
        if ((comprimento == 3 || comprimento == 6) && ultimoDigito != '/') {
            ultimoDigito = '/' + ultimoDigito;
            $(e.target).val(valor.substring(0, valor.length - 1) + ultimoDigito);
        }
    });

    $('body').on('click keyup keydown', s.dateMaskTextBox, function (e) {
        moveCursorToEnd(e.target);
    });
}

function moveCursorToEnd(el) {
    if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
}

function setCurrencyFormat(currency) {
    try {
        var empty_elements = [NaN, undefined, null, ""];
        if (empty_elements.includes(currency)) { //Verificar se é NaN
            throw "";
        }
        currency = currency.replace(/,/g, '.')
        currency = Number(currency);
        if (isNaN(currency)) { //Verificar se não é número
            throw currency;
        }
    }
    catch(currency){
        return currency;
    }

    return currency.toLocaleString(undefined, { maximumFractionDigits: 2 }).toString();
}

function CurrencyToInt(currencyString) {
    try {
        var currencyInt = currencyString.replace('R$', '')
            .replaceAll('.', '')
            .replaceAll(',', '.')
            .trim();

        currencyInt = parseFloat(currencyInt).toFixed(0);
    }
    catch (err) {
        currencyInt = 0;
    }

    return isNaN(currencyInt) ? 0 : parseInt(currencyInt);
}


function formToObject(form) {
    /*
        form.serializeArray() = [
                                    { name:x, value:y },
                                    { name:a, value:b }
                                ]
    */
    var obj = serializeArrayToObject(form.serializeArray());
    /*
        obj = {
                x:y,
                a:b
            }
    */

    for (let prop in obj) {
        //Valores strings numéricos com decimais recebem parseFloat
        if (!isNaN(obj[prop])) {//Se for numérico
            obj[prop] = parseFloat(obj[prop]);
        }
    }

    return obj;
}
function serializeArrayToObject(serializedObj) {
    var obj = {};
    for (let i = 0; i < serializedObj.length; i++) {
        obj[serializedObj[i].name] = serializedObj[i].value;
    }
    return obj;
}