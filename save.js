var SaveData;
var String_list = [];
var result1 = 0;
function Save_SVG(Work_canvas){
  Work_canvas.discardActiveObject();
  Work_canvas.renderAll();
  SaveData = Work_canvas.toSVG();
  var fname = prompt("ファイル名を入力してください");
  var blob = new Blob([SaveData],{type:"svg"});
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'メニュー10.svg';
  link.click();

  var result1 = SaveData.indexOf("<g");
  String_list.push(SaveData.substr(0,result1));
  var count = ( SaveData.match( /<g/g ) || [] ).length ;
  for(i = 0; i < count; i++){
    if(i == 0){
      var result2 = SaveData.indexOf("</g>")
      String_list.push(SaveData.substr(result1, (result2 - result1 + 4)));
      var result3 = result2;
      var result4 = result2;
      continue;
    }
    result3 = SaveData.indexOf("<g", (result3 + 4));
    result4 = SaveData.indexOf("</g>", (result4 + 4));
    String_list.push(SaveData.substr(result3, (result4 - result3 + 4)));
  }
  result5 = SaveData.indexOf("</svg>")
  String_list.push(SaveData.substr(result5));
  var j = 1;
  //console.log(count + remove_Object_cnt.length);
  for(let i in Work_canvas._objects){
    
    if(Work_canvas._objects[i].id){
      String_list.splice(j, 0, `<a xlink:href= ` + Work_canvas._objects
      [i].id + `>`);
      String_list.splice(j+2, 0, "</a>");
      j += 3;
      continue;
    }
    j += 1;
  }
  /*for(var i = 1; i <= count; i ++){
    //console.log(i);
    if(Work_remove_Object_cnt[0] == (i - 1)){
      console.log("hoge")
      Work_remove_Object_cnt.shift();
      continue;
    }
    console.log("hoge")
    console.log(Work_Object_list[i-1]);
    if(Work_Object_list[i-1].id){
      String_list.splice(j, 0, `<a xlink:href= ` + Work_Object_list[i-1].id + `>`);
      String_list.splice(j+2, 0, "</a>");
      j += 3;
      continue;
    }
    j += 1;
  }*/
  String_list.push(`<meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    svg{
    width: 375px;
    height: 667px;
  }
  </style>`)
  SaveData = String_list.join("");
  var blob = new Blob([SaveData],{type:"text/html"});
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'メニュー10.html';
  link.click();
  String_list = [];

  var canvas = document.getElementById(Work_canvas_id);
	//アンカータグを作成
	var a = document.createElement('a');
	//canvasをJPEG変換し、そのBase64文字列をhrefへセット
	a.href = canvas.toDataURL('image/png', 0.85);
	//ダウンロード時のファイル名を指定
	a.download = 'download.png';
	//クリックイベントを発生させる
	a.click();
}