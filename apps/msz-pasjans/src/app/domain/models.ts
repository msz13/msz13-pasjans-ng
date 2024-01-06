export enum Suits {
    HEART,
    DIAMOND,
    CLUB,
    SPADE

}

export class Card {       
    
    constructor(public ID: string, public uncovered: boolean = false) {}

}

export class Table {

    uncovered!: Card[] 

    basePiles: Map<number, Card[]> = new Map()
}


