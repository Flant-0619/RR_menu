function CallCreateMethod(value, Work_canvas, img_name){
  switch(value){
    case 'Rect':
      CreateRect(Work_canvas);
      break;

    case 'Circle':
      CreateCircle(Work_canvas);
      break;

    case 'Twitter':
    CreateTwitter(Work_canvas, img_name);
    break;

    case 'Text':
      CreateText(Work_canvas);
      break;

    case 'Clone':
      CreateClone(Work_canvas);
      break;
  }
  if(undo.length != 0){
    elem8.disabled = false;
  }
}

function CallSaveMethod(Work_canvas){
  ret = confirm("この内容で保存しますか？");
  if (ret == true){
    //Work_canvas.setBackgroundImage(null, canvasA.renderAll.bind(canvasA));
    Save_SVG(Work_canvas);
    //Work_canvas.setBackgroundImage(Grid_Img, canvasA.renderAll.bind(canvasA),{left: -300, top : -300});
    var result = window.alert('保存が完了しました');
  }
}

function CallSettingMethod(){
  URLSetting();
}

function CallRemoveMethod(value, Work_canvas){
  switch(value){
    case 'Remove':
      Remove_Object(Work_canvas);
      break;

    case 'RemoveAll':
      Remove_All_Object(Work_canvas);
      break;
  }
}

function CallMovelayerMethod(value, Work_canvas){
  switch(value){
    case 'Top' :
      moveToTop(Work_canvas);
      break;

    case 'Bottom' :
      moveToBottom(Work_canvas);
      break
  }
}

function CallPCanvasZoomMethod(Work_canvas){
  value = document.getElementById("pzoom").value;
  switch(value){
    case '50%' :
      canvas_size = PCZ_goju(Work_canvas);
      elem.innerHTML = "<span>50%</span>";
      elem1.innerHTML = "<span>75%</span>";
      elem2.innerHTML = "<span>100%</span>";
      elem3.innerHTML = "<span>125%</span>";
      elem4.innerHTML = "<span>150%</span>";
      elem6.disabled = false;
      break;
    case '75%' :
      canvas_size = PCZ_nago(Work_canvas);
      elem.innerHTML = "<span>50%</span>";
      elem1.innerHTML = "<span>75%</span>";
      elem2.innerHTML = "<span>100%</span>";
      elem3.innerHTML = "<span>125%</span>";
      elem4.innerHTML = "<span>150%</span>";
      elem6.disabled = false;
      elem7.disabled = false;
      break;
    case '100%' :
      canvas_size = PCZ_hyaku(Work_canvas);
      elem.innerHTML = "<span>50%</span>";
      elem1.innerHTML = "<span>75%</span>";
      elem2.innerHTML = "<span>100%</span>";
      elem3.innerHTML = "<span>125%</span>";
      elem4.innerHTML = "<span>150%</span>";
      elem6.disabled = false;
      elem7.disabled = false;
      break;
    case '125%' :
      canvas_size = PCZ_hyanigo(Work_canvas);
      elem.innerHTML = "<span>50%</span>";
      elem1.innerHTML = "<span>75%</span>";
      elem2.innerHTML = "<span>100%</span>";
      elem3.innerHTML = "<span>125%</span>";
      elem4.innerHTML = "<span>150%</span>";
      elem6.disabled = false;
      elem7.disabled = false;
      break;
    case '150%' :
      canvas_size = PCZ_hyago(Work_canvas);
      elem.innerHTML = "<span>50%</span>";
      elem1.innerHTML = "<span>75%</span>";
      elem2.innerHTML = "<span>100%</span>";
      elem3.innerHTML = "<span>125%</span>";
      elem4.innerHTML = "<span>150%</span>";
      elem7.disabled = false;
      break;
  }
}

function CallCanvasZoomMethod(value, Work_canvas){
  switch(value){
    case 'ZoomIn' :
      canvas_size = Canvas_ZoomIn(Work_canvas);
      break;

    case 'ZoomOut' :
      canvas_size = Canvas_ZoomOut(Work_canvas);
      break
  }
}

function CallObjectZoomMethod(value, Work_canvas){
  switch(value){
    case 'ZoomIn' :
      obj_ZoomIn(Work_canvas);
      break;

    case 'ZoomOut' :
      obj_ZoomOut(Work_canvas);
      break
  }
}

function CallBack(Work_canvas){
  Back_to_screen(Work_canvas);
}
function SendTo(Work_canvas){
  Send_to_screen(Work_canvas);
}
function Call_Position_Change(Work_canvas){
  Obj_position(Work_canvas);
}

function CallColorChange(value, Work_canvas){
  switch(value){
    case 'Diagram':
      Diagram_Color_Cange(Work_canvas);
      break;

    case 'Frame':
      Frame_Color_Cange(Work_canvas);
      break;
  }
  
}

function CallChangeFont(Work_canvas){
  CangeFont(Work_canvas);
}