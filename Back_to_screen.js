var elem8 = document.getElementById("back");
var elem9 = document.getElementById("rback");

function Back_to_screen(Work_canvas) {
    if(undo.length != 0){
        redo.push(canvasA.toDatalessJSON());
        console.log("山田孝之");
        Work_canvas.loadFromJSON(undo.pop());
        if (undo.length == 0){
            elem8.disabled = true;
        }
        if (redo.length != 0){
            elem9.disabled = false;
        }
    }
}
function Send_to_screen(){
    if(redo.length != 0){
        undo.push(canvasA.toDatalessJSON());
        Work_canvas.loadFromJSON(redo.pop());
        console.log("hoge");
    }
    if (redo.length == 0){
        elem9.disabled = true;
    }
    if(undo.length != 0){
        elem8.disabled = false;
    }
}