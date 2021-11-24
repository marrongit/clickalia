import {Component} from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../pokemon/pokemon';

@Component({
    selector: 'pokemon',
    templateUrl: 'pokemon.component.html',
    providers: [PokemonService]

})
export class PokemonComponent{
    res: any;
    nombre:string;
    pokemon:Pokemon;
    abilities: Array<any> = [];
    abilitie: Array<string> = [];
    

    constructor(
        public service: PokemonService
    ){
        this.getPokemons();
    }

    getPokemons(){
        this.service.getInfoApi().subscribe(
            result => {
                this.res = result['results'];
                console.log(result['results']);
            }, error => {
                var emsg = <any> error;
                console.log(emsg)
            }
        )
    }

    getPokemonByName(){
        console.log(this.nombre);
        this.service.getPokemonByName(this.nombre).subscribe(
            result => {
                this.abilities = result['abilities'];
                this.abilities.forEach(e => {
                    this.abilitie.push(e.ability.name);
                    //console.log(this.abilities); 
                });
            }, error => {
                var emsg = <any> error;
                console.log(emsg)
            }
        )
    }
}