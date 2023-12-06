import { Component } from "../core/component";

// -----camel-case-img-------
const camelImg = new Component({
  tagName: "div",
  className: "img-wrapper",
  children: [
    new Component({
      tagName: "img",
      className: "img",
      attrs: {
        src: "./public/CamelCase.png",
        alt: "error",
      },
    }),
  ],
});
// -----camel-case-title-----
const camelTitle = new Component({
  tagName: "h2",
  className: "title",
  textContent: "camelCase generator",
});
// -----camel-case-header----
export const header = new Component({
  tagName: "header",
  className: "header",
  children: [camelImg, camelTitle],
});
