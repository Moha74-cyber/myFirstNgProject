import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  varInputForm = '';
  firstname = '';
  lastname = '';
  emailadress = '';
  message = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(formData: any) {
    let validation = false;
    let score = 0;
    let errorMessage = '';
    let max = 3;

    //valider la longueur de firstname
    formData.firstname.length > 2
      ? score++
      : (errorMessage += 'Firstname must be longer than 2 car\n');
    console.log('Score:', score);
    +(
      //valider la longueur de lastname
      formData.lastname.length
    ) > 2
      ? score++
      : (errorMessage += 'Lastname must be longer than 2 car\n');
    console.log('Score:', score);

    // //valider la présence d'un @ dans l'email
    // formData.emailadress.indexOf('@') > 1
    //   ? score++
    //   : (errorMessage += 'email must contain an @\n');
    // console.log('Score:', score);

    //valider la présence d'un .  dans l'email aprés @
    // formData.emailadress.indexOf('.') > formData.emailadress.indexOf('@') + 2
    //   ? score++
    //   : (errorMessage += 'email must contain a . after @\n');
    // console.log('Score:', score);

    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        formData.emailadress
      )
    ) {
      score++;
    } else {
      errorMessage += 'email must be valid';
    }

    /*  //valider la présence d'un .  au moins 3 caractères avant la fin de la chaine
    formData.emailadress.indexOf('.') < formData.emailadress.length - 2
      ? score++
      : (errorMessage += 'email must contain a valid domain name\n');
    console.log('Score:', score); */

    validation = score == max ? true : false;

    if (validation) {
      console.log('sending Data:', formData);

      const headers = new HttpHeaders();
      headers.set('content-Type', 'application:x-www-form-urlencoded');

      this.http
        .post('https://httpbin.org/post', formData)
        .subscribe((response) => {
          console.log('RETOUR PAR LE SERVEUR DISTANT YOUHOUHOU !!!', response);
          if (response) {
            console.log('OK ON EST BON');
            // on redirige vers une autre page
            this.router.navigateByUrl('/about');
          }
        });
    } else {
      alert('error validating your form !!!\n' + errorMessage);
    }
  }
  ngOnInit(): void {}
}
