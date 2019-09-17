import { Component, OnInit } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logoArray = [0, 1];

  //  menu = new TimelineMax({repeat:3, repeatDelay:1});
  logo = new TimelineMax({repeat:-1, repeatDelay:1});

  ngOnInit() {
    // this.createMenuAnim();
    // TweenMax.from("#myID", 1, {x: 300});
  }

  ngAfterViewInit() {
    let element = [];
    let svgClassList = ["cuteBird", "englandAndCarelineText", "englandText", "carelineText", "redTextA", "greyText", "redTextB", "bottomText"];

    svgClassList.forEach(function(v){
      element.push(document.getElementsByClassName(v));
    });
    
    this.logoArray.forEach(function(value, index) {
      svgClassList.forEach(function(v, i){
        element[i][index].classList.add(svgClassList[i] + value);
        // console.log(element[i][index]);
      });
    });

    this.logoZero();
  }

  logoZero() {
    this.logo
    .from(".cuteBird0", 2, {x: 75, delay:1, ease: Power4.easeOut})
    .from(".englandAndCarelineText0", 2, {x: -50, opacity: 0, ease: Power4.easeOut}, "-=1.75")
    .addLabel("redTextJumpOut0")
    .to(".redTextA0", .5, {scale: 1.25, fill: "#C6576A", ease: Back.easeOut.config(1.7)}, "redTextJumpOut")
    .to(".redTextB0", .5, {scale: 1.25, fill: "#C6576A", ease: Back.easeOut.config(1.7)}, "redTextJumpOut")
    .addLabel("redTextBack")
    .to(".redTextA0", .5, {scale: 1}, "redTextBack")
    .to(".redTextB0", .5, {scale: 1}, "redTextBack")
    .from(".bottomText0", 2, {y: -20, opacity: 0, ease: Power4.easeOut});
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