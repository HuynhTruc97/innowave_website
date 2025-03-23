import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLoggedInComponent } from './header-logged-in/header-logged-in.component'; // Updated import
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLoggedInComponent, FooterComponent], 
  template: `
    <app-header-logged-in></app-header-logged-in> 
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class AppComponent {}