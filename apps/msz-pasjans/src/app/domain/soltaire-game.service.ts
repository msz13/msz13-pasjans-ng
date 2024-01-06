import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DECK } from './deck';
import { Card, Table } from './models';

@Injectable({
  providedIn: 'root'
})
export class SoltaireGameService {

  private basePilesState: Map<number, Card[]> = new Map()

  private basePiles: BehaviorSubject<Map<number, Card[]>> = new BehaviorSubject(this.basePilesState)

  basePiles$ = this.basePiles.asObservable()



  dealCards(): Table {    
    
    const deck = [...DECK]

    const basePiles = deck.splice(0,28).map(c => new Card(c)) 

    const restPile = deck.splice(0,24).map(c => new Card(c)) 
   
      
    const basePilesMap: Map<number, Card[]> = new Map()

    for (let i = 1; i <= 7; i++) {
      const pile = basePiles.splice(0, i)
      pile[pile.length-1].uncovered  = true
      basePilesMap.set(i,pile) 
    }
    
    this.basePilesState = basePilesMap
    this.basePiles.next(this.basePilesState)
       
   return {uncovered: restPile, basePiles: basePilesMap}

  }

  
}
