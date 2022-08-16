function stringLength(string) {
  const leng = string.length;

  if(leng > 0 && leng <= 10) return leng;
  
  throw new Error('The string has more than 10 chars or less than one');
}

function reverseString(string) {
  const reverse = string.split('').reverse().join('');
  return reverse;
}

class Calculator{
  static add(...parms) {
    const sum = parms.reduce((acumulator, item) => acumulator + item, 0);
    return sum;
  }

  static substract(a, b) {
    return a-b;
  }

  static divide(a, b) {
    return a/b;
  }

  static multiply(a, b) {
    return a*b;
  }
}

function capitalize(string){

  const temp = string.replace(/^(\w)/, match => match.toUpperCase());
  
  return temp;
}

module.exports = {stringLength, reverseString, Calculator, capitalize};