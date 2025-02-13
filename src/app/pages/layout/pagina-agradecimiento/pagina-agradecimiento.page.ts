import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonText, IonButton} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-agradecimiento',
  templateUrl: './pagina-agradecimiento.page.html',
  styleUrls: ['./pagina-agradecimiento.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonGrid, IonRow, IonCol, IonText, IonButton, RouterLink]
})
export class PaginaAgradecimientoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
