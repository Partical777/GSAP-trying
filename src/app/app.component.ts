import { Component, OnInit } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logoArray = [0, 1];

  logo1 = new TimelineMax({repeat:-1, repeatDelay:1});
  logo2 = new TimelineMax({repeat:-1, repeatDelay:1});

  ngOnInit() {
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
    this.logo1
    .from(".cuteBird0", 2, {x: 75, delay:1, ease: Power4.easeOut})
    .from(".englandAndCarelineText0", 2, {x: -50, opacity: 0, ease: Power4.easeOut}, "-=1.75")
    .addLabel("redTextJumpOut0")
    .to(".redTextA0", .5, {scale: 1.25, fill: "#C6576A", ease: Back.easeOut.config(1.7)}, "redTextJumpOut")
    .to(".redTextB0", .5, {scale: 1.25, fill: "#C6576A", ease: Back.easeOut.config(1.7)}, "redTextJumpOut")
    .addLabel("redTextBack")
    .to(".redTextA0", .5, {scale: 1}, "redTextBack")
    .to(".redTextB0", .5, {scale: 1}, "redTextBack")
    .from(".bottomText0", 2, {y: -20, opacity: 0, ease: Power4.easeOut});

    this.logo2
    .from(".cuteBird1", 2, {x: 75, delay:1, ease: Power4.easeOut})
    .from(".englandAndCarelineText1", 2, {x: -50, opacity: 0, ease: Power4.easeOut}, "-=1.75")
    .addLabel("redTextJumpOut1")
    .from(".bottomText1", 1.25, {y: -20, opacity: 0, ease: Power4.easeOut})
    .to(".redTextA1", .5, {scale: 1.25, fill: "#C6576A", ease: Back.easeOut.config(1.7)}, "redTextJumpOut")
    .to(".redTextB1", .5, {scale: 1.25, fill: "#C6576A", ease: Back.easeOut.config(1.7)}, "redTextJumpOut")
    .addLabel("redTextBack")
    .to(".redTextA1", .5, {scale: 1}, "redTextBack")
    .to(".redTextB1", .5, {scale: 1}, "redTextBack");
  }
}