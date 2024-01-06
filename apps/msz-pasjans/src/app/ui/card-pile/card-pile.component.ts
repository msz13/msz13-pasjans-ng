import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';
import { Card } from '../../domain/models';

@Component({
  selector: 'app-card-pile',
  templateUrl: './card-pile.component.html',
  styleUrls: ['./card-pile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPileComponent implements OnInit {

  @Input() cards!: Card[] | undefined
      

  constructor() { }

  ngOnInit(): void {
 
  }
    
  

  cardPosition(index: number) { 
    const param = this.cards!.length < 10 ? 30 : 25    
    return `${index*param}px`
  }

  onDrop($event: CdkDragDrop<Card>) {
    if($event.container==$event.previousContainer) {

    }
    console.log('item dropped', $event.previousIndex, $event.currentIndex)
  }

  

}

