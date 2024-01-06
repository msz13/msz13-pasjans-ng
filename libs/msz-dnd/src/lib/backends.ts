import { MouseTransition, TouchTransition } from "dnd-multi-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

export enum BACKENDS {
  TEST,
  HTML5ToTouch
}

export const HTML5ToTouch = {
    backends: [
      {
        id: 'html5',
        backend: HTML5Backend,
        transition: MouseTransition,
      },
      {
        id: 'touch',
        backend: TouchBackend,
        preview: true,
        transition: TouchTransition,
      },
    ],
  }