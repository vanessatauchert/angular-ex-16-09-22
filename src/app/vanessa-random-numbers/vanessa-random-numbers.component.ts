import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanessa-random-numbers',
  templateUrl: './vanessa-random-numbers.component.html',
  styleUrls: ['./vanessa-random-numbers.component.css'],
})
export class VanessaRandomNumbersComponent implements OnInit {
  @Input() n1: string;


  constructor() {}

  ngOnInit() {}

  Random() {
    let err= Array.from({length: Number(this.n1)}, () =>
      Math.floor(Math.random()* 100)
      );

      for (let i =0; i< err.length; i++){
        console.log(err[i]);
      }
    
}
} 