let butt = document.querySelector(".add-action"),
  input = document.querySelector(".text-action"),
  tasks = document.querySelector(".tasks");
class TaskList {
  constructor(text) {
    this.tasks = ["clean"];
    this.descr = text;
  }
  addTask(text) {
    this.tasks.push(text);
  }
}
let Task = new TaskList();
Task.addTask("Clean flat");
// console.log(Task);
butt.addEventListener("click", (e) => {
  e.preventDefault();
  const paragraf = document.createElement("p");
  paragraf.textContent = input.value;
  tasks.append(paragraf);
  console.log(input.value);
  input.value = "";
});
