import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
css: any;
onCssChange($event: Event) {
throw new Error('Method not implemented.');
}
  title = 'inputComponent';
}
