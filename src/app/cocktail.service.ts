import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails() {
    return [
      {name: " Cocktail1", price : "blablabla", img:'http://i.f1g.fr/media/ext/1900x1900/madame.lefigaro.fr/sites/default/files/img/2009/04/12287034jpg.jpg',},
      {name: " Cocktail2", price : "blablabla", img:'http://i.f1g.fr/media/ext/1900x1900/madame.lefigaro.fr/sites/default/files/img/2009/04/12287034jpg.jpg',},
      {name: " Cocktail3", price : "blablabla", img:'http://i.f1g.fr/media/ext/1900x1900/madame.lefigaro.fr/sites/default/files/img/2009/04/12287034jpg.jpg',},
      {name: " Cocktail4", price : "blablabla", img:'http://i.f1g.fr/media/ext/1900x1900/madame.lefigaro.fr/sites/default/files/img/2009/04/12287034jpg.jpg',},
      {name: " Cocktail5", price : "blablabla", img:'http://i.f1g.fr/media/ext/1900x1900/madame.lefigaro.fr/sites/default/files/img/2009/04/12287034jpg.jpg',}
    ];
  }
}
