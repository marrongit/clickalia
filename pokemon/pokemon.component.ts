import {Component} from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../pokemon/pokemon';

@Component({
    selector: 'pokemon',
    templateUrl: 'pokemon.component.html',
    providers: [PokemonService]

})
export class PokemonComponent{
    res: Array<any> = [];
    nombre:string;
    pokemon:Pokemon;
    pokemons: Array<any> = [];
    abilities: Array<any> = [];
    abilitie: Array<string> = [];
    ability:string;
    all_pokemons: any;
    pokemonImage:string;
    pokemonImageEv1:string;
    
    constructor(
        public service: PokemonService
    ){
        this.getPokemons();
    }

    getPokemons(){
        this.service.getInfoApi().subscribe(
            result => {
                this.all_pokemons = result['results'];
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
                });
            }, error => {
                var emsg = <any> error;
                console.log(emsg)
            }
        )

        this.getPokemonImage();
        this.service.getPokemonEvolution().subscribe(
            result => {
                result['chain']['evolves_to'].forEach(e => {
                    let url_specie = e.species.url
                    this.service.getPokemonSpecies(url_specie).subscribe(
                        result => {
                            result['varieties'].forEach(e => {
                                this.service.getPokemon(e.pokemon.url).subscribe(
                                    result => {
                                        let sprites = result['sprites']
                                        this.pokemonImageEv1 = sprites.front_default;
                                    }
                                )
                            });
                        }, error => {
                            var emsg = <any> error;
                            console.log(emsg)
                        }
                    )
                    })
                }, error => {
                    var emsg = <any> error;
                    console.log(emsg)
                }
        )
    }

    getAbilities(param_ability){
        this.service.getAbilities().subscribe(
            result => {
                this.abilities = result['results'];
                this.abilities.forEach(e => {
                    if(e.name == param_ability){
                        let url = e.url;
                        let url_split = url.split('/')
                        let abilityType = url_split[6]
                        this.service.getPokemonByAbility(abilityType).subscribe(
                            result => {
                                this.res = result['pokemon'];
                                this.res.forEach(e => {
                                    this.pokemons.push(e.pokemon.name);
                                });
                            }, error => {
                                let msg = <any> error;
                                console.log('error en getPokemonByAbility: ',msg);
                            }
                        )
                    }
                });
            }, error => {
                var emsg = <any> error;
                console.log(emsg)
            }
        )
    }

    getPokemonByAbility(){
        this.getAbilities(this.ability);
    }

    getPokemonImage(){
        this.service.getPokemonByName(this.nombre).subscribe(
            result => {
                let forms = result['forms']
                forms.forEach(e => {
                    let urlImage = e.url;
                    this.service.getPokemonImage(urlImage).subscribe(
                        result => {
                            let sprites = result['sprites']
                            this.pokemonImage = sprites.front_default;
                        }
                    )
                });
            }, error => {
                var emsg = <any> error;
                console.log(emsg)
            }
        )
    }
}