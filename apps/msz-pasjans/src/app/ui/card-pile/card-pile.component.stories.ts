import { MszDndModule } from '@msz-pasjans/msz-dnd';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { Card, Suits } from '../../domain/models';
import { CardComponent } from '../card/card.component';
import { CardPileComponent } from './card-pile.component';

export default {
  title: 'CardPileComponent',
  component: CardPileComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
      imports: [],
    })
  ],
} as Meta<CardPileComponent>;

const Template: Story<CardPileComponent> = (args: CardPileComponent) => ({
  component: CardPileComponent,
  props: args,
});


export const OneCard = Template.bind({});
OneCard.args = {
  cards: [new Card('AH',true)]
}

const cardsPile = [
  new Card('AH'),
  new Card('AH'),
  new Card('AH'),
  new Card('2H', true)
]


export const TwoCards = Template.bind({});
TwoCards.args = {
  cards: cardsPile
}

const sevenCardsPile = [
  new Card('AH'),
  new Card('AH'),
//  new Card('AH'),
 // new Card('AH'),
 // new Card('AH'),
 // new Card('AH'),
  new Card('2H', true)
]

export const SevenCards = Template.bind({});
SevenCards.args = {
  cards: sevenCardsPile
}

const manyOpenedPile = [
  new Card('AH'),
  new Card('AH'),
  new Card('AH'),
  new Card('AH'),
  new Card('AH'),
  new Card('AH'),
  new Card('AH'),
  new Card('AH'),
  new Card('QS', true),
  new Card('2H', true)
]
export const ManyOpened = Template.bind({});
ManyOpened.args = {
  cards: manyOpenedPile
}