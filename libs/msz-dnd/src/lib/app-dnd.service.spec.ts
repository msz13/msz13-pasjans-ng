import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { AppDndService } from './app-dnd.service';

describe('AppDndService', () => {
  let spectator: SpectatorService<AppDndService>;
  const createService = createServiceFactory(AppDndService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});