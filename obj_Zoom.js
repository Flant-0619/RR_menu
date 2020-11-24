function obj_ZoomIn(){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  Select.set({scaleX: Select.scaleX + (Select.scaleX * 0.2)});
  Select.set({scaleY: Select.scaleY + (Select.scaleY * 0.2)});
  canvasA.renderAll();
}

function obj_ZoomOut(){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  Select.set({scaleX: Select.scaleX - (Select.scaleX * 0.2)});
  Select.set({scaleY: Select.scaleY - (Select.scaleY * 0.2)});
  canvasA.renderAll();
}