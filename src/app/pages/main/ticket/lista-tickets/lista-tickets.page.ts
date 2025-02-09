import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonLabel, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { Ticket } from 'src/app/shared/api/models/Ticket';

@Component({
  selector: 'app-lista-tickets',
  templateUrl: './lista-tickets.page.html',
  styleUrls: ['./lista-tickets.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonLabel, IonList, IonItem, IonButton ]
})
export class ListaTicketsPage implements OnInit {

   public tickets : Ticket[] =[
        {id: 1, nombre: "Carlos", apellido: "Suarez", fechaCompra: "10/01/2025", peliculaId: 1, cineId: 1},
        {id: 2, nombre: "Pilar", apellido: "Rojas", fechaCompra: "20/01/2025", peliculaId: 2, cineId: 2},
        {id: 3, nombre: "Ana", apellido: "Torrijo", fechaCompra: "15/01/2025", peliculaId: 3, cineId: 3},
      ]

  constructor() { }

  ngOnInit() {
  }

}
