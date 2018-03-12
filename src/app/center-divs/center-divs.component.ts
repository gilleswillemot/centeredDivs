import { Component, OnInit } from '@angular/core';
import { DivElement } from './divElement.model';

@Component({
  selector: 'app-center-divs',
  templateUrl: './center-divs.component.html',
  styleUrls: ['./center-divs.component.css']
})
export class CenterDivsComponent implements OnInit {
  pageWidth: number;
  pageHeight: number;
  private _origin: any; //center point of page
  private _divArray: DivElement[];
  private _divWidth: number;
  private _divHeight: number;
  private _divMargin: number;
  private _numberOfDivs: number = 1;
  maxNumberOfDivsPerRow: number;

  constructor() { }
  ngOnInit() {
    this.pageWidth = window.screen.width;
    this.pageHeight = window.screen.height;
    this._origin = {
      x: innerWidth / 2,
      y: innerHeight / 2,
      width: 10,
      height: 10,
      // xHTML: () => {return this._origin.x - this._origin.width / 2},
      // yHTML: () => {return this._origin.y - this._origin.height / 2},
    }

    // this._origin.xHTML = function() {
    //   return 5;
    // }

    // this._origin.yHTML = function() {
    //   5;
    // }

    /**
     * div element settings
     */
    this._divHeight = 100;
    this._divWidth = 100;
    this._divMargin = 10;

    let bodyOppervlakte = this.pageWidth * this.pageHeight
    let maxNumberOfDivsInbody = bodyOppervlakte / (this.divHeight * this.divWidth);

    let interval = setInterval(() => {
      // let randomNumberOfDivsInCorrectRange = Math.floor(Math.random() * maxNumberOfDivsInbody);
      // this._numberOfDivs = Math.ceil(Math.random() * 14);

      this._divArray = this.centerDivs(this._numberOfDivs++)
    }, 1000);

    // this._divArray = this.centerDivs(15);

    //this.drawDivs(divArray);
  } //END OF ngOnitInit

  // backgroundColor(i: number){
  //   return Math.floor( i / this.maxNumberOfDivsPerRow) % 2 == 0 ? "blue" : "red";
  // }

  get numberOfDivs() {
    // return this._numberOfDivs;
    return this._divArray.length;

  }

  get originX() {
    return this._origin.x - this._origin.width / 2;
  }

  get originY() {
    return this._origin.y - this._origin.height / 2;
  }

  get divArray(): DivElement[] {
    return this._divArray;
  }

  get divWidth(): number {
    return this._divWidth;
  }

  get divHeight(): number {
    return this._divHeight;
  }

  get divMargin(): number {
    return this._divMargin;
  }

  get origin() {
    return this._origin;
  }
  /**
   * 
   * @param numberOfDivs the number of divs you want to show on the page.
   */
  centerDivs(numberOfDivs: number): DivElement[] { //alle div in de juiste column en row plaatsen.
    let divArray = [];
    this.maxNumberOfDivsPerRow = Math.floor(this.pageWidth / this._divWidth);
    if (numberOfDivs > 3 && numberOfDivs < (2 * this.maxNumberOfDivsPerRow)) {//if you want to center a small number of divs properly
      this.maxNumberOfDivsPerRow = Math.floor(numberOfDivs / 2);
    }
    let numberOfRows: number = Math.ceil(numberOfDivs / this.maxNumberOfDivsPerRow);
    let modulo: number = numberOfDivs % this.maxNumberOfDivsPerRow;
    let leftoverDivs: number = modulo == 0 ? this.maxNumberOfDivsPerRow : modulo;
    let yCoordinate: number = this._origin.y - numberOfRows / 2 * this._divHeight;
    for (let i = 0; i < numberOfRows; i++) {
      let color = i % 2 == 0 ? "blue" : "green";
      let remainingColumns: number = i + 1 == numberOfRows ? leftoverDivs : this.maxNumberOfDivsPerRow; //if last row, center the divs, else just normal row.
      this.centerRowOfDivs(yCoordinate, remainingColumns, divArray, color, i * this.maxNumberOfDivsPerRow);
      yCoordinate += this._divHeight;
    }
    return divArray;
  }

  centerRowOfDivs(yCoordinate: number, columns: number, divArray: DivElement[], color: string, index?: number) {
    let xCoordinate: number;
    if (columns % 2 == 0) { //if the leftovers form an even number.
      let numberOfDivsLeftToOrigin = columns / 2;
      xCoordinate = this._origin.x - numberOfDivsLeftToOrigin * this._divWidth;
    }
    else { //odd number of leftover div elements.
      xCoordinate = this._origin.x - (this.divWidth / 2) - ((Math.floor(columns / 2) * this.divWidth));
    }
    for (let i = 0; i < columns; i++) {
      let divColor = "";
      let mod = i % 2 == 0;
      if (color == "blue") divColor = mod ? "lightblue" : color;
      else divColor = mod ? "lightgreen" : color;
      divArray[index + i] = new DivElement(xCoordinate + (i * this.divWidth), yCoordinate, divColor);
    }
  }

  // drawDivs(divArray: DivElement[]) {
  //   // divArray.forEach(element => {
  //   //   element.drawDivElement(document);
  //   // });
  //   let divElement: HTMLElement = document.createElement('div');
  //   divElement.setAttribute("width", "300px");
  //   divElement.style['color'] = 'red';
  // }
}
