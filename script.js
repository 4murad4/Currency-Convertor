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
    let money = amount.value;
    let result,convertedMoney;

    if (firstSelect == '1') {
        if (secondSelect == '9') {
            result = `${money} USD = ${money} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromDollar.toEuro(money);
            result = `${money} USD = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromDollar.toYen(money);
            result = `${money} USD = ${convertedMoney} JPY`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromDollar.toRupee(money);
            result = `${money} USD = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromDollar.toRuble(money);
            result = `${money} USD = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromDollar.toPeso(money);
            result = `${money} USD = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromDollar.toLire(money);
            result = `${money} USD = ${convertedMoney} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromDollar.toManat(money);
            result = `${money} USD = ${convertedMoney} AZN`;
        }
    } else if (firstSelect == '2') {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromEuro.toDollar(money);
            result = `${money} EUR = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            result = `${money} EUR = ${money} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromEuro.toYen(money);
            result = `${money} EUR = ${convertedMoney} JPY`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromEuro.toRupee(money);
            result = `${money} EUR = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromEuro.toRuble(money);
            result = `${money} EUR = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromEuro.toPeso(money);
            result = `${money} EUR = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromEuro.toLire(money);
            result = `${money} EUR = ${convertedMoney} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromEuro.toManat(money);
            result = `${money} EUR = ${convertedMoney} AZN`;
        }
    } else if (firstSelect == '3') {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromYen.toDollar(money);
            result = `${money} YEN = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromYen.toEuro(money);
            result = `${money} YEN = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            result = `${money} YEN = ${money} YEN`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromYen.toRupee(money);
            result = `${money} YEN = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromYen.toRuble(money);
            result = `${money} YEN = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromYen.toPeso(money);
            result = `${money} YEN = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromYen.toLire(money);
            result = `${money} YEN = ${convertedMoney} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromYen.toManat(money);
            result = `${money} YEN = ${convertedMoney} AZN`;
        }
    } else if (firstSelect == '4') {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromRupee.toDollar(money);
            result = `${money} INR = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromRupee.toEuro(money);
            result = `${money} INR = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromRupee.toYen(money);
            result = `${money} INR = ${convertedMoney} YEN`;
        } else if (secondSelect == '12') {
            result = `${money} INR = ${money} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromRupee.toRuble(money);
            result = `${money} INR = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromRupee.toPeso(money);
            result = `${money} INR = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromRupee.toLire(money);
            result = `${money} INR = ${convertedMoney} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromRupee.toManat(money);
            result = `${money} INR = ${convertedMoney} AZN`;
        }
    } else if (firstSelect == '5') {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromRuble.toDollar(money);
            result = `${money} RUB = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromRuble.toEuro(money);
            result = `${money} RUB = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromRuble.toYen(money);
            result = `${money} RUB = ${convertedMoney} YEN`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromRuble.toRupee(money);
            result = `${money} RUB = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            result = `${money} RUB = ${money} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromRuble.toPeso(money);
            result = `${money} RUB = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromRuble.toLire(money);
            result = `${money} RUB = ${convertedMoney} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromRuble.toManat(money);
            result = `${money} RUB = ${convertedMoney} AZN`;
        }
    } else if (firstSelect == '6') {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromPeso.toDollar(money);
            result = `${money} ARS = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromPeso.toEuro(money);
            result = `${money} ARS = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromPeso.toYen(money);
            result = `${money} ARS = ${convertedMoney} YEN`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromPeso.toRupee(money);
            result = `${money} ARS = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromPeso.toRuble(money);
            result = `${money} ARS = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            result = `${money} ARS = ${money} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromPeso.toLire(money);
            result = `${money} ARS = ${convertedMoney} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromPeso.toManat(money);
            result = `${money} ARS = ${convertedMoney} AZN`;
        }
    } else if (firstSelect == '7') {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromLire.toDollar(money);
            result = `${money} TRY = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromLire.toEuro(money);
            result = `${money} TRY = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromLire.toYen(money);
            result = `${money} TRY = ${convertedMoney} YEN`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromLire.toRupee(money);
            result = `${money} TRY = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromLire.toRuble(money);
            result = `${money} TRY = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromLire.toPeso(money);
            result = `${money} TRY = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            result = `${money} TRY = ${money} TRY`;
        } else {
            convertedMoney = moneyConvertion.fromLire.toManat(money);
            result = `${money} TRY = ${convertedMoney} AZN`;
        }
    } else {
        if (secondSelect == '9') {
            convertedMoney = moneyConvertion.fromManat.toDollar(money);
            result = `${money} AZN = ${convertedMoney} USD`;
        } else if (secondSelect == '10') {
            convertedMoney = moneyConvertion.fromManat.toEuro(money);
            result = `${money} AZN = ${convertedMoney} EUR`;
        } else if (secondSelect == '11') {
            convertedMoney = moneyConvertion.fromManat.toYen(money);
            result = `${money} AZN = ${convertedMoney} YEN`;
        } else if (secondSelect == '12') {
            convertedMoney = moneyConvertion.fromManat.toRupee(money);
            result = `${money} AZN = ${convertedMoney} INR`;
        } else if (secondSelect == '13') {
            convertedMoney = moneyConvertion.fromManat.toRuble(money);
            result = `${money} AZN = ${convertedMoney} RUB`;
        } else if (secondSelect == '14') {
            convertedMoney = moneyConvertion.fromManat.toPeso(money);
            result = `${money} AZN = ${convertedMoney} ARS`;
        } else if (secondSelect == '15') {
            convertedMoney = moneyConvertion.fromManat.toLire(money);
            result = `${money} AZN = ${convertedMoney} TRY`;
        } else {
            result = `${money} AZN = ${money} AZN`;
        }
    }

    document.getElementById('result').innerHTML = result;
});