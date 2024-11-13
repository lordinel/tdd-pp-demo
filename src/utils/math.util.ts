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
