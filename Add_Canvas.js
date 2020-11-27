var cnt = 1;
var Fabric_Canvas_List = []
function add_canvas(){
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
}



function Change_Work_Canvas(value){
  //Work_canvas = value;
  if(document.getElementById('canvas_input1').checked){
    Work_canvas = value;
    console.log(Work_canvas)
  }else if(document.getElementById('canvas_input2').checked){
    Work_canvas = value;
    console.log(Work_canvas)
  }else if(document.getElementById('canvas_input3').checked){
    Work_canvas = value;
    console.log(Work_canvas)
  }else if(document.getElementById('canvas_input4').checked){
    Work_canvas = value;
    console.log(Work_canvas)
  }else if(document.getElementById('canvas_input5').checked){
    Work_canvas = value;
    console.log(Work_canvas)
  }
}

