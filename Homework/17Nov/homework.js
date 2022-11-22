function Student(name, roll, age) {
  this.name = name;
  this.roll = roll;
  this.age = age;
}
_nov;

// const Student = new student();
Student.name = "Arun Kumar";
Student.roll = 1;
Student.age = 22;
console.log(Student);

const obj = { name: "Arun", class: "mca", roll: 183 };
console.log(obj);

const Student2 = new Object();
Student2.name = "Vishu Kumar";
Student2.Address = "Patna";
console.log(Student2);

function final() {
  let cache = {};
  return function multiplication(x, y) {
    if (cache[x + "" + y] || cache[y + "" + x]) {
      return `Already calculated multiplication of ${x},${y} is ${
        cache[x + "" + y]
      }`;
    }
    let result = x * y;
    cache[x + "" + y] = result;
    cache[y + "" + x] = result;
    return `The multiplication of the numbers ${x},${y} is ${result}`;
  };
}
const memoizedMultiplication = final();
console.log(memoizedMultiplication(4, 4));
console.log(memoizedMultiplication(6, 4));
console.log(memoizedMultiplication(4, 7));
console.log(memoizedMultiplication(7, 2));
console.log(memoizedMultiplication(4, 4));

function getData(neighbours) {
  const data = fetch(`https://restcountries.com/v2/name/${neighbours}`)
    .then((result) => {
      if (!result.ok) throw new Error("the country has no neighbours.");
      return result.json();
    })
    .then((data1) => {
      console.log(data1[1].borders[0]);
    })
    .catch((err) => console.log(err));
}

console.log(getData("india"));
