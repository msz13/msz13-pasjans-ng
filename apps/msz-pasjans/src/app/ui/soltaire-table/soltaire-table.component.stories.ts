import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SoltaireGameService } from '../../domain/soltaire-game.service';
import { CardPileComponent } from '../card-pile/card-pile.component';
import { CardComponent } from '../card/card.component';
import { EmptyPileComponent } from '../empty-pile/empty-pile.component';
import { NotDealedPileComponent } from '../not-dealed-pile/not-dealed-pile.component';
import { SuitPileComponent } from '../suit-pile/suit-pile.component';
import { UiModule } from '../ui.module';
import { SoltaireTableComponent } from './soltaire-table.component';

export default {
  title: 'SoltaireTableComponent',
  component: SoltaireTableComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent, CardPileComponent, SuitPileComponent, EmptyPileComponent, NotDealedPileComponent],
      imports: [],
    })
  ],
} as Meta<SoltaireTableComponent>;

const Template: Story<SoltaireTableComponent> = (args: SoltaireTableComponent) => ({
  component: SoltaireTableComponent,
  props: args,
});

const basePiles = new SoltaireGameService().dealCards().basePiles

export const Primary = Template.bind({});
Primary.args = {
  basePiles: basePiles
}