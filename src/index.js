document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const dom = document;

  let form = dom.getElementById("create-task-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let ul = dom.getElementById("tasks");
    let li = dom.createElement("li");
    li.innerHTML = event.target[0].value;
    ul.appendChild(li);
    event.target.reset();
  }); 

  let button = dom.getElementById("delete");
  button.addEventListener("click", function (event) {
    event.preventDefault();
    let ul = dom.getElementById("tasks");
    let li = ul.lastElementChild;
    li.remove();
  });

  let button2 = dom.getElementById("delete-all");

  button2.addEventListener("click", function (event) {
    event.preventDefault();
    let ul = dom.getElementById("tasks");
    let li = ul.lastElementChild;
    while (li) {
      ul.removeChild(li);
      li = ul.lastElementChild;
    }
  });
  

});
