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
  if(Work_undo.length != 0){
    elem8.disabled = false;
  }
}

function CallSaveMethod(Work_canvas){
  ret = confirm("この内容で保存しますか？");
  if (ret == true){
    if(bool == true){
    Work_canvas.setBackgroundImage(null, Work_canvas.renderAll.bind(Work_canvas));
    Work_canvas.setBackgroundImage(Grid_Img, Work_canvas.renderAll.bind(Work_canvas),{left: -300, top : -300});
    }
    Save_SVG(Work_canvas);
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

/*
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
*/

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
  ChangeFont(Work_canvas);
}

function Call_Size_Change(Work_canvas){
  Change_obj_size(Work_canvas);
}

function Call_edit_window(value, Work_canvas){
  const diagram_edit = document.getElementById("diagram_edit");
  const SNS_edit = document.getElementById("SNS_edit");
  const text_edit = document.getElementById("text_edit");
  const img_edit = document.getElementById("img_edit");
  switch(value){
    case 'diagram' :
      console.log('図形編集ウィンドウ表示');
      var document_value = document.getElementById('diagram');
      var document_value_link = document.getElementById('diagram_link');
      diagram.innerHTML = "";
      diagram_link.innerHTML = "";
      sns.innerHTML = "";
      SNS_tag.innerHTML = "";
      text.innerHTML = "";
      text_link.innerHTML = "";
      img.innerHTML = "";
      img_link.innerHTML = "";
      document_value.insertAdjacentHTML('afterbegin', `カラー:</br>
      パーツの色:<input type = "color" id = "Diagram_color">
      <input type = "button" value = "適用" onclick = "CallColorChange('Diagram', Work_canvas)">
      </br>
      フレーム色:<input type = "color" id = "Frame_color">
      <input type = "button" value = "適用" onclick = "CallColorChange('Frame', Work_canvas)">
      </br>
      配　置:</br>
      <input type = "button" value = "前面へ" onclick = "CallMovelayerMethod('Top', Work_canvas)">
      <input type = "button" value = "背面へ" onclick = "CallMovelayerMethod('Bottom', Work_canvas)"></br>
      x軸:<input type = "number" id = "position_left" value = "0" onfocus="this.select();"></br>
      y軸:<input type = "number" id = "position_top" value = "0" onfocus="this.select();">
      <input type = "button" value = "適用" onclick = "Call_Position_Change(Work_canvas)"></br>
      サイズ:</br>
      横:<input type = "number" id = "obj_Width" value = "0" onfocus="this.select();"></br>
      縦:<input type = "number" id = "obj_Height" value = "0" onfocus="this.select();">
      <input type = "button" value = "適用" onclick = "Call_Size_Change(Work_canvas)">`);
      document_value_link.insertAdjacentHTML('afterbegin', `リンクの内容がここに入ります
      <img type = "image" src = "orange_rect.png" id = "https://youtube.com" onclick="document.getElementById('URLBox').value = 'https://youtube.com'">
      <input type = "text" id = "URLBox" value = "">
      <input type = "button" value = "URLを設定する" onclick = "CallSettingMethod()">`);
      diagram_edit.style.display ="block";
      SNS_edit.style.display ="none";
      text_edit.style.display ="none";
      img_edit.style.display ="none";
      break;
    case 'SNS' :
      console.log('機能編集ウィンドウ表示');
      var document_value = document.getElementById('sns');
      var document_value_tag = document.getElementById('SNS_tag');
      diagram.innerHTML = "";
      diagram_link.innerHTML = "";
      sns.innerHTML = "";
      SNS_tag.innerHTML = "";
      text.innerHTML = "";
      text_link.innerHTML = "";
      img.innerHTML = "";
      img_link.innerHTML = "";
      document_value.insertAdjacentHTML('afterbegin', `配　置:</br>
      <input type = "button" value = "前面へ" onclick = "CallMovelayerMethod('Top', Work_canvas)">
      <input type = "button" value = "背面へ" onclick = "CallMovelayerMethod('Bottom', Work_canvas)"></br>
      x軸:<input type = "number" id = "position_left" value = "0" onfocus="this.select();"></br>
      y軸:<input type = "number" id = "position_top" value = "0" onfocus="this.select();">
      <input type = "button" value = "適用" onclick = "Call_Position_Change(Work_canvas)"></br>
      サイズ:</br>
      横:<input type = "number" id = "obj_Width" value = "0" onfocus="this.select();"></br>
      縦:<input type = "number" id = "obj_Height" value = "0" onfocus="this.select();">
      <input type = "button" value = "適用" onclick = "Call_Size_Change(Work_canvas)">`)
      document_value_tag.insertAdjacentHTML('afterbegin', `リンクの内容がここに入ります
      <img type = "image" src = "orange_rect.png" id = "https://youtube.com" onclick="document.getElementById('URLBox').value = 'https://youtube.com'">
      <input type = "text" id = "URLBox" value = "">
      <input type = "button" value = "URLを設定する" onclick = "CallSettingMethod()">`)
      diagram_edit.style.display ="none";
      SNS_edit.style.display ="block";
      text_edit.style.display ="none";
      img_edit.style.display ="none";
      break;
    case 'Text' :
      console.log('テキスト編集ウィンドウ表示');
      var document_value = document.getElementById('text');
      var document_value_link = document.getElementById('text_link');
      diagram.innerHTML = "";
      diagram_link.innerHTML = "";
      sns.innerHTML = "";
      SNS_tag.innerHTML = "";
      text.innerHTML = "";
      text_link.innerHTML = "";
      img.innerHTML = "";
      img_link.innerHTML = "";
      document_value.insertAdjacentHTML('afterbegin', `カラー:</br>
      パーツの色:<input type = "color" id = "Diagram_color">
      <input type = "button" value = "適用" onclick = "CallColorChange('Diagram', Work_canvas)">
      </br>
      フレーム色:<input type = "color" id = "Frame_color">
      <input type = "button" value = "適用" onclick = "CallColorChange('Frame', Work_canvas)">
      </br>
      配　置:</br>
      <input type = "button" value = "前面へ" onclick = "CallMovelayerMethod('Top', Work_canvas)">
      <input type = "button" value = "背面へ" onclick = "CallMovelayerMethod('Bottom', Work_canvas)"></br>
      x軸:<input type = "number" id = "position_left" value = "0" onfocus="this.select();"></br>
      y軸:<input type = "number" id = "position_top" value = "0" onfocus="this.select();">
      <input type = "button" value = "適用" onclick = "Call_Position_Change(Work_canvas)"></br>
      サイズ:</br>
      横:<input type = "number" id = "obj_Width" value = "0" onfocus="this.select();"></br>
      縦:<input type = "number" id = "obj_Height" value = "0" onfocus="this.select();">
      <input type = "button" value = "適用" onclick = "Call_Size_Change(Work_canvas)">`)
      document_value_link.insertAdjacentHTML('afterbegin', `リンクの内容がここに入ります
      <img type = "image" src = "orange_rect.png" id = "https://youtube.com" onclick="document.getElementById('URLBox').value = 'https://youtube.com'">
      <input type = "text" id = "URLBox" value = "">
      <input type = "button" value = "URLを設定する" onclick = "CallSettingMethod()">`)
      diagram_edit.style.display ="none";
      SNS_edit.style.display ="none";
      text_edit.style.display ="block";
      img_edit.style.display ="none";
      break;
    case 'img' :
      console.log('写真編集ウィンドウ表示');
      var document_value_edit = document.getElementById('img');
      var document_value_link = document.getElementById('img_link');
      diagram.innerHTML = "";
      diagram_link.innerHTML = "";
      sns.innerHTML = "";
      SNS_tag.innerHTML = "";
      text.innerHTML = "";
      text_link.innerHTML = "";
      img.innerHTML = "";
      img_link.innerHTML = "";
      document_value_edit.insertAdjacentHTML('afterbegin', `配　置:</br>
      <input type = "button" value = "前面へ" onclick = "CallMovelayerMethod('Top', Work_canvas)">
      <input type = "button" value = "背面へ" onclick = "CallMovelayerMethod('Bottom', Work_canvas)"></br>
      x軸:<input type = "number" id = "position_left" value = "0" onfocus="this.select();"></br>
      y軸:<input type = "number" id = "position_top" value = "0" onfocus="this.select();">
      <input type = "button" value = "適用" onclick = "Call_Position_Change(Work_canvas)"></br>
      サイズ:</br>
      横:<input type = "number" id = "obj_Width" value = "0" onfocus="this.select();"></br>
      縦:<input type = "number" id = "obj_Height" value = "0" onfocus="this.select();">
      <input type = "button" value = "適用" onclick = "Call_Size_Change(Work_canvas)">`)
      document_value_link.insertAdjacentHTML('afterbegin', `リンクの内容がここに入ります
      <img type = "image" src = "orange_rect.png" id = "https://youtube.com" onclick="document.getElementById('URLBox').value = 'https://youtube.com'">
      <input type = "text" id = "URLBox" value = "">
      <input type = "button" value = "URLを設定する" onclick = "CallSettingMethod()">`)
      diagram_edit.style.display ="none";
      SNS_edit.style.display ="none";
      text_edit.style.display ="none";
      img_edit.style.display ="block";
      break;
  }
}