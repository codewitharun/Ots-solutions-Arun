let addBtn = document.getElementById("add");
let clearBtn = document.getElementById("clear");
let persistBtn = document.getElementById("persist");
let val = document.getElementById("toDodata");
let ulData = document.getElementById("toDoItems");

let result = [];
window.onload = () => {
  let session = JSON.parse(sessionStorage.getItem("todo"));
  //   item = item.trim();

  if (session) {
    for (let i = 0; i < session.length; i++) {
      let list = document.createElement("li");
      list.className = "listItems";
      let xmark = document.createElement("span");
      result.push(session[i]);
      list.innerHTML = session[i];
      ulData.appendChild(list);
      list.appendChild(xmark);
      list.style.width = "100px";
      xmark.style.fontFamily = "fantasy";
      xmark.style.marginLeft = "20px";
      xmark.innerHTML = "X";
      console.log("Data in session Storage", session);

      //dfg

      list.addEventListener("click", () => {
        list.style.backgroundColor = "green";
      });
      xmark.addEventListener("click", () => {
        list.remove();
        xmark.remove();
        console.log(session[i]);
        var ls_data = JSON.parse(sessionStorage.getItem("todo"));
        var index = ls_data.indexOf(session[i]);
        console.log("Choose index:" + index);
        if (index == -1) {
          // if not matched selected index
        } else {
          // is matched, remove...

          ls_data.splice(index, 1);
          sessionStorage.setItem("todo", JSON.stringify(ls_data));
          console.log(ls_data);
          //   process("my_storage");
        }
      });
    }
  }
};
addBtn.addEventListener("click", add);
function add() {
  // ----code for adding
  let item = val.value;
  item = item.trim();
  result.push(item);
  if (item) {
    let list = document.createElement("li");
    list.className = "listItems";
    let xmark = document.createElement("span");
    list.innerHTML = item;
    list.style.width = "100px";
    xmark.style.marginLeft = "20px";
    xmark.style.fontFamily = "fantasy";
    xmark.innerHTML = "X";
    // xmark.innerHTML = "X";
    ulData.appendChild(list);

    list.appendChild(xmark);
    // ------------ code for removing done items ---------------------
    list.addEventListener("click", () => {
      list.style.backgroundColor = "green";
    });
    xmark.addEventListener("click", () => {
      list.remove();
      xmark.remove();
      for (let i = 0; i < result.length; i++) {
        var index = result.indexOf(result[i]);
        console.log("Choosen index:" + index);
        if (index == -1) {
        } else {
          result.splice(index, 1);

          sessionStorage.setItem("todo", JSON.stringify(result));
        }
      }
    });
  }
  val.value = " ";
}

// -------------- code for removing all items-------------------

clearBtn.addEventListener("click", () => {
  //   ulData.innerHTML = " ";
  sessionStorage.removeItem("todo");
  result = [];
  console.log(result);
  console.log(sessionStorage.getItem("todo"));
});

persistBtn.addEventListener("click", persist);

function persist() {
  // -----------code for persist storage---------

  sessionStorage.setItem("todo", JSON.stringify(result));
  console.log(result);
}
