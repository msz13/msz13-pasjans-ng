import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

import { DndTargetDirective } from './dnd-target.directive';

describe('DndTargetDirective ', () => {
  let spectator: SpectatorDirective<DndTargetDirective>;
  const createDirective = createDirectiveFactory(DndTargetDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div highlight>Testing DndTargetDirective</div>`);

    spectator.dispatchMouseEvent(spectator.element, 'mouseover');

    expect(spectator.element).toHaveStyle({
      backgroundColor: 'rgba(0,0,0, 0.1)'
    });

    spectator.dispatchMouseEvent(spectator.element, 'mouseout');
    expect(spectator.element).toHaveStyle({
      backgroundColor: '#fff'
    });
  });

});
