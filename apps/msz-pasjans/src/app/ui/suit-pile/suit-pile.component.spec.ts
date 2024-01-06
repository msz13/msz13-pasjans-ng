import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SuitPileComponent } from './suit-pile.component';

describe('SuitPileComponent', () => {
  let spectator: Spectator<SuitPileComponent>;
  const createComponent = createComponentFactory(SuitPileComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
