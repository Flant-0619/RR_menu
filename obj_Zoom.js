/*
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
*/

function Change_obj_size(Work_canvas){
  undo.push(Work_canvas.toDatalessJSON());
  redo = [];
  var Width = document.getElementById("obj_Width");
  var Height = document.getElementById("obj_Height");
  var Width_value = document.getElementById("obj_Width").value;
  var Height_value = document.getElementById("obj_Height").value;
  tmpX = 1;
  tmpY = 1;
  if(parseInt(Width_value) <= 10){
    Width.value = 10;
    Select.set({scaleX: Width.value / (Select.width * tmpX)});
    tmpX = Select.scaleX;
  }else if(parseInt(Width_value) >= 600){
    Width.value = 600;
    Select.set({scaleX: Width.value / (Select.width * tmpX)});
    tmpX = Select.scaleX;
  }else{
    Select.set({scaleX: parseInt(Width_value) / (Select.width * tmpX)});
    tmpX = Select.scaleX;
  }

  if(parseInt(Height_value) <= 10){
    Height.value = 10;
    Select.set({scaleY: Height.value / (Select.height * tmpY)});
    tmpY = Select.scaleY;
  }else if(parseInt(Height_value) >= 600){
    Height.value = 600;
    Select.set({scaleY: Height.value / (Select.height * tmpY)});
    tmpY = Select.scaleY;
  }else{
    Select.set({scaleY: parseInt(Height_value) / (Select.height * tmpY)});
    tmpY = Select.scaleY;
  }
  Work_canvas.renderAll();
}