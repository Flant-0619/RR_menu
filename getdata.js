/*
function GetData(Work_canvas){
  Select = Work_canvas.getActiveObject();
  console.log(Select.id);
  console.log(Select.name);
  console.log(Select.IDF);
  console.log(Select);
}
*/

function GetData(Work_canvas){
  Select = Work_canvas.getActiveObject();
  Call_edit_window(Select.IDF, Work_canvas)
}

function NotData(Work_canvas){
  console.log('編集ウィンドウ閉じる')
  diagram_edit.style.display ="none";
  SNS_edit.style.display ="none";
  text_edit.style.display ="none";
  img_edit.style.display ="none";
}

fabriccanvas1.on('selection:created', function(e) {
  GetData(Work_canvas);
});

fabriccanvas1.on('selection:updated', function(e) {
  GetData(Work_canvas);
});

fabriccanvas1.on('selection:cleared', function(e) {
  NotData(Work_canvas);
});

fabriccanvas2.on('selection:created', function(e) {
  GetData(Work_canvas);
});

fabriccanvas2.on('selection:updated', function(e) {
  GetData(Work_canvas);
});

fabriccanvas2.on('selection:cleared', function(e) {
  NotData(Work_canvas);
});

fabriccanvas3.on('selection:created', function(e) {
  GetData(Work_canvas);
});

fabriccanvas3.on('selection:updated', function(e) {
  GetData(Work_canvas);
});

fabriccanvas3.on('selection:cleared', function(e) {
  NotData(Work_canvas);
});

fabriccanvas4.on('selection:created', function(e) {
  GetData(Work_canvas);
});

fabriccanvas4.on('selection:updated', function(e) {
  GetData(Work_canvas);
});

fabriccanvas4.on('selection:cleared', function(e) {
  NotData(Work_canvas);
});

fabriccanvas5.on('selection:created', function(e) {
  GetData(Work_canvas);
});

fabriccanvas5.on('selection:updated', function(e) {
  GetData(Work_canvas);
});

fabriccanvas5.on('selection:cleared', function(e) {
  NotData(Work_canvas);
});