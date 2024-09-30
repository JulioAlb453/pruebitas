import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SecondComponentComponent } from './second-component/second-component.component';
// importas las rutas donde esten tus vistas principales

export const routes: Routes = [
    {
        path: 'home',  //aqui va el nombre de la ruta que le vas a poner
        component: HomeComponent //se refiere al componente que ya importaste
    },
    {
        path: 'second',
        component: SecondComponentComponent
    }

];
