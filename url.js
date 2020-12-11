function URLSetting(){
  if(document.getElementById("URLBox").value){
    Select.set({id:document.getElementById("URLBox").value});
    Work_tmp_propaty_list[Select.name * 3] = document.getElementById("URLBox").value;
    var result = window.alert('URLを設定しました');
  }
}

function hashtagSetting(){
  if(document.getElementById("hashtagBox").value){
    var hashtag_link = "https://twitter.com/intent/tweet?="
    var hashtag_list = []
    var hashtag = document.getElementById("hashtagBox").value
    hashtag_list = hashtag.split("#");
    hashtag_list.shift();

    for(let i in hashtag_list){
      hashtag_link = hashtag_link + "&hashtags="
      hashtag_list[i] = hashtag_list[i].trim();
      hashtag_link = hashtag_link + hashtag_list[i];
    }
    hashtag_link = hashtag_link + "&url="
    console.log(hashtag_link)
  }
}