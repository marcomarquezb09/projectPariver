import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Pelicula } from '../../../shared/api/models/Pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PeliculaPage implements OnInit {

  public pelicula : Pelicula[] =[
      {id: 1, duracion: 2, fechaSesion: "04/04/2025", genero: "accion", cines: 1, nombre:"Spiderman"},
      {id: 2, duracion: 3, fechaSesion: "24/02/2025", genero: "accion", cines: 2, nombre:"El Señor de los Anillos"},
      {id: 3, duracion: 2, fechaSesion: "03/05/2025", genero: "accion", cines: 3, nombre:"Ironman"},
     
    ]

  constructor() { }

  ngOnInit() {
  }

}
