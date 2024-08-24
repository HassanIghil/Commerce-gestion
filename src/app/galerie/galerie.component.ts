import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [NgFor],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.css'
})
export class GalerieComponent {
  items = [
    { src: 'reglement.png', alt: 'Reglement' },
    { src: 'production.png', alt: 'Production' },
    { src: 'parametre.png', alt: 'Parametre' },
    { src: 'bank_tresorie.png', alt: 'Bank Tresorie' },
    { src: 'transport.png', alt: 'Transport' },
    { src: 'finance.png', alt: 'Finance' }
  ];
  
  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.items.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.items.length - 1) ? this.currentIndex + 1 : 0;
  }
}
