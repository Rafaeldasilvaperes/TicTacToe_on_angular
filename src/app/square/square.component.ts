
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
   <button class='button2' *ngIf="!value">{{ value }}</button>
   <button appColorX *ngIf="value == 'X'">{{ value }}</button>
   <button appColorO *ngIf="value == 'O'">{{ value }}</button>
   
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  
  @Input() value?: 'X' | 'O';

}
