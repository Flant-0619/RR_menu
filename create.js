var undo = [];
var redo = [];
var Object_cnt = 0;
var Object_list = [];
var shift = 10;

function CreateRect(){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  Object_list[Object_cnt] = new fabric.Rect({
    id: Object_cnt,
    left: 80,
    top: 80,
    width: 80,
    height: 80,
    snapAngle: 5,
    fill: 'orangered',
  });
  canvasA.add(Object_list[Object_cnt]).setActiveObject(Object_list[Object_cnt]);
  Object_cnt = Object_cnt + 1;
}
function CreateCircle(){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  Object_list[Object_cnt] = new fabric.Circle({
    id: Object_cnt,
    left: 50,
    top: 50,
    fill: 'blue',
    radius: 30,
    snapAngle: 5,
    //name : Object_cnt
  });
  canvasA.add(Object_list[Object_cnt]).setActiveObject(Object_list[Object_cnt]);;
  Object_cnt = Object_cnt + 1;
}
function CreateText(){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  Object_list[Object_cnt] = new fabric.IText('Mytext', {
    id: Object_cnt,
    width: 150,
    top: 5,
    left: 5,
    fontSize: 16,
    textAlign: 'center',
    fixedWidth: 150,
    snapAngle: 5,
    //name : Object_cnt
  });
  canvasA.add(Object_list[Object_cnt]).setActiveObject(Object_list[Object_cnt]);;
  Object_cnt = Object_cnt + 1;
}

function CreateClone() {
  undo.push(canvasA.toDatalessJSON());
  var Clone_obj = fabric.util.object.clone(Select);
  
  Clone_obj.set({left: Select.left + shift,top: Select.top + shift});
  canvasA.add(Clone_obj); 
  canvasA.renderAll();
  shift += 10;
}

canvasA.on('selection:updated', function(e){
  shift = 10;
});

function CreateTwitter(){
  Object_list[Object_cnt] = new fabric.Image.fromURL('twitter.png',function(oImg){
    oImg.set({id: Object_cnt, left:80, top:80, snapAngle: 5});
    oImg.scale(0.1);
    canvasA.add(oImg).setActiveObject(oImg);
  });
  Object_cnt = Object_cnt + 1;
}