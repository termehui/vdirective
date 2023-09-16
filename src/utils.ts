export function getInput(el: any): HTMLInputElement | null {
    return el instanceof HTMLInputElement
        ? el
        : el.querySelector("input") || null;
}
