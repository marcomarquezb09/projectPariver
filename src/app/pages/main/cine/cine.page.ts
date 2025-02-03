import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Cine } from '../../../shared/api/models/cine';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.page.html',
  styleUrls: ['./cine.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,FormsModule, CommonModule, IonList, IonItem, IonLabel]
})
export class CinePage implements OnInit {

  public cines : Cine[] = [
    {id: 1, nombre: "cine Palafox", capacidad: 1000, calle: "av. de Juan Pablo Segundo, 43"},
    {id: 2, nombre: "cine Aragonia", capacidad: 1500, calle: "Av. de Juan Carlos I, 44"},
    {id: 3, nombre: "cine Grancasa", capacidad: 1000, calle: "Centro comercial Gran Casa, 35"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
