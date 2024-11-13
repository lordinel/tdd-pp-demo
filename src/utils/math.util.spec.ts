import {Shapes} from '../enums/shapes.enum';
import {calculateSum, calculateArea} from './math.util';

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

  describe('calculateArea', () => {
    it('should return the area of a circle', () => {
      expect(calculateArea(Shapes.Circle, 5)).toBeCloseTo(78.54, 2);
    });

    it('should return the area of a square', () => {
      expect(calculateArea(Shapes.Square, 5)).toBe(25);
    });

    it('should return the area of a rectangle', () => {
      expect(calculateArea(Shapes.Rectangle, 5, 5)).toBe(25);
    });

    it('should return the area of a triangle', () => {
      expect(calculateArea(Shapes.Triangle, 5, 5)).toBe(12.5);
    });

    it('should throw an error for an invalid shape', () => {
      expect(() => calculateArea('INVALID' as Shapes, 5)).toThrowError('Invalid shape');
    });
  });
});
