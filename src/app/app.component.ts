import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { Pipe, PipeTransform } from '@angular/core';


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  public countDown;
  public counter = 1800;
  public tick = 1000;
  ngOnInit() {
    this.countDown = Observable.timer(0, this.tick)
      .take(this.counter)
      .map(() => --this.counter)
  }
}

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    //const minutes: number = Math.floor(value / 60);
    // console.log('00' + minutes);
    // console.log(('00' + minutes).slice(-2));
    // console.log(('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2));
    // return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
    let dateTuple = this.calcDateTuple(value);
    return  ('00' + dateTuple.hours).slice(-2) + ':' +  ('00' + dateTuple.minutes).slice(-2) + ':' +
    ('00' + dateTuple.seconds).slice(-2);
  }

  public calcDateTuple(diff) {
    const hours: number = Math.floor(diff/(60*60));
    const minutes: number = Math.floor(diff / 60) % 60;
    const seconds: number = Math.floor(diff % 60);
    return {hours: hours, minutes:minutes, seconds:seconds};
  }

}
