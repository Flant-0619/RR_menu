function Diagram_Color_Cange(Work_canvas){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  Select.set({fill: document.getElementById("Diagram_color").value});
  Work_canvas.renderAll();
}

function Frame_Color_Cange(Work_canvas){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  Select.set({stroke: document.getElementById("Frame_color").value});
  Work_canvas.renderAll();
}