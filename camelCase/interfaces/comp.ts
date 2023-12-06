export interface IComponent {
  tagName: string;
  className?: string;
  textContent?: string;
  children?: IComponent[];
  html?: string;
  events?: Record<string, (event: Event) => void>;
  attrs?: Record<string, string>;
}
