
   var mangas = [
      {'id':"恋愛", 'title': "サレタガワのブルー",
      'text':
      "これを読むと浮気の恐ろしさがすごくわかる。そして登場人物の女の人がサイコパスでビビります。"},

      {'id':"恋愛" , 'title': "掃除の妖精におまかせ！",
      'text' :
      "極度の潔癖症の社長がどうしたらこの女の子と恋に落ちるの⁉と続きがどんどん気になってしまいます。"},

      {'id':"恋愛" , 'title': "パンプキンタイム",
      'text' :
      "ある日突然性別が変わってしまっていた子が(男→女)、小さい頃に幼馴染でチームメイトだった男の子に再開する‼という不思議な感じが面白い。"},
      
      {'id':"恋愛" , 'title': "ワンダフルデイズ",
      'text' :
      "夜になると犬になってしまう女と犬が大嫌いな男。すれ違いがたくさんあってもどかしいけど、2人とも可愛くてずっと見ていられる。"},
      
      {'id':"冒険" , 'title': "約束のネバーランド",
      'text' :
      "主要メンバー三人のバランスが良い。そして12歳にも満たない子供たちが危険な世界で必死に生きようとする姿に心を打たれる‼"},
      // 5
      {'id':"冒険" , 'title': "HUNTER × HUNTER",
      'text' :
      "素直で仲間思いな主人公が旅の中で出会う多くの人たちの心を動かし、仲間たちと困難を乗り越えていく姿がめちゃめちゃ良い‼"},

      {'id':"戦闘" , 'title': "七つの大罪",
      'text' :
      "七つの大罪といわれる7人の大罪人を探す話。最初に出会う団長・メリオダスが変態だけどやるときはやるかっこいい人。"},

      {'id':"戦闘" , 'title': "結界師",
      'text' :
      "夜になると学校に妖怪が出現する。主人公たちは妖怪を退治するのが仕事。主人公がコーヒー牛乳とお菓子作りが大好きなところが可愛い。"},

      {'id':"学園" , 'title': "外見至上主義",
      'text' :
      "ある日、自分の体が2つになっている⁉(元の体とイケメンの体)不良が多い話なのでケンカ多めですが主人公の周りにはいい子が多い。"},

      {'id':"学園" , 'title': "傷だらけの悪魔",
      'text' :
      "いじめの恐ろしさがわかる話。人にしたことは自分に返ってくるってことを思い知らされます..."},
 // 10
      {'id':"スポーツ\n(野球）" , 'title': "H2",
      'text' :
      "あだち充シリーズで一番のおすすめ！主人公とヒロインの恋の行方が気になる。ほろ苦なストーリー。もちろん野球のシーンもたくさんあります‼"},

      {'id':"スポーツ\n(野球）" , 'title': "バトルスタディーズ",
      'text' :
      "甲子園を夢見ての強豪校に進学した主人公たちが、先輩に理不尽に怒られまくる。やりすぎな部分もあるが共感できることもしばしば...(笑)"},

      {'id':"スポーツ(バレー)" , 'title': "神様のバレー",
      'text' :
      "ずば抜けてすごい選手もいないチームが天才コーチの指導や作戦によって試合を勝ち抜いていく！チームスポーツの良さを思い知らされます‼"},
      
      {'id':"スポーツ\n(バレー)" , 'title': "ハリガネサービス",
      'text' :
      "主人公のポジションはピンチサーバー。ボールを自在に操れるサーブの天才。そのサーブで何度もチームを救う姿が格好良い！"},
      
      {'id':"ギャグ" , 'title': "荒川アンダーザブリッジ",
      'text' :
      "主人公の周りにいるキャラ一人ひとりの個性が本当に強い。本当にクセが強くて変わった人ばかりで笑えます。"},
 // 15
      {'id':"ギャグ" , 'title': "ブラックナイトパレード",
      'text' :
      "主人公がコンビニバイトからサンタクロースに転職する！サンタクロースの裏側？を知ることができる。かも..."},

      {'id':"勉強" , 'title': "コウノドリ",
      'text' :
      "命の大切さがすごくわかる漫画。人はそれぞれ色んな事情を抱えて生きているんだなあと実感する。"},

      {'id':"勉強" , 'title': "はたらく細胞",
      'text' :
      "体の中のこと(赤血球とか血小板とか)をとってもわかりやすく面白く書いてくれています。"},
      
      {'id':"塔を上る" , 'title': "リセットゲーム",
      'text' :
      "ある日突然塔に入れられた主人公たちは塔から脱出するために謎を解いていく。自分たちでも解けそうな謎が出て来るので読みごたえがある。"},
      
      {'id':"塔を上る" , 'title': "神之塔",
      'text' :
      "塔の中で生活していた主人公が、塔の上に行った好きな子を探しに上を目指す。そして塔を上るための試験に立ち向かってく‼"},
      // 20
      {'id':"料理" , 'title': "パパと親父のウチのご飯",
      'text' :
      "2組のシングルファザーがシェアハウスをする。育児に苦戦するも料理を通して子供たちと心を通じ合うシーンにほっこりします！"},
      
      {'id': "アイドル" , 'title': "AKB49",
      'text' :
      "好きな女の子を追いかけて男の子がアイドルになってしまう(普通じゃあり得ない)。実際にいたメンバー達のことも書かれているので読みごたえあり‼"}
   ];

   var animes =[
      { 'id' : "恋愛" , 'title' : "四月は君の嘘" ,
      'text' : 
      "中学生の天才ピアニストとヴァイオリニストの音楽を中心とした恋の物語。終わった時にはピアノが弾きたくなります。とても儚くて、感動する話。"},

      { 'id' : "恋愛" , 'title' : "ヲタクに恋は難しい" , 
      'text' : 
      "主要メンバー4人は何かしらのヲタク(熱狂的ファン)。そんな4人の日常や恋模様を時に面白く、時に不器用に、そして時にヲタク目線で描かれている。"},

      { 'id' : "恋愛" , 'title' : "恋と嘘", 
      'text' :
      "国が決めた相手と結婚しなければいけない世界。主人公は国が決めた相手ではない人と両思いになってしまう。果たしてその恋の行方は…" },

      { 'id' : "冒険" , 'title' : "Re:ゼロから始める異世界生活",
      'text' : 
      "死ぬと時間が戻ってしまう不思議な異世界。戦闘能力もなく魔法も使えないちょっと根性の曲がった主人公が時間を進めようと奮闘する姿が良い。" },

      { 'id' : "冒険" , 'title' : "甲鉄城のカバネリ",
      'text' :
      "ゾンビに似た怪物（カバネ）が存在する世界。カバネに立ち向かう主人公の格好良さと噛まれたらカバネになってしまう危険との闘いが良い。"},

      { 'id' : "戦闘" , 'title' : "ソードアートオンライン",
      'text' :
      "VRゲームに実際にダイブして戦う話。シリーズによってゲームの舞台や設定も変わるのが面白い。あと主人公が無駄にモテる。" },

      { 'id' : "戦闘" , 'title' : "犬夜叉",
      'text' :
      "手にすれば最強になれるといわれている四魂の玉を集めていく話。四魂の玉を狙う敵とたくさん戦う。人と妖怪が一緒に旅をしてるのがなんか良い。" },

      { 'id' : "スポーツ\n(野球）" , 'title' : "メジャー2nd",
      'text' :
      "王道野球アニメのJr.シリーズ！いろんな人から野球を学び努力で上手くなっていくところが良い。野球女子が出てくるところもおすすめポイント‼" },

      { 'id' : "スポーツ\n(野球）" , 'title' : "ダイヤのA",
      'text' :
      "甲子園を目指しひたすら野球と向き合う登場人物たちが格好良い。高校野球のすべてが詰まってる‼" },

      { 'id' : "スポーツ\n(バレー)" , 'title' : "ハイキュー",
      'text' :
      "バレーのルールとか分からない私が見てもはまりました。チームスポーツの良さがめちゃめちゃ詰まっています！！バレーがやりたくなる‼" },

      { 'id' : "ギャグ" , 'title' : "ぐらんぶる",
      'text':
      "ひたすらお酒と野球拳を繰り返す大学生たち。くだらなくて笑える。一応ダイビングサークルなのでたまににすごくきれいな海が出てくるのがギャップで心が浄化されます...(笑)" },

      { 'id' : "ギャグ" , 'title' : "ボボボーボ・ボーボボ" ,
      'text':
      "とにかく登場人物の名前と個性が強すぎる。作品内にはバトルシーンもたくさんあるけれど圧倒的にギャグの部分が勝ちます。"},

      { 'id' : "勉強" , 'title' : "Dr.STONE",
      'text' :
      "科学の話。火も鉄も無い時代でどんなものでも科学の力で作ってしまう主人公がとにかくすごい‼" },

      { 'id' : "近未来" , 'title' : "PSYCHO-PASS サイコパス",
      'text' :
      "人が犯罪を犯す可能性が数値(犯罪計数)になって現れるようになった時代。その世界を取り締まる警察官達の話。本当にこんな時代がいつか訪れそう。"},

      { 'id' : "近未来" , 'title' : "電脳コイル",
      'text' :
      "携帯の代わりに眼鏡にすべてが埋め込まれている。未来の話だけれど絵が昔っぽいのが良い。そして話に出てくるペットが可愛い。" },

      { 'id' : "料理" , 'title' : "真・中華一番",
      'text' :
      "料理アニメなのでとにかく食べ物がおいしそうに書かれている。本当に作れるのか分からない料理もたまに出てくるが見てるとおなかがすいてきます。"},

      { 'id' : "料理" , 'title' : "たくのみ",
      'text' :
      "タイトルの通り主にお酒のお話。色んなお酒についてわかりやすく説明をしてくれるのでお酒の勉強になります。一話15分なのでとにかく見やすい‼" },

      { 'id' : "アイドル" , 'title' : "推しが武道館いってくれたら死ぬ",
      'text' :
      "アイドルの話。というよりもアイドルを追いかけるヲタクのお話。ヲタク同士の会話のやり取りがとにかく面白い。まっすぐなヲタクたちが可愛い。" },
   ];
   
   var genre = [
      {'chref' : "comickoi.html" , 'ahref' : "animekoi.html" , 'genr' : "恋愛" , 'src' : "img/love.png"},
      {'chref' : "comicbouken.html" , 'ahref' : "animebouken.html" , 'genr' : "冒険" , 'src' : "img/bouken.png"},
      {'chref' : "comicsentou.html" , 'ahref' : "animesentou.html" , 'genr' : "戦闘" , 'src' : "img/buki.png"},
      {'chref' : "comicsport.html" , 'ahref' : "animesuports.html" , 'genr' : "スポーツ" , 'src' : "img/suport.png"},
      {'chref' : "comicstudy.html" , 'ahref' : "animestudy.html" , 'genr' : "勉強" , 'src' : "img/study.png"},
      {'chref' : "comicgyag.html" , 'ahref' : "animegyagu.html" , 'genr' : "ギャグ" , 'src' : "img/warai.png"},
      {'chref' : "comiccook.html" , 'ahref' : "animecook.html" , 'genr' : "料理" , 'src' : "img/cook.png"},
      {'chref' : "comicaidl.html" , 'ahref' : "animeaidol.html" , 'genr' : "アイドル" , 'src' : "img/aidol.png"},
      {'chref' : "comictou.html" , 'genr' : "塔を上る" , 'src' : "img/kaidann.jpg"},
      {'chref' : "comicgakuen.html" , 'genr' : "学園" , 'src' : "img/gakkou.png"},
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
   
   
