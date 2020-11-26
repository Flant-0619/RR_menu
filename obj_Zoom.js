function obj_ZoomIn(Work_canvas){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  Select.set({scaleX: Select.scaleX + (Select.scaleX * 0.2)});
  Select.set({scaleY: Select.scaleY + (Select.scaleY * 0.2)});
  Work_canvas.renderAll();
}

function obj_ZoomOut(Work_canvas){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  Select.set({scaleX: Select.scaleX - (Select.scaleX * 0.2)});
  Select.set({scaleY: Select.scaleY - (Select.scaleY * 0.2)});
  Work_canvas.renderAll();
}