import {calculateSum} from './math.util';

describe('MathUtil', () => {
  describe('calculateSum', () => {
    it('should return 0 when no numbers are passed', () => {
      expect(calculateSum()).toBe(0);
    });

    it('should return the number when only one number is passed', () => {
      expect(calculateSum(5)).toBe(5);
    });

    it('should return the sum of two numbers', () => {
      expect(calculateSum(5, 5)).toBe(10);
    });

    it('should return the sum of three numbers', () => {
      expect(calculateSum(5, 5, 5)).toBe(15);
    });

    it('should return the sum of four numbers', () => {
      expect(calculateSum(5, 5, 5, 5)).toBe(20);
    });

    it('should return the sum of five numbers', () => {
      expect(calculateSum(5, 5, 5, 5, 5)).toBe(25);
    });
  });
});
