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
    if(Work_undo.length != 0){
        console.log(Work_tmp_propaty_list);
        Work_redo.push(Work_canvas.toDatalessJSON());
        console.log("山田孝之");
        tmp_Json = Work_undo.pop();
        var cnt = 0
        for(let i in tmp_Json.objects){
            tmp_Json.objects[i].id = Work_tmp_propaty_list[cnt];
            tmp_Json.objects[i].name = Work_tmp_propaty_list[cnt+1];
            tmp_Json.objects[i].IDF = Work_tmp_propaty_list[cnt+2];
            cnt += 3;
        }
        Work_canvas.loadFromJSON(tmp_Json);
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
        var tmp_Json = Work_redo.pop();
        var cnt = 0;
        for(let i in tmp_Json.objects){
            console.log("hhhhh") 
            tmp_Json.objects[i].id = Work_tmp_propaty_list[cnt];
            tmp_Json.objects[i].name = Work_tmp_propaty_list[cnt+1];
            tmp_Json.objects[i].IDF = Work_tmp_propaty_list[cnt+2];
            cnt += 3;
        }
        Work_canvas.loadFromJSON(tmp_Json);
        Work_canvas.renderAll();
        console.log("hoge");
        if (Work_redo.length == 0){
            elem9.disabled = true;
        }
        if(Work_undo.length != 0){
            elem8.disabled = false;
        }
    }
}