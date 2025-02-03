import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCol, IonGrid, IonRow, IonText, IonInputPasswordToggle, IonInput, IonButton, IonCard} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCol, IonGrid, IonRow, IonText, IonInputPasswordToggle, IonInput, IonButton, IonCard]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
