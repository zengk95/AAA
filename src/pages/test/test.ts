import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import *  as $ from 'jquery'


/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {


  public offers;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.offers = {
      Name: 'Pet Insurance',
      Description: 'Would you like to facilitate the financial security of your pets?',
      URL: ''
    };
    console.log(this.offers.Name);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');

  }

  showPopup() {
    window.open('https://www.google.com/', '_system');
    alert("hello");
  }

  ngAfterViewInit() {


    //# sourceMappingURL=imageMapResizer.map
    $(document).ready(function () {


      console.log("hello");
      var dateString = new Date().getFullYear() + "/11/01";
      var deadline = new Date(dateString);

      function updateClock() {
        var today = new Date();
        let countDownTime = new Date;
        countDownTime.setDate((new Date()).getDate() + 1);
        countDownTime.setHours(0, 0, 0, 0);

        let diff = countDownTime.getTime() - (new Date).getTime();

        if (diff <= 0) {
          clearInterval(interval);
        }
        else {
          var seconds = Math.floor((diff / 1000) % 60);
          var minutes = Math.floor((diff / 1000 / 60) % 60);
          var hours = Math.floor((diff / 1000 / 60 / 60) % 24);
          var days = Math.floor(diff / (1000 * 60 * 60 * 24) % 30.5);
          var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.5) % 12);

          $("#months").text(('0' + months).slice(-2));
          $("#days").text(('0' + days).slice(-2));
          $("#hours").text(('0' + hours).slice(-2));
          $("#minutes").text(('0' + minutes).slice(-2));
          $("#seconds").text(('0' + seconds).slice(-2));

        }//EOF ELSE

      }//EOF FUNCTION

      var interval = setInterval(updateClock, 1000);

      $(function() {
        var taint, d, x, y;
        $(".material-button").click(function(e){
          if ($(this).find(".taint").length == 0) {
            $(this).prepend("<span class='taint'></span>")
          }
          taint = $(this).find(".taint");
          taint.removeClass("drop");
          if(!taint.height() && !taint.width()) {
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
          taint.css({height: d, width: d});
          }
          x = e.pageX - $(this).offset().left - taint.width()/2;
          y = e.pageY - $(this).offset().top - taint.height()/2;
          taint.css({top: y+'px', left: x+'px'}).addClass("drop");
        });
      });

    });//EOF DOCUMENT.READY
  }



  public getNextDay(): Date {
    let countDownTime = new Date;
    countDownTime.setDate((new Date()).getDate() + 1);
    countDownTime.setHours(0, 0, 0, 0);
    return countDownTime;
  }
}




