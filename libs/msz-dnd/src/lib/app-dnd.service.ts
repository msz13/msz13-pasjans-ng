import { DOCUMENT } from '@angular/common';
import { ElementRef, Inject, Injectable } from '@angular/core';
import { createDragDropManager, DragDropManager, DragDropMonitor, Identifier } from 'dnd-core';
import { MultiBackend } from 'dnd-multi-backend';
import { DragSourceSpec } from './dnd-source.directive';
import { HTML5ToTouch } from './backends';





@Injectable({
  providedIn: 'root'
})
export class DndService {

  private manager!: DragDropManager

  private constructor() { }


  static start() {
   
    const srv = new DndService()

    srv.manager = createDragDropManager(MultiBackend, this.getWindow(), HTML5ToTouch, true)

    return srv
    
  }

  private static getWindow() {
    
    return window.self !== window.top ? document.getElementsByTagName('iframe')[0].contentWindow : window
    
  }

  


  createSource(source: DragSourceSpec, elem: HTMLElement) {
          
    const registry = this.manager.getRegistry()

    
    const srcId = registry.addSource('item', source)
   
    
    this.manager.getBackend().connectDragSource(srcId, elem)

  }

  getBackend() {
   
    return this.manager.getBackend()
  }

  getMonitor() {
    return this.manager.getMonitor()
  }

  getRegistry() {
    return this.manager.getRegistry()
  }

}
