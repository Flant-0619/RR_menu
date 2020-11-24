function Remove_Object(){
  Select = (canvasA.getActiveObject());
  console.log(Select);
  try{
      if(Select._objects.length > 1){
      Select._objects.forEach(function (object, key){
        canvasA.remove(object);
      });
      canvasA.discardActiveObject();
      canvasA.renderAll();
    }
  }
  catch{
    canvasA.remove(Select);
  }
}
function Remove_All_Object() {
  var objects = canvasA.getObjects('rect');
  for (let i in objects) {
    canvasA.remove(objects[i]);
  }
  objects = canvasA.getObjects('circle');
  for (let i in objects) {
    canvasA.remove(objects[i]);
  }
  objects = canvasA.getObjects('itext');
  for (let i in objects) {
    canvasA.remove(objects[i]);
  }
}