const memorize = (fn: (num1: number, num2: number) => number) => {
  const cache: Map<string, number> = new Map();

  const cached = (num1: number, num2: number): number => {
    const argsKey = JSON.stringify(`${num1.toString()}+${num2.toString()}`);

    if (cache.get(argsKey) === undefined) {
      const result: number = fn.call(this, num1, num2);
      cache.set(argsKey, result);
      return cache.get(argsKey) as number;
    } else {
      return cache.get(argsKey) as number;
    }
  };

  return cached;
};

const add = (x: number, y: number): number => {
  return x + y;
};

const addMem = memorize(add);

console.log("Calling 1, 2", addMem(1, 2));
console.log("Calling 1, 2", addMem(1, 2));
console.log("Calling 2, 2", addMem(2, 2));
console.log("Calling 2, 2", addMem(2, 2));
