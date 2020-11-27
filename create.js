var undo = [];
var redo = [];
var Object_cnt = 0;
var Object_list = [];
var shift = 10;

function CreateRect(Work_canvas){
  //undo.push(canvasA.toDatalessJSON());
  redo = [];
  Object_list[Object_cnt] = new fabric.Rect({
    left: 80,
    top: 80,
    width: 80,
    height: 80,
    snapAngle: 5,
    fill: 'orangered',
  });
  Work_canvas.add(Object_list[Object_cnt]).setActiveObject(Object_list[Object_cnt]);
  Object_cnt = Object_cnt + 1;
}
function CreateCircle(Work_canvas){
  //undo.push(canvasA.toDatalessJSON());
  redo = [];
  Object_list[Object_cnt] = new fabric.Circle({
    left: 50,
    top: 50,
    fill: 'blue',
    radius: 30,
    snapAngle: 5,
  });
  Work_canvas.add(Object_list[Object_cnt]).setActiveObject(Object_list[Object_cnt]);
  Object_cnt = Object_cnt + 1;
}
function CreateText(Work_canvas){
  //undo.push(canvasA.toDatalessJSON());
  redo = [];
  Object_list[Object_cnt] = new fabric.IText('Mytext', {
    width: 150,
    top: 5,
    left: 5,
    fontSize: 16,
    textAlign: 'center',
    fixedWidth: 150,
    snapAngle: 5,
  });
  Work_canvas.add(Object_list[Object_cnt]).setActiveObject(Object_list[Object_cnt]);;
  Object_cnt = Object_cnt + 1;
}

function CreateClone(Work_canvas) {
  //undo.push(canvasA.toDatalessJSON());
  var Clone_obj = fabric.util.object.clone(Select);
  Clone_obj.set({left: Select.left + shift,top: Select.top + shift});
  Work_canvas.add(Clone_obj); 
  Work_canvas.renderAll();
  shift += 10;
}

/*canvasA.on('selection:updated', function(e){
  shift = 10;
});*/

function CreateTwitter(Work_canvas){
  Object_list[Object_cnt] = new fabric.Image.fromURL('twitter.png',function(oImg){
    oImg.set({id: Object_cnt, left:80, top:80, snapAngle: 5});
    oImg.scale(0.1);
    Work_canvas.add(oImg).setActiveObject(oImg);
  });
  Object_cnt = Object_cnt + 1;
}