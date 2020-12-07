function Remove_Object(Work_canvas){
  console.log(Select);
  Work_undo.push(Work_canvas.toDatalessJSON());
  Work_redo = [];
  try{
      if(Select._objects.length > 1){
        Select._objects.forEach(function (object, key){
          Work_canvas.remove(object);
      });
      Work_canvas.discardActiveObject();
      Work_canvas.renderAll();
    }
  }
  catch{
    Work_canvas.remove(Select);
  }
}
function Remove_All_Object(Work_canvas) {
  Work_undo.push(Work_canvas.toDatalessJSON());
  Work_redo = [];
  var objects = Work_canvas.getObjects('rect');
  for (let i in objects) {
    Work_canvas.remove(objects[i]);
  }
  objects = Work_canvas.getObjects('circle');
  for (let i in objects) {
    Work_canvas.remove(objects[i]);
  }
  objects = Work_canvas.getObjects('itext');
  for (let i in objects) {
    Work_canvas.remove(objects[i]);
  }
}