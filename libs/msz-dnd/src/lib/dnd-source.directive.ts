import { Directive, ElementRef, OnInit } from '@angular/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import {MultiBackend, MouseTransition, TouchTransition} from 'dnd-multi-backend'
import { createDragDropManager, DragDropMonitor, DragSource, DropTarget, Identifier } from 'dnd-core';
import { fromEvent } from 'rxjs';
import { DndService } from '..';


export class DragSourceSpec {

   
  beginDrag(monitor: DragDropMonitor, targetId: Identifier) {   
    console.log('source begin drag')
    return {id: 'test'}
  }

  endDrag(monitor: DragDropMonitor, targetId: Identifier): void {
   console.log('endDrag '+ monitor.didDrop())
   console.log(JSON.stringify(monitor.getItem())+JSON.stringify(monitor.getTargetIds()))
  }

  canDrag(monitor: DragDropMonitor, targetId: Identifier): boolean {
   return true
  }

  isDragging(monitor: DragDropMonitor, targetId: Identifier): boolean {
    console.log('source '+monitor.getDifferenceFromInitialOffset())
    return true
  }

}




@Directive({
  selector: '[appDndSource]'
})
export class DndSourceDirective implements OnInit {

  constructor(private elem: ElementRef<HTMLElement>, private dndService: DndService) { }
  
  ngOnInit(): void {  
   this.createSource()
  // this.dndService.getMonitor().subscribeToStateChange(this.onStart)

  }

  createSource() {
          
    
    const source = new DragSourceSpec()
    
    this.dndService.createSource(source, this.elem.nativeElement)

  }

  onStart() {
    console.log('monitor '+this.dndService.getMonitor().isDragging())
    
  }


}
