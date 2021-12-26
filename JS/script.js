let butt = document.querySelector("button.add-action"),
  input = document.querySelector(".text-action"),
  tasks = document.querySelector(".tasks"),
  sortDesc = document.querySelector(".sort-desc"),
  sortAsc = document.querySelector(".sort-asc"),
  imgButton = document.querySelector(".img-button");
console.log(butt);
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
  // console.log(input.value);
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
