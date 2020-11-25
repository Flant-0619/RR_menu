var rect = [];
var circle = []
var text = []
var undo = [];
var redo = [];
var twitter = [];
var Twitter_number = 0;
var Rect_number = 0;
var Circle_number = 0;
var Text_number = 0;
var Object_cnt = 0;
var shift = 10;
function CreateRect(){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  rect[Rect_number] = new fabric.Rect({
    id: Object_cnt,
    left: 80,
    top: 80,
    width: 80,
    height: 80,
    snapAngle: 5,
    fill: 'orangered',
  });
  canvasA.add(rect[Rect_number]).setActiveObject(rect[Rect_number]);
  Rect_number = Rect_number + 1;
  Object_cnt = Object_cnt + 1;
}
function CreateCircle(){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  circle[Circle_number] = new fabric.Circle({
    id: Object_cnt,
    left: 50,
    top: 50,
    fill: 'blue',
    radius: 30,
    snapAngle: 5,
    //name : Object_cnt
  });
  canvasA.add(circle[Circle_number]).setActiveObject(circle[Circle_number]);;
  Circle_number = Circle_number + 1;
  Object_cnt = Object_cnt + 1;
}
function CreateText(){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  text[Text_number] = new fabric.IText('Mytext', {
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
  canvasA.add(text[Text_number]).setActiveObject(text[Text_number]);;
  Text_number = Text_number + 1;
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
  twitter[Twitter_number] = new fabric.Image.fromURL('twitter.png',function(oImg){
    oImg.set({id: Object_cnt, left:80, top:80, snapAngle: 5});
    oImg.scale(0.1);
    canvasA.add(oImg).setActiveObject(oImg);
  });
  Twitter_number = Twitter_number + 1;
  Object_cnt = Object_cnt + 1;
}