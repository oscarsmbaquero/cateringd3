import { Routes } from '@angular/router';
import { ContactComponent } from '../pages/contact/contact.component';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ServicesComponent } from '../pages/services/services.component';

export const routes: Routes = [
    {
        path: "servicios",//raiz de la app
        pathMatch:'full',//coincida nombre exacto
        component: ServicesComponent
      },
      {
        path: 'about_us',
        pathMatch:'full',//coincida nombre exacto,
        component: AboutComponent
      },
       {
        path: 'contact',
        //canActivate: [AuthGuard],
        component: ContactComponent
      },
      {
        path: '',
        //canActivate: [AuthGuard],
        component: HomeComponent
      },
      { 
        path: '**', 
        redirectTo: '' 
      }
];
