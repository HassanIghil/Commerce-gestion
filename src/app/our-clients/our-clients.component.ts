import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-clients',
  standalone: true,
  imports: [NgFor],
  templateUrl: './our-clients.component.html',
  styleUrl: './our-clients.component.css'
})
export class OurClientsComponent {

}
