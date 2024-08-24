import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GestionComponent } from './gestion/gestion.component';
import { GalerieComponent } from './galerie/galerie.component';
import { VenteComponent } from './vente/vente.component';
import { DemoComponent } from './demo/demo.component';
import { CommonModule } from '@angular/common';
import { OurClientsComponent } from './our-clients/our-clients.component';

@Component({
  selector: 'app-root',
  standalone: true ,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CommonModule,HeaderComponent,FooterComponent,GestionComponent,GalerieComponent,VenteComponent,DemoComponent,OurClientsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Gm-Gestcom-app';
}