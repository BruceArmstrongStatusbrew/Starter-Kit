import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Lara } from 'primeng/themes/lara';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web';

  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({ preset: Lara });
  }
}
