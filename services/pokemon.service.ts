import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PokemonService{
    public name:string;
    url:string = "https://pokeapi.co/api/v2/";

    constructor(
        public http_ct:HttpClient
    ){}

    getInfoApi(){
        return this.http_ct.get(this.url+"pokemon?limit=150");
    }
    getPokemonByName(name){
        return this.http_ct.get(this.url+"pokemon/"+name);
    }

    getAbilities(){
        return this.http_ct.get(this.url+"ability?limit=327");
    }
    
    getPokemonByAbility(ability){
        return this.http_ct.get(this.url+"ability/"+ability);
    }

    getPokemonImage(p_url){
        return this.http_ct.get(p_url);
    }

    getPokemonSpecies(p_url){
        return this.http_ct.get(p_url);
    }

    getPokemonEvolution(){
        return this.http_ct.get(this.url+'evolution-chain/1/');
    }

    getPokemon(p_url){
        return this.http_ct.get(p_url);
    }
}