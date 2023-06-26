let button = document.querySelector('button');

const moneyConvertion = {
    fromDollar: {
        toEuro: function(money) {
            return money * 0.915074; 
        },
        toYen: function(money) {
            return money * 141.880;
        },
        toRupee: function(money) {
            return money * 81.9366;
        },
        toRuble: function(money) {
            return money * 84.2934;
        },
        toPeso: function(money) {
            return money * 249.281; 
        },
        toLire: function(money) {
            return money * 23.6581;
        },
        toManat: function(money) {
            return money * 1.69996;
        }
    },

    fromEuro: {
        toDollar: function(money) {
            return money * 1.09281; 
        },
        toYen: function(money) {
            return money * 154.948;
        },
        toRupee: function(money) {
            return money * 89.4836;
        },
        toRuble: function(money) {
            return money * 92.0574;
        },
        toPeso: function(money) {
            return money * 272.242; 
        },
        toLire: function(money) {
            return money * 25.8372;
        },
        toManat: function(money) {
            return money * 1.85653;
        }
    },

    fromYen: {
        toDollar: function(money) {
            return money * 0.00704822; 
        },
        toEuro: function(money) {
            return money * 0.00645378;
        },
        toRupee: function(money) {
            return money * 0.577507;
        },
        toRuble: function(money) {
            return money * 0.594118;
        },
        toPeso: function(money) {
            return money * 1.75699; 
        },
        toLire: function(money) {
            return money * 0.16674;
        },
        toManat: function(money) {
            return money * 0.0119817;
        }
    },

    fromRupee: {
        toDollar: function(money) {
            return money * 0.0122046; 
        },
        toEuro: function(money) {
            return money * 0.0111752;
        },
        toYen: function(money) {
            return money * 1.73158;
        },
        toRuble: function(money) {
            return money * 1.02876;
        },
        toPeso: function(money) {
            return money * 3.04236; 
        },
        toLire: function(money) {
            return money * 0.288736;
        },
        toManat: function(money) {
            return money * 0.0207472;
        }
    },

    fromRuble: {
        toDollar: function(money) {
            return money * 0.0118633; 
        },
        toEuro: function(money) {
            return money * 0.0108628;
        },
        toYen: function(money) {
            return money * 1.68317;
        },
        toRupee: function(money) {
            return money * 0.972041;
        },
        toPeso: function(money) {
            return money * 2.95730; 
        },
        toLire: function(money) {
            return money * 0.280664;
        },
        toManat: function(money) {
            return money * 0.0201671;
        }
    },

    fromPeso: {
        toDollar: function(money) {
            return money * 0.00401154; 
        },
        toEuro: function(money) {
            return money * 0.00367321;
        },
        toYen: function(money) {
            return money * 0.599156;
        },
        toRupee: function(money) {
            return money * 0.328692;
        },
        toRuble: function(money) {
            return money * 0.338146; 
        },
        toLire: function(money) {
            return money * 0.0949053;
        },
        toManat: function(money) {
            return money * 0.00681943;
        }
    },

    fromLire: {
        toDollar: function(money) {
            return money * 0.0422688; 
        },
        toEuro: function(money) {
            return money * 0.0387039;
        },
        toYen: function(money) {
            return money * 5.99709;
        },
        toRupee: function(money) {
            return money * 3.46337;
        },
        toRuble: function(money) {
            return money * 3.56298; 
        },
        toPeso: function(money) {
            return money * 10.5368;
        },
        toManat: function(money) {
            return money * 0.0718551;
        }
    },

    fromManat: {
        toDollar: function(money) {
            return money * 0.588251; 
        },
        toEuro: function(money) {
            return money * 0.538638;
        },
        toYen: function(money) {
            return money * 83.4609;
        },
        toRupee: function(money) {
            return money * 48.1993;
        },
        toRuble: function(money) {
            return money * 49.5856; 
        },
        toPeso: function(money) {
            return money * 146.640;
        },
        toLire: function(money) {
            return money * 13.9169;
        }
    }
};

