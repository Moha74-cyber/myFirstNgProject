import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //propriété title qui ressemble a une valeur
  title = 'title';

  nb = 0;

  //méthode alert()qui ressemble a une fonction
  alert() {
    //on peut déclarer des constantes et des variables dans les mthode

    const message = 'this is a message';
    //on peut utilise tous les outils de js dans les méthodes
    console.log(message);

    this.nb++; //permet de rajouter 1 click a chaque click

    console.log("you've clicked:", this.nb + ' times');
    alert('message');
  }
}
