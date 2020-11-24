function Startup(canvasB){
  bool = CreateSmallGrid(canvasB);
  bool = CreateBigGrid(canvasB);
  var Grid_Img = canvasB.toDataURL("image/jpeg");
  canvasA.setBackgroundImage(Grid_Img, canvasA.renderAll.bind(canvasA),{left : -300, top : -300
  });
  canvasC.setBackgroundImage(Grid_Img, canvasC.renderAll.bind(canvasC));
  RemoveGrid(canvasB);
  return Grid_Img;
}