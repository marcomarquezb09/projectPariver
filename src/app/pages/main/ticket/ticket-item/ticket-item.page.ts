import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText,  IonCol, IonGrid, IonRow, IonDatetime, IonInput, IonCard, IonModal, IonList, IonItem, IonSelect,IonSelectOption, IonDatetimeButton, IonButton} from '@ionic/angular/standalone';
import { Cine } from 'src/app/shared/api/models/cine';

@Component({
  selector: 'app-ticket-item',
  templateUrl: 'ticket-item.page.html',
  styleUrls: ['ticket-item.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonCol, IonGrid, IonRow, IonText, IonDatetime, IonInput, IonCard, IonModal, IonList, IonItem, IonSelect, IonSelectOption, IonDatetimeButton, IonButton, FormsModule, CommonModule]
})
export class TicketItemPage {
 

     public cines : Cine[] = [
        {id: 1, nombre: "cine Palafox", capacidad: 1000, calle: "av. de Juan Pablo Segundo, 43"},
        {id: 2, nombre: "cine Aragonia", capacidad: 1500, calle: "Av. de Juan Carlos I, 44"},
        {id: 3, nombre: "cine Grancasa", capacidad: 1000, calle: "Centro comercial Gran Casa, 35"},
      ]
  constructor() {}
}
