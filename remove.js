var remove_Object_cnt = []
function Remove_Object(Work_canvas){
  Select = (Work_canvas.getActiveObject());
  console.log(Select);
  try{
      if(Select._objects.length > 1){
        Select._objects.forEach(function (object, key){
          remove_Object_cnt.push(object.name);
          Work_canvas.remove(object);
      });
      Work_canvas.discardActiveObject();
      Work_canvas.renderAll();
    }
  }
  catch{
    remove_Object_cnt.push(Select.name);
    Work_canvas.remove(Select);
  }
}
function Remove_All_Object(Work_canvas) {
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
  remove_Object_cnt = [];
}