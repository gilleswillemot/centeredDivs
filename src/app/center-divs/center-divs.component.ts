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
  private origin: any; //center point of page
  private _divArray: DivElement[];
  private _divWidth: number;
  private _divHeigth: number;
  private _divMargin: number;

  constructor() { }
  ngOnInit() {
    this.pageWidth = window.screen.width;
    this.pageHeight = window.screen.height;
    this.origin = {
      x: innerWidth / 2,
      y: innerHeight / 2
    }

    /**
     * div element settings
     */
    this._divHeigth = 200;
    this._divWidth = 200;
    this._divMargin = 10;

    this._divArray = this.orderDivsInRightPosition(2);
    //this.drawDivs(divArray);
  } //END OF ngOnitInit

  get divArray(): DivElement[] {
    return this._divArray;
  }

  get divWidth(): number {
    return this._divWidth;
  }

  get divHeigth(): number {
    return this._divHeigth;
  }

  get divMargin(): number {
    return this._divMargin;
  }

  /**
   * 
   * @param numberOfDivs the number of divs you want to show on the page.
   */
  orderDivsInRightPosition(numberOfDivs: number): DivElement[] { //alle div in de juiste column en row plaatsen.
    let arrayOfDivObject = [];
    let xCoordinate: number;
    let yCoordinate: number;
    let maxNumberOfDivsPerRow: number = this.pageWidth / this._divWidth;
    let numberOfRows: number = numberOfDivs / maxNumberOfDivsPerRow;
    let leftoverDivs: number = numberOfDivs % maxNumberOfDivsPerRow;
    let rows: number;

    for(let i = 0; i < rows; i++){

    }

    for (let i = 0; i < leftoverDivs; i++) {
      if (leftoverDivs % 2 == 0) { //if the leftovers form an even number.
        let numberOfDivsLeftToOrigin = leftoverDivs / 2;
        let x = this.origin.x - numberOfDivsLeftToOrigin * this._divWidth + (i * this.divWidth);
        let y = this.origin.y - this._divHeigth / 2;
        arrayOfDivObject[i] = new DivElement(x, y);
      }
      else{ //odd number of leftover div elements.

      } 
    }


    // for (let i = 0; i < numberOfDivs; i++) {
    //   if (numberOfDivs * this._divWidth < )
    //     xCoordinate = this.origin.x - this._divWidth / 2;
    //   yCoordinate = this.origin.y - this._divHeigth / 2;
    //   arrayOfDivObject[i] = new DivElement(xCoordinate, yCoordinate);
    // }
    return arrayOfDivObject;
  }

  drawDivs(divArray: DivElement[]) {
    // divArray.forEach(element => {
    //   element.drawDivElement(document);
    // });
    let divElement: HTMLElement = document.createElement('div');
    divElement.setAttribute("width", "300px");
    divElement.style['color'] = 'red';
  }
}
