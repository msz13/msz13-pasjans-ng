import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiModule } from '../ui.module';
import { DndTestComponent } from './dnd-test.component';

export default {
  title: 'DndTestComponent',
  component: DndTestComponent,
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    })
  ],
} as Meta<DndTestComponent>;

const Template: Story<DndTestComponent> = (args: DndTestComponent) => ({
  component: DndTestComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}