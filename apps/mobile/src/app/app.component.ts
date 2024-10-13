import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { PrimeNGConfig } from 'primeng/api';
import { Aura } from 'primeng/themes/aura';

@Component({
  standalone: true,
  imports: [IonRouterOutlet, IonApp],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mobile';

  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({ preset: Aura });
  }
}
