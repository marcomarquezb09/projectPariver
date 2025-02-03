import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonText,  IonCol, IonGrid, IonRow, IonDatetime, IonInput, IonCard, IonModal, IonList, IonItem, IonSelect,IonSelectOption, IonDatetimeButton, IonButton} from '@ionic/angular/standalone';
import { Ticket } from '../shared/api/models/Ticket';

@Component({
  selector: 'app-compra-tickets',
  templateUrl: './compra-tickets.page.html',
  styleUrls: ['./compra-tickets.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonCol, IonGrid, IonRow, IonText, IonDatetime, IonInput, IonCard, IonModal, IonList, IonItem, IonSelect, IonSelectOption, IonDatetimeButton, IonButton, FormsModule, CommonModule]
})
export class CompraTicketsPage implements OnInit {

  public ticket : Ticket[] =[
    {id: 1, nombre: "Carlos", apellido: "Suarez", fechaCompra: "10/01/2025", peliculaId: 1, cineId: 1},
    {id: 2, nombre: "Pilar", apellido: "Rojas", fechaCompra: "20/01/2025", peliculaId: 2, cineId: 2},
    {id: 3, nombre: "Ana", apellido: "Torrijo", fechaCompra: "15/01/2025", peliculaId: 3, cineId: 3},
  ]

  constructor() { }

  ngOnInit() {
  }

}
