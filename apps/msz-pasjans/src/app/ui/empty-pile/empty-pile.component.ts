import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-empty-pile',
  templateUrl: './empty-pile.component.html',
  styleUrls: ['./empty-pile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyPileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
