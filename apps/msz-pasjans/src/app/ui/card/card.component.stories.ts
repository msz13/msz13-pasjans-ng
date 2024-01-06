import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
  title: 'CardComponent',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    })
  ],
} as Meta<CardComponent>;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  component: CardComponent,
  props: args, 
});


export const Covered = Template.bind({});
Covered.args = {
}

export const Uncovered = Template.bind({});
Covered.args = {
  uncovered: true,
  name: '2H'
}