import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { SoltaireTableComponent } from './soltaire-table.component';

describe('SoltaireTableComponent', () => {
  let spectator: Spectator<SoltaireTableComponent>;
  const createComponent = createComponentFactory(SoltaireTableComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
