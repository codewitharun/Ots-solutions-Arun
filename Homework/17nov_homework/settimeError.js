// fetch(`https://api.github.com/user/codewitharun`)
//   .then((response) => (response.ok ? response.json() : console.log("first")))

//   .then((githubUser) => {
//     console.log(githubUser);
//   })
//   .catch((error) => console.log(error.message));

function do1() {
  return new Promise(function (resolve, reject) {
    throw new Error("do1");
    setTimeout(resolve, 1000);
  });
}

function do2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error("do2"));
    }, 1000);
  });
}

do1()
  .then(do2)
  .catch(function (err) {
    //console.log(err.stack); // This is the only way to see the stack
    throw err; // This does nothing
  });
