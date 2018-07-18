import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  public name: string;
  public countDownTime: Date;

  public countDown;
  public counter = 1800;
  public tick = 1000;


  //constructor
  constructor(public navCtrl: NavController) {
    this.name = "Kerry"
  }


  //timer
  ngOnInit() {
    let counter = ((this.getNextDay().getTime())-(new Date).getTime())/1000;
    this.counter = counter;
    this.countDown = Observable.timer(0, this.tick)
      .take(this.counter)
      .map(() => --this.counter)
  }

  //Get next date helper
  public getNextDay() : Date{
    let countDownTime = new Date;
    countDownTime.setDate((new Date()).getDate() + 1);
    countDownTime.setHours(0,0,0,0);
    return countDownTime;
  }

}
