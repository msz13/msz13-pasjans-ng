import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Card, Table } from '../../domain/models';
import { SoltaireGameService } from '../../domain/soltaire-game.service';

@Component({
  selector: 'app-soltaire-table',
  templateUrl: './soltaire-table.component.html',
  styleUrls: ['./soltaire-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoltaireTableComponent implements OnInit {

  @Input() basePiles!: Map<number, Card[]> 

  @Input() suitPiles!: Card[]

  @Input() notDealedCards!: Card[]

  constructor() { }

  ngOnInit(): void {
  }

  /* get basePiles() {
    return new SoltaireGameService().dealCards().basePiles.values()
  } */

 

}
