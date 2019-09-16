import { Component, OnInit } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //  menu = new TimelineMax({repeat:3, repeatDelay:1});
  logo = new TimelineMax({repeat:-1, repeatDelay:1});

  ngOnInit(){
    // this.createMenuAnim();
    // TweenMax.from("#myID", 1, {x: 300});
    this.logo
    .from(".cuteBird", 2, {x: 75, delay:1, ease: Power4.easeOut})
    .from(".englandAndCarelineText", 2, {x: -50, opacity: 0, ease: Power4.easeOut}, "-=1.75")
    .addLabel("redTextJumpOut")
    .to(".redText1", .5, {scale: 1.25, fill: "#C6576A", ease: Back.easeOut.config(1.7)}, "redTextJumpOut")
    .to(".redText2", .5, {scale: 1.25, fill: "#C6576A", ease: Back.easeOut.config(1.7)}, "redTextJumpOut")
    .addLabel("redTextBack")
    .to(".redText1", .5, {scale: 1}, "redTextBack")
    .to(".redText2", .5, {scale: 1}, "redTextBack")
    .from(".bottomText", 2, {y: -20, opacity: 0, ease: Power4.easeOut});
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