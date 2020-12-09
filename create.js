var canvas1_Object_cnt = 0;
var canvas1_Object_list = [];
var canvas2_Object_cnt = 0;
var canvas2_Object_list = [];
var canvas3_Object_cnt = 0;
var canvas3_Object_list = [];
var canvas4_Object_cnt = 0;
var canvas4_Object_list = [];
var canvas5_Object_cnt = 0;
var canvas5_Object_list = [];

var canvas1_tmp_property_list = [];
var canvas1_tmp_property_cnt = 0;
var canvas2_tmp_property_list = [];
var canvas2_tmp_property_cnt = 0;
var canvas3_tmp_property_list = [];
var canvas3_tmp_property_cnt = 0;
var canvas4_tmp_property_list = [];
var canvas4_tmp_property_cnt = 0;
var canvas5_tmp_property_list = [];
var canvas5_tmp_property_cnt = 0;

var Work_Object_cnt = canvas1_Object_cnt;
var Work_Object_list = canvas1_Object_list;
var Work_tmp_propaty_list = canvas1_tmp_property_list;
var Work_tmp_propaty_cnt = canvas1_tmp_property_cnt;

var shift = 10;

function CreateRect(Work_canvas){
  Work_undo.push(Work_canvas.toDatalessJSON());
  Work_redo = [];
  Work_Object_list[Work_Object_cnt] = new fabric.Rect({
    left: 80,
    top: 80,
    width: 80,
    height: 80,
    snapAngle: 5,
    fill: 'orangered',
    name : Work_Object_cnt,
    IDF : 'diagram'
  });
  Work_tmp_propaty_list.push(null);
  Work_tmp_propaty_list.push(Work_Object_list[Work_Object_cnt].name)
  Work_tmp_propaty_list.push(Work_Object_list[Work_Object_cnt].IDF)
  Work_canvas.add(Work_Object_list[Work_Object_cnt]).setActiveObject(Work_Object_list[Work_Object_cnt]);
  Work_Object_cnt = Work_Object_cnt + 1;
  console.log(Work_canvas._objects);
}
function CreateCircle(Work_canvas){
  Work_undo.push(Work_canvas.toDatalessJSON());
  Work_redo = [];
  Work_Object_list[Work_Object_cnt] = new fabric.Circle({
    left: 50,
    top: 50,
    fill: 'blue',
    radius: 30,
    snapAngle: 5,
    name : Work_Object_cnt,
    IDF : 'diagram'
  });
  Work_tmp_propaty_list.push(null);
  Work_tmp_propaty_list.push(Work_Object_list[Work_Object_cnt].name)
  Work_tmp_propaty_list.push(Work_Object_list[Work_Object_cnt].IDF)
  Work_canvas.add(Work_Object_list[Work_Object_cnt]).setActiveObject(Work_Object_list[Work_Object_cnt]);
  Work_Object_cnt = Work_Object_cnt + 1;
}
function CreateText(Work_canvas){
  Work_undo.push(Work_canvas.toDatalessJSON());
  Work_redo = [];
  Work_Object_list[Work_Object_cnt] = new fabric.IText('Mytext', {
    width: 150,
    top: 5,
    left: 5,
    fontSize: 16,
    textAlign: 'center',
    fixedWidth: 150,
    snapAngle: 5,
    name : Work_Object_cnt,
    IDF : 'Text'
  });
  Work_tmp_propaty_list.push(null);
  Work_tmp_propaty_list.push(Work_Object_list[Work_Object_cnt].name)
  Work_tmp_propaty_list.push(Work_Object_list[Work_Object_cnt].IDF)
  Work_canvas.add(Work_Object_list[Work_Object_cnt]).setActiveObject(Work_Object_list[Work_Object_cnt]);;
  Work_Object_cnt = Work_Object_cnt + 1;
}

function CreateClone(Work_canvas) {
  var Clone_obj = fabric.util.object.clone(Select);
  Clone_obj.set({left: Select.left + shift,top: Select.top + shift});
  Work_canvas.add(Clone_obj); 
  Work_canvas.renderAll();
  shift += 10;
}

/*canvasA.on('selection:updated', function(e){
  shift = 10;
});*/

function CreateTwitter(Work_canvas, img_name){
  Work_undo.push(Work_canvas.toDatalessJSON());
  Work_redo = [];
  Work_Object_list[Work_Object_cnt] = new fabric.Image.fromURL(img_name,function(oImg){
    if(img_name == "twitter.png" ){
      oImg.set({left:80, top:80, snapAngle: 5, name: Work_Object_cnt, IDF: 'SNS'});
    }else if(img_name == "instagram.png"){
      oImg.set({left:80, top:80, snapAngle: 5, name: Work_Object_cnt, id: "https://www.instagram.com/", IDF: 'SNS'});
    }else{
      oImg.set({left:80, top:80, snapAngle: 5, name: Work_Object_cnt, IDF : 'img'});
    }
    Work_Object_list[Work_Object_cnt] = oImg;
    oImg.scale(0.1);
    Work_tmp_propaty_list.push(null);
    Work_tmp_propaty_list.push(Work_Object_list[Work_Object_cnt].name)
    Work_tmp_propaty_list.push(Work_Object_list[Work_Object_cnt].IDF)
    Work_canvas.add(oImg).setActiveObject(oImg);
    Work_Object_cnt = Work_Object_cnt + 1;
  });
}

/*function CreateTwitter(Work_canvas){
  Object_list[Object_cnt] = new fabric.Image.fromURL('twitter.png',function(oImg){
    oImg.set({id: Object_cnt, left:80, top:80, snapAngle: 5});
    oImg.scale(0.1);
    Work_canvas.add(oImg).setActiveObject(oImg);
  });
  Object_cnt = Object_cnt + 1;
}*/