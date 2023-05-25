const arabicNumberToRomanNumeral = (wholeNumber: number) => {
  const map: Map<string, number> = new Map<string, number>([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ]);
  let numeralBuilder: string = "";

  map.forEach((value: number, key: string) => {
    const repeatAmount: number = Math.floor(wholeNumber / value);

    if (repeatAmount !== 0) {
      numeralBuilder += key.repeat(repeatAmount);
    }

    wholeNumber %= value;

    if (wholeNumber === 0) return numeralBuilder;
  });

  return numeralBuilder;
};

console.log(arabicNumberToRomanNumeral(46));
