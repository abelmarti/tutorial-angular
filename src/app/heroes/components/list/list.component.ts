import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[]=['Spiderman','Ironman','Hulk', 'She Hulk','Thor'];
  public deleteHero?:string;


  removeHero(){
    this.deleteHero=this.heroNames.pop();
    this.heroNames.pop();

  }

}
