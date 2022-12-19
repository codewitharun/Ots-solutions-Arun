const myfunc = (num) => num * 2;

const hof = (hoFunction, num) => hoFunction(num + 5);
console.log(hof(myfunc, 30));
