fabriccanvas1.on('mouse:up', function (e) {
  panning = false;
});

fabriccanvas1.on('mouse:down', function (e) {
  panning = true;
});
fabriccanvas1.on('mouse:move', function (e) {
if (panning && e && e.e && !fabriccanvas1.selection) {
  debugger;
  var units = 10;
  var delta = new fabric.Point(e.e.movementX, e.e.movementY);
  fabriccanvas1.relativePan(delta);
}
});

fabriccanvas1.on('selection:created', function(e) {
  //Selectに情報を渡す
  //GetData(Work_canvas);
  //選択したオブジェクトの位置、サイズを取得&表示
  tmp_undo.push(Work_canvas.toDatalessJSON());
  document.getElementById("position_left").value = Math.round(Select.left);
  document.getElementById("position_top").value = Math.round(Select.top);
  document.getElementById("obj_Width").value = Math.round(Select.width * Select.scaleX);
  document.getElementById("obj_Height").value = Math.round(Select.height * Select.scaleY);
  //数値を入力してサイズの変更をして600の範囲を出た場合
  if((Select.left + Select.width * Select.scaleX) >= 600){
    Select.left = 600 - (Select.width * Select.scaleX);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
  if((Select.top + Select.height * Select.scaleY) >= 600){
    Select.top = 600 - (Select.height * Select.scaleY);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
});

fabriccanvas1.on('selection:updated', function(e) {
  //Selectに情報を渡す
  //GetData(Work_canvas);
  //これ何か分かる人いますか？
  document.getElementById("position_left").value = Math.round(Select.left);
  document.getElementById("position_top").value = Math.round(Select.top);
  document.getElementById("obj_Width").value = Math.round(Select.width * Select.scaleX);
  document.getElementById("obj_Height").value = Math.round(Select.height * Select.scaleY);
});

fabriccanvas1.on('object:modified', function(option){
  Work_undo.push(tmp_undo.pop());
  Work_redo = [];
  tmp_undo.push(Work_canvas.toDatalessJSON());
  document.getElementById("position_left").value = Math.round(Select.left);
  document.getElementById("position_top").value = Math.round(Select.top);
  document.getElementById("obj_Width").value = Math.round(Select.width * Select.scaleX);
  document.getElementById("obj_Height").value = Math.round(Select.height * Select.scaleY);
})  

//グリッド線に合わせて移動
fabriccanvas1.on('object:moving', function(options) { 
  if(bool == true){
    options.target.set({
      left: Math.round(options.target.left / Smallgrid) * Smallgrid,
      top: Math.round(options.target.top / Smallgrid) * Smallgrid
    });
  }
  //オブジェクトが600×600の範囲を出ない
  if(Select.angle == 0){
    //角度が0のとき
    if(Select.left <= 0){
      //左
      options.target.set({left:0});
    }
    if(Select.top <= 0){
      //上
      options.target.set({top:0});
    }
    if(Select.left + (Select.width * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - (Select.width * Select.scaleX)});
    }
    if(Select.top + (Select.height * Select.scaleY) >= 600){
      //下
      options.target.set({top:600 - (Select.height * Select.scaleY)});
    }
  }else if(Select.angle > 0 && Select.angle <= 90){
    //角度が0-90のとき
    var x = Select.angle * Math.PI / 180;
    if(Select.left - Math.abs(Math.sin(x) * Select.height * Select.scaleY) <= 0){
      //左
      options.target.set({left:Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.top <= 0){
      //上
      options.target.set({top:0});
    }
    if(Select.left + Math.abs(Math.cos(x) * Select.width * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.top + Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
  }else if(Select.angle > 90 && Select.angle <= 180){
    //角度が90-180のとき
    var x = (Select.angle - 90) * Math.PI / 180;
    if(Select.left - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) <= 0){
      //左
      options.target.set({left:Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.top - Math.abs(Math.sin(x) * Select.height * Select.scaleY) <= 0){
      //上
      options.target.set({top:Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.left >= 600){
      //右
      options.target.set({left:600});
    }
    if(Select.top + Math.abs(Math.cos(x) * Select.width * Select.scaleX) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
  }else if(Select.angle > 180 && Select.angle <= 270){
    //角度が180-270のとき
    var x = (Select.angle - 180) * Math.PI / 180;
    if(Select.left - Math.abs(Math.cos(x) * Select.width * Select.scaleX) <= 0){
      //左
      options.target.set({left:Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.top - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) <= 0 ){
      //上
      options.target.set({top:Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.left + Math.abs(Math.sin(x) * Select.height * Select.scaleY) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.top >= 600){
    //下
      options.target.set({top:600});
    }
  }else{
    //角度が270-360のとき
    var x = (Select.angle - 270) * Math.PI / 180;
    if(Select.left <= 0){
      //左
      options.target.set({left:0});
    }
    if(Select.top - Math.abs(Math.cos(x) * Select.width * Select.scaleX) <= 0){
      //上
      options.target.set({top:Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.left + Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.top + Math.abs(Math.sin(x) * Select.height * Select.scaleY) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
  }
});

//グリッド線が非表示のとき滑らかに回転する
fabriccanvas1.on('object:rotating', function(options){
  if(bool == false){
    options.target.set({
      snapAngle: 0
    });
  }
  if(bool == true){
    options.target.set({
      snapAngle: 5
    });
  }
});

//パーツウィンドウからd&dでキャンバスに表示(未完成)
// fabriccanvas1.on('drop', function(options){
//     CallCreateMethod('Rect', fabriccanvas1);
// });

//数値を入力してサイズの変更をして600の範囲を出た場合
fabriccanvas1.on('selection:cleared', function(options){
  if((Select.left + Select.width * Select.scaleX) >= 600){
    Select.left = 600 - (Select.width * Select.scaleX);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
  if((Select.top + Select.height * Select.scaleY) >= 600){
    Select.top = 600 - (Select.height * Select.scaleY);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
});

fabriccanvas1.on('object:scaling', options => {
  //グリッド線に合わせた拡大
  if(bool == true){
    var target = options.target,
    ww = (target.width / 10);
    hh = (target.height / 10);
    target.scaleX = (Math.round(target.scaleX * ww)) / ww;
    target.scaleY = (Math.round(target.scaleY * hh)) / hh;
    w = Math.round(target.width * target.scaleX),
    h = Math.round(target.height * target.scaleY),
    snap = { // Closest snapping points
      top: Math.round(target.top / Smallgrid) * Smallgrid,
      left: Math.round(target.left / Smallgrid) * Smallgrid,
      bottom: Math.round((target.top + h) / Smallgrid) * Smallgrid,
      right: Math.round((target.left + w) / Smallgrid) * Smallgrid
    },
    threshold = Smallgrid,
    dist = { // Distance from snapping points
      top: Math.abs(snap.top - target.top),
      left: Math.abs(snap.left - target.left),
      bottom: Math.abs(snap.bottom - target.top - h),
      right: Math.abs(snap.right - target.left - w)
    },
    attrs = {
      scaleX: target.scaleX,
      scaleY: target.scaleY,
      top: target.top,
      left: target.left
    };
    target.set(attrs);
  }
  //手動でサイズを変更するとき600を超えない
  if(Select.width * Select.scaleX > 600){
    Select.left = 0;
    Select.scaleX = 600 / Select.width;
  }
  if(Select.height * Select.scaleY > 600){
    Select.top = 0;
    Select.scaleY = 600 / Select.height;
  }
});
fabriccanvas1.on('object:scaled', function(options){
  if(Select.left <= 0){
    options.target.set({left:0});
    console.log(Select.left);
  }
  if(Select.top <= 0){
    options.target.set({top:0});
    console.log(Select.top);
  }
  if(Select.left + (Select.width * Select.scaleX) >= 600){
    //右
    options.target.set({left:600 - (Select.width * Select.scaleX)});
  }
  if(Select.top + (Select.height * Select.scaleY) >= 600){
    //下
    options.target.set({top:600 - (Select.height * Select.scaleY)});
  }
});

fabriccanvas2.on('mouse:up', function (e) {
  panning = false;
});

fabriccanvas2.on('mouse:down', function (e) {
  panning = true;
});
fabriccanvas2.on('mouse:move', function (e) {
if (panning && e && e.e && !fabriccanvas2.selection) {
  debugger;
  var units = 10;
  var delta = new fabric.Point(e.e.movementX, e.e.movementY);
  fabriccanvas2.relativePan(delta);
}
});

fabriccanvas2.on('selection:created', function(e) {
  //Selectに情報を渡す
  //GetData(Work_canvas);
  //選択したオブジェクトの位置、サイズを取得&表示
  tmp_undo.push(Work_canvas.toDatalessJSON());
  document.getElementById("position_left").value = Math.round(Select.left);
  document.getElementById("position_top").value = Math.round(Select.top);
  document.getElementById("obj_Width").value = Math.round(Select.width * Select.scaleX);
  document.getElementById("obj_Height").value = Math.round(Select.height * Select.scaleY);
  //数値を入力してサイズの変更をして600の範囲を出た場合
  if((Select.left + Select.width * Select.scaleX) >= 600){
    Select.left = 600 - (Select.width * Select.scaleX);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
  if((Select.top + Select.height * Select.scaleY) >= 600){
    Select.top = 600 - (Select.height * Select.scaleY);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
});

fabriccanvas2.on('selection:updated', function(e) {
  //Selectに情報を渡す
  //GetData(Work_canvas);
  //リアルタイムに値を表示
  document.getElementById("position_left").value = Math.round(Select.left);
  document.getElementById("position_top").value = Math.round(Select.top);
  document.getElementById("obj_Width").value = Math.round(Select.width * Select.scaleX);
  document.getElementById("obj_Height").value = Math.round(Select.height * Select.scaleY);
});

fabriccanvas2.on('object:modified', function(option){
  Work_undo.push(tmp_undo.pop());
  Work_redo = [];
  tmp_undo.push(Work_canvas.toDatalessJSON());
  document.getElementById("position_left").value = Select.left;
  document.getElementById("position_top").value = Select.top;
  document.getElementById("obj_Width").value = Select.width * Select.scaleX;
  document.getElementById("obj_Height").value = Select.height * Select.scaleY;
})  

//グリッド線に合わせて移動
fabriccanvas2.on('object:moving', function(options) { 
  if(bool == true){
    options.target.set({
      left: Math.round(options.target.left / Smallgrid) * Smallgrid,
      top: Math.round(options.target.top / Smallgrid) * Smallgrid
    });
  }
  //オブジェクトが600×600の範囲を出ない
  if(Select.angle == 0){
    //角度が0のとき
    if(Select.left <= 0){
      //左
      options.target.set({left:0});
    }
    if(Select.top <= 0){
      //上
      options.target.set({top:0});
    }
    if(Select.left + (Select.width * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - (Select.width * Select.scaleX)});
    }
    if(Select.top + (Select.height * Select.scaleY) >= 600){
      //下
      options.target.set({top:600 - (Select.height * Select.scaleY)});
    }
  }else if(Select.angle > 0 && Select.angle <= 90){
    //角度が0-90のとき
    var x = Select.angle * Math.PI / 180;
    if(Select.left - Math.abs(Math.sin(x) * Select.height * Select.scaleY) <= 0){
      //左
      options.target.set({left:Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.top <= 0){
      //上
      options.target.set({top:0});
    }
    if(Select.left + Math.abs(Math.cos(x) * Select.width * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.top + Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
  }else if(Select.angle > 90 && Select.angle <= 180){
    //角度が90-180のとき
    var x = (Select.angle - 90) * Math.PI / 180;
    if(Select.left - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) <= 0){
      //左
      options.target.set({left:Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.top - Math.abs(Math.sin(x) * Select.height * Select.scaleY) <= 0){
      //上
      options.target.set({top:Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.left >= 600){
      //右
      options.target.set({left:600});
    }
    if(Select.top + Math.abs(Math.cos(x) * Select.width * Select.scaleX) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
  }else if(Select.angle > 180 && Select.angle <= 270){
    //角度が180-270のとき
    var x = (Select.angle - 180) * Math.PI / 180;
    if(Select.left - Math.abs(Math.cos(x) * Select.width * Select.scaleX) <= 0){
      //左
      options.target.set({left:Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.top - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) <= 0 ){
      //上
      options.target.set({top:Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.left + Math.abs(Math.sin(x) * Select.height * Select.scaleY) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.top >= 600){
    //下
      options.target.set({top:600});
    }
  }else{
    //角度が270-360のとき
    var x = (Select.angle - 270) * Math.PI / 180;
    if(Select.left <= 0){
      //左
      options.target.set({left:0});
    }
    if(Select.top - Math.abs(Math.cos(x) * Select.width * Select.scaleX) <= 0){
      //上
      options.target.set({top:Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.left + Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.top + Math.abs(Math.sin(x) * Select.height * Select.scaleY) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
  }
});

//グリッド線が非表示のとき滑らかに回転する
fabriccanvas2.on('object:rotating', function(options){
  if(bool == false){
    options.target.set({
      snapAngle: 0
    });
  }
  if(bool == true){
    options.target.set({
      snapAngle: 5
    });
  }
});

//パーツウィンドウからd&dでキャンバスに表示(未完成)
// fabriccanvas2.on('drop', function(options){
//     CallCreateMethod('Rect', fabriccanvas2);
// });

//数値を入力してサイズの変更をして600の範囲を出た場合
fabriccanvas2.on('selection:cleared', function(options){
  if((Select.left + Select.width * Select.scaleX) >= 600){
    Select.left = 600 - (Select.width * Select.scaleX);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
  if((Select.top + Select.height * Select.scaleY) >= 600){
    Select.top = 600 - (Select.height * Select.scaleY);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
});

fabriccanvas2.on('object:scaling', options => {
  //グリッド線に合わせた拡大
  if(bool == true){
    var target = options.target,
    ww = (target.width / 10);
    hh = (target.height / 10);
    target.scaleX = (Math.round(target.scaleX * ww)) / ww;
    target.scaleY = (Math.round(target.scaleY * hh)) / hh;
    w = Math.round(target.width * target.scaleX),
    h = Math.round(target.height * target.scaleY),
    snap = { // Closest snapping points
      top: Math.round(target.top / Smallgrid) * Smallgrid,
      left: Math.round(target.left / Smallgrid) * Smallgrid,
      bottom: Math.round((target.top + h) / Smallgrid) * Smallgrid,
      right: Math.round((target.left + w) / Smallgrid) * Smallgrid
    },
    threshold = Smallgrid,
    dist = { // Distance from snapping points
      top: Math.abs(snap.top - target.top),
      left: Math.abs(snap.left - target.left),
      bottom: Math.abs(snap.bottom - target.top - h),
      right: Math.abs(snap.right - target.left - w)
    },
    attrs = {
      scaleX: target.scaleX,
      scaleY: target.scaleY,
      top: target.top,
      left: target.left
    };
    target.set(attrs);
  }
  //手動でサイズを変更するとき600を超えない
  if(Select.width * Select.scaleX > 600){
    Select.left = 0;
    Select.scaleX = 600 / Select.width;
  }
  if(Select.height * Select.scaleY > 600){
    Select.top = 0;
    Select.scaleY = 600 / Select.height;
  }
});
fabriccanvas2.on('object:scaled', function(options){
  if(Select.left <= 0){
    options.target.set({left:0});
    console.log(Select.left);
  }
  if(Select.top <= 0){
    options.target.set({top:0});
    console.log(Select.top);
  }
  if(Select.left + (Select.width * Select.scaleX) >= 600){
    //右
    options.target.set({left:600 - (Select.width * Select.scaleX)});
  }
  if(Select.top + (Select.height * Select.scaleY) >= 600){
    //下
    options.target.set({top:600 - (Select.height * Select.scaleY)});
  }
});

fabriccanvas3.on('mouse:up', function (e) {
  panning = false;
});

fabriccanvas3.on('mouse:down', function (e) {
  panning = true;
});
fabriccanvas3.on('mouse:move', function (e) {
if (panning && e && e.e && !fabriccanvas3.selection) {
  debugger;
  var units = 10;
  var delta = new fabric.Point(e.e.movementX, e.e.movementY);
  fabriccanvas3.relativePan(delta);
}
});

fabriccanvas3.on('selection:created', function(e) {
  //Selectに情報を渡す
  //GetData(Work_canvas);
  //選択したオブジェクトの位置、サイズを取得&表示
  tmp_undo.push(Work_canvas.toDatalessJSON());
  document.getElementById("position_left").value = Math.round(Select.left);
  document.getElementById("position_top").value = Math.round(Select.top);
  document.getElementById("obj_Width").value = Math.round(Select.width * Select.scaleX);
  document.getElementById("obj_Height").value = Math.round(Select.height * Select.scaleY);
  ////数値を入力してサイズの変更をして600の範囲を出た場合
  if((Select.left + Select.width * Select.scaleX) >= 600){
    Select.left = 600 - (Select.width * Select.scaleX);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
  if((Select.top + Select.height * Select.scaleY) >= 600){
    Select.top = 600 - (Select.height * Select.scaleY);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
});

fabriccanvas3.on('selection:updated', function(e) {
  //Selectに情報を渡す
  //GetData(Work_canvas);
  //これ何か分かる人いますか？
  document.getElementById("position_left").value = Math.round(Select.left);
  document.getElementById("position_top").value = Math.round(Select.top);
  document.getElementById("obj_Width").value = Math.round(Select.width * Select.scaleX);
  document.getElementById("obj_Height").value = Math.round(Select.height * Select.scaleY);
});

fabriccanvas3.on('object:modified', function(option){
  Work_undo.push(tmp_undo.pop());
  Work_redo = [];
  tmp_undo.push(Work_canvas.toDatalessJSON());
  document.getElementById("position_left").value = Select.left;
  document.getElementById("position_top").value = Select.top;
  document.getElementById("obj_Width").value = Select.width * Select.scaleX;
  document.getElementById("obj_Height").value = Select.height * Select.scaleY;
})  

//グリッド線に合わせて移動
fabriccanvas3.on('object:moving', function(options) { 
  if(bool == true){
    options.target.set({
      left: Math.round(options.target.left / Smallgrid) * Smallgrid,
      top: Math.round(options.target.top / Smallgrid) * Smallgrid
    });
  }
  //オブジェクトが600×600の範囲を出ない
  if(Select.angle == 0){
    //角度が0のとき
    if(Select.left <= 0){
      //左
      options.target.set({left:0});
    }
    if(Select.top <= 0){
      //上
      options.target.set({top:0});
    }
    if(Select.left + (Select.width * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - (Select.width * Select.scaleX)});
    }
    if(Select.top + (Select.height * Select.scaleY) >= 600){
      //下
      options.target.set({top:600 - (Select.height * Select.scaleY)});
    }
  }else if(Select.angle > 0 && Select.angle <= 90){
    //角度が0-90のとき
    var x = Select.angle * Math.PI / 180;
    if(Select.left - Math.abs(Math.sin(x) * Select.height * Select.scaleY) <= 0){
      //左
      options.target.set({left:Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.top <= 0){
      //上
      options.target.set({top:0});
    }
    if(Select.left + Math.abs(Math.cos(x) * Select.width * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.top + Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
  }else if(Select.angle > 90 && Select.angle <= 180){
    //角度が90-180のとき
    var x = (Select.angle - 90) * Math.PI / 180;
    if(Select.left - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) <= 0){
      //左
      options.target.set({left:Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.top - Math.abs(Math.sin(x) * Select.height * Select.scaleY) <= 0){
      //上
      options.target.set({top:Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.left >= 600){
      //右
      options.target.set({left:600});
    }
    if(Select.top + Math.abs(Math.cos(x) * Select.width * Select.scaleX) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
  }else if(Select.angle > 180 && Select.angle <= 270){
    //角度が180-270のとき
    var x = (Select.angle - 180) * Math.PI / 180;
    if(Select.left - Math.abs(Math.cos(x) * Select.width * Select.scaleX) <= 0){
      //左
      options.target.set({left:Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.top - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) <= 0 ){
      //上
      options.target.set({top:Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.left + Math.abs(Math.sin(x) * Select.height * Select.scaleY) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.top >= 600){
    //下
      options.target.set({top:600});
    }
  }else{
    //角度が270-360のとき
    var x = (Select.angle - 270) * Math.PI / 180;
    if(Select.left <= 0){
      //左
      options.target.set({left:0});
    }
    if(Select.top - Math.abs(Math.cos(x) * Select.width * Select.scaleX) <= 0){
      //上
      options.target.set({top:Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.left + Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.top + Math.abs(Math.sin(x) * Select.height * Select.scaleY) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
  }
});

//グリッド線が非表示のとき滑らかに回転する
fabriccanvas3.on('object:rotating', function(options){
  if(bool == false){
    options.target.set({
      snapAngle: 0
    });
  }
  if(bool == true){
    options.target.set({
      snapAngle: 5
    });
  }
});

//パーツウィンドウからd&dでキャンバスに表示(未完成)
// fabriccanvas3.on('drop', function(options){
//     CallCreateMethod('Rect', fabriccanvas3);
// });

//数値を入力してサイズの変更をして600の範囲を出た場合
fabriccanvas3.on('selection:cleared', function(options){
  if((Select.left + Select.width * Select.scaleX) >= 600){
    Select.left = 600 - (Select.width * Select.scaleX);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
  if((Select.top + Select.height * Select.scaleY) >= 600){
    Select.top = 600 - (Select.height * Select.scaleY);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
});

fabriccanvas3.on('object:scaling', options => {
  //グリッド線に合わせた拡大
  if(bool == true){
    var target = options.target,
    ww = (target.width / 10);
    hh = (target.height / 10);
    target.scaleX = (Math.round(target.scaleX * ww)) / ww;
    target.scaleY = (Math.round(target.scaleY * hh)) / hh;
    w = Math.round(target.width * target.scaleX),
    h = Math.round(target.height * target.scaleY),
    snap = { // Closest snapping points
      top: Math.round(target.top / Smallgrid) * Smallgrid,
      left: Math.round(target.left / Smallgrid) * Smallgrid,
      bottom: Math.round((target.top + h) / Smallgrid) * Smallgrid,
      right: Math.round((target.left + w) / Smallgrid) * Smallgrid
    },
    threshold = Smallgrid,
    dist = { // Distance from snapping points
      top: Math.abs(snap.top - target.top),
      left: Math.abs(snap.left - target.left),
      bottom: Math.abs(snap.bottom - target.top - h),
      right: Math.abs(snap.right - target.left - w)
    },
    attrs = {
      scaleX: target.scaleX,
      scaleY: target.scaleY,
      top: target.top,
      left: target.left
    };
    target.set(attrs);
  }
  //手動でサイズを変更するとき600を超えない
  if(Select.width * Select.scaleX > 600){
    Select.left = 0;
    Select.scaleX = 600 / Select.width;
  }
  if(Select.height * Select.scaleY > 600){
    Select.top = 0;
    Select.scaleY = 600 / Select.height;
  }
});
fabriccanvas3.on('object:scaled', function(options){
  if(Select.left <= 0){
    options.target.set({left:0});
    console.log(Select.left);
  }
  if(Select.top <= 0){
    options.target.set({top:0});
    console.log(Select.top);
  }
  if(Select.left + (Select.width * Select.scaleX) >= 600){
    //右
    options.target.set({left:600 - (Select.width * Select.scaleX)});
  }
  if(Select.top + (Select.height * Select.scaleY) >= 600){
    //下
    options.target.set({top:600 - (Select.height * Select.scaleY)});
  }
});

fabriccanvas4.on('mouse:up', function (e) {
  panning = false;
});

fabriccanvas4.on('mouse:down', function (e) {
  panning = true;
});
fabriccanvas4.on('mouse:move', function (e) {
if (panning && e && e.e && !fabriccanvas4.selection) {
  debugger;
  var units = 10;
  var delta = new fabric.Point(e.e.movementX, e.e.movementY);
  fabriccanvas4.relativePan(delta);
}
});

fabriccanvas4.on('selection:created', function(e) {
  //Selectに情報を渡す
  //GetData(Work_canvas);
  //選択したオブジェクトの位置、サイズを取得&表示
  tmp_undo.push(Work_canvas.toDatalessJSON());
  document.getElementById("position_left").value = Math.round(Select.left);
  document.getElementById("position_top").value = Math.round(Select.top);
  document.getElementById("obj_Width").value = Math.round(Select.width * Select.scaleX);
  document.getElementById("obj_Height").value = Math.round(Select.height * Select.scaleY);
  //数値を入力してサイズの変更をして600の範囲を出た場合
  if((Select.left + Select.width * Select.scaleX) >= 600){
    Select.left = 600 - (Select.width * Select.scaleX);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
  if((Select.top + Select.height * Select.scaleY) >= 600){
    Select.top = 600 - (Select.height * Select.scaleY);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
});

fabriccanvas4.on('selection:updated', function(e) {
  //Selectに情報を渡す
  //GetData(Work_canvas);
  //これ何か分かる人いますか？
  document.getElementById("position_left").value = Math.round(Select.left);
  document.getElementById("position_top").value = Math.round(Select.top);
  document.getElementById("obj_Width").value = Math.round(Select.width * Select.scaleX);
  document.getElementById("obj_Height").value = Math.round(Select.height * Select.scaleY);
});

fabriccanvas4.on('object:modified', function(option){
  Work_undo.push(tmp_undo.pop());
  Work_redo = [];
  tmp_undo.push(Work_canvas.toDatalessJSON());
  document.getElementById("position_left").value = Select.left;
  document.getElementById("position_top").value = Select.top;
  document.getElementById("obj_Width").value = Select.width * Select.scaleX;
  document.getElementById("obj_Height").value = Select.height * Select.scaleY;
})  

//グリッド線に合わせて移動
fabriccanvas4.on('object:moving', function(options) { 
  if(bool == true){
    options.target.set({
      left: Math.round(options.target.left / Smallgrid) * Smallgrid,
      top: Math.round(options.target.top / Smallgrid) * Smallgrid
    });
  }
  //オブジェクトが600×600の範囲を出ない
  if(Select.angle == 0){
    //角度が0のとき
    if(Select.left <= 0){
      //左
      options.target.set({left:0});
    }
    if(Select.top <= 0){
      //上
      options.target.set({top:0});
    }
    if(Select.left + (Select.width * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - (Select.width * Select.scaleX)});
    }
    if(Select.top + (Select.height * Select.scaleY) >= 600){
      //下
      options.target.set({top:600 - (Select.height * Select.scaleY)});
    }
  }else if(Select.angle > 0 && Select.angle <= 90){
    //角度が0-90のとき
    var x = Select.angle * Math.PI / 180;
    if(Select.left - Math.abs(Math.sin(x) * Select.height * Select.scaleY) <= 0){
      //左
      options.target.set({left:Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.top <= 0){
      //上
      options.target.set({top:0});
    }
    if(Select.left + Math.abs(Math.cos(x) * Select.width * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.top + Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
  }else if(Select.angle > 90 && Select.angle <= 180){
    //角度が90-180のとき
    var x = (Select.angle - 90) * Math.PI / 180;
    if(Select.left - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) <= 0){
      //左
      options.target.set({left:Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.top - Math.abs(Math.sin(x) * Select.height * Select.scaleY) <= 0){
      //上
      options.target.set({top:Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.left >= 600){
      //右
      options.target.set({left:600});
    }
    if(Select.top + Math.abs(Math.cos(x) * Select.width * Select.scaleX) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
  }else if(Select.angle > 180 && Select.angle <= 270){
    //角度が180-270のとき
    var x = (Select.angle - 180) * Math.PI / 180;
    if(Select.left - Math.abs(Math.cos(x) * Select.width * Select.scaleX) <= 0){
      //左
      options.target.set({left:Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.top - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) <= 0 ){
      //上
      options.target.set({top:Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.left + Math.abs(Math.sin(x) * Select.height * Select.scaleY) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.top >= 600){
    //下
      options.target.set({top:600});
    }
  }else{
    //角度が270-360のとき
    var x = (Select.angle - 270) * Math.PI / 180;
    if(Select.left <= 0){
      //左
      options.target.set({left:0});
    }
    if(Select.top - Math.abs(Math.cos(x) * Select.width * Select.scaleX) <= 0){
      //上
      options.target.set({top:Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.left + Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.top + Math.abs(Math.sin(x) * Select.height * Select.scaleY) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
  }
});

//グリッド線が非表示のとき滑らかに回転する
fabriccanvas4.on('object:rotating', function(options){
  if(bool == false){
    options.target.set({
      snapAngle: 0
    });
  }
  if(bool == true){
    options.target.set({
      snapAngle: 5
    });
  }
});

//パーツウィンドウからd&dでキャンバスに表示(未完成)
// fabriccanvas4.on('drop', function(options){
//     CallCreateMethod('Rect', fabriccanvas4);
// });

//数値を入力してサイズの変更をして600の範囲を出た場合
fabriccanvas4.on('selection:cleared', function(options){
  if((Select.left + Select.width * Select.scaleX) >= 600){
    Select.left = 600 - (Select.width * Select.scaleX);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
  if((Select.top + Select.height * Select.scaleY) >= 600){
    Select.top = 600 - (Select.height * Select.scaleY);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
});

fabriccanvas4.on('object:scaling', options => {
  //グリッド線に合わせた拡大
  if(bool == true){
    var target = options.target,
    ww = (target.width / 10);
    hh = (target.height / 10);
    target.scaleX = (Math.round(target.scaleX * ww)) / ww;
    target.scaleY = (Math.round(target.scaleY * hh)) / hh;
    w = Math.round(target.width * target.scaleX),
    h = Math.round(target.height * target.scaleY),
    snap = { // Closest snapping points
      top: Math.round(target.top / Smallgrid) * Smallgrid,
      left: Math.round(target.left / Smallgrid) * Smallgrid,
      bottom: Math.round((target.top + h) / Smallgrid) * Smallgrid,
      right: Math.round((target.left + w) / Smallgrid) * Smallgrid
    },
    threshold = Smallgrid,
    dist = { // Distance from snapping points
      top: Math.abs(snap.top - target.top),
      left: Math.abs(snap.left - target.left),
      bottom: Math.abs(snap.bottom - target.top - h),
      right: Math.abs(snap.right - target.left - w)
    },
    attrs = {
      scaleX: target.scaleX,
      scaleY: target.scaleY,
      top: target.top,
      left: target.left
    };
    target.set(attrs);
  }
  //手動でサイズを変更するとき600を超えない
  if(Select.width * Select.scaleX > 600){
    Select.left = 0;
    Select.scaleX = 600 / Select.width;
  }
  if(Select.height * Select.scaleY > 600){
    Select.top = 0;
    Select.scaleY = 600 / Select.height;
  }
});
fabriccanvas4.on('object:scaled', function(options){
  if(Select.left <= 0){
    options.target.set({left:0});
    console.log(Select.left);
  }
  if(Select.top <= 0){
    options.target.set({top:0});
    console.log(Select.top);
  }
  if(Select.left + (Select.width * Select.scaleX) >= 600){
    //右
    options.target.set({left:600 - (Select.width * Select.scaleX)});
  }
  if(Select.top + (Select.height * Select.scaleY) >= 600){
    //下
    options.target.set({top:600 - (Select.height * Select.scaleY)});
  }
});

fabriccanvas5.on('mouse:up', function (e) {
  panning = false;
});

fabriccanvas5.on('mouse:down', function (e) {
  panning = true;
});
fabriccanvas5.on('mouse:move', function (e) {
if (panning && e && e.e && !fabriccanvas5.selection) {
  debugger;
  var units = 10;
  var delta = new fabric.Point(e.e.movementX, e.e.movementY);
  fabriccanvas5.relativePan(delta);
}
});

fabriccanvas5.on('selection:created', function(e) {
  //Selectに情報を渡す
  //GetData(Work_canvas);
  //選択したオブジェクトの位置、サイズを取得&表示
  tmp_undo.push(Work_canvas.toDatalessJSON());
  document.getElementById("position_left").value = Math.round(Select.left);
  document.getElementById("position_top").value = Math.round(Select.top);
  document.getElementById("obj_Width").value = Math.round(Select.width * Select.scaleX);
  document.getElementById("obj_Height").value = Math.round(Select.height * Select.scaleY);
  //手動でサイズを変更するとき600を超えない
  if((Select.left + Select.width * Select.scaleX) >= 600){
    Select.left = 600 - (Select.width * Select.scaleX);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
  if((Select.top + Select.height * Select.scaleY) >= 600){
    Select.top = 600 - (Select.height * Select.scaleY);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
});

fabriccanvas5.on('selection:updated', function(e) {
  //Selectに情報を渡す
  //GetData(Work_canvas);
  //これ何か分かる人いますか？
  document.getElementById("position_left").value = Math.round(Select.left);
  document.getElementById("position_top").value = Math.round(Select.top);
  document.getElementById("obj_Width").value = Math.round(Select.width * Select.scaleX);
  document.getElementById("obj_Height").value = Math.round(Select.height * Select.scaleY);
});

fabriccanvas5.on('object:modified', function(option){
  Work_undo.push(tmp_undo.pop());
  Work_redo = [];
  tmp_undo.push(Work_canvas.toDatalessJSON());
  document.getElementById("position_left").value = Select.left;
  document.getElementById("position_top").value = Select.top;
  document.getElementById("obj_Width").value = Select.width * Select.scaleX;
  document.getElementById("obj_Height").value = Select.height * Select.scaleY;
})  

//グリッド線に合わせて移動
fabriccanvas5.on('object:moving', function(options) { 
  if(bool == true){
    options.target.set({
      left: Math.round(options.target.left / Smallgrid) * Smallgrid,
      top: Math.round(options.target.top / Smallgrid) * Smallgrid
    });
  }
  //オブジェクトが600×600の範囲を出ない
  if(Select.angle == 0){
    //角度が0のとき
    if(Select.left <= 0){
      //左
      options.target.set({left:0});
    }
    if(Select.top <= 0){
      //上
      options.target.set({top:0});
    }
    if(Select.left + (Select.width * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - (Select.width * Select.scaleX)});
    }
    if(Select.top + (Select.height * Select.scaleY) >= 600){
      //下
      options.target.set({top:600 - (Select.height * Select.scaleY)});
    }
  }else if(Select.angle > 0 && Select.angle <= 90){
    //角度が0-90のとき
    var x = Select.angle * Math.PI / 180;
    if(Select.left - Math.abs(Math.sin(x) * Select.height * Select.scaleY) <= 0){
      //左
      options.target.set({left:Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.top <= 0){
      //上
      options.target.set({top:0});
    }
    if(Select.left + Math.abs(Math.cos(x) * Select.width * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.top + Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
  }else if(Select.angle > 90 && Select.angle <= 180){
    //角度が90-180のとき
    var x = (Select.angle - 90) * Math.PI / 180;
    if(Select.left - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) <= 0){
      //左
      options.target.set({left:Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.top - Math.abs(Math.sin(x) * Select.height * Select.scaleY) <= 0){
      //上
      options.target.set({top:Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.left >= 600){
      //右
      options.target.set({left:600});
    }
    if(Select.top + Math.abs(Math.cos(x) * Select.width * Select.scaleX) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
  }else if(Select.angle > 180 && Select.angle <= 270){
    //角度が180-270のとき
    var x = (Select.angle - 180) * Math.PI / 180;
    if(Select.left - Math.abs(Math.cos(x) * Select.width * Select.scaleX) <= 0){
      //左
      options.target.set({left:Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.top - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) <= 0 ){
      //上
      options.target.set({top:Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.left + Math.abs(Math.sin(x) * Select.height * Select.scaleY) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
    if(Select.top >= 600){
    //下
      options.target.set({top:600});
    }
  }else{
    //角度が270-360のとき
    var x = (Select.angle - 270) * Math.PI / 180;
    if(Select.left <= 0){
      //左
      options.target.set({left:0});
    }
    if(Select.top - Math.abs(Math.cos(x) * Select.width * Select.scaleX) <= 0){
      //上
      options.target.set({top:Math.abs(Math.cos(x) * Select.width * Select.scaleX)})
    }
    if(Select.left + Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleX) >= 600){
      //右
      options.target.set({left:600 - Math.abs(Math.sin(x) * Select.width * Select.scaleX + Math.cos(x) * Select.height * Select.scaleY)})
    }
    if(Select.top + Math.abs(Math.sin(x) * Select.height * Select.scaleY) >= 600){
      //下
      options.target.set({top:600 - Math.abs(Math.sin(x) * Select.height * Select.scaleY)});
    }
  }
});

//グリッド線が非表示のとき滑らかに回転する
fabriccanvas5.on('object:rotating', function(options){
  if(bool == false){
    options.target.set({
      snapAngle: 0
    });
  }
  if(bool == true){
    options.target.set({
      snapAngle: 5
    });
  }
});

//パーツウィンドウからd&dでキャンバスに表示(未完成)
// fabriccanvas5.on('drop', function(options){
//     CallCreateMethod('Rect', fabriccanvas5);
// });

//数値を入力してサイズの変更をして600の範囲を出た場合
fabriccanvas5.on('selection:cleared', function(options){
  if((Select.left + Select.width * Select.scaleX) >= 600){
    Select.left = 600 - (Select.width * Select.scaleX);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
  if((Select.top + Select.height * Select.scaleY) >= 600){
    Select.top = 600 - (Select.height * Select.scaleY);
    if(Select.width * Select.scaleX > 600 || Select.height * Select.scaleY > 600){
      Select.left = 0;
      Select.top = 0;
    }
  }
});

fabriccanvas5.on('object:scaling', options => {
  //グリッド線に合わせた拡大
  if(bool == true){
    var target = options.target,
    ww = (target.width / 10);
    hh = (target.height / 10);
    target.scaleX = (Math.round(target.scaleX * ww)) / ww;
    target.scaleY = (Math.round(target.scaleY * hh)) / hh;
    w = Math.round(target.width * target.scaleX),
    h = Math.round(target.height * target.scaleY),
    snap = { // Closest snapping points
      top: Math.round(target.top / Smallgrid) * Smallgrid,
      left: Math.round(target.left / Smallgrid) * Smallgrid,
      bottom: Math.round((target.top + h) / Smallgrid) * Smallgrid,
      right: Math.round((target.left + w) / Smallgrid) * Smallgrid
    },
    threshold = Smallgrid,
    dist = { // Distance from snapping points
      top: Math.abs(snap.top - target.top),
      left: Math.abs(snap.left - target.left),
      bottom: Math.abs(snap.bottom - target.top - h),
      right: Math.abs(snap.right - target.left - w)
    },
    attrs = {
      scaleX: target.scaleX,
      scaleY: target.scaleY,
      top: target.top,
      left: target.left
    };
    target.set(attrs);
  }
  //手動でサイズを変更するとき600を超えない
  if(Select.width * Select.scaleX > 600){
    Select.left = 0;
    Select.scaleX = 600 / Select.width;
  }
  if(Select.height * Select.scaleY > 600){
    Select.top = 0;
    Select.scaleY = 600 / Select.height;
  }
});
fabriccanvas5.on('object:scaled', function(options){
  if(Select.left <= 0){
    options.target.set({left:0});
    console.log(Select.left);
  }
  if(Select.top <= 0){
    options.target.set({top:0});
    console.log(Select.top);
  }
  if(Select.left + (Select.width * Select.scaleX) >= 600){
    //右
    options.target.set({left:600 - (Select.width * Select.scaleX)});
  }
  if(Select.top + (Select.height * Select.scaleY) >= 600){
    //下
    options.target.set({top:600 - (Select.height * Select.scaleY)});
  }
});

