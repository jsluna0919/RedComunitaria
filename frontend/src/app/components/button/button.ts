import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css']
})
export class ButtonComponent {

  @Input() label: string = 'Botón';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() color: string = 'primary';
}
