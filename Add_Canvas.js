var cnt = 2;
var cnt_box = [];
var elem10 = document.getElementById("addcanvas");
var elem11 = document.getElementById("addcanvas2");
var Work_canvas_id = "canvas1";
function add_canvas(){
  elem11.disabled = false;
  cnt_box.push(cnt);
  document.getElementById("canvas_input" + cnt).style.visibility = 'visible';
  document.getElementById("canvas_label" + cnt).style.visibility = 'visible';
  cnt += 1;
  if (cnt == 6){
    elem10.disabled = true;
  }
}
function remove_canvas(){
  elem10.disabled = false;
  cnt = cnt_box.pop();
  document.getElementById("canvas_input" + cnt).style.visibility = 'hidden';
  document.getElementById("canvas_label" + cnt).style.visibility = 'hidden';
  Remove_All_Object(Work_canvas);
  if (cnt == 2){
    elem11.disabled = true;
  }
}
/*function add_canvas(){
  var document_value = document.getElementById('canvas_label' + cnt);
  cnt += 1;
  document_value.insertAdjacentHTML('afterend', `<input id="canvas_input`+cnt+`"type="radio" onclick="Change_Work_Canvas(Work_Canvas_List[`+(cnt-1)+`])" name="canvastab_item">`);

  document_value = document.getElementById('canvas_input' + cnt);
  document_value.insertAdjacentHTML('afterend', `<label class="canvastab_item" for="canvas_input`+cnt+`" id = "canvas_label`+cnt+`">キャンバス` + cnt + `</label>`)
  document_value = document.getElementById('canvas'+(cnt-1)+'_content');
  document_value.insertAdjacentHTML('afterend', `<div class="canvastab_content" id="canvas`+cnt+`_content">
  <canvas id="canvas`+cnt+`" width="600" height="600" style="border:1px solid;"></canvas>
  </div>`)
  Fabric_Canvas_List[cnt-1] = new fabric.Canvas(('canvas'+cnt),{preserveObjectStacking: true});
  Fabric_Canvas_List[cnt-1].setBackgroundImage(Grid_Img, Fabric_Canvas_List[cnt-1].renderAll.bind(Fabric_Canvas_List[cnt-1]),{left : -300, top : -300});
  return Fabric_Canvas_List[cnt-1]
}*/



