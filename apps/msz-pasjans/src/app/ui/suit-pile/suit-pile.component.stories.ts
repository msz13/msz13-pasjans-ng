import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CardComponent } from '../card/card.component';
import { EmptyPileComponent } from '../empty-pile/empty-pile.component';
import { SuitPileComponent } from './suit-pile.component';

export default {
  title: 'SuitPileComponent',
  component: SuitPileComponent,
  decorators: [
    moduleMetadata({
      declarations: [EmptyPileComponent, CardComponent],
      imports: [],
    })
  ],
} as Meta<SuitPileComponent>;

const Template: Story<SuitPileComponent> = (args: SuitPileComponent) => ({
  component: SuitPileComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}