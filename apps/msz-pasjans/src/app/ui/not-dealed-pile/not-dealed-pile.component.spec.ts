import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { NotDealedPileComponent } from './not-dealed-pile.component';

describe('NotDealedPileComponent', () => {
  let spectator: Spectator<NotDealedPileComponent>;
  const createComponent = createComponentFactory(NotDealedPileComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
