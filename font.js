var elem_fk = document.getElementById("fkobe");
var elem_Ar = document.getElementById("Ar");
var elem_Ms = document.getElementById("Ms");
var elem_se = document.getElementById("se");
var elem_mo = document.getElementById("mo");
var elem_hg = document.getElementById("hg");
var elem_si = document.getElementById("si");
var elem_hs = document.getElementById("hs");
var elem_msp = document.getElementById("msp");
var elem_yu = document.getElementById("yu");
var elem_ti = document.getElementById("ti");

fabriccanvas1.on('selection:updated', function(e) {
  elem_fk.innerHTML = Select.fontFamily
  elem_fk.selected = true;
})

fabriccanvas1.on('selection:created', function(e) {
  elem_fk.innerHTML = Select.fontFamily
  elem_fk.selected = true;
})

fabriccanvas2.on('selection:updated', function(e) {
  elem_fk.innerHTML = Select.fontFamily
  elem_fk.selected = true;
})

fabriccanvas2.on('selection:created', function(e) {
  elem_fk.innerHTML = Select.fontFamily
  elem_fk.selected = true;
})
  
fabriccanvas3.on('selection:updated', function(e) {
  elem_fk.innerHTML = Select.fontFamily
  elem_fk.selected = true;
})

fabriccanvas3.on('selection:created', function(e) {
  elem_fk.innerHTML = Select.fontFamily
  elem_fk.selected = true;
})

fabriccanvas4.on('selection:updated', function(e) {
  elem_fk.innerHTML = Select.fontFamily
  elem_fk.selected = true;
})

fabriccanvas4.on('selection:created', function(e) {
  elem_fk.innerHTML = Select.fontFamily
  elem_fk.selected = true;
})

fabriccanvas5.on('selection:updated', function(e) {
  elem_fk.innerHTML = Select.fontFamily
  elem_fk.selected = true;
})

fabriccanvas5.on('selection:created', function(e) {
  elem_fk.innerHTML = Select.fontFamily
  elem_fk.selected = true;
})

function ChangeFont(){
  if(document.getElementById("fontSel").value){
    var fontSel = document.getElementById("fontSel").value;
    console.log(elem_fk);
    elem_fk.innerHTML = fontSel
    elem_fk.selected = true;
  }

  var obj = Work_canvas.getActiveObject();
  obj.fontFamily= fontSel
  Work_canvas.renderAll();
}




function FontColorChange(){
  if(document.getElementById("fontColor").value){
    var fontcolor = document.getElementById("fontColor").value;
  }
  var obj = Work_canvas.getActiveObject();
  obj.set({fill: fontcolor})
  Work_canvas.renderAll();
}