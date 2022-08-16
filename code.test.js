const {stringLength, reverseString, Calculator, capitalize} = require('./code');

describe('Task 1', () => {

  it('Test1', () => {
    const string = 'nineLette';
    expect(stringLength(string)).toBe(9);
  });

  it('Trowing error Test2', () => {
    const string = 'eisanteioanrso';
    expect(() => stringLength(string)).toThrow(Error);
  });

});

describe('Task 2', () => {

  it('Test1 reverse', () => {
      const string = 'hola';
      expect(reverseString(string)).toBe('aloh');
    }
  );

});

describe('Task 3 Add', () => {

  it('Test1', () => {
    expect(Calculator.add(5, 7, 9)).toBe(21);
  });

  it('Test2', () => {
    expect(Calculator.add(5, 7)).toBe(12);
  });

  it('Test3', () => {
    expect(Calculator.add(3, 6, 8, 25)).toBe(42);
  });

});

describe('Task 3 substract', () => {
  it('Test1', () => {
    expect(Calculator.substract(3, 8)).toBe(-5);
  });

  it('Test2', () => {
    expect(Calculator.substract(5, 2)).toBe(3);
  });

  it('Test3', () => {
    expect(Calculator.substract(20, 3)).toBe(17);
  });

});

describe('Task 3 Multiply', () => {

  it('Test1', () => {
    expect(Calculator.multiply(3, 8)).toBe(24);
  });

  it('Test2', () => {
    expect(Calculator.multiply(5, 2)).toBe(10);
  });

  it('Test3', () => {
    expect(Calculator.multiply(20, 3)).toBe(60);
  });

});

describe('Task 3 Divide', () => {

  it('Test1', () => {
    expect(Calculator.divide(80, 8)).toBe(10);
  });

  it('Test2', () => {
    expect(Calculator.divide(5, 2)).toBe(2.5);
  });

  it('Test3', () => {
    expect(Calculator.divide(20, 4)).toBe(5);
  });

});

test('Task 4 capitalize', () => {
  const string = 'hola';
  expect(capitalize(string)).toBe('Hola');
});