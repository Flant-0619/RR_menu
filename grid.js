var Biggrid = 50;
var Smallgrid = 10;
function CreateBigGrid(board) {
  for (var i = 0; i < (1400); i++) {
    if(i == 6){
      board.add((new fabric.Line([ i * Biggrid, 0, i * Biggrid, 250], { stroke: '#000', selectable: false })));
      board.add((new fabric.Line([ i * Biggrid, 250, i * Biggrid, 950], { stroke: '#ff4500', selectable: false })));
      board.add((new fabric.Line([ i * Biggrid, 950, i * Biggrid, 1400], { stroke: '#000', selectable: false })));
      board.add(new fabric.Line([ 0, i * Biggrid, 250, i * Biggrid], { stroke: '#000', selectable: false }));
      board.add(new fabric.Line([ 250, i * Biggrid, 950, i * Biggrid], { stroke: '#ff4500', selectable: false }));
      board.add(new fabric.Line([ 950, i * Biggrid, 1400, i * Biggrid], { stroke: '#000', selectable: false }));
    }else if(i == 18){
      board.add((new fabric.Line([ i * Biggrid, 0, i * Biggrid, 250], { stroke: '#000', selectable: false })));
      board.add((new fabric.Line([ i * Biggrid, 250, i * Biggrid, 950], { stroke: '#ff4500', selectable: false })));
      board.add((new fabric.Line([ i * Biggrid, 950, i * Biggrid, 1400], { stroke: '#000', selectable: false })));
      board.add(new fabric.Line([ 0, i * Biggrid, 250, i * Biggrid], { stroke: '#000', selectable: false }));
      board.add(new fabric.Line([ 250, i * Biggrid, 950, i * Biggrid], { stroke: '#ff4500', selectable: false }));
      board.add(new fabric.Line([ 950, i * Biggrid, 1400, i * Biggrid], { stroke: '#000', selectable: false }));
    }else{
    board.add(new fabric.Line([ i * Biggrid, 0, i * Biggrid, 1400], { stroke: '#000', selectable: false }));
    board.add(new fabric.Line([ 0, i * Biggrid, 1400, i * Biggrid], { stroke: '#000', selectable: false }));
    }
  }
  return true;
}
function CreateSmallGrid(board) {
  for (var i = 0; i < (1400); i++) {
    board.add(new fabric.Line([ i * Smallgrid, 0, i * Smallgrid, 1400], { stroke: '#ccc', selectable: false }));
    board.add(new fabric.Line([ 0, i * Smallgrid, 1400, i * Smallgrid], { stroke: '#ccc', selectable: false }));
  }
  return true;
}

function RemoveGrid(board) {
  var objects = board.getObjects('line');
  for (let i in objects) {
    board.remove(objects[i]);
  }
  return false;
}