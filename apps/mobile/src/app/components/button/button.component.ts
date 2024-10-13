import { Component } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [IonButton, ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
