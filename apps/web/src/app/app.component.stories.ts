import { type Meta } from '@storybook/angular';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Lara } from 'primeng/themes/lara';

const meta: Meta<AppComponent> = {
  component: AppComponent,
  decorators: [],
  title: 'AppComponent',
};
export default meta;

@Component({
  standalone: true,
  imports: [],
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'primeng-wrapper',
  template: '<ng-content />',
  styles: '',
})
export class PrimeNGWrapperComponent {
  title = 'web';

  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({ preset: Lara });
  }
}
