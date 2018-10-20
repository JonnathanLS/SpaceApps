var util = {
    toggleDateTimeCulture: function (dateTime) {
        if (typeof dateTime != 'string') {
            throw 'Function parameter must be a string.';
        }

        var separador = dateTime.match(/\D/)[0];

        var dateComponents = dateTime.split(separador);

        var newDateArray = [dateComponents[1], dateComponents[0], dateComponents[2]];

        return newDateArray.join(separador);
    },
    changeClass: function (htmlElement, newClass, classGroup) {
        $.each(classGroup, function (index, className) {
            if ($(htmlElement).hasClass(className)) {
                $(htmlElement).removeClass(className);
            }
        });
        $(htmlElement).addClass(newClass);
    },

    sumOfArray: (arr) => {
        let sum = 0;
        for (let n in arr) {
            sum += parseFloat(arr[n]);
        }
        return sum;
    },

    weightedAvg: (arrValues, arrWeights) => {

        let dividend = arrValues.map((values, index) => {
            return values * arrWeights[index];
        })

        console.log(dividend);


        let sumofDividend = util.sumOfArray(dividend);
        let sumofdivider = util.sumOfArray(arrWeights);

        return sumofDividend / sumofdivider;
    }
}


