import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './nav/nav.component';

@Component({
    selector: 'dh-cc-root',
    standalone: true,
    imports: [RouterOutlet, MatSidenavModule, MatButtonModule, MatIconModule, NavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'daggerheart-character-creator';
}
