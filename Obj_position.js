function Obj_position(){
  undo.push(canvasA.toDatalessJSON());
  redo = [];
  var left = document.getElementById("position_left");
  var top = document.getElementById("position_top");
  var left_value = document.getElementById("position_left").value;
  var top_value = document.getElementById("position_top").value;
  if(parseInt(left_value) < 0){
    left.value = 0;
    Select.set({left: 0});
  }else if(parseInt(left_value) + Select.width > 600){
    left.value = 600 - Select.width;
    Select.set({left: 600 - Select.width});
  }else{
    Select.set({left: parseInt(left_value)});
  }

  if(parseInt(top_value) < 0){
    top.value = 0;
    Select.set({top: 0});
  }else if(parseInt(top_value) + Select.height > 600){
    top.value = 600 - Select.height;
    Select.set({top: 600 - Select.height});
  }else{
    Select.set({top: parseInt(top_value)});
  }

  console.log(parseInt(document.getElementById("position_left").value));
  console.log(parseInt(document.getElementById("position_top").value));
  canvasA.renderAll();
}