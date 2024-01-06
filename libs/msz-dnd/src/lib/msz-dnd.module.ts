import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndSourceDirective } from './dnd-source.directive';
import { DndTestComponentComponent } from './test/dnd-test-component.component';
import { DndService } from '..';
import { DndTargetDirective } from './dnd-target.directive';
import { BACKENDS } from './backends';

const EXPORTS =  [DndSourceDirective,  DndTargetDirective]

@NgModule({
  imports: [CommonModule],
  declarations: [
    EXPORTS, 
    DndTestComponentComponent,
   
  ],
  exports: [EXPORTS]
})
export class MszDndModule  {

  static forRoot(backend: BACKENDS): ModuleWithProviders<MszDndModule> {
    return {
      ngModule: MszDndModule,
      providers: [
        {
          provide: DndService,
          useFactory: () => DndService.start()
        }
      ]
    }
  }
}
