import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanessa-simple-interests',
  templateUrl: './vanessa-simple-interests.component.html',
  styleUrls: ['./vanessa-simple-interests.component.css']
})
export class VanessaSimpleInterestsComponent implements OnInit {
  @Input() n1: String
  n2: number = 0.08
  @Input() n3: String

  constructor() { }

  ngOnInit() {
  }

  getSum(){
    return Number(this.n1) * Number(this.n2)* Number(this.n3);
  }
}