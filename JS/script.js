let butt = document.querySelector("button.add-action"),
  input = document.querySelector(".text-action"),
  tasks = document.querySelector(".tasks"),
  imgButton = document.querySelector(".img-button"),
  addAction = document.querySelector(".add-action"),
  sortDesc = document.querySelector(".sort-desc"),
  sortAsc = document.querySelector(".sort-asc");
class TaskList {
  constructor(text) {
    this.tasks = ["clean"];
    this.descr = text;
  }
  addTask(text) {
    this.tasks.push(text);
  }
  hoverButton(e) {
    e.target.style.backGroundColor = black;
  }
}
let Task = new TaskList();
Task.addTask("Clean flat");
// console.log(Task);
butt.addEventListener("click", (e) => {
  e.preventDefault();
  // созддание параграфа для текста
  const paragraf = document.createElement("p"),
    img = document.createElement("img");
  img.src = "IMG/TaskImg/Group 77.png";
  img.classList.add("remove");
  paragraf.textContent = input.value;
  paragraf.append(img);
  tasks.append(paragraf);
  input.value = "";
});
butt.addEventListener("mouseenter", (e) => {
  e.target.style.backgroundColor = "#9953F1";
  imgButton.style.backgroundColor = "#AA68FE";
});
butt.addEventListener("mouseleave", (e) => {
  e.target.style.backgroundColor = "#833AE0";
  imgButton.style.backgroundColor = "#9953F1";
});
addAction.addEventListener("click", (e) => {
  let remove = document.querySelectorAll(".remove");
  remove.forEach((element) => {
    element.addEventListener("mouseenter", (elem) => {
      elem.target.src = "IMG/TaskImg/Group 70.png";
      elem.target.addEventListener("click", (item) => {
        // item.remove();
        console.log(item);
      });
    });
    element.addEventListener("mouseleave", (e) => {
      e.target.src = "IMG/TaskImg/Group 77.png";
    });
  });
});
sortDesc.addEventListener("mouseenter", (e) => {
  e.target.src = "IMG/Group 73.png";
});
sortDesc.addEventListener("mouseleave", (e) => {
  e.target.src = "IMG/Group 74.png";
});
sortAsc.addEventListener("mouseenter", (e) => {
  e.target.src = "IMG/Group 91.png";
});
sortAsc.addEventListener("mouseenter", (e) => {
  e.target.src = "IMG/Group 90.png";
});
