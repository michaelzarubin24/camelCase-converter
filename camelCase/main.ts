import { Component } from "./core/component";
import { prepend } from "./func/prepend";
import { header } from "./components/Header";
import { main } from "./components/Main";
import { toCamelCase } from "./func/toCamelCase";
import "./src/style.scss";

const root = document.querySelector("body");

// -----camel-case-app-------
const app = new Component({
  tagName: "div",
  attrs: {
    id: "app",
  },
  children: [header, main],
});

const application = app.toHTML();
prepend(root, application);

// ----events
const addBtn = document.getElementById("add") as HTMLButtonElement;
const removeBtn = document.getElementById("remove") as HTMLButtonElement;
const inputField = document.getElementById("input") as HTMLInputElement;
const resultList = document.getElementById("result-list") as HTMLElement;
const storedKey = localStorage.getItem("camelCased");
const arr = storedKey ? storedKey.split(",") : [];
resultList.textContent = arr.join(", ");

addBtn?.addEventListener("click", (event: Event) => {
  event.preventDefault();
  const inputElement = inputField.value;

  if (inputElement) {
    const camelCaseValue = toCamelCase(inputElement);
    const resultItem = new Component({
      tagName: "div",
      textContent: camelCaseValue,
      className: "result-item",
    });

    if (resultList) {
      prepend(resultList, resultItem.toHTML());
    }
    arr.push(camelCaseValue);
    localStorage.setItem("camelCased", arr.join(","));
  }
});

removeBtn.addEventListener("click", (event: Event) => {
  event.preventDefault();
  [...resultList.children].forEach((child) => {
    child.remove();
  });
  arr.length = 0;
  localStorage.setItem("camelCased", "");
  resultList.textContent = "";
});

resultList?.addEventListener("click", (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLElement;
  if (target.classList.contains("result-item")) {
    target.remove();
    const valueToRemove = target.textContent || "";
    const index = arr.indexOf(valueToRemove);
    if (index !== -1) {
      arr.splice(index, 1);
      localStorage.setItem("camelCased", arr.join(","));
    }
  }
});
