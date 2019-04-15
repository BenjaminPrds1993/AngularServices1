import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails() {
    return [
      {name: " Cocktail1", info : "blablabla"},
      {name: " Cocktail2", info : "blablabla"},
      {name: " Cocktail3", info : "blablabla"},
      {name: " Cocktail4", info : "blablabla"},
      {name: " Cocktail5", info : "blablabla"}
    ];
  }
}
