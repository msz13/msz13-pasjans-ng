import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardPileComponent } from './card-pile/card-pile.component';
import { DndTestComponent } from './dnd-test/dnd-test.component';
import {MszDndModule} from '@msz-pasjans/msz-dnd'
import { SoltaireComponent } from '../soltaire/soltaire.component';
import { SoltaireTableComponent } from './soltaire-table/soltaire-table.component';
import { BACKENDS } from 'libs/msz-dnd/src/lib/backends';
import { SuitPileComponent } from './suit-pile/suit-pile.component';
import { EmptyPileComponent } from './empty-pile/empty-pile.component';
import { NotDealedPileComponent } from './not-dealed-pile/not-dealed-pile.component';

const COMPONENTS = [
    CardComponent, 
    CardPileComponent, 
    DndTestComponent, 
    SoltaireComponent, 
    SoltaireTableComponent,
    SuitPileComponent, 
    EmptyPileComponent,
    NotDealedPileComponent,
  ]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule, //MszDndModule.forRoot(BACKENDS.HTML5ToTouch)
  ],
  exports: [...COMPONENTS]
})
export class UiModule { }
