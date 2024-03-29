import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { FlexModule } from './flex';
import { ThemeService } from './core';

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
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss'
})
export class AppComponent {
  constructor(
    public themer: ThemeService
  ) { }
}
