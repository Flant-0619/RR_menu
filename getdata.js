function GetData(){
  Select = canvasA.getActiveObject();
}
canvasA.on('selection:created', function(e) {
  GetData();
});

canvasA.on('selection:updated', function(e) {
  GetData();
});
