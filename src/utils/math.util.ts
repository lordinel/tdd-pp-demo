import {Shapes} from '../enums/shapes.enum';

export function calculateSum(...args: number[]): number {
  // No refactoring:
  //   if (a === undefined) {
  //     return 0;
  //   }
  //   if (b === undefined) {
  //     return a;
  //   }
  //   if (c === undefined) {
  //     return a + b;
  //   }
  //   return a + b + c;

  // Initial refactoring:
  //  return (a || 0) + (b || 0) + (c || 0);

  // Final refactoring:
  return args.reduce((sum, val) => sum + val, 0);
};

export function calculateArea(shape: Shapes, ...dimensions: number[]): number {
  switch (shape) {
    case Shapes.Circle:
      return Math.PI * Math.pow(dimensions[0], 2);
    case Shapes.Square:
      return Math.pow(dimensions[0], 2);
    case Shapes.Rectangle:
      return dimensions[0] * dimensions[1];
    case Shapes.Triangle:
      return dimensions[0] * dimensions[1] / 2;
    default:
      throw new Error('Invalid shape');
  }
};
