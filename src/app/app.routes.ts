import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
        
        { path: 'demo', component: DemoComponent },
       
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}