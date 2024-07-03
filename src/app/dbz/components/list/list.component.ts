import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  public onDeletedId:EventEmitter<string>=new EventEmitter();
  
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    }
  ];

  

  onDeleteCharacter(id?:string){
    if(!id)return;
    this.onDeletedId.emit(id);
  }
}
