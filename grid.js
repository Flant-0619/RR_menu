var Biggrid = 50;
var Smallgrid = 10;
function CreateBigGrid(Startupcanvas) {
  for (var i = 0; i < (1400); i++) {
    if(i == 6){
      Startupcanvas.add((new fabric.Line([ i * Biggrid, 0, i * Biggrid, 250], { stroke: '#000', selectable: false })));
      Startupcanvas.add((new fabric.Line([ i * Biggrid, 250, i * Biggrid, 950], { stroke: '#ff4500', selectable: false })));
      Startupcanvas.add((new fabric.Line([ i * Biggrid, 950, i * Biggrid, 1400], { stroke: '#000', selectable: false })));
      Startupcanvas.add(new fabric.Line([ 0, i * Biggrid, 250, i * Biggrid], { stroke: '#000', selectable: false }));
      Startupcanvas.add(new fabric.Line([ 250, i * Biggrid, 950, i * Biggrid], { stroke: '#ff4500', selectable: false }));
      Startupcanvas.add(new fabric.Line([ 950, i * Biggrid, 1400, i * Biggrid], { stroke: '#000', selectable: false }));
    }else if(i == 18){
      Startupcanvas.add((new fabric.Line([ i * Biggrid, 0, i * Biggrid, 250], { stroke: '#000', selectable: false })));
      Startupcanvas.add((new fabric.Line([ i * Biggrid, 250, i * Biggrid, 950], { stroke: '#ff4500', selectable: false })));
      Startupcanvas.add((new fabric.Line([ i * Biggrid, 950, i * Biggrid, 1400], { stroke: '#000', selectable: false })));
      Startupcanvas.add(new fabric.Line([ 0, i * Biggrid, 250, i * Biggrid], { stroke: '#000', selectable: false }));
      Startupcanvas.add(new fabric.Line([ 250, i * Biggrid, 950, i * Biggrid], { stroke: '#ff4500', selectable: false }));
      Startupcanvas.add(new fabric.Line([ 950, i * Biggrid, 1400, i * Biggrid], { stroke: '#000', selectable: false }));
    }else{
      Startupcanvas.add(new fabric.Line([ i * Biggrid, 0, i * Biggrid, 1400], { stroke: '#000', selectable: false }));
      Startupcanvas.add(new fabric.Line([ 0, i * Biggrid, 1400, i * Biggrid], { stroke: '#000', selectable: false }));
    }
  }
  return true;
}
function CreateSmallGrid(Startupcanvas) {
  for (var i = 0; i < (1400); i++) {
    Startupcanvas.add(new fabric.Line([ i * Smallgrid, 0, i * Smallgrid, 1400], { stroke: '#ccc', selectable: false }));
    Startupcanvas.add(new fabric.Line([ 0, i * Smallgrid, 1400, i * Smallgrid], { stroke: '#ccc', selectable: false }));
  }
  return true;
}

function RemoveGrid(Startupcanvas) {
  var objects = Startupcanvas.getObjects('line');
  for (let i in objects) {
    Startupcanvas.remove(objects[i]);
  }
  return false;
}