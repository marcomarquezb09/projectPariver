import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCol, IonGrid, IonRow, IonText, IonInputPasswordToggle, IonInput, IonButton, IonCard} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCol, IonGrid, IonRow, IonText, IonInputPasswordToggle, IonInput, IonButton, IonCard, RouterLink]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
