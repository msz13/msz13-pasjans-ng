import { TestBed, tick } from '@angular/core/testing';
import { table } from 'console';
import { Card } from './models';

import { SoltaireGameService } from './soltaire-game.service';

describe('SoltaireGameService', () => {
  let service: SoltaireGameService;

  beforeEach(() => {
   
    service = new SoltaireGameService()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('deal cards', () => {

    it.only('should deal 7 base piles which have from one to 7 cards', done => {

           
      service.basePiles$.subscribe({next: piles => {
        expect(piles.get(1)).toHaveLength(1)
        expect(piles.get(2)).toHaveLength(2)
        expect(piles.get(3)).toHaveLength(3)
        expect(piles.get(4)).toHaveLength(4)
        expect(piles.get(5)).toHaveLength(5)
        expect(piles.get(6)).toHaveLength(6)
        expect(piles.get(7)).toHaveLength(7)
        
      },
      complete: done()
    })  
      
      service.dealCards()     
            

    })

    it('should deal 28 cards and rest should be uncovered', () => {
      
      const table = service.dealCards()    
      
      expect(table.uncovered).toHaveLength(24)   

    })

    it('uncoved cards should not contains from basePiles', () => {
      
      const table = service.dealCards()
      const uncoverdPile = table.uncovered
      const basePiles = table.basePiles

      for (const pile of basePiles.values()) {
        uncoverdPile.forEach(uncovered => {
          expect (pile.some(base => base.ID == uncovered.ID )).toBe(false)
      })
    }    
         

    })

    it('last card of every base pile should be uncovered', ()=>{
      
      const table = service.dealCards()

       for (const pile of table.basePiles.values())  {
         expect(pile[pile.length - 1].uncovered).toBe(true)
       }
    })      
    

  })


});
