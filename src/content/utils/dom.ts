export function removeElement(element: HTMLElement | null) {
    if (!element) return;

    element.remove();
}