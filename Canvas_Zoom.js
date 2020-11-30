var zoom = 100;
var zoomStep = 5;
//const default_canvas_size = 600;
//var canvas_size;
var elem = document.getElementById("font0");
var elem1 = document.getElementById("font1");
var elem2 = document.getElementById("font2");
var elem3 = document.getElementById("font3");
var elem4 = document.getElementById("font4");
var elem5 = document.getElementById("kobe");
var elem6 = document.getElementById("font6");
var elem7 = document.getElementById("font7");
 
function Canvas_ZoomIn(Work_canvas) {
  elem7.disabled = false;
  if (zoom < 150) {
    zoom += zoomStep;
    Work_canvas.setZoom(zoom / 100);
    elem5.innerHTML = zoom + "%";
    elem5.selected = true;
    canvas_size = default_canvas_size / (zoom / 100);
    Work_canvas.renderAll();
    if (zoom == 150){
      elem6.disabled = true;
    }
  }
  return canvas_size
};
 
function Canvas_ZoomOut(Work_canvas){
  elem6.disabled = false;
  if (zoom > 50) {
    zoom -= zoomStep;
    Work_canvas.setZoom(zoom / 100);
    elem5.innerHTML = zoom + "%";
    elem5.selected = true;
    canvas_size = default_canvas_size / (zoom / 100);
    Work_canvas.renderAll();
    if (zoom == 50){
      elem7.disabled = true;
    }
  }
  return canvas_size
};
 
function PCZ_goju(Work_canvas) {
  elem6.disabled = false;
  if (zoom > 50) {
    Work_canvas.setZoom(50 / 100);
    zoom = 50;
    canvas_size = default_canvas_size / (zoom / 100);
    elem5.innerHTML = zoom + "%";
    elem5.selected = true;
    elem7.disabled = true;
  }
};
 
function PCZ_nago(Work_canvas) {
  Work_canvas.setZoom(75 / 100);
  zoom = 75;
  canvas_size = default_canvas_size / (zoom / 100);
  elem5.innerHTML = zoom + "%";
  elem5.selected = true;
};
 
function PCZ_hyaku(Work_canvas) {
  Work_canvas.setZoom(100 / 100);
  zoom = 100;
  canvas_size = default_canvas_size / (zoom / 100);
  elem5.innerHTML = zoom + "%";
  elem5.selected = true;
};
 
function PCZ_hyanigo(Work_canvas) {
  Work_canvas.setZoom(125 / 100);
  zoom = 125;
  canvas_size = default_canvas_size / (zoom / 100);
  elem5.innerHTML = zoom + "%";
  elem5.selected = true;
};
 
function PCZ_hyago(Work_canvas) {
  elem7.disabled = false;
  if (zoom < 150) {
  Work_canvas.setZoom(150 / 100);
  zoom = 150;
  canvas_size = default_canvas_size / (zoom / 100);
  elem5.innerHTML = zoom + "%";
  elem5.selected = true;
  elem6.disabled = true;
  }
};