button.addEventListener('click', () => {
    let amount = document.querySelector('input');
    let firstSelect = document.getElementById('mon1').value;
    let secondSelect = document.getElementById('mon2').value;
    let amountValue = amount.value;
    let result,convertedMoney;

    if (firstSelect == '1') {
        if (secondSelect == '9') {
            result = `${amountValue} USD = ${amountValue} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromDollar.toEuro(amountValue);
            result = `${amountValue} USD = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromDollar.toYen(amountValue);
            result = `${amountValue} USD = ${convertedMoney} JPY`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromDollar.toRupee(amountValue);
            result = `${amountValue} USD = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromDollar.toRuble(amountValue);
            result = `${amountValue} USD = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromDollar.toPeso(amountValue);
            result = `${amountValue} USD = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromDollar.toLire(amountValue);
            result = `${amountValue} USD = ${convertedMoney} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromDollar.toManat(amountValue);
            result = `${amountValue} USD = ${convertedMoney} AZN`;
        }
    } else if (firstSelect == '2') {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromEuro.toDollar(amountValue);
            result = `${amountValue} EUR = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            result = `${amountValue} EUR = ${amountValue} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromEuro.toYen(amountValue);
            result = `${amountValue} EUR = ${convertedMoney} JPY`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromEuro.toRupee(amountValue);
            result = `${amountValue} EUR = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromEuro.toRuble(amountValue);
            result = `${amountValue} EUR = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromEuro.toPeso(amountValue);
            result = `${amountValue} EUR = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromEuro.toLire(amountValue);
            result = `${amountValue} EUR = ${convertedMoney} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromEuro.toManat(amountValue);
            result = `${amountValue} EUR = ${convertedMoney} AZN`;
        }
    } else if (firstSelect == '3') {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromYen.toDollar(amountValue);
            result = `${amountValue} YEN = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromYen.toEuro(amountValue);
            result = `${amountValue} YEN = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            result = `${amountValue} YEN = ${amountValue} YEN`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromYen.toRupee(amountValue);
            result = `${amountValue} YEN = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromYen.toRuble(amountValue);
            result = `${amountValue} YEN = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromYen.toPeso(amountValue);
            result = `${amountValue} YEN = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromYen.toLire(amountValue);
            result = `${amountValue} YEN = ${convertedMoney} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromYen.toManat(amountValue);
            result = `${amountValue} YEN = ${convertedMoney} AZN`;
        }
    } else if (firstSelect == '4') {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromRupee.toDollar(amountValue);
            result = `${amountValue} INR = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromRupee.toEuro(amountValue);
            result = `${amountValue} INR = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromRupee.toYen(amountValue);
            result = `${amountValue} INR = ${convertedMoney} YEN`;
        } else if (secondSelect == '12') {
            result = `${amountValue} INR = ${amountValue} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromRupee.toRuble(amountValue);
            result = `${amountValue} INR = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromRupee.toPeso(money);
            result = `${money} INR = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromRupee.toLire(amountValue);
            result = `${amountValue} INR = ${convertedMoney} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromRupee.toManat(amountValue);
            result = `${amountValue} INR = ${convertedMoney} AZN`;
        }
    } else if (firstSelect == '5') {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromRuble.toDollar(amountValue);
            result = `${amountValue} RUB = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromRuble.toEuro(amountValue);
            result = `${amountValue} RUB = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromRuble.toYen(amountValue);
            result = `${amountValue} RUB = ${convertedMoney} YEN`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromRuble.toRupee(amountValue);
            result = `${amountValue} RUB = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            result = `${amountValue} RUB = ${amountValue} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromRuble.toPeso(amountValue);
            result = `${amountValue} RUB = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromRuble.toLire(amountValue);
            result = `${amountValue} RUB = ${convertedMoney} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromRuble.toManat(amountValue);
            result = `${amountValue} RUB = ${convertedMoney} AZN`;
        }
    } else if (firstSelect == '6') {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromPeso.toDollar(amountValue);
            result = `${amountValue} ARS = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromPeso.toEuro(amountValue);
            result = `${amountValue} ARS = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromPeso.toYen(amountValue);
            result = `${amountValue} ARS = ${convertedMoney} YEN`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromPeso.toRupee(amountValue);
            result = `${amountValue} ARS = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromPeso.toRuble(amountValue);
            result = `${amountValue} ARS = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            result = `${amountValue} ARS = ${amountValue} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromPeso.toLire(amountValue);
            result = `${amountValue} ARS = ${convertedMoney} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromPeso.toManat(amountValue);
            result = `${amountValue} ARS = ${convertedMoney} AZN`;
        }
    } else if (firstSelect == '7') {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromLire.toDollar(amountValue);
            result = `${amountValue} TRY = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromLire.toEuro(amountValue);
            result = `${amountValue} TRY = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromLire.toYen(amountValue);
            result = `${amountValue} TRY = ${convertedMoney} YEN`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromLire.toRupee(amountValue);
            result = `${amountValue} TRY = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromLire.toRuble(amountValue);
            result = `${amountValue} TRY = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromLire.toPeso(amountValue);
            result = `${amountValue} TRY = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            result = `${amountValue} TRY = ${amountValue} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromLire.toManat(amountValue);
            result = `${amountValue} TRY = ${convertedMoney} AZN`;
        }
    } else {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromManat.toDollar(amountValue);
            result = `${amountValue} AZN = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromManat.toEuro(amountValue);
            result = `${amountValue} AZN = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromManat.toYen(amountValue);
            result = `${amountValue} AZN = ${convertedMoney} YEN`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromManat.toRupee(amountValue);
            result = `${amountValue} AZN = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromManat.toRuble(amountValue);
            result = `${amountValue} AZN = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromManat.toPeso(amountValue);
            result = `${amountValue} AZN = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromManat.toLire(amountValue);
            result = `${amountValue} AZN = ${convertedMoney} TRY`;
        } else {
            result = `${amountValue} AZN = ${amountValue} AZN`;
        }
    }

    document.getElementById('result').innerHTML = result;
});