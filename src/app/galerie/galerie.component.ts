import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-galerie',
  imports:[NgFor],
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css'],
})
export class GalerieComponent  {
  /* items = [
    { src: 'reglement.png', alt: 'Reglement' },
    { src: 'production.png', alt: 'Production' },
    { src: 'parametre.png', alt: 'Parametre' },
    { src: 'bank_tresorie.png', alt: 'Bank Tresorie' },
    { src: 'transport.png', alt: 'Transport' },
    { src: 'finance.png', alt: 'Finance' },
  ];
  currentIndex = 0;
  private autoSlideInterval!: number;
  private slideInterval = 3000;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = window.setInterval(() => {
      this.nextSlide();
    }, this.slideInterval);
  }

  clearAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  } */
}
