{
  //1ページ目の星の色が変わりLocal Storageに値が入るようになった
  const toggle = (element) => {
    if (!localStorage.getItem(element.id)) {
      localStorage.setItem(element.id, "true");
    } else {
      localStorage.removeItem(element.id);
    }
  } 

  const setStar = (element) => {
    if (!localStorage.getItem(element.id) || localStorage.getItem(element.id) !== "true") {
      element.src = "img/hosimae.png";
    } else {
      element.src = "img/hosiato.png";
    }
  }
  
 // if(page.matches('#first-page') )|| page.matches('#second-page')|| page.matches('#third-page') || page.matches('#four-page') || page.matches('#five-page')) {};
 
  window.onload = function() {
    document.querySelectorAll('.hosikun').forEach((element) => {
      element.onclick = () => {
        toggle(element);
        setStar(element);
      }
    });

    for (var i=0; i < localStorage.length; i++) {
      var _key = localStorage.key(i);
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      tb.appendChild(tr);
      tr.appendChild(td1);
      tr.appendChild(td2)
      tr.appendChild(td3);
      td1.innerHTML = _key;
      // td2.innerHTML = localStorage.getItem(_key);
      //キーの部分↑
      // td3.innerHTML = '<input type="button" onclick="removeStorage(\'' + _key + '\')" value="削除">';
    }
    document.getElementById("save").onclick = function() { 
      saveStorage();
    };

  };

 
}