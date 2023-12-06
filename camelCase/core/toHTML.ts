import { IComponent } from "../interfaces/comp";
import { isComponent } from "../typeGuards/isComponent";

export const toHTML = (instance: IComponent): HTMLElement => {
  if (isComponent(instance)) {
    const { tagName, className, children, html, textContent, events, attrs } =
      instance;
    const element = document.createElement(tagName);
    if (className !== undefined) {
      element.className = className ?? "";
    }
    if (textContent !== undefined) {
      element.textContent = textContent ?? "";
    }
    if (children && children.length > 0) {
      children.forEach((child) => {
        const childElement = toHTML(child);
        if (childElement) {
          element.appendChild(childElement);
        }
      });
    }
    if (html !== undefined) element.insertAdjacentHTML("afterbegin", html);

    if (events !== undefined) {
      for (let key in events) {
        element.addEventListener(key, events[key]);
      }
    }

    if (attrs !== undefined) {
      for (let attr in attrs) {
        element.setAttribute(attr, attrs[attr]);
      }
    }
    if (element.tagName.toLowerCase() === "input") {
      return element as HTMLInputElement;
    }

    return element;
  }
  throw new Error("Invalid component");
};
