import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  arrayImages = [
    'snake-1634293_640.jpg',
    'wolf-1992716_640.jpg',
    'snake-1634293_640.jpg',
  ];

  jsonImages = [
    {
      title: 'serpent',
      url: 'snake-1634293_640.jpg',
      author: 'Jean Mouloud',
    },
    {
      title: 'loup',
      url: 'wolf-1992716_640.jpg',
      author: 'Jean Mouloud',
    },
    {
      title: 'serpent',
      url: 'snake-1634293_640.jpg',
      author: 'Jean Mouloud',
    },
  ];
  randomIndex = Math.round(Math.random() * this.arrayImages.length);
  sourceImage = this.arrayImages[this.randomIndex];

  console(str: string) {
    console.log(str);
  }

  changeRandom() {
    this.randomIndex = Math.floor(Math.random() * this.arrayImages.length);
    this.console('randomIndex:' + this.randomIndex);
  }

  valColor = 'red';
  valSize = { 'font-weight': 'bold' };
  textPrimary = false;
  displayParag = true;
  displaySwitch = 1;

  incSwitch() {
    this.displaySwitch++;
    this.displaySwitch = this.displaySwitch > 3 ? 1 : this.displaySwitch;
    //if (this.this.displaywitch>3) {this.displaySwitch=1} else
  }

  percent = 0;
  affiche = false;
  constructor() {}

  ngOnInit(): void {
    console.log('randomIndex:', this.randomIndex);
    console.log('randomIndex:', this.sourceImage);
    console.log('jsonImage:', this.jsonImages[this.randomIndex].title);
    setInterval(() => {
      this.percent += 1;
      this.affiche = this.percent <= 100 ? false : true;
    }, 50);
  }
}
