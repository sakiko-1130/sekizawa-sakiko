
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
      { 'id' : "恋愛" , 'title' : "四月は君の嘘" ,
      'text' : 
      "中学生の天才ピアニストとヴァイオリニストの音楽を中心にした物語。終わった時にはピアノが弾きたくなります。とても儚く、感動する話で最終回は何度見ても泣けます。"},

      { 'id' : "恋愛" , 'title' : "ヲタクに恋は難しい" , 
      'text' : 
      "物語の中心メンバー4人が何かしらのヲタク(熱狂的ファン)。そんな4人の日常や恋模様を時に面白く、時に不器用に、そして時にヲタク目線で描かれている。"},

      { 'id' : "恋愛" , 'title' : "恋と嘘", 
      'text' :
      "国が決めた相手と結婚しなければいけない世界。主人公は国が決めた相手ではない人と両思いになってしまう。果たしてその恋の行方は…" },

      { 'id' : "冒険" , 'title' : "Re:ゼロから始める\n異世界生活",
      'text' : 
      "主人公が死ぬとある程度時間が戻ってしまう不思議な異世界。戦闘能力もなく魔法も使えないちょっと根性の曲がった主人公が時間を進めようと奮闘する姿がよかったりする。" },

      { 'id' : "冒険" , 'title' : "甲鉄城のカバネリ",
      'text' :
      "ゾンビに似た鋼鉄の心臓を貫かないと死なない怪物（カバネ）が存在する世界。カバネに立ち向かう主人公の格好良さと噛まれたらカバネになってしまうスリルが良い。"},

      { 'id' : "戦闘" , 'title' : "ソードアートオンライン",
      'text' :
      "VRゲームに実際にダイブして戦う話で、シリーズによってゲームの舞台も変わってくる。VRゲームをやってみたくなる。あと主人公が無駄にモテる。" },

      { 'id' : "戦闘" , 'title' : "犬夜叉",
      'text' :
      "手にすれば最強になれるといわれている四魂の玉を集めていく話で、同じく四魂の玉を狙う奈落というボスを倒そうとする旅の話でもある。人と妖怪が一緒に旅をしてるのがなんか良い。" },

      { 'id' : "スポーツ\n(野球）" , 'title' : "メジャー2nd",
      'text' :
      "王道野球アニメのJr.シリーズ！最初から才能があるわけではない主人公・茂野大吾が様々な人から野球を学び努力で上手くなっていくところが良い。野球女子が出てくるところもおすすめポイント！" },

      { 'id' : "スポーツ\n(野球）" , 'title' : "ダイヤのA",
      'text' :
      "甲子園に出るためにひたすら野球と向き合う登場人物たちが格好良い。すごすぎてリアリティがないシーンもありますが野球を知らない人が見ても面白いと思う！" },

      { 'id' : "スポーツ\n(バレー)" , 'title' : "ハイキュー",
      'text' :
      "バレーのこと全く分からない私が見てもはまりました。チームスポーツの良さがめちゃめちゃ詰まっています！！バレーがやりたくなります。" },

      { 'id' : "ギャグ" , 'title' : "ぐらんぶる",
      'text':
      "ひたすらお酒飲んで野球拳している大学生達の話。くだらなくて笑えます。一応ダイビングサークルなのでたまにきれいな海が出てくるのがギャップで心が浄化されます...(笑)" },

      { 'id' : "ギャグ" , 'title' : "ボボボーボ・ボーボボ" ,
      'text':
      "とにかく登場人物の名前と個性が強すぎる。主人公は鼻毛で戦います。作品内にはバトルシーンもたくさんあるけれど圧倒的にギャグの部分が勝ちます。"},

      { 'id' : "勉強" , 'title' : "Dr.STONE",
      'text' :
      "主に科学のお話。ある日突然地球の生物が石化し技術が滅び文明が石器時代まで戻ってしまう。火も鉄もすべて一から、あり得ないものも科学の力で作ってしまう主人公がとにかくすごい！" },

      { 'id' : "近未来" , 'title' : "PSYCHO-PASS\nサイコパス",
      'text' :
      "人が犯罪を犯す可能性が数値(犯罪計数)になって現れるようになった時代。その世界を取り締まる警察官達の話。本当にこんな時代がいつか訪れそう。"},

      { 'id' : "近未来" , 'title' : "電脳コイル",
      'text' :
      "携帯の代わりに眼鏡にすべてが埋め込まれている。電話もネットもめがねでできる。未来の話だけれど絵が昔っぽいのが良い。そして話に出てくるペットが可愛い。" },

      { 'id' : "料理" , 'title' : "真・中華一番",
      'text' :
      "料理アニメなのでとにかく食べ物がおいしそうに書かれている。本当に作れるのか分からない料理もたまに出てくるが見てるとおなかがすいてきます。"},

      { 'id' : "料理" , 'title' : "たくのみ",
      'text' :
      "タイトルの通り主にお酒のお話。色んなお酒についてわかりやすく説明をしてくれるのでお酒の勉強になります。一話15分なのでとにかく見やすい！" },

      { 'id' : "アイドル" , 'title' : "推しが武道館いってくれたら死ぬ",
      'text' :
      "アイドルの話。ではなくアイドルを追いかけるヲタクのお話。ヲタク同士の会話のやり取りがとにかく面白い。こんな夢中になれるものがあるの羨ましくなる。" },
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
         return{osusume, daimei, desu, shashin, kansou}
      }

   }
   
   
