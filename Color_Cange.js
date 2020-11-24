function Diagram_Color_Cange(){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  Select.set({fill: document.getElementById("Diagram_color").value});
  canvasA.renderAll();
}

function Frame_Color_Cange(){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  Select.set({stroke: document.getElementById("Frame_color").value});
  canvasA.renderAll();
}