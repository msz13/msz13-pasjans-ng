import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SoltaireComponent } from './soltaire.component';

export default {
  title: 'SoltaireComponent',
  component: SoltaireComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SoltaireComponent>;

const Template: Story<SoltaireComponent> = (args: SoltaireComponent) => ({
  component: SoltaireComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}