var SaveData;
var String_list = [];
var result1 = 0;
function Save_SVG(Work_canvas){
  SaveData = Work_canvas.toSVG();
  var fname = prompt("ファイル名を入力してください");
  var blob = new Blob([SaveData],{type:"text/html"});
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'メニュー10.svg';
  //link.click();

  var result1 = SaveData.indexOf("<g");
  String_list.push(SaveData.substr(0,result1));
  var count = ( SaveData.match( /<g/g ) || [] ).length ;
  console.log(remove_Object_cnt[0]);
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
  console.log(String_list);
  if(remove_Object_cnt.length){
    count += remove_Object_cnt.length;
  }
  console.log(count)
  //console.log(count + remove_Object_cnt.length);
  for(var i = 1; i <= count; i ++){
    console.log(i);
    if(remove_Object_cnt[0] == (i - 1)){
      remove_Object_cnt.shift();
      continue;
    }
   
    console.log(Object_list[i-1]);
    if(Object_list[i-1].id){
      String_list.splice(j, 0, `<a xlink:href= ` + Object_list[i-1].id + `>`);
      String_list.splice(j+2, 0, "</a>");
      j += 3;
      continue;
    }
    j += 1;
  }
  SaveData = String_list.join("");
  var blob = new Blob([SaveData],{type:"text/html"});
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'メニュー10.html';
  link.click();
  String_list = [];
}