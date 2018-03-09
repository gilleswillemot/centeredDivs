export class DivElement {
    constructor(private _x: number, private _y: number) {

    }

    set x(x: number) {
        this._x = x;
    }

    get x(): number {
        return this._x;
    }

    set y(y: number) {
        this._y = y;
    }

    get y(): number {
        return this._y;
    }

    drawDivElement(document: Document) {
        let divElement: HTMLElement = document.createElement('div');
        divElement.setAttribute("width", "300px");
        divElement.style['color'] = 'red';
    }
}