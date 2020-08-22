import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-calculator',
  templateUrl: './temp-calculator.component.html',
  styleUrls: ['./temp-calculator.component.scss']
})
export class TempCalculatorComponent implements OnInit {

  fahrenheit = 0;
  celsius = 0;
  kelvin = 0;

  constructor() { }

  ngOnInit(): void {
  }

  convertFromF() {
    this.celsius = (this.fahrenheit - 32) * (5/9);
    this.kelvin = (this.fahrenheit - 32) * (5/9) + 273.15;
  }

  convertFromC() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
    this.kelvin = this.celsius + 273.15;
  }

  convertFromK() {
    this.celsius = this.kelvin - 273.15;
    this.fahrenheit = (this.kelvin - 273.15) * (9/5) + 32;
  }
}
