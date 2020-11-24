function moveToTop() {
  Select.bringToFront();
}
function moveToBottom() {
  Select.sendToBack();
  gridToBottom();
}
function gridToBottom() {
  var objects = canvasA.getObjects('line');
  for (let i in objects) {
    if(objects[i].stroke == '#000'){
      canvasA.sendToBack(objects[i]);
    }
  }
  for (let i in objects) {
    if(objects[i].stroke == '#ccc'){
      canvasA.sendToBack(objects[i]);
    }
  }
}