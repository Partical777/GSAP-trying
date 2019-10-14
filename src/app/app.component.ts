import { Component, OnInit } from '@angular/core';
import { TimelineMax, TweenMax } from 'gsap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logoArray = [0, 1, 2];

  logo1 = new TimelineMax({repeat:-1, repeatDelay:1});
  logo2 = new TimelineMax({repeat:-1, repeatDelay:1});
  logo3 = new TimelineMax({repeat:-1, repeatDelay:1});

  ngOnInit() {
  }

  ngAfterViewInit() {
    let element = [];
    let svgClassList = ["cuteBird", "englandAndCarelineText", "englandText", "carelineText", "redTextA", "greyText", "redTextB", "bottomText", "bomb", "bombA", "bombB", "bomb-bigA", "bomb-midA", "bomb-smallA", "bomb-bigB", "bomb-midB", "bomb-smallB"];

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
    
    this.logo3
    .from(".cuteBird2", 2, {x: 75, delay:1, ease: Power4.easeOut})
    .from(".englandAndCarelineText2", 2, {x: -50, opacity: 0, ease: Power4.easeOut}, "-=1.75")
    .addLabel("redTextJumpOut2")
    .from(".bottomText2", 1.25, {y: -20, opacity: 0, ease: Power4.easeOut})
    .to(".redTextA2", .5, {scale: 1.25, fill: "#C6576A", ease: Back.easeOut}, "redTextJumpOut2")
    .to(".redTextB2", .5, {scale: 1.25, fill: "#C6576A", ease: Back.easeOut}, "redTextJumpOut2")
    .to(".bombA", 0, {scale: 1.15}, "redTextJumpOut2")
    .to(".bombB", 0, {scale: 1.15}, "redTextJumpOut2")
    .to(".bomb-bigA2", 0, {opacity: 1}, "redTextJumpOut2")
    .to(".bomb-midA2", .25, {opacity: 1}, "redTextJumpOut2")
    .to(".bomb-smallA2", .5, {opacity: 1}, "redTextJumpOut2")
    .to(".bomb-bigB2", 0, {opacity: 1}, "redTextJumpOut2")
    .to(".bomb-midB2", .25, {opacity: 1}, "redTextJumpOut2")
    .to(".bomb-smallB2", .5, {opacity: 1}, "redTextJumpOut2")
    .addLabel("redTextBack", "-=.75")
    .to(".bomb-bigA2", 0, {opacity: 0}, "redTextBack")
    .to(".bomb-midA2", .25, {opacity: 0}, "redTextBack")
    .to(".bomb-smallA2", .5, {opacity: 0}, "redTextBack")
    .to(".bomb-bigB2", 0, {opacity: 0}, "redTextBack")
    .to(".bomb-midB2", .25, {opacity: 0}, "redTextBack")
    .to(".bomb-smallB2", .5, {opacity: 0}, "redTextBack")
    .to(".redTextA2", .5, {scale: 1}, "redTextBack")
    .to(".redTextB2", .5, {scale: 1}, "redTextBack");
  }
}