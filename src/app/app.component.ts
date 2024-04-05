import {
    Component,
    OnInit
} from '@angular/core';

import {
    PreferencesService,
    ThemeService
} from './core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { FlexModule } from './flex';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterOutlet
  ],
  providers: [
    PreferencesService
  ],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(
    iconRegistry: MatIconRegistry,
    public preferences: PreferencesService,
    public themer: ThemeService
  ) {
    iconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }

  ngOnInit(): void {
      this.preferences.load();
  }
}
