function Startup(Work_canvas, Startupcanvas){
  console.log(Work_canvas);
  bool = CreateSmallGrid(Startupcanvas);
  bool = CreateBigGrid(Startupcanvas);
  var Grid_Img = Startupcanvas.toDataURL("image/jpeg");
  fabriccanvas1.setBackgroundImage(Grid_Img, fabriccanvas1.renderAll.bind(fabriccanvas1),{left : -300, top : -300});
  fabriccanvas2.setBackgroundImage(Grid_Img, fabriccanvas2.renderAll.bind(fabriccanvas2),{left : -300, top : -300});
  fabriccanvas3.setBackgroundImage(Grid_Img, fabriccanvas3.renderAll.bind(fabriccanvas3),{left : -300, top : -300});
  fabriccanvas4.setBackgroundImage(Grid_Img, fabriccanvas4.renderAll.bind(fabriccanvas4),{left : -300, top : -300});
  fabriccanvas5.setBackgroundImage(Grid_Img, fabriccanvas5.renderAll.bind(fabriccanvas5),{left : -300, top : -300});
  RemoveGrid(Startupcanvas);
  return Grid_Img;
}