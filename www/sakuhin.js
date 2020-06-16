{
   var mangas = [
      {'id':"恋愛", 'title': "サレタガワのブルー"},
      {'id':"恋愛" , 'title': "掃除の妖精におまかせ！"},
      {'id':"恋愛" , 'title': "パンプキンタイム"},
      {'id':"恋愛" , 'title': "ワンダフルデイズ"},
      {'id':"冒険" , 'title': "約束のネバーランド"},
      {'id':"冒険" , 'title': "HUNTER × HUNTER"},
      {'id':"戦闘" , 'title': "七つの大罪"},
      {'id':"戦闘" , 'title': "結界師"},
      {'id':"学園" , 'title': "外見至上主義"},
      {'id':"学園" , 'title': "傷だらけの悪魔"},
      {'id':"スポーツ\n(野球）" , 'title': "H2"},
      {'id':"スポーツ\n(野球）" , 'title': "バトルスタディーズ"},
      {'id':"スポーツ(バレー)" , 'title': "神様のバレー"},
      {'id':"スポーツ\n(バレー)" , 'title': "ハリガネサービス"},
      {'id':"ギャグ" , 'title': "荒川アンダーザブリッジ"},
      {'id':"ギャグ" , 'title': "ブラックナイトパレード"},
      {'id':"勉強" , 'title': "コウノドリ"},
      {'id':"勉強" , 'title': "はたらく細胞"},
      {'id':"塔を上る" , 'title': "リセットゲーム"},
      {'id':"塔を上る" , 'title': "神之塔"},
      {'id':"料理" , 'title': "パパと親父のウチのご飯"},
      {'id': "アイドル" , 'title': "AKB49" }
   ];

   var animes =[
      { 'id' : "恋愛" , 'title' : "四月は君の嘘" },
      { 'id' : "恋愛" , 'title' : "ヲタクに恋は難しい" },
      { 'id' : "恋愛" , 'title' : "恋と嘘" },
      { 'id' : "冒険" , 'title' : "Re:ゼロから始める\n異世界生活" },
      { 'id' : "冒険" , 'title' : "甲鉄城のカバネリ" },
      { 'id' : "戦闘" , 'title' : "ソードアートオンライン" },
      { 'id' : "戦闘" , 'title' : "犬夜叉" },
      { 'id' : "スポーツ\n(野球）" , 'title' : "メジャー2nd" },
      { 'id' : "スポーツ\n(野球）" , 'title' : "ダイヤのA" },
      { 'id' : "スポーツ\n(バレー)" , 'title' : "ハイキュー" },
      { 'id' : "ギャグ" , 'title' : "ぐらんぶる" },
      { 'id' : "ギャグ" , 'title' : "ボボボーボ・ボーボボ" },
      { 'id' : "勉強" , 'title' : "Dr.STONE" },
      { 'id' : "近未来" , 'title' : "PSYCHO-PASS\nサイコパス" },
      { 'id' : "近未来" , 'title' : "電脳コイル" },
      { 'id' : "料理" , 'title' : "真・中華一番" },
      { 'id' : "料理" , 'title' : "たくのみ" },
      { 'id' : "アイドル" , 'title' : "推しが武道館いってくれたら死ぬ" },
   ];
   
   var genre = [
      {'chref' : "comickoi.html" , 'ahref' : "animekoi.html" , 'genr' : "恋愛" , 'src' : "img/love.png"},
      {'chref' : "comicbouken.html" , 'ahref' : "animebouken.html" , 'genr' : "冒険" , 'src' : "img/bouken.jpg"},
      {'chref' : "comicsentou.html" , 'ahref' : "animesentou.html" , 'genr' : "戦闘" , 'src' : "img/buki.png"},
      {'chref' : "comicsport.html" , 'ahref' : "animesuports.html" , 'genr' : "スポーツ" , 'src' : "img/suport.png"},
      {'chref' : "comicstudy.html" , 'ahref' : "animestudy.html" , 'genr' : "勉強" , 'src' : "img/study.png"},
      {'chref' : "comicgyag.html" , 'ahref' : "animegyagu.html" , 'genr' : "ギャグ" , 'src' : "img/warai.jpg"},
      {'chref' : "comiccook.html" , 'ahref' : "animecook.html" , 'genr' : "料理" , 'src' : "img/cook.png"},
      {'chref' : "comicaidl.html" , 'ahref' : "animeaidol.html" , 'genr' : "アイドル" , 'src' : "img/aidl.jpg"},
      {'chref' : "comictou.html" , 'genr' : "塔を上る" , 'src' : "img/kaidann.jpg"},
      {'chref' : "comicgakuen.html" , 'genr' : "学園" , 'src' : "img/gakkou.jpg"},
      {'ahref' : "animefuture.html" , 'genr' : "近未来" , 'src' : "img/mirai.jpg"},
   ];

   class Sakuhin {
      constructor(am, id, title, src, text){
        this.am = am;
        this.id = id;
        this.title = title;
        this.src = src;
        this.text = text;
      }

      getSetText(){
         var osusume = document.createElement("p");      
         var daimei = document.createElement("h1");      
         var desu = document.createElement("p");      
         var shashin = document.createElement("img");      
         var kansou = document.createElement("p");
         osusume.textContent = `あなたにおすすめの${this.id}${this.am}は…` ;
         daimei.textContent = `「${this.title}」`;
         desu.textContent = "です！！"
         shashin.src = this.src;
         shashin.classList.add("animes-img");
         kansou.textContent = this.text;
         kansou.classList.add("anime-text");
         var box = document.querySelector(".text");
         box.appendChild(osusume);
         box.appendChild(daimei);
         box.appendChild(desu);
         box.appendChild(shashin);
         box.appendChild(kansou);
      }

      getSetBox(){
         var osusume = document.createElement("p");      
         var daimei = document.createElement("h1");      
         var desu = document.createElement("p");      
         var shashin = document.createElement("img");      
         var kansou = document.createElement("p");
         osusume.textContent = `あなたにおすすめの${this.id}${this.am}は…` ;
         daimei.textContent = `「${this.title}」`;
         desu.textContent = "です！！"
         shashin.src = this.src;
         shashin.classList.add("animes-img");
         kansou.textContent = this.text;
         kansou.classList.add("anime-text");
         var box = document.querySelector(".box");
         box.appendChild(osusume);
         box.appendChild(daimei);
         box.appendChild(desu);
         box.appendChild(shashin);
         box.appendChild(kansou);
      }

   }
   var stone = new Sakuhin("アニメ", animes[12].id, animes[12].title, "img/animes/ishi.jpg","とても面白い。とても感動する。ぜひとも皆さんにもみてほしいですね。");
   
   var rezero = new Sakuhin("アニメ", animes[3].id, animes[3].title, "img/animes/reze.jpg","とても面白い。とても感動する。ぜひとも皆さんにもみてほしいですね。");

   var kabaneri = new Sakuhin("アニメ", animes[4].id, animes[4].title, "img/animes/kabaneri.jpg","とても面白い。とても感動する。ぜひとも皆さんにもみてほしいですね。");
}