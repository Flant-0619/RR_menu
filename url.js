function URLSetting(){
  if(document.getElementById("URLBox").value){
    Select.set({id:document.getElementById("URLBox").value});
    Work_tmp_propaty_list[Select.name * 3] = document.getElementById("URLBox").value;
    var result = window.alert('URLを設定しました');
  }
}