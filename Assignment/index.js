let unList = document.getElementById("ulId");

unList.addEventListener("click", colour);

function colour() {
  let list = document.getElementById("idone");
  if (list.style.backgroundColor == "white") {
    list.style.backgroundColor = "white";
  } else list.style.backgroundColor = "blue";
}
