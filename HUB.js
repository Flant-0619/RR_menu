function CallCreateMethod(value){
  switch(value){
    case 'Rect':
      CreateRect();
      break;

    case 'Circle':
      CreateCircle();
      break;

    case 'Twitter':
    CreateTwitter();
    break;

    case 'Text':
      CreateText();
      break;

    case 'Clone':
      CreateClone();
      break;
  }
  if(undo.length != 0){
    elem8.disabled = false;
  }
}

function CallSaveMethod(){
  ret = confirm("この内容で保存しますか？");
  if (ret == true){
  canvasA.setBackgroundImage(null, canvasA.renderAll.bind(canvasA));
  Save_SVG();
  canvasA.setBackgroundImage(Grid_Img, canvasA.renderAll.bind(canvasA),{left: -300, top : -300});
  var result = window.alert('保存が完了しました');
  }
}

function CallSettingMethod(){
  URLSetting();
}

function CallRemoveMethod(value){
  switch(value){
    case 'Remove':
      Remove_Object();
      break;

    case 'RemoveAll':
      Remove_All_Object();
      break;
  }
}

function CallMovelayerMethod(value){
  switch(value){
    case 'Top' :
      moveToTop();
      break;

    case 'Bottom' :
      moveToBottom();
      break
  }
}

function CallPCanvasZoomMethod(){
  value = document.getElementById("pzoom").value;
  console.log(value);
  switch(value){
    case '50%' :
      canvas_size = PCZ_goju();
      elem.innerHTML = "<span>50%</span>";
      elem1.innerHTML = "<span>75%</span>";
      elem2.innerHTML = "<span>100%</span>";
      elem3.innerHTML = "<span>125%</span>";
      elem4.innerHTML = "<span>150%</span>";
      elem6.disabled = false;
      break;
    case '75%' :
      canvas_size = PCZ_nago();
      elem.innerHTML = "<span>50%</span>";
      elem1.innerHTML = "<span>75%</span>";
      elem2.innerHTML = "<span>100%</span>";
      elem3.innerHTML = "<span>125%</span>";
      elem4.innerHTML = "<span>150%</span>";
      elem6.disabled = false;
      elem7.disabled = false;
      break;
    case '100%' :
      canvas_size = PCZ_hyaku();
      elem.innerHTML = "<span>50%</span>";
      elem1.innerHTML = "<span>75%</span>";
      elem2.innerHTML = "<span>100%</span>";
      elem3.innerHTML = "<span>125%</span>";
      elem4.innerHTML = "<span>150%</span>";
      elem6.disabled = false;
      elem7.disabled = false;
      break;
    case '125%' :
      canvas_size = PCZ_hyanigo();
      elem.innerHTML = "<span>50%</span>";
      elem1.innerHTML = "<span>75%</span>";
      elem2.innerHTML = "<span>100%</span>";
      elem3.innerHTML = "<span>125%</span>";
      elem4.innerHTML = "<span>150%</span>";
      elem6.disabled = false;
      elem7.disabled = false;
      break;
    case '150%' :
      canvas_size = PCZ_hyago();
      elem.innerHTML = "<span>50%</span>";
      elem1.innerHTML = "<span>75%</span>";
      elem2.innerHTML = "<span>100%</span>";
      elem3.innerHTML = "<span>125%</span>";
      elem4.innerHTML = "<span>150%</span>";
      elem7.disabled = false;
      break;
  }
}

function CallCanvasZoomMethod(value){
  switch(value){
    case 'ZoomIn' :
      canvas_size = Canvas_ZoomIn();
      break;

    case 'ZoomOut' :
      canvas_size = Canvas_ZoomOut();
      break
  }
}

function CallObjectZoomMethod(value){
  switch(value){
    case 'ZoomIn' :
      obj_ZoomIn();
      break;

    case 'ZoomOut' :
      obj_ZoomOut();
      break
  }
}

function CallBack(){
  Back_to_screen();
}
function SendTo(){
  Send_to_screen();
}
function Call_Position_Change(){
  Obj_position();
}

function CallColorChange(value){
  switch(value){
    case 'Diagram':
      Diagram_Color_Cange();
      break;

    case 'Frame':
      Frame_Color_Cange();
      break;
  }
  
}

function CallChangeFont(){
  CangeFont();
}