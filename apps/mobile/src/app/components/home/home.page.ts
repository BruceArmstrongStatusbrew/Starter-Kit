import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
} from '@ionic/angular/standalone';
import { ButtonComponent } from '../button/button.component';
// import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ButtonComponent,
  ],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
