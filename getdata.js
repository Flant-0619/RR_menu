function GetData(Work_canvas){
  Select = Work_canvas.getActiveObject();
}
canvasA.on('selection:created', function(e) {
  GetData(Work_canvas);
});

canvasA.on('selection:updated', function(e) {
  GetData(Work_canvas);
});
