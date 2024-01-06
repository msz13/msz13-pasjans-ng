import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EmptyPileComponent } from './empty-pile.component';

describe('EmptyPileComponent', () => {
  let spectator: Spectator<EmptyPileComponent>;
  const createComponent = createComponentFactory(EmptyPileComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
