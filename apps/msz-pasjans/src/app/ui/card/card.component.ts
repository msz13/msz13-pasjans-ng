import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() uncovered: boolean = false
  @Input() name!: string 

  cardCover: string = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Card_back_02a.svg"
  get imgSrc() {
    return "https://upload.wikimedia.org/wikipedia/commons/c/c7/10C.svg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
