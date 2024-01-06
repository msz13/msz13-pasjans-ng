import { createComponentFactory, Spectator, } from '@ngneat/spectator'
import { DndTestComponentComponent} from './dnd-test-component.component'
import { DndSourceDirective} from '../dnd-source.directive'
import {ITestBackend} from 'react-dnd-test-backend'
import { DndService } from '../app-dnd.service';
import { MszDndModule } from '@msz-pasjans/msz-dnd';
import { BACKENDS} from '../backends'

let spectator: Spectator<DndTestComponentComponent>;
  const createComponent = createComponentFactory({
    component: DndTestComponentComponent,
    declarations: [DndSourceDirective],
    imports: [MszDndModule.forRoot(BACKENDS.TEST)]
  });
  let backend: any;
  let source: any;
  let target: any;


  beforeEach(() => {
    spectator = createComponent();
  });

describe('DndSource directive initiation', () =>{

  it('dragged item should be hidden', () =>{
    

  })

  it('when dragging is disabled should not drag')


})