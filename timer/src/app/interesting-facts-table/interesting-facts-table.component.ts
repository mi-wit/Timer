import { Component } from '@angular/core';

export interface PlanetElement {
  name: string;
  position: number;
  disctanceFromSun: number;
  lengthOfYear: number;
}

const ELEMENT_DATA: PlanetElement[] = [
  {position: 1, name: 'Mercury', disctanceFromSun: 30237000, lengthOfYear: 88},
  {position: 2, name: 'Venus', disctanceFromSun: 66783000, lengthOfYear: 225},
  {position: 3, name: 'Earth', disctanceFromSun: 91496000, lengthOfYear: 365},
  {position: 4, name: 'Mars', disctanceFromSun: 140000000, lengthOfYear: 1.8 * 365},
  {position: 5, name: 'Jupiter', disctanceFromSun: 4636720001, lengthOfYear: 4333},
  {position: 6, name: 'Saturn', disctanceFromSun: 921662000, lengthOfYear: 29.45 * 365},
  {position: 7, name: 'Uranus', disctanceFromSun: 1819370000, lengthOfYear: 30687},
  {position: 8, name: 'Neptune', disctanceFromSun: 2781219000, lengthOfYear: 60190},
];



@Component({
  selector: 'app-interesting-facts-table',
  templateUrl: './interesting-facts-table.component.html',
  styleUrls: ['./interesting-facts-table.component.css']
})
export class InterestingFactsTableComponent {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'disctanceFromSun', 'lengthOfYear'];
  dataSource = ELEMENT_DATA;
}
