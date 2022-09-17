import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanessa-compound-interests',
  templateUrl: './vanessa-compound-interests.component.html',
  styleUrls: ['./vanessa-compound-interests.component.css']
})
export class VanessaCompoundInterestsComponent implements OnInit {

  @Input() n1: String
  n2: number = 0.08
  n3: number = 1
  @Input() n4: String

  constructor() { }

  ngOnInit() {
  }

  getSum(){
    return Number(this.n1) * (Number(this.n3) + Number(this.n2))* Number(this.n4);
  }

}