import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-dealed-pile',
  templateUrl: './not-dealed-pile.component.html',
  styleUrls: ['./not-dealed-pile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotDealedPileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
