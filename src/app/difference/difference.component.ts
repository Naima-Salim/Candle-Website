import { Component } from '@angular/core';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent {
  title = 'What makes us different...?';
  sub_title = 'Of an affixed civilly moments promise explain fertile in, Assurance advantage belonging happiness departure so of now improving and one sincerity intention allowance commanded not';
  Heading = 'Easy process';
  sub_head = 'Of an affixed civilly moments promise explain fertile in, Assurance advantage belonging happiness departure so of now improving and one sincerity intention allowance commanded not';


}
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

