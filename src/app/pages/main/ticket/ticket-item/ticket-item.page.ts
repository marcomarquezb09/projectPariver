import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText,  IonCol, IonGrid, IonRow, IonDatetime, IonInput, IonCard, IonModal, IonList, IonItem, IonSelect,IonSelectOption, IonDatetimeButton, IonButton} from '@ionic/angular/standalone';
import { Ticket } from 'src/app/shared/api/models/ticket';
import { Cine } from 'src/app/shared/api/models/cine';

@Component({
  selector: 'app-ticket-item',
  templateUrl: 'ticket-item.page.html',
  styleUrls: ['ticket-item.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonCol, IonGrid, IonRow, IonText, IonDatetime, IonInput, IonCard, IonModal, IonList, IonItem, IonSelect, IonSelectOption, IonDatetimeButton, IonButton, FormsModule, CommonModule]
})
export class TicketItemPage {
  public ticket : Ticket[] =[
      {id: 1, nombre: "Carlos", apellido: "Suarez", fechaCompra: "10/01/2025", peliculaId: 1, cineId: 1},
      {id: 2, nombre: "Pilar", apellido: "Rojas", fechaCompra: "20/01/2025", peliculaId: 2, cineId: 2},
      {id: 3, nombre: "Ana", apellido: "Torrijo", fechaCompra: "15/01/2025", peliculaId: 3, cineId: 3},
    ]

     public cines : Cine[] = [
        {id: 1, nombre: "cine Palafox", capacidad: 1000, calle: "av. de Juan Pablo Segundo, 43"},
        {id: 2, nombre: "cine Aragonia", capacidad: 1500, calle: "Av. de Juan Carlos I, 44"},
        {id: 3, nombre: "cine Grancasa", capacidad: 1000, calle: "Centro comercial Gran Casa, 35"},
      ]
  constructor() {}
}
