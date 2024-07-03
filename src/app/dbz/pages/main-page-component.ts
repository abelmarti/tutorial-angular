import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  
  constructor(public dbzService: DbzService){
    
  }

  get characters():Character[]{
    return [...this.dbzService.characters]
  }

  onDeletedCharacter(id:string){
    this.dbzService.deteleCharacterId(id);
  }

  onNewCharecter(character:Character){
    this.dbzService.addCharecter(character);
  }
}
