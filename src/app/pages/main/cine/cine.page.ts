import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonButton } from '@ionic/angular/standalone';
import { Cine } from '../../../shared/api/models/cine';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.page.html',
  styleUrls: ['./cine.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,FormsModule, CommonModule, IonList, IonItem, IonLabel, IonCard, IonButton]
})
export class CinePage implements OnInit {
  cines : Cine[] = [];

  constructor(private storageSv :StorageService) { }

  async ngOnInit() {
    let valorEnString: string = await this.storageSv.obtenerArray("cines");
    this.cines = JSON.parse(valorEnString) ?? [];
  }
}
