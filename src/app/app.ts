import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="min-h-screen bg-slate-900 text-white font-sans antialiased">
      <!-- Main Routing Outlet -->
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'abdallah-portfolio';
}