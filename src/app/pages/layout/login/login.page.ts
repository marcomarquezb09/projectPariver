import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCol, IonGrid, IonRow, IonText, IonInput, IonInputPasswordToggle, IonButton, IonCard,} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonCol, IonGrid, IonRow, IonText, IonInput,  IonInputPasswordToggle, IonButton, IonCard, CommonModule, FormsModule, RouterLink], 
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
