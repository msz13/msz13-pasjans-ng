import { Component, ElementRef, OnInit } from '@angular/core';
import { DndService } from '@msz-pasjans/msz-dnd';
import { DragDropMonitor, DropTarget, Identifier } from 'react-dnd-html5-backend/node_modules/dnd-core';


import { Card } from '../../domain/models';



  

@Component({
  selector: 'msz-pasjans-dnd-test',
  templateUrl: './dnd-test.component.html',
  styleUrls: ['./dnd-test.component.scss']
})
export class DndTestComponent implements OnInit {

  
  firstPile = [new Card('2S', true)]
  
  secondPile = [new Card('3S'), new Card('4S', true)]

  thirdPile = [new Card('5S'), new Card('6S'), new Card('7S', true)]


  constructor(
   private dndService: DndService,
   private elem: ElementRef
    ) { }
  //  private dndService: DndService
  ngOnInit(): void {  


 
      
  }

 

  
 


}


