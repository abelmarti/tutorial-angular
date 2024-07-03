import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4} from 'uuid'

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
      id:v4()

    },
    {
      name: 'Goku',
      power: 9500,
      id:v4()
    },
    {
      name: 'Vegeta',
      power: 7500,
      id:v4()
    },
  ];

  addCharecter(character: Character) {
    character.id=v4();
    this.characters.push(character);
  }

  deteleCharacterId(id: string) {
    this.characters=this.characters.filter(character=>character.id!==id);
  }
}
