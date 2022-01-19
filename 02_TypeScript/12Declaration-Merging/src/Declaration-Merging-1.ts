///////////
interface Cart {
  calculateTotal(): number;
}
///////////

interface Cart {
  x: number;
}

interface Cart {
  calculateTotal(options: { discountCode: number }): number;
}

let myCart: Cart = {
  x: 1,
  calculateTotal(options?: { discountCode: number }) {
    if (options && options.discountCode) {
      // Do something.
    }
    return 1;
  },
};

// Utility types https://www.typescriptlang.org/docs/handbook/utility-types.html
// Conditional types https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types
