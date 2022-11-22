// ----------------------- task 1-----------------------------------------
// call ones function

let called = 1;
function final() {
  if (called == 1) {
    console.log("I am trying to create a call once function");
  } else {
    console.log("testingggg");
  }
  called += 1;
}
final();
console.log("trying again");



final();
