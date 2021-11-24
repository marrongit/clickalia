import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PokemonService{
    public name:string;
    constructor(
        public http_ct:HttpClient
    ){}

    getInfoApi(){
        return this.http_ct.get("https://pokeapi.co/api/v2/pokemon?limit=150");
    }
    getPokemonByName(name){
        return this.http_ct.get("https://pokeapi.co/api/v2/pokemon/"+name);
    }
}