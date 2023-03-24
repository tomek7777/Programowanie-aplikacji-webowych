import { Component } from '@angular/core';
import { CSS } from '../models/css.model';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss']
})
export class InputComponentComponent {
protected css: CSS = {
  color: undefined,
  border: undefined,
  'box shadow': undefined,
  background: undefined
}
color = '#fff'
background = '#444'
protected onGenerateCSS() {
  console.log(this.css.color)
  this.css.color = 'czerwony'
}
}
