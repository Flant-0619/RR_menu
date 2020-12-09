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
  var tmp_Work_object = Work_canvas._objects.length;
  for(var i = 0; i < tmp_Work_object; i++){
    Work_canvas.remove(Work_canvas._objects[0])
  }
}