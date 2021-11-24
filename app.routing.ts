import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PokemonComponent} from './pokemon/pokemon.component';

const appRoutes: Routes = [
    {path:'',component: HomeComponent},
    {path:'home',component: HomeComponent},
    {path:'pokemon',component: PokemonComponent},
    {path:'**',component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
