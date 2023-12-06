export const prepend = (
  component: HTMLElement | null,
  destPoint: Node | null
) => {
  if (component !== null && destPoint !== null) {
    component.prepend(destPoint);
  }
};
