import { IComponent } from "../interfaces/comp";
import { toHTML } from "./toHTML";

export class Component implements IComponent {
  public tagName: string;
  public className?: string;
  public textContent?: string;
  public children?: IComponent[];
  public html?: string;
  public events?: Record<string, (event: Event) => void>;
  public attrs?: Record<string, string>;

  constructor({
    tagName,
    className,
    textContent,
    children,
    html,
    events,
    attrs,
  }: IComponent) {
    this.tagName = tagName;
    this.className = className;
    this.textContent = textContent;
    this.children = children;
    this.html = html;
    this.events = events;
    this.attrs = attrs || {};
  }

  addChildren(children: IComponent | IComponent[]): void {
    if (Array.isArray(children)) {
      this.children?.push(...children);
    } else {
      this.children?.push(children);
    }
  }

  toHTML(): HTMLElement | null {
    return toHTML(this);
  }
}
