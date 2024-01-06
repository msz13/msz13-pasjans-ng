import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { EmptyPileComponent } from './empty-pile.component';

export default {
  title: 'EmptyPileComponent',
  component: EmptyPileComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<EmptyPileComponent>;

const Template: Story<EmptyPileComponent> = (args: EmptyPileComponent) => ({
  component: EmptyPileComponent,
  props: args,
});


export const Primary = Template.bind({});
  Primary.args = {
}