import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PokemonComponent} from './pokemon/pokemon.component';
import {ArrayComponent} from './array/array.component';

const appRoutes: Routes = [
    {path:'',component: HomeComponent},
    {path:'home',component: HomeComponent},
    {path:'pokemon',component: PokemonComponent},
    {path:'array',component: ArrayComponent},
    {path:'**',component: EmpleadosComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
