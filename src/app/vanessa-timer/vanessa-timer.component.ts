import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanessa-timer',
  templateUrl: './vanessa-timer.component.html',
  styleUrls: ['./vanessa-timer.component.css']
})
export class VanessaTimerComponent implements OnInit {

@Input() name: string;
time: number = 0;
display ;
interval;

  constructor() { }

  ngOnInit() {
  }

  startTimer() {
    console.log("=====>");
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display=this.transform( this.time)
    }, 1000);
  }
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ' Minutes : ' + (value - minutes * 60);
}
pauseTimer() {
  clearInterval(this.interval);
}


  getCounter() {
    return this.time;
  }

}