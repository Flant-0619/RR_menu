function GetData(Work_canvas){
  Select = Work_canvas.getActiveObject();
}
fabriccanvas1.on('selection:created', function(e) {
  GetData(Work_canvas);
});

fabriccanvas1.on('selection:updated', function(e) {
  GetData(Work_canvas);
});
