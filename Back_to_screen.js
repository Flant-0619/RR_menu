var canvas1_undo = [];
var canvas1_redo = [];
var canvas2_undo = [];
var canvas2_redo = [];
var canvas3_undo = [];
var canvas3_redo = [];
var canvas4_undo = [];
var canvas4_redo = [];
var canvas5_undo = [];
var canvas5_redo = [];
var Work_undo = canvas1_undo;
var Work_redo = canvas2_redo;
var elem8 = document.getElementById("back");
var elem9 = document.getElementById("rback");


function Back_to_screen(Work_canvas) {
    console.log("hoge")
    if(Work_undo.length != 0){
        Work_redo.push(Work_canvas.toDatalessJSON());
        console.log("山田孝之");
        Work_canvas.loadFromJSON(Work_undo.pop());
        if (Work_undo.length == 0){
            elem8.disabled = true;
        }
        if (Work_redo.length != 0){
            elem9.disabled = false;
        }
    }
}
function Send_to_screen(){
    if(Work_redo.length != 0){
        Work_undo.push(Work_canvas.toDatalessJSON());
        Work_canvas.loadFromJSON(Work_redo.pop());
        console.log("hoge");
    }
    if (Work_redo.length == 0){
        elem9.disabled = true;
    }
    if(Work_undo.length != 0){
        elem8.disabled = false;
    }
}