var SaveData;
function Save_SVG(){
  SaveData = canvasA.toSVG();
  var fname = prompt("ファイル名を入力してください");
  let blob = new Blob([SaveData],{type:"text/html"});
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'メニュー10.html';
  link.click();
}