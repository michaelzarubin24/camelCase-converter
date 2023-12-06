import { Component } from "../core/component";

// --camel-case-input
const input = new Component({
  tagName: "input",
  attrs: {
    id: "input",
    type: "text",
    placeholder: "Enter your text",
  },
});

// --camel-case-btn
const buttons = [
  {
    textContent: "ADD",
    attrs: {
      id: "add",
    },
  },
  {
    textContent: "REMOVE",
    attrs: {
      id: "remove",
    },
  },
];

const buttonElements = buttons.map((button) => {
  return new Component({
    tagName: "button",
    textContent: button.textContent,
    attrs: {
      id: button.attrs.id,
    },
  });
});

const wrapper = new Component({
  tagName: "div",
  className: "btn-wrapper",
  children: [...buttonElements],
});
// --camel-case-result-title
const resultTitle = new Component({
  tagName: "h2",
  className: "result-title",
  textContent: "RESULTS",
});

const resultList = new Component({
  tagName: "div",
  attrs: {
    id: "result-list",
  },
});
// --camel-case-results

// --camel-case-main
export const main = new Component({
  tagName: "main",
  className: "main",
  children: [input, wrapper, resultTitle, resultList],
});
