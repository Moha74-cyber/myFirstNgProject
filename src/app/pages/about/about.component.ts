import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  galery: any;
  page = 1;

  constructor(private http: HttpClient) {}

  loadPics(way = '', nb = this.page) {
    //évealue la valeur de 'way'
    //et défini des cas pour 'next' poour 'prev'
    switch (way) {
      case 'next':
        //seulement si page est inférieur a 3 tu ajoute 1 a page
        this.page++;
        break;
      case 'prev':
        //seulement si page est supèrieur a 1 tu enleve 1 a page
        this.page > 1 ? this.page-- : null;
        break;
      case '':
        this.page = nb;
        break;
    }
    console.log('Way & Page:', way + '' + this.page);

    const URL = 'https://picsum.photos/v2/list?page=' + this.page + '&limit=12'; //permet d'aller chercher une api
    this.http.get(URL).subscribe((data) => {
      this.galery = data;
      console.log(this.galery);
    });
  }

  ngOnInit(): void {
    this.loadPics();
  }

  /*  ngOnInit(): void {
    this.http
      .get('https://picsum.photos/v2/list?page=2&limit=12') //permet d'aller chercher une api
      .subscribe((data) => {
        this.galery = data;
        console.log(this.galery);
      });
  } */
}
