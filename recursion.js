const sumAll = (n) => {
  if (n == 1) {
    return 1;
  }
  return n + sumAll(n - 1);
};

/* let answer1 = sumAll(3);
console.log(answer1); */

const exponent = (a, b) => {
  if (b == 1) {
    return 1;
  }
  return a ** exponent(a, b - 1);
};

/*let answer2 = exponent(2, 4);
console.log(answer2); */

const factorial = (n) => {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

/* let answer3 = factorial(5);
console.log(answer3); */

const productArray = (array) => {
  if (array.length === 0) {
    return 1;
  }
  return array.shift() * productArray(array);
};

/*let answer4 = productArray([1, 2, 3, 1, 1, 5, 0.5]);
console.log(answer4);*/

const nestedObject = (objects, item) => {
  for (let element in objects) {
    if (typeof objects[element] == "object") {
      return nestedObject(objects[element], item);
    }
    if (objects[element] == item) {
      return true;
    }
  }
  return false;
};

/*let answer5 = nestedObject(
  {
    data: {
      info: {
        stuff: {
          thing: {
            moreStuff: {
              magicNumber: 44,
              something: "foo2",
            },
          },
        },
      },
    },
  },
  "foo2"
);

console.log(answer5); */

const totalIntegers = (nestedArray) => {
  if (nestedArray.length == 0) {
    return 0;
  }
  let total = 0;
  let array = nestedArray.shift();
  if (Array.isArray(array)) {
    total = total + totalIntegers(array);
  } else if (Number.isInteger(array)) {
    total += 1;
  }

  return (total += totalIntegers(nestedArray));
};

/*let answer6 = totalIntegers([[1, [3], "hello"], 5]);

console.log(answer6);*/

const squareList = (nestedArray) => {
  if (nestedArray.length == 0) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      total += squareList(nestedArray[i]);
    } else {
      total += nestedArray[i] * nestedArray[i];
    }
  }
  return total;
};

/*let answer7 = squareList([10, [[10], 10], [10]]);
console.log(answer7);*/

const repeat = (times, number) => {
  if (times <= 0) {
    return [];
  }

  return [number].concat(repeat(times - 1, number));
};

/*let answer8 = repeat(8, 5);
console.log(answer8);*/
