let butt = document.querySelector("button.add-action"),
  input = document.querySelector(".text-action"),
  tasks = document.querySelector(".tasks"),
  imgButton = document.querySelector(".img-button"),
  addAction = document.querySelector(".add-action"),
  sortDesc = document.querySelector(".sort-desc"),
  textWithImage = document.querySelector(".text-with-image"),
  sortAsc = document.querySelector(".sort-asc");
class TaskList {
  constructor(text, id = 0) {
    this.id = id++;
    this.tasks = [];
    this.descr = text;
  }
  addTask(text) {
    this.tasks.push(text);
    // console.log(this.tasks);
  }
  hoverButton(e) {
    e.target.style.backGroundColor = black;
  }
}
let Task = new TaskList();
Task.addTask(" ");
// console.log(Task);
butt.addEventListener("click", (e) => {
  e.preventDefault();
  // созддание параграфа для текста
  const div = document.createElement("div"),
    inputs = document.createElement("input"),
    img = document.createElement("img");
  img.src = "IMG/TaskImg/Group 77.png";
  img.classList.add("remove");
  let remove = document.querySelector("img.remove");
  // console.log(remove);
  inputs.value = input.value;
  Task.addTask(input.value);
  // console.log(Task.tasks);
  div.append(inputs);
  div.append(img);
  // console.log(img.parentElement);
  textWithImage.append(div);
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
  let remove = document.querySelectorAll("img.remove");
  remove.forEach((element) => {
    element.addEventListener("mouseenter", (elem) => {
      elem.target.src = "IMG/TaskImg/Group 70.png";
      elem.target.addEventListener("click", (item) => {
        item.target.parentElement.remove();
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
  sortDesc.classList.toggle("display");
});
sortAsc.addEventListener("mouseleave", (e) => {
  e.target.src = "IMG/Group 90.png";
});

const showArrayDesc = (arr) => {
  // создали параграф для текста

  const textWithImage = document.querySelector(".text-with-image");
  textWithImage.textContent = null;
  arr.sort((a, b) => {
    return a - b;
  });
  arr.forEach((elem) => {
    if (elem !== " ") {
      const div = document.createElement("div"),
        img = document.createElement("img"),
        input = document.createElement("input");
      input.classList.add("input-with-image");
      input.value = elem;
      div.append(input);
      div.append(img);
      img.src = "IMG/TaskImg/Group 77.png";
      img.classList.add("remove");
      img.addEventListener("mouseenter", (e) => {
        e.target.src = "IMG/TaskImg/Group 70.png";
      });
      img.addEventListener("mouseleave", (e) => {
        e.target.src = "IMG/TaskImg/Group 77.png";
      });
      img.addEventListener("click", (e) => {
        e.target.parentElement.remove();
      });
      textWithImage.append(div);
      div.append(input);
      img.classList.add("remove");
      div.append(img);
    }
  });
  sortDesc.classList.add("not-display");
  sortAsc.classList.toggle("not-display");
  sortAsc.classList.add("display");
};
const showArrayAsc = (arr) => {
  // создали параграф для текста

  const textWithImage = document.querySelector(".text-with-image");
  textWithImage.textContent = null;
  arr.sort((a, b) => {
    return b - a;
  });
  arr.forEach((elem) => {
    if (elem !== " ") {
      const div = document.createElement("div"),
        img = document.createElement("img"),
        input = document.createElement("input");
      input.value = elem;
      div.append(input);
      div.append(img);
      img.src = "IMG/TaskImg/Group 77.png";
      img.classList.add("remove");
      img.addEventListener("mouseenter", (e) => {
        e.target.src = "IMG/TaskImg/Group 70.png";
      });
      img.addEventListener("mouseleave", (e) => {
        e.target.src = "IMG/TaskImg/Group 77.png";
      });
      img.addEventListener("click", (e) => {
        e.target.parentElement.remove();
      });
      textWithImage.append(div);
      div.append(input);
      img.classList.add("remove");
      div.append(img);
    }
  });
  sortAsc.classList.add("not-display");
  sortDesc.classList.toggle("not-display");
  sortDesc.classList.add("display");
};

sortDesc.addEventListener("click", () => {
  // console.log(Task.tasks);
  showArrayDesc(Task.tasks);
});
sortAsc.addEventListener("click", () => {
  // console.log("Task.tasks");
  showArrayAsc(Task.tasks);
});
