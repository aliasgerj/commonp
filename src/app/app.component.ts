import {Component, Inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrinterpComponent } from 'printerp'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrinterpComponent ],
  template: `
    <h1>Welcome to {{title}}!</h1>
<lib-printerp></lib-printerp>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'consumer';
}
