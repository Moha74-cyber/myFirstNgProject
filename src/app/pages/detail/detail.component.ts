import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  idPhoto = '';
  infoPhoto: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  goBackToGallery() {
    this.router.navigateByUrl(`/about`);
  }

  ngOnInit(): void {
    console.log('THE PARAMS ID IS', this.route.snapshot.params.id);
    this.idPhoto = this.route.snapshot.params.id;
    this.http
      .get('https://picsum.photos/id/' + this.idPhoto + '/info')
      .subscribe((data) => {
        this.infoPhoto = data;
        console.log('infoPhoto', this.infoPhoto);
      });
  }
}