function Change_Work_Canvas(value){
  //Work_canvas = value;
  if(document.getElementById('canvas_input1').checked){
    console.log("hoge")
    Work_canvas = value;
    Work_undo = canvas1_undo;
    Work_redo = canvas1_redo;
    Work_canvas_id = "canvas1";
    if (Work_undo.length == 0){
      elem8.disabled = true;
    }else{
      elem8.disabled = false;
    }
    if (Work_redo.length != 0){
      elem9.disabled = false;
    }else{
      elem9.disabled = true;
    }
    // Work_remove_Object_cnt = canvas1_remove_Object_cnt;
    Work_Object_cnt = canvas1_Object_cnt;
    Work_Object_list = canvas1_Object_list;
    // キャンバスを切り替えるごとに編集ウィンドウを閉じる
    console.log('編集ウィンドウ閉じる')
    diagram_edit.style.display ="none";
    SNS_edit.style.display ="none";
    text_edit.style.display ="none";
    img_edit.style.display ="none";
    console.log(Work_canvas)
  }else if(document.getElementById('canvas_input2').checked){
    Work_canvas = value;
    Work_undo = canvas2_undo;
    Work_redo = canvas2_redo;
    Work_canvas_id = "canvas2";
    if (Work_undo.length == 0){
      elem8.disabled = true;
    }else{
      elem8.disabled = false;
    }
    if (Work_redo.length != 0){
      elem9.disabled = false;
    }else{
      elem9.disabled = true;
    }
    // Work_remove_Object_cnt = canvas2_remove_Object_cnt;
    Work_Object_cnt = canvas2_Object_cnt;
    Work_Object_list = canvas2_Object_list;
    // キャンバスを切り替えるごとに編集ウィンドウを閉じる
    console.log('編集ウィンドウ閉じる')
    diagram_edit.style.display ="none";
    SNS_edit.style.display ="none";
    text_edit.style.display ="none";
    img_edit.style.display ="none";
    console.log(Work_canvas)
  }else if(document.getElementById('canvas_input3').checked){
    Work_canvas = value;
    Work_undo = canvas3_undo;
    Work_redo = canvas3_redo;
    Work_canvas_id = "canvas3";
    if (Work_undo.length == 0){
      elem8.disabled = true;
    }else{
      elem8.disabled = false;
    }
    if (Work_redo.length != 0){
      elem9.disabled = false;
    }else{
      elem9.disabled = true;
    }
    // Work_remove_Object_cnt = canvas3_remove_Object_cnt;
    Work_Object_cnt = canvas3_Object_cnt;
    Work_Object_list = canvas3_Object_list;
    // キャンバスを切り替えるごとに編集ウィンドウを閉じる
    console.log('編集ウィンドウ閉じる')
    diagram_edit.style.display ="none";
    SNS_edit.style.display ="none";
    text_edit.style.display ="none";
    img_edit.style.display ="none";
    console.log(Work_canvas)
  }else if(document.getElementById('canvas_input4').checked){
    Work_canvas = value;
    Work_undo = canvas4_undo;
    Work_redo = canvas4_redo;
    Work_canvas_id = "canvas4";
    if (Work_undo.length == 0){
      elem8.disabled = true;
    }else{
      elem8.disabled = false;
    }
    if (Work_redo.length != 0){
      elem9.disabled = false;
    }else{
      elem9.disabled = true;
    }
    // Work_remove_Object_cnt = canvas4_remove_Object_cnt;
    Work_Object_cnt = canvas4_Object_cnt;
    Work_Object_list = canvas4_Object_list;
    // キャンバスを切り替えるごとに編集ウィンドウを閉じる
    console.log('編集ウィンドウ閉じる')
    diagram_edit.style.display ="none";
    SNS_edit.style.display ="none";
    text_edit.style.display ="none";
    img_edit.style.display ="none";
    console.log(Work_canvas)
  }else if(document.getElementById('canvas_input5').checked){
    Work_canvas = value;
    Work_undo = canvas5_undo;
    Work_redo = canvas5_redo;
    Work_canvas_id = "canvas5";
    if (Work_undo.length == 0){
      elem8.disabled = true;
    }else{
      elem8.disabled = false;
    }
    if (Work_redo.length != 0){
      elem9.disabled = false;
    }else{
      elem9.disabled = true;
    }
    // Work_remove_Object_cnt = canvas5_remove_Object_cnt;
    Work_Object_cnt = canvas5_Object_cnt;
    Work_Object_list = canvas5_Object_list;
    // キャンバスを切り替えるごとに編集ウィンドウを閉じる
    console.log('編集ウィンドウ閉じる')
    diagram_edit.style.display ="none";
    SNS_edit.style.display ="none";
    text_edit.style.display ="none";
    img_edit.style.display ="none";
    console.log(Work_canvas)
  }
}
function Change_Canvas_Name(){
  switch(Work_canvas){
    case fabriccanvas1:
      var canvas_n = "canvas_label1";
      break;

    case fabriccanvas2:
      var canvas_n = "canvas_label2";
    break;

    case fabriccanvas3:
      var canvas_n = "canvas_label3";
    break;

    case fabriccanvas4:
      var canvas_n = "canvas_label4";
    break;

    case fabriccanvas5:
      var canvas_n = "canvas_label5";
    break;
  }
  var canvas_tlabel = document.getElementById(canvas_n);
  var canvas_name = document.getElementById("CanName").value;
  canvas_tlabel.innerHTML = canvas_name;
}
