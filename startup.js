function Startup(Work_canvas, Startupcanvas){
  console.log(Work_canvas);
  bool = CreateSmallGrid(Startupcanvas);
  bool = CreateBigGrid(Startupcanvas);
  var Grid_Img = Startupcanvas.toDataURL("image/jpeg");
  Work_canvas.setBackgroundImage(Grid_Img, Work_canvas.renderAll.bind(Work_canvas),{left : -300, top : -300});
  RemoveGrid(Startupcanvas);
  return Grid_Img;
}