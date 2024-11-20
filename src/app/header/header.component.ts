import { Component, OnInit, signal } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule,RouterLink,RouterLinkActive,RouterOutlet,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
/* isModalOpen = false;

openModal() {
  this.isModalOpen = true;
}


closeModal() {
    this.isModalOpen = false;
    
}

closeModalOutSideClick(event: MouseEvent) {
  console.log('Clicked outside:', event);
  if (event.target === event.currentTarget) {
      this.closeModal();
  }
} */

 }

