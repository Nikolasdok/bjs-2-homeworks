
"use strict"

function quadraticEquation(a, b, c) {
    if(a == 0)
        return false;
    
    let D = b * b - 4 * a * c;
    console.log('D = ' + D);
    if(D < 0) {
        return false;
    res['discriminant'] = D;
    } else if(D == 0) {
        res['quadratic roots'] = (-b + Math.sqrt(D)) / (2 * a);
    } else if(D > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        res['quadratic roots'] = tmp;
    }
    return res;
}
let res = {};
quadraticEquation(4, 9, 5);
console.log(res);


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;


  "use strict";

  let now = new Date();
  
  if (isNaN(percent) || percent < 0) {
    return(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  } else if (isNaN(contribution)) {
    return(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  } else if (isNaN(amount)) {
    return(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  } else if (now > date) {
    return(`Параметр "Срок ипотеки" содержит неправильное значение "${date}"`);
  } else {
    let n = (date.getFullYear() - now.getFullYear()) * 12 - date.getMonth() + now.getMonth();
    let s = amount - contribution;
    let p = percent / 1200;
    let payment = s * (p + (p / (((1 + p)**n) - 1)));
    totalAmount = Math.round(n * payment*100)/100;
  }
  

  return totalAmount;
}
