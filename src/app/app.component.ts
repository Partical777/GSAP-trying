import { Component, OnInit } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //  menu = new TimelineMax({repeat:3, repeatDelay:1});
  redText1 = new TimelineMax({repeat:-1, repeatDelay:1});
  redText2 = new TimelineMax({repeat:-1, repeatDelay:1});

  ngOnInit(){
    // this.createMenuAnim();
    // TweenMax.from("#myID", 1, {x: 300});
    this.redText1.to(".redText1", .25, {scale: 1.5})
    .to(".redText1", .75, {scale: 1});
    this.redText2.to(".redText2", .25, {scale: 1.5})
    .to(".redText2", .75, {scale: 1});
  }

  // createMenuAnim(){
  //   this.menu.to("#topLine", .5, {rotation:'45', ease:"Expo.easeInOut"},0)
  //   this.menu.to("#midLine", .5, {opacity:'0', ease:"Expo.easeInOut"},0)
  //   this.menu.to("#botLine", .5, {rotation:'-45', ease:"Expo.easeInOut"},0)
  // }
  
  // menuClick() {
  //   this.menu.reversed() ? 
  //   (this.menu.play(), TweenMax.to("#myID", .5, {backgroundColor:"#ff0000"})) : (this.menu.reverse(), TweenMax.to("#myID", .5, {backgroundColor:"#ffffff"}));	
  //   return console.log('clicked');
  //  }
}