import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-informacion-ticket',
  templateUrl: './informacion-ticket.page.html',
  styleUrls: ['./informacion-ticket.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InformacionTicketPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
