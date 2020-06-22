{
  //1ページ目の星の色が変わりLocal Storageに値が入るようになった
  const toggle = (element) => {
    if (!localStorage.getItem(element.id)) {
      localStorage.setItem(element.id, "true");
    } else {
      localStorage.removeItem(element.id);
    }
  } 

  //星の色（画像）を交換する
  const setStar = (element) => {
    if (!localStorage.getItem(element.id) || localStorage.getItem(element.id) !== "true") {
      element.src = "img/hosimae.png";
    } else {
      element.src = "img/hosiato.png";
    }
  }
  
  // 特定のキーと値を削除
  var removeStorage = function(key){
    localStorage.removeItem(key);
    // key = "";
    location.reload();
  };
    
  document.addEventListener('init', function(event) {
    
    document.querySelectorAll('.hosikun').forEach((element) => {  
      //前回の時点でお気に入りに登録したものを読み込む。（星を黄色にする）
      setStar(element); 
      
      // クリックしたときにLocal Storageに情報取得と星を入れ替える
      element.onclick = () => {
        toggle(element);
        setStar(element);
      }
    });
        
    //Local Storageの中身を順番に表に埋め込んでいく

    for (var i=0; i < localStorage.length; i++) {
      var _key = localStorage.key(i);
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      tb.appendChild(tr);
      tr.appendChild(td1);
      tr.appendChild(td2);
      td1.innerHTML = _key;
      // td2.innerHTML = localStorage.getItem(_key);
      //キーの部分↑
      td2.innerHTML = '<input id="clear" type="button" id="clear" onclick="removeStorage(\'' + _key + '\')" value="削除">';
    }
  });
  



}