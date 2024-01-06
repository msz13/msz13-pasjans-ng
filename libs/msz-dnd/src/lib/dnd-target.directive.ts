import { Directive, ElementRef, OnInit } from '@angular/core';
import { DragDropMonitor, DropTarget, Identifier } from 'dnd-core';
import { Observable, Subject } from 'rxjs';
import { DndService } from '..';


export class DropTargetSpec implements DropTarget {

  $dropped!: Observable<string> = new Subject()

  canDrop(monitor: DragDropMonitor, targetId: Identifier): boolean {
    return true
  }
  hover(monitor: DragDropMonitor, targetId: Identifier): void {
    console.log('hover', monitor.getDifferenceFromInitialOffset())
  }

  drop(monitor: DragDropMonitor, targetId: Identifier) {
    this.$dropped.subscribe({next: monitor.getItem()})
    console.log('dropped: '+ JSON.stringify(monitor.getItem()))
  }

} 


@Directive({
  selector: '[appDndTarget]'
})
export class DndTargetDirective implements OnInit {

  constructor(private elem: ElementRef, private dndService: DndService) { }


  ngOnInit(): void {
    this.createTarget()
  }


  createTarget() {
    const target = new DropTargetSpec()
 
     const targetId = this.dndService.getRegistry().addTarget('item', target)
        
     this.dndService.getBackend().connectDropTarget(targetId, this.elem.nativeElement)
 
     console.log(targetId)
 
     console.log(this.dndService.getBackend().profile())
 
   
  } 
  



}
