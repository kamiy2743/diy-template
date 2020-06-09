$(function() {
  var get0 = "ぼんやり男";
  var get1 = "ハキハキ男";
  var get2 = "コワイ男";
  var get3 = "キザ男";
  var get4 = "ふつう女";
  var get5 = "げんき女";
  var get6 = "オトナ女";
  var get7 = "アネキ女";
  var get8 = "住民全員";
  var get9 = "たぬき商店";
  var get10 = "たぬきマイル交換";
  var get13 = "フーコ";
  var balloon =　"風船<br>(季節限定)"
  var info = [
    {category: 1,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x6<br>きのえだ x2",image: "FtrSnowman_Remake_0_0",name: "３だんゆきだるま",get: "ゆきだるま",option: "[北] 12月11日～2月24日 <br>[南] 6月11日～8月24日"},
    {category: 1,series: 99,obtain: 7,make: "もくざい x5<br>かたいもくざい x5<br>やわらかいもくざい x5<br>てっこうせき x3<br>ちいさなDIYさぎょうだい x1",image: "FtrWorkbench_Remake_0_0",name: "DIYさぎょうだい",get: get7},
    {category: 3,series: 99,obtain: 8,make: "あおいバラ x10",image: "FtrDoorOrnamentWreathRoseUrtraRare",name: "あおいバラのリース",get: get8},
    {category: 1,series: 6,obtain: 12,make: "もみじのはっぱ x3<br>ざっそう x4",image: "FtrFallenleavesRed",name: "あかいおちば",get: balloon,option: "[北] 11/16～11/25<br>[南] 5/16～5/25"},
    {category: 2,series: 99,obtain: 11,make: "あきカン x1<br>もくざい x1<br>てっこうせき x1",image: "FtrKalimbaCan_Remake_0_0",name: "あきかんカリンバ",get: "あきカンを釣る"},
    {category: 0,series: 99,obtain: 10,make: "ショボいあみ x1<br>てっこうせき x1",image: "ToolNetNormal_Remake_0_0",name: "あみ",get: get10},
    {category: 6,series: 99,obtain: 99,make: "ざっそう x10<br>きのえだ x5<br>いし x2",image: "ItemFenceIkegaki",name: "いけがき",get: "たぬきち(アースデイ)"},
    {category: 6,series: 99,obtain: 10,make: "いし x4",image: "ItemFenceStone",name: "いしかべ",get: get10},
    {category: 1,series: 99,obtain: 9,make: "ねんど x8<br>てっこうせき x2<br>もくざい x6",image: "FtrStoneoven_Remake_0_0",name: "いしがま",get: get9},
    {category: 4,series: 99,obtain: 3,make: "いし x10",image: "RoomTexWallBasement00",name: "いしのかべ",get: get3},
    {category: 1,series: 99,obtain: 6,make: "いし x10",image: "FtrStonewaterbowl_Remake_0_0",name: "いしのみずうけ",get: get6},
    {category: 1,series: 1,obtain: 12,make: "いし x10<br>さくらのはなびら x3",image: "FtrStonewaterbowlSakura",name: "いしのみずうけ～さくら～",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 1,series: 6,obtain: 12,make: "いし x10<br>もみじのはっぱ x3",image: "FtrStonewaterbowlAutumun",name: "いしのみずうけ～もみじ～",get: balloon,option: "[北] 11/16～11/25<br>[南] 5/16～5/25"},
    {category: 0,series: 99,obtain: 10,make: "ショボいオノ x1<br>もくざい x3",image: "ToolAxeStoneNormal",name: "いしのオノ",get: get10},
    {category: 1,series: 99,obtain: 9,make: "いし x3",image: "FtrStoneChair",name: "いしのスツール",get: get9},
    {category: 1,series: 99,obtain: 0,make: "いし x8",image: "FtrStoneTable",name: "いしのテーブル",get: get0},
    {category: 3,series: 99,obtain: 2,make: "かたいもくざい x5",image: "FtrSignboardWood_Remake_0_0",name: "いちまいいたのかんばん",get: get2},
    {category: 1,series: 99,obtain: 1,make: "もくざい x10<br>かたいもくざい x7",image: "FtrDoghouse_Remake_0_0",name: "いぬごや",get: get1},
    {category: 1,series: 99,obtain: 9,make: "バンブー x2<br>てっこうせき x5<br>ねんど x4<br>かたいもくざい x5",image: "FtrIrori",name: "いろり",get: get9},
    {category: 5,series: 0,obtain: 99,make: "いわのたまご x2",image: "CapHatEggrock0",name: "いわのたまごのから",get: "いわのたまごを集める",option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "いわのたまご x2",image: "ShoesLowcutEggrock0",name: "いわのたまごのくつ",get: "いわのたまごを集める",option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "いわのたまご x3",image: "TopsTexOnepieceRibNEggrock0",name: "いわのたまごのふく",get: "いわのたまごを集める",option: "4/1～4/12"},
    {category: 1,series: 11,obtain: 13,make: "ほしのかけら x5<br>いし x10",image: "FtrMeteo",name: "いんせき",get: get13},
    {category: 4,series: 11,obtain: 13,make: "ほしのかけら x5<br>おおきなほしのかけら x1",image: "RoomSpWallSF00",name: "うちゅうせんのかべ",get: get13},
    {category: 4,series: 11,obtain: 13,make: "ほしのかけら x5<br>おおきなほしのかけら x1",image: "RoomSpFloorSF00",name: "うちゅうせんのゆか",get: get13},
    {category: 4,series: 3,obtain: 12,make: "なつのかいがら x3<br>サンゴ x3",image: "RoomSpFloorFishTank00",name: "うみのそこのゆか",get: balloon,option: "[北] 6/1～8/31<br>[南] 12/1～2/28"},
    {category: 1,series: 99,obtain: 5,make: "しろいヒヤシンス x3<br>あかいコスモス x3<br>きいろいバラ x3<br>もくざい x8<br>てっこうせき x2",image: "FtrGardenwagon_Remake_0_0",name: "えんげいワゴン",get: get5},
    {category: 4,series: 99,obtain: 3,make: "きんこうせき x4",image: "RoomTexWallGold00",name: "おうごんのかべ",get: get3},
    {category: 2,series: 99,obtain: 3,make: "きんこうせき x2",image: "FtrGoldCandlestand",name: "おうごんのしょくだい",get: get3},
    {category: 2,series: 99,obtain: 6,make: "きんこうせき x1",image: "FtrGoldDishes",name: "おうごんのしょっき",get: get6},
    {category: 3,series: 99,obtain: 3,make: "きんこうせき x1<br>てっこうせき x3",image: "FtrGearWallGold",name: "おうごんのはぐるま",get: get3},
    {category: 1,series: 99,obtain: 3,make: "きんこうせき x8",image: "FtrGoldCoffin",name: "おうごんのひつぎ",get: get3},
    {category: 4,series: 99,obtain: 3,make: "きんこうせき x4",image: "RoomTexFloorGold00",name: "おうごんのゆか",get: get3},
    {category: 0,series: 99,obtain: 13,make: "きんこうせき x2<br>ほしのかけら x3",image: "ToolStickGolden",name: "おうごんのステッキ",get: get13},
    {category: 1,series: 99,obtain: 6,make: "きんこうせき x6",image: "FtrGoldWC",name: "おうごんのトイレ",get: get6},
    {category: 1,series: 99,obtain: 6,make: "きんこうせき x5",image: "FtrGoldbench",name: "おうごんのベンチ",get: get6},
    {category: 1,series: 6,obtain: 12,make: "まつぼっくり x5<br>どんぐり x4<br>もみじのはっぱ x4<br>きのえだ x8<br>ねんど x4",image: "FtrNutTreeL_Remake_0_0",name: "おおきなきのみのツリー",get: balloon,option: "[北] 11/16～11/25<br>[南] 5/16～5/25"},
    {category: 1,series: 8,obtain: 12,make: "あかいオーナメント x6<br>あおいオーナメント x6<br>きんのオーナメント x4<br>もくざい x5<br>ねんど x5",image: "FtrTreeXmasL_Remake_0_0",name: "おおきなクリスマスツリー",get: balloon,option: "12/15～1/6"},
    {category: 6,series: 99,obtain: 8,make: "ハチのす x1<br>ざっそう x3",image: "Medicine",name: "おくすり",get: get8},
    {category: 1,series: 6,obtain: 12,make: "まつぼっくり x3<br>ざっそう x5",image: "FtrFallenleaves",name: "おちば",get: balloon,option: "[北] 9/1～12/10<br>[南] 3/1～6/10"},
    {category: 1,series: 6,obtain: 12,make: "まつぼっくり x3<br>ざっそう x5<br>きのえだ x3",image: "FtrFallenleavesfire_Remake_0_0",name: "おちばのたきび",get: balloon,option: "[北] 9/1～12/10<br>[南] 3/1～6/10"},
    {category: 1,series: 6,obtain: 12,make: "もみじのはっぱ x3<br>もくざい x3",image: "FtrFallenleavesChairS_Remake_0_0",name: "おちばスツール",get: balloon,option: "[北] 9/1～12/10<br>[南] 3/1～6/10"},
    {category: 6,series: 99,obtain: 1,make: "ざっそう x4<br>きのえだ x6",image: "SeedPitfall",name: "おとしあなのタネ",get: get1},
    {category: 1,series: 1,obtain: 12,make: "さくらのはなびら x6<br>かたいもくざい x4",image: "FtrSakuraLantern_Remake_0_0",name: "おはなみのちょうちん",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 1,series: 1,obtain: 12,make: "さくらのはなびら x10",image: "FtrSakuraPicnicset",name: "おはなみセット",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 4,series: 99,obtain: 11,make: "あきカン x2<br>ながぐつ(ゴミ) x2<br>タイヤ x2",image: "RoomTexFloorGarbage00",name: "おへやのゆか",get: "ゴミを釣る"},
    {category: 5,series: 11,obtain: 13,make: "ほしのかけら x5",image: "CapCostumeStar0",name: "おほしさまのあたま",get: get13},
    {category: 2,series: 8,obtain: 12,make: "きんのオーナメント x2<br>かたいもくざい x1",image: "FtrFestivaltop",name: "おまつりのコマ",get: balloon,option: "12/15～1/6"},
    {category: 1,series: 99,obtain: 2,make: "てっこうせき x5",image: "FtrScreenCage_Remake_0_0",name: "おり",get: get2},
    {category: 1,series: 9,obtain: 0,make: "シャコガイ x5<br>いし x3",image: "FtrShellFountain_Remake_0_0",name: "かいがらのふんすい",get: get0},
    {category: 1,series: 9,obtain: 0,make: "エビスガイ x3<br>ホネガイ x3<br>サンドダラー x3<br>サンゴ x3<br>シャコガイ x3<br>タカラガイ x3",image: "FtrShellArch_Remake_0_0",name: "かいがらのアーチ",get: get0},
    {category: 1,series: 9,obtain: 7,make: "ホネガイ x4<br>ホラガイ x4",image: "FtrShellScreen_Remake_0_0",name: "かいがらのスクリーン",get: get7},
    {category: 1,series: 9,obtain: 7,make: "タカラガイ x5",image: "FtrShellStoolS_Remake_0_0",name: "かいがらのスツール",get: get7},
    {category: 0,series: 3,obtain: 12,make: "なつのかいがら x3<br>ほしのかけら x3",image: "ToolStickShell",name: "かいがらのステッキ",get: balloon,option: "[北] 6/1～8/31<br>[南] 12/1～2/28"},
    {category: 2,series: 9,obtain: 7,make: "ホラガイ x3<br>てっこうせき x2",image: "FtrShellMusic_Remake_0_0",name: "かいがらのスピーカー",get: get7},
    {category: 1,series: 9,obtain: 5,make: "サンドダラー x7<br>ねんど x3",image: "FtrShellTableL_Remake_0_0",name: "かいがらのテーブル",get: get5},
    {category: 1,series: 9,obtain: 5,make: "シャコガイ x5<br>ねんど x3<br>いし x4",image: "FtrShellBedW_Remake_0_0",name: "かいがらのベッド",get: get5},
    {category: 4,series: 9,obtain: 5,make: "シャコガイ x3",image: "RugOtherShellM00",name: "かいがらのラグ",get: get5},
    {category: 2,series: 9,obtain: 7,make: "シャコガイ x2<br>ねんど x3",image: "FtrShellLamp_Remake_0_0",name: "かいがらのランプ",get: get7},
    {category: 3,series: 3,obtain: 12,make: "なつのかいがら x1<br>エビスガイ x1<br>サンドダラー x1<br>サンゴ x1<br>シャコガイ x1<br>タカラガイ x1",image: "FtrDoorOrnamentWreathShell",name: "かいがらのリース",get: balloon,option: "[北] 6/1～8/31<br>[南] 12/1～2/28"},
    {category: 5,series: 3,obtain: 12,make: "シャコガイ x2<br>なつのかいがら x6",image: "BagShoulderShell0",name: "かいがらポシェット",get: balloon,option: "[北] 6/1～8/31<br>[南] 12/1～2/28"},
    {category: 1,series: 99,obtain: 2,make: "きのえだ x3<br>ざっそう x5",image: "FtrScarecrow",name: "かかし",get: get2},
    {category: 1,series: 99,obtain: 2,make: "てっこうせき x3",image: "FtrUmbrellastand_Remake_0_0",name: "かさたて",get: get2},
    {category: 5,series: 99,obtain: 2,make: "ざっそう x10",image: "CapHatAjiroBeige",name: "かさぼうし",get: get2},
    {category: 3,series: 99,obtain: 1,make: "かせき x1<br>いし x2",image: "FtrDoorOrnamentFossil_Remake_0_0",name: "かせきのドアプレート",get: get1},
    {category: 3,series: 99,obtain: 9,make: "ざっそう x5<br>ねんど x5",image: "FtrLeafWall_Remake_0_0",name: "かべかけのはっぱ",get: get9},
    {category: 2,series: 99,obtain: 2,make: "ねんど x5",image: "FtrKame_Remake_0_0",name: "かめ",get: get2},
    {category: 1,series: 8,obtain: 12,make: "あかいオーナメント x3<br>あおいオーナメント x3<br> きんのオーナメント x3<br>もくざい x5",image: "FtrTreeXmasS_Remake_0_0",name: "かわいいクリスマスツリー",get: balloon,option: "12/15～1/6"},
    {category: 1,series: 6,obtain: 12,make: "どんぐり x3<br>ざっそう x5",image: "FtrFallenleavesYellow",name: "きいろのおちば",get: balloon,option: "[北] 9/1～12/10<br>[南] 3/1～6/10"},
    {category: 0,series: 99,obtain: 13,make: "きのえだ x5<br>ほしのかけら x3",image: "ToolStickTree",name: "きのえだのステッキ",get: get13},
    {category: 3,series: 99,obtain: 7,make: "きのえだ x10",image: "FtrDoorOrnamentWreathBranch",name: "きのえだのリース",get: get7},
    {category: 1,series: 4,obtain: 12,make: "まつぼっくり x4<br>どんぐり x5<br>もみじのはっぱ x5<br>きのえだ x15",image: "FtrNutArch_Remake_0_0",name: "きのみのアーチ",get: balloon,option: "[北] 11/16～11/25<br>[南] 5/16～5/25"},
    {category: 3,series: 4,obtain: 12,make: "まつぼっくり x2<br>どんぐり x3<br>きのえだ x3",image: "FtrNutMobile_Remake_0_0",name: "きのみのモビール",get: balloon,option: "[北] 9/1～12/10<br>[南] 3/1～6/10"},
    {category: 2,series: 4,obtain: 12,make: "どんぐり x6<br>ねんど x4",image: "FtrNutLamp_Remake_0_0",name: "きのみのランプ",get: balloon,option: "[北] 9/1～12/10<br>[南] 3/1～6/10"},
    {category: 0,series: 99,obtain: 99,make: "あみ x1<br>きんこうせき x1",image: "ToolNetGold",name: "きんのあみ",get: "ムシ図鑑完成"},
    {category: 0,series: 99,obtain: 99,make: "つりざお x1<br>きんこうせき x1",image: "ToolFishingrodGold",name: "きんのつりざお",get: "サカナ図鑑完成"},
    {category: 2,series: 99,obtain: 6,make: "きんこうせき x3",image: "FtrGoldbar",name: "きんののべぼう",get: get6},
    {category: 2,series: 99,obtain: 6,make: "きんこうせき x2<br>まねきねこ x1",image: "FtrManekinekoGold",name: "きんのまねきねこ",get: get6},
    {category: 2,series: 99,obtain: 0,make: "きんこうせき x3",image: "FtrFishArowanaGold",name: "きんのアロワナ",get: get0},
    {category: 0,series: 99,obtain: 99,make: "オノ x1<br>きんこうせき x1",image: "ToolAxeGold",name: "きんのオノ",get: "オノを100回壊す"},
    {category: 0,series: 99,obtain: 99,make: "ジョウロ x1<br>きんこうせき x1",image: "ToolWateringGold",name: "きんのジョウロ",get: "島の評判☆5"},
    {category: 2,series: 99,obtain: 0,make: "きんこうせき x3",image: "FtrInsectKabutomushiGold",name: "きんのスカラベ",get: get0},
    {category: 0,series: 99,obtain: 99,make: "スコップ x1<br>きんこうせき x1",image: "ToolScoopGold",name: "きんのスコップ",get: "ジョニーを30回助ける"},
    {category: 3,series: 99,obtain: 8,make: "きんのバラ x10",image: "FtrDoorOrnamentWreathRoseGold",name: "きんのバラのリース",get: get8},
    {category: 0,series: 99,obtain: 99,make: "パチンコ x1<br>きんこうせき x1",image: "ToolSlingshotGold",name: "きんのパチンコ",get: "風船を300回割る"},
    {category: 4,series: 99,obtain: 3,make: "きんこうせき x2<br>ふすま x1",image: "RoomTexWallFusumaGorgeous00",name: "きんぱくのふすま",get: get3},
    {category: 4,series: 11,obtain: 13,make: "ほしのかけら x5<br>おおきなほしのかけら x1",image: "RoomSpFloorGalaxy00",name: "ぎんがけいのゆか",get: get13},
    {category: 5,series: 99,obtain: 4,make: "ざっそう x20",image: "BagBackpackGrass0",name: "くさあみリュック",get: get4},
    {category: 1,series: 99,obtain: 5,make: "くまのダイちゃん x1<br>くまのナミちゃん x1<br>くまのチビちゃん x1",image: "FtrBearXL_Remake_0_0",name: "くまのトクダイちゃん",get: get5},
    {category: 1,series: 11,obtain: 13,make: "ほしのかけら x10<br>てっこうせき x10<br>タイヤ x4",image: "FtrMoonrover",name: "げつめんいどうしゃ",get: get13},
    {category: 4,series: 11,obtain: 13,make: "ほしのかけら x5<br>おおきなほしのかけら x1",image: "RoomTexFloorLunar00",name: "げつめんのゆか",get: get13},
    {category: 4,series: 6,obtain: 12,make: "もみじのはっぱ x10<br>もくざい x5<br>ざっそう x5",image: "RoomSpWallAutumun00",name: "こうようのかべ",get: balloon,option: "[北] 11/16～11/25<br>[南] 5/16～5/25"},
    {category: 4,series: 6,obtain: 12,make: "もみじのはっぱ x10<br>ざっそう x15",image: "RoomTexFloorAutumun00",name: "こうようのゆか",get: balloon,option: "[北] 11/16～11/25<br>[南] 5/16～5/25"},
    {category: 1,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x4",image: "FtrIcePillar_Remake_0_0",name: "こおりのはしら",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 1,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x10",image: "FtrIceGate_Remake_0_0",name: "こおりのアーチ",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 1,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1ゆきのけっしょう x4",image: "FtrIceArt_Remake_0_0",name: "こおりのアート",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 1,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x4",image: "FtrIceChairS_Remake_0_0",name: "こおりのイス",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 1,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x5",image: "FtrIceCounter_Remake_0_0",name: "こおりのカウンター",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 0,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ほしのかけら x3",image: "ToolStickSnow",name: "こおりのステッキ",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 1,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x8",image: "FtrIceTree_Remake_0_0",name: "こおりのツリー",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 1,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x8",image: "FtrIceTableL_Remake_0_0",name: "こおりのテーブル",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 1,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x6",image: "FtrIceScreen_Remake_0_0",name: "こおりのパーテーション",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 1,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x10",image: "FtrIceBedW_Remake_0_0",name: "こおりのベッド",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 1,series: 99,obtain:0 ,make: "いし x15<br>ざっそう x15",image: "FtrGardenrockMoss",name: "こけむしたにわいし",get: get0},
    {category: 4,series: 99,obtain: 3,make: "やわらかいもくざい x15",image: "RoomTexWallHerringbone01",name: "こげちゃのヘリンボーンのかべ",get: get3},
    {category: 5,series:99 ,obtain: 4,make: "ざっそう x7",image: "BottomsTexSkirtBoxGrass0",name: "こしみの",get: get4},
    {category: 1,series: 99,obtain: 2,make: "てっこうせき x8<br>もくざい x2<br>たきび x1",image: "FtrGoemonburo",name: "ごえもんぶろ",get: get2},
    {category: 4,series: 1,obtain: 12,make: "さくらのはなびら x10<br>かたいもくざい x5",image: "RoomSpWallSakura00",name: "さくらなみきのかべ",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 1,series: 1,obtain: 12,make: "さくらのはなびら x8<br>きのえだ x4<br>ねんど x5",image: "FtrSakuraBranch",name: "さくらのえだ",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 5,series: 1,obtain: 12,make: "さくらのはなびら x7",image: "UmbrellaCherryblossom0Cropped",name: "さくらのかさ",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 4,series: 1,obtain: 12,make: "さくらのはなびら x10<br>ざっそう x20",image: "RoomTexFloorSakura00",name: "さくらのじゅうたん",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 1,series: 1,obtain: 12,make: "さくらのはなびら x5",image: "FtrSakuraPetal",name: "さくらのはなびらのやま",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 2,series: 1,obtain: 12,make: "さくらのはなびら x6<br>かたいもくざい x2<br>ざっそう x3<br>ねんど x3",image: "FtrBonsaiSakura",name: "さくらのぼんさい",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 4,series: 1,obtain: 12,make: "さくらのはなびら x5<br>もくざい x10",image: "RoomTexWallSolidWood00",name: "さくらのウッドウォール",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 4,series: 1,obtain: 12,make: "さくらのはなびら x5<br>もくざい x10",image: "RoomTexFloorSolidWood00",name: "さくらのウッドフローリング",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 0,series: 1,obtain: 12,make: "さくらのはなびら x3<br>ほしのかけら x3",image: "ToolStickCherryblossom",name: "さくらのステッキ",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 5,series: 1,obtain: 12,make: "さくらのはなびら x6",image: "BagShoulderCherryblossoms0",name: "さくらのポシェット",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 5,series: 99,obtain: 5,make: "さくらんぼ x7",image: "UmbrellaCherry0Cropped",name: "さくらんぼのかさ",get: get5},
    {category: 4,series: 99,obtain: 5,make: "さくらんぼ x20",image: "RoomTexWallCherry00",name: "さくらんぼのかべがみ",get: get5},
    {category: 5,series: 99,obtain: 5,make: "さくらんぼ x8",image: "TopsTexOnepieceAlineNCherry0",name: "さくらんぼのふく",get: get5},
    {category: 5,series: 99,obtain: 5,make: "さくらんぼ x5",image: "CapHatCherry0",name: "さくらんぼのぼうし",get: get5},
    {category: 2,series: 99,obtain: 5,make: "さくらんぼ x10<br>てっこうせき x2",image: "FtrFruitsMusic_Remake_0_0",name: "さくらんぼのスピーカー",get: get5},
    {category: 4,series: 99,obtain: 5,make: "さくらんぼ x6",image: "RugOtherCherryM00",name: "さくらんぼのラグ",get: get5},
    {category: 3,series: 99,obtain: 5,make: "さくらんぼ x10<br>ねんど x2",image: "FtrFruitsLampW_Remake_0_0",name: "さくらんぼのランプ",get: get5},
    {category: 3,series: 1,obtain: 12,make: "さくらのはなびら x5",image: "FtrSakuraClockW_Remake_0_0",name: "さくらクロック",get: balloon,option: "[北] 4/1～4/10<br>[南] 10/1～10/10"},
    {category: 5,series: 99,obtain: 3,make: "ざっそう x10",image: "CapHatSandogasa0",name: "さんどがさ",get: get3},
    {category: 2,series: 99,obtain: 5,make: "ざっし x6",image: "FtrMagagine_Remake_0_0",name: "ざっしのたば",get: get5},
    {category: 1,series: 99,obtain: 2,make: "ざぶとん x3",image: "FtrCushionJapanPile_Remake_0_0",name: "ざぶとんのやま",get: get2},
    {category: 3,series: 99,obtain: 0,make: "やわらかいもくざい x8",image: "FtrHuntingtrophy_Remake_0_0",name: "しかのオブジェ",get: get0},
    {category: 1,series: 2,obtain: 2,make: "バンブー x3<br>いし x8<br>ざっそう x3",image: "FtrShishiodoshi_Remake_0_0",name: "ししおどし",get: get2},
    {category: 4,series: 99,obtain: 5,make: "ざっそう x30",image: "RoomTexFloorLawn00",name: "しばふのゆか",get: get5},
    {category: 5,series: 2,obtain: 12,make: "はるのわかたけ x6",image: "BagBackpackBasket0",name: "しょいこ",get: balloon,option: "[北] 2/25～5/31<br>[南] 8/25～11/30"},
    {category: 1,series: 99,obtain: 10,make: "いし x10<br>ねんど x10",image: "FtrTetrapod",name: "しょうはブロック",get: get10},
    {category: 2,series: 99,obtain: 3,make: "ちらばったかみ x1",image: "FtrOfficePapers_Remake_0_0",name: "しょるいのやま",get: get3},
    {category: 5,series: 0,obtain: 99,make: "じめんのたまご x2",image: "CapHatEggground0",name: "じめんのたまごのから",get: "じめんのたまごを集める",option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "じめんのたまご x2",image: "CapHatEggground0",name: "じめんのたまごのくつ",get: "じめんのたまごを集める",option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "じめんのたまご x3",image: "TopsTexOnepieceRibNEggground0",name: "じめんのたまごのふく",get: "じめんのたまごを集める",option: "4/1～4/12"},
    {category: 4,series: 99,obtain: 4,make: "ざっそう x15<br>やわらかいもくざい x9",image: "RoomTexWallJukai00",name: "じゅかいなかべ",get: get4},
    {category: 1,series: 11,obtain: 13,make: "ほしのかけら x10<br>てっこうせき x15",image: "FtrSatellite",name: "じんこうえいせい",get: get13},
    {category: 4,series: 3,obtain: 12,make: "なつのかいがら x3<br>サンゴ x5",image: "RoomSpWallFishTank00",name: "すいちゅうのかべがみ",get: balloon,option: "[北] 6/1～8/31<br>[南] 12/1～2/28"},
    {category: 4,series: 99,obtain: 1,make: "エビスガイ x1<br>ホネガイ x1<br>サンドダラー x1<br>サンゴ x1<br>シャコガイ x1<br>タカラガイ x1",image: "RoomTexFloorSand00",name: "すなはまのゆか",get: get1},
    {category: 1,series: 99,obtain: 5,make: "もくざい x2<br>やわらかいもくざい x5",image: "FtrBirdhouse_Remake_0_0",name: "すばこ",get: get5},
    {category: 2,series: 99,obtain: 6,make: "ねんど x3",image: "FtrDishesUnglazed_Remake_0_0",name: "すやきのしょっき",get: get6},
    {category: 2,series: 2,obtain: 12,make: "はるのわかたけ x6",image: "FtrBasketsteamer",name: "せいろ",get: balloon,option: "[北] 2/25～5/31<br>[南] 8/25～11/30"},
    {category: 5,series: 99,obtain: 1,make: "もくざい x3<br>かたいもくざい x5",image: "BagBackpackWood0",name: "せおいばしご",get: get1},
    {category: 1,series: 99,obtain: 10,make: "かたいもくざい x4<br>やわらかいもくざい x8",image: "FtrSignpostWorld_Remake_0_0",name: "せかいのみちしるべ",get: get10},
    {category: 1,series: 99,obtain: 3,make: "いし x24",image: "FtrSekishishi_Remake_0_0",name: "せきしし",get: get3},
    {category: 1,series: 99,obtain: 10,make: "いし x12",image: "FtrRockMonument_Remake_0_0",name: "せきひ",get: get10},
    {category: 2,series: 99,obtain: 9,make: "やわらかいもくざい x3",image: "FtrWashtub",name: "せんたくおけ",get: get9},
    {category: 1,series: 99,obtain: 1,make: "かたいもくざい x5<br>てっこうせき x1",image: "FtrWorkbenchStump",name: "そぼくなDIYさぎょうだい",get: get1},
    {category: 1,series: 99,obtain: 9,make: "もくざい x6<br>ねんど x4<br>てっこうせき x1",image: "FtrWashstandBowl_Remake_0_0",name: "そぼくなせんめんだい",get: get9},
    {category: 1,series: 99,obtain: 1,make: "もくざい x6",image: "FtrSignWood_Remake_0_0",name: "そぼくなもくせいかんばん",get: get1},
    {category: 6,series: 99,obtain: 10,make: "やわらかいもくざい x6",image: "ItemFenceNatural",name: "そぼくなもくせいのさく",get: get10},
    {category: 1,series: 11,obtain: 13,make: "ほしのかけら x15<br>てっこうせき x10",image: "FtrUFO",name: "そらとぶえんばん",get: get13},
    {category: 5,series: 0,obtain: 99,make: "そらとぶたまご x2",image: "CapHatEggsky0",name: "そらとぶたまごのから",get: "そらとぶたまごを集める",option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "そらとぶたまご x2",image: "ShoesLowcutEggsky0",name: "そらとぶたまごのくつ",get: "そらとぶたまごを集める",option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "そらとぶたまご x3",image: "TopsTexOnepieceRibNEggsky0",name: "そらとぶたまごのふく",get: "そらとぶたまごを集める",option: "4/1～4/12"},
    {category: 1,series: 99,obtain: 2,make: "もくざい x8",image: "FtrSled_Remake_0_0",name: "そり",get: get2},
    {category: 1,series: 99,obtain: 2,make: "きのえだ x5<br>もくざい x5",image: "FtrTorch",name: "たいまつ",get: get2},
    {category: 1,series: 99,obtain: 6,make: "いし x60",image: "FtrGardenrockTall",name: "たかいにわいし",get: get6},
    {category: 0,series: 99,obtain: 9,make: "やわらかいもくざい x5",image: "LongWoodenStick",name: "たかとびぼう",get: get9},
    {category: 1,series: 99,obtain: 99,make: "きのえだ x3",image: "FtrBonfire",name: "たきび",get: "たぬきち"},
    {category: 6,series: 2,obtain: 10,make: "バンブー x6",image: "ItemFenceBamboo",name: "たけがき",get: get10},
    {category: 3,series: 2,obtain: 1,make: "バンブー x1",image: "FtrBambooFlowerwall_Remake_0_0",name: "たけのいちりんざし",get: get1},
    {category: 1,series: 2,obtain: 6,make: "バンブー x7",image: "FtrBambooBasket_Remake_0_0",name: "たけのかご",get: get6},
    {category: 1,series: 2,obtain: 1,make: "バンブー x3",image: "FtrBambooCarstop_Remake_0_0",name: "たけのくるまどめ",get: get1},
    {category: 2,series: 2,obtain: 12,make: "はるのわかたけ x4<br>たけのこ x5<br>ねんど x4",image: "FtrBambooshootLamp",name: "たけのこランプ",get: balloon,option: "[北] 2/25～5/31<br>[南] 8/25～11/30"},
    {category: 2,series: 2,obtain: 6,make: "バンブー x4",image: "FtrBambooLunch_Remake_0_0",name: "たけのべんとうばこ",get: get6},
    {category: 2,series: 2,obtain: 4,make: "バンブー x3",image: "FtrBambooBall_Remake_0_0",name: "たけのまり",get: get4},
    {category: 2,series: 2,obtain: 6,make: "バンブー x3<br>ねんど x2",image: "FtrBambooShelf_Remake_0_0",name: "たけのキャンドルホルダー",get: get6},
    {category: 1,series: 2,obtain: 6,make: "バンブー x15",image: "FtrBambooShelf_Remake_0_0",name: "たけのシェルフ",get: get6},
    {category: 1,series: 2,obtain: 2,make: "バンブー x7<br>いし x6",image: "FtrBambooScreen_Remake_0_0",name: "たけのスクリーン",get: get2},
    {category: 1,series: 2,obtain: 6,make: "バンブー x5",image: "FtrBambooStool_Remake_0_0",name: "たけのスツール",get: get6},
    {category: 0,series: 2,obtain: 12,make: "はるのわかたけ x6<br>ほしのかけら x3",image: "ToolStickBamboo",name: "たけのステッキ",get: balloon,option: "[北] 2/25～5/31<br>[南] 8/25～11/30"},
    {category: 1,series: 2,obtain: 6,make: "バンブー x3<br>てっこうせき x1",image: "FtrBambooMusic_Remake_0_0",name: "たけのスピーカー",get: get6},
    {category: 1,series: 2,obtain: 12,make: "はるのわかたけ x6",image: "FtrBambooSurprisedbox",name: "たけのビックリばこ",get: balloon,option: "[北] 2/25～5/31<br>[南] 8/25～11/30"},
    {category: 1,series: 2,obtain: 4,make: "バンブー x8",image: "FtrBambooLamp_Remake_0_0",name: "たけのフロアスタンド",get: get4},
    {category: 1,series: 2,obtain: 4,make: "バンブー x8",image: "FtrBambooChairL_Remake_0_0",name: "たけのベンチ",get: get4},
    {category: 6,series: 99,obtain: 10,make: "もくざい x8",image: "ItemFenceVerticalWood",name: "たていたのさく",get: get10},
    {category: 2,series: 99,obtain: 11,make: "ざっそう x10<br>あきカン x1",image: "FtrPlantSucculents",name: "たにくしょくぶつ",get: "あきカンを釣る"},
    {category: 1,series: 99,obtain: 2,make: "ねんど x6",image: "FtrOrnamentTanuki",name: "たぬきのおきもの",get: get2},
    {category: 5,series: 0,obtain: 99,make: "じめんのたまご x2<br>いわのたまご x2<br>はっぱのたまご x2<br>ウッディなたまご x2<br>そらとぶたまご x2<br>サカナのたまご x2",image: "CapHatEggparty0",
      name: "たまごのパーティーハット",get: "たまごでひらめくレシピをすべて覚える",option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "じめんのたまご x3<br>いわのたまご x3<br>はっぱのたまご x3<br>ウッディなたまご x3<br>そらとぶたまご x3<br>サカナのたまご x3",image: "TopsTexOnepieceBalloonLEgg0"
      ,name: "たまごのパーティーワンピ",get: "たまごでひらめくレシピをすべて覚える",option: "4/1～4/12"},
    {category: 1,series: 99,obtain: 2,make: "もくざい x5<br>てっこうせき x2",image: "FtrPirateBarrel",name: "たる",get: get2},
    {category: 1,series: 99,obtain: 10,make: "もくざい x3<br>かたいもくざい x3<br>やわらかいもくざい x3<br>てっこうせき x2",image: "FtrWorkbenchS_Remake_0_0",name: "ちいさなDIYさぎょうだい",get: get10},
    {category: 2,series: 6,obtain: 12,make: "まつぼっくり x6<br>どんぐり x4<br>かたいもくざい x1",image: "FtrNutTreeS_Remake_0_0",name: "ちいさなきのみのツリー",get: balloon,option: "[北] 9/1～12/10<br>[南] 3/1～6/10"},
    {category: 4,series: 99,obtain: 3,make: "いし x10",image: "RoomTexFloorBasement00",name: "ちかしつのゆか",get: get3},
    {category: 4,series: 2,obtain: 12,make: "はるのわかたけ x7<br>たけのこ x3",image: "RoomTexWallChikurin00",name: "ちくりんのかべ",get: balloon,option: "[北] 2/25～5/31<br>[南] 8/25～11/30"},
    {category: 4,series: 99,obtain: 7,make: "やわらかいもくざい x15",image: "RoomTexWallHerringbone00",name: "ちゃいろいヘリンボーンのかべ",get: get7},
    {category: 1,series: 11,obtain: 13,make: "ほしのかけら x10<br>てっこうせき x15",image: "FtrModule",name: "ちゃくりくせん",get: get13},
    {category: 1,series: 99,obtain: 2,make: "かたいもくざい x12",image: "FtrDiningtableJapan_Remake_0_0",name: "ちゃぶだい",get: get2},
    {category: 1,series: 99,obtain: 3,make: "しょるいのやま x1",image: "FtrFloorpapers_Remake_0_0",name: "ちらばったかみ",get: get3},
    {category: 1,series: 11,obtain: 13,make: "ほしのかけら x15<br>おおきなほしのかけら x1",image: "FtrMoon",name: "つき",get: get13},
    {category: 2,series: 99,obtain: 0,make: "ほん x5",image: "FtrBooks_Remake_0_0",name: "つまれたほん",get: get0},
    {category: 1,series: 99,obtain: 11,make: "タイヤ x3",image: "FtrTyres_Remake_0_0",name: "つまれたタイヤ",get: "タイヤを３つ釣る"},
    {category: 2,series: 99,obtain: 9,make: "やわらかいもくざい x3",image: "FtrBlockBrick_Remake_0_0",name: "つみきのおもちゃ",get: get9},
    {category: 3,series: 99,obtain: 5,make: "つみきのおもちゃ x1<br>やわらかいもくざい x2<br>てっこうせき x1",image: "FtrBlockClock_Remake_0_0",name: "つみきウォールクロック",get: get5},
    {category: 1,series: 99,obtain: 9,make: "つみきのおもちゃ x1<br>やわらかいもくざい x5<br>てっこうせき x2",image: "FtrBlockCompo_Remake_0_0",name: "つみきコンポ",get: get9},
    {category: 1,series: 99,obtain: 5,make: "つみきのおもちゃ x1<br>やわらかいもくざい x2",image: "FtrBlockStoolS_Remake_0_0",name: "つみきスツール",get: get5},
    {category: 1,series: 99,obtain: 9,make: "つみきのおもちゃ x1<br>やわらかいもくざい x3",image: "FtrBlockChairS_Remake_0_0",name: "つみきチェア",get: get9},
    {category: 1,series: 99,obtain: 4,make: "つみきのおもちゃ x1<br>やわらかいもくざい x12",image: "FtrBlockChest_Remake_0_0",name: "つみきチェスト",get: get4},
    {category: 1,series: 99,obtain: 7,make: "つみきのおもちゃ x1<br>やわらかいもくざい x8",image: "FtrBlockTableL_Remake_0_0",name: "つみきテーブル",get: get7},
    {category: 1,series: 99,obtain: 9,make: "つみきのおもちゃ x1<br>やわらかいもくざい x3",image: "FtrBlockShelf_Remake_0_0",name: "つみきブックシェルフ",get: get9},
    {category: 1,series: 99,obtain: 4,make: "つみきのおもちゃ x1<br>やわらかいもくざい x17",image: "FtrBlockBedS_Remake_0_0",name: "つみきベッド",get: get4},
    {category: 1,series: 99,obtain: 7,make: "つみきのおもちゃ x1<br>やわらかいもくざい x4",image: "FtrBlockChairL_Remake_0_0",name: "つみきベンチ",get: get7},
    {category: 0,series: 99,obtain: 10,make: "ショボいつりざお x1<br>てっこうせき x1",image: "ToolAngling_Remake_0_0",name: "つりざお",get: get10},
    {category: 1,series: 99,obtain: 0,make: "かたいもくざい x2<br>やわらかいもくざい x6",image: "FtrKatakatatoy_Remake_0_0",name: "ておしぐるま",get: get0},
    {category: 1,series: 99,obtain: 0,make: "てっこうせき x2<br>ねんど x6",image: "FtrHandpump_Remake_0_0",name: "ておしポンプ",get: get0},
    {category: 1,series: 99,obtain: 1,make: "てっこうせき x20",image: "FtrIronframe_Remake_0_0",name: "てっこつ",get: get1},
    {category: 4,series: 99,obtain: 3,make: "てっこうせき x8",image: "RoomTexWallSteel00",name: "てっこつのかべ",get: get3},
    {category: 4,series: 99,obtain: 3,make: "てっこうせき x7",image: "RoomTexFloorSteel00",name: "てっぱんのゆか",get: get3},
    {category: 6,series: 99,obtain: 10,make: "てっこうせき x6",image: "ItemFenceSteel",name: "てつのさく",get: get10},
    {category: 0,series: 99,obtain: 13,make: "てっこうせき x3<br>ほしのかけら x3",image: "ToolStickIron",name: "てつのステッキ",get: get13},
    {category: 2,series: 99,obtain: 6,make: "ねんど x4",image: "FtrPotteryjug_Remake_0_0",name: "とうきのジャグ",get: get6},
    {category: 1,series: 99,obtain: 3,make: "いし x18",image: "FtrStonelantern_Remake_0_0",name: "とうろう",get: get3},
    {category: 1,series: 99,obtain: 7,make: "もくざい x8",image: "FtrBirdcage_Remake_0_0",name: "とりかご",get: get7},
    {category: 1,series: 99,obtain: 2,make: "てっこうせき x6<br>もくざい x5",image: "FtrTamtam_Remake_0_0",name: "どら",get: get2},
    {category: 5,series: 4,obtain: 12,make: "どんぐり x6",image: "BagShoulderAcorn0",name: "どんぐりポシェット",get: balloon,option: "[北] 9/1～12/10<br>[南] 3/1～6/10"},
    {category: 1,series: 2,obtain: 12,make: "はるのわかたけ x7<br>もくざい x3",image: "FtrBambooSomen",name: "ながしそうめん",get: balloon,option: "[北] 2/25～5/31<br>[南] 8/25～11/30"},
    {category: 3,series: 99,obtain: 5,make: "もくざい x3",image: "FtrDoorOrnamentPaw_Remake_0_0",name: "にくきゅうのドアプレート",get: get5},
    {category: 2,series: 99,obtain: 2,make: "ねんど x2",image: "FtrClaytoy_Remake_0_0",name: "ねんどのおもちゃ",get: get2},
    {category: 0,series: 99,obtain: 9,make: "もくざい x4<br>かたいもくざい x4<br>やわらかいもくざい x4",image: "ToolLadder",name: "はしご",get: get9},
    {category: 5,series: 99,obtain: 1,make: "ざっそう x5",image: "AccessoryMouthLeafGreen",name: "はっぱ",get: get1},
    {category: 5,series: 99,obtain: 5,make: "ざっそう x10",image: "CapMaskLeaf0",name: "はっぱのおめん",get: get5},
    {category: 5,series: 99,obtain: 7,make: "ざっそう x15",image: "UmbrellaLeaf0Cropped",name: "はっぱのかさ",get: get7},
    {category: 5,series: 0,obtain: 99,make: "はっぱのたまご x2",image: "CapHatEggleaf0",name: "はっぱのたまごのから",get: "はっばのたまごを集める",option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "はっぱのたまご x2",image: "ShoesLowcutEggleaf0",name: "はっぱのたまごのくつ",get: "はっばのたまごを集める",option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "はっぱのたまご x3",image: "TopsTexOnepieceRibNEggleaf0",name: "はっぱのたまごのからふく",get: "はっばのたまごを集める",option: "4/1～4/12"},
    {category: 1,series: 99,obtain: 6,make: "いし x20",image: "FtrGardenrockLow",name: "ひくいにわいし",get: get6},
    {category: 1,series: 99,obtain: 0,make: "ダンボール x5",image: "FtrMovingboxL",name: "ひっこしダンボールL",get: get0},
    {category: 1,series: 99,obtain: 0,make: "ダンボール x4",image: "FtrMovingboxM",name: "ひっこしダンボールM",get: get0},
    {category: 1,series: 99,obtain: 5,make: "ダンボール x2",image: "FtrMovingboxS",name: "ひっこしダンボールS",get: get5},
    {category: 4,series: 7,obtain: 12,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x8",image: "RoomTexWallIceFloe00",name: "ひょうざんのかべ",get: balloon,option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 2,series: 0,obtain: 99,make: "じめんのたまご x4<br>いわのたまご x4<br>はっぱのたまご x4<br>ウッディなたまご x4<br>そらとぶたまご x4<br>サカナのたまご x4",image: "FtrDollPyn",name: "ぴょんたろうのおきあがりこぼし",get: "ぴょんたろう",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 4,series: 99,obtain: 3,make: "かたいもくざい x15",image: "RoomTexWallCedar00",name: "ふしありウッドウォール",get: get3},
    {category: 1,series: 99,obtain: 0,make: "かたいもくざい x8",image: "FtrMusicstand_Remake_0_0",name: "ふめんだい",get: get0},
    {category: 1,series: 99,obtain: 10,make: "みずのみば x1<br>いし x20<br>てっこうせき x8",image: "FtrFountain_Remake_0_0",name: "ふんすい",get: get10},
    {category: 1,series: 99,obtain: 9,make: "ざっそう x20",image: "FtrHaybed_Remake_0_0",name: "ほしくさのベッド",get: get9},
    {category: 4,series: 11,obtain: 13,make: "ほしのかけら x5<br>おおきなほしのかけら x1",image: "RoomSpWallStarSky00",name: "ほしぞらのかべ",get: get13},
    {category: 4,series: 3,obtain: 12,make: "なつのかいがら x3<br>すなはまのゆか x1",image: "RoomTexFloorSandStar00",name: "ほしのすなはまのゆか",get: balloon,option: "[北] 6/1～8/31<br>[南] 12/1～2/28"},
    {category: 1,series: 99,obtain: 2,make: "さくらのぼんさい x1<br>マツのぼんさい x1<br>もくざい x8",image: "FtrBonsaiShelf",name: "ぼんさいだな",get: get2},
    {category: 2,series: 99,obtain: 1,make: "もくざい x8",image: "FtrFirewood",name: "まき",get: get1},
    {category: 1,series: 99,obtain: 4,make: "まるたのベンチ x2<br>かたいもくざい x3",image: "FtrLogShelf_Remake_0_0",name: "まるたのかざりだな",get: get4},
    {category: 3,series: 99,obtain: 0,make: "かたいもくざい x2<br>てっこうせき x1",image: "FtrLogClockWall_Remake_0_0",name: "まるたのかべかけどけい",get: get0},
    {category: 1,series: 99,obtain: 3,make: "もくざい x3",image: "FtrWoodPile_Remake_0_0",name: "まるたのくい",get: get3},
    {category: 6,series: 99,obtain: 10,make: "かたいもくざい x6",image: "ItemFenceLog",name: "まるたのさく",get: get10},
    {category: 1,series: 99,obtain: 5,make: "かたいもくざい x12",image: "FtrLogBedS_Remake_0_0",name: "まるたのガーデンベッド",get: get5},
    {category: 1,series: 99,obtain: 5,make: "もくざい x4",image: "FtrLogStoolS_Remake_0_0",name: "まるたのスツール",get: get5},
    {category: 1,series: 99,obtain: 4,make: "かたいもくざい x8",image: "FtrLogSofaS_Remake_0_0",name: "まるたのソファ",get: get4},
    {category: 1,series: 99,obtain: 2,make: "かたいもくざい x15",image: "FtrLogTableL_Remake_0_0",name: "まるたのダイニングテーブル",get: get2},
    {category: 1,series: 99,obtain: 5,make: "かたいもくざい x30",image: "FtrLogBedW_Remake_0_0",name: "まるたのベッド",get: get5},
    {category: 1,series: 99,obtain: 4,make: "かたいもくざい x8",image: "FtrLogStoolL_Remake_0_0",name: "まるたのベンチ",get: get4},
    {category: 1,series: 99,obtain: 5,make: "かたいもくざい x15",image: "FtrLogTableLRound_Remake_0_0",name: "まるたのラウンドテーブル",get: get5},
    {category: 1,series: 99,obtain: 4,make: "まるたのソファ x2",image: "FtrLogSofaL_Remake_0_0",name: "まるたのロングソファ",get: get4},
    {category: 1,series: 11,obtain: 13,make: "ほしのかけら x7<br>おおきなほしのかけら x1",image: "FtrStarMoonChairL_Remake_0_0",name: "みかづきチェア",get: get13},
    {category: 1,series: 99,obtain: 10,make: "いし x8<br>てっこうせき x2",image: "FtrDrinkingfountain_Remake_0_0",name: "みずのみば",get: get10},
    {category: 1,series: 99,obtain: 0,make: "かたいもくざい x2<br>やわらかいもくざい x3",image: "FtrSignpost_Remake_0_0",name: "みちしるべ",get: get0},
    {category: 1,series: 2,obtain: 12,make: "はるのわかたけ x1<br>ざっそう x10",image: "FtrFallenleavesGreen",name: "みどりのおちば",get: balloon,option: "[北] 2/25～5/31<br>[南] 8/25～11/30"},
    {category: 5,series: 99,obtain: 5,make: "ざっそう x7",image: "BottomsTexSkirtBoxGrass1",name: "みどりのこしみの",get: get5},
    {category: 4,series: 3,obtain: 12,make: "なつのかいがら x5",image: "RoomSpWallTropical00",name: "みなみのうみなかべ",get: balloon,option: "[北] 6/1～8/31<br>[南] 12/1～2/28"},
    {category: 4,series: 3,obtain: 12,make: "なつのかいがら x6",image: "RoomSpFloorWater00",name: "みなものゆか",get: balloon,option: "[北] 6/1～8/31<br>[南] 12/1～2/28"},
    {category: 5,series: 99,obtain: 4,make: "ざっそう x8",image: "TopsTexTopCoatLStrawBeige",name: "みの",get: get4},
    {category: 3,series: 99,obtain: 8,make: "むらさきのヒヤシンス x10",image: "FtrDoorOrnamentWreathHyacinthRare",name: "むらさきのヒヤシンスのリース",get: get8},
    {category: 2,series: 99,obtain: 9,make: "もくざい x3",image: "FtrMokugyo_Remake_0_0",name: "もくぎょ",get: get9},
    {category: 1,series: 99,obtain: 7,make: "もくざい x4",image: "FtrTrashboxWood_Remake_0_0",name: "もくせいのくずかご",get: get7},
    {category: 2,series: 99,obtain: 4,make: "やわらかいもくざい x4<br>てっこうせき x2",image: "FtrToolboxWood_Remake_0_0",name: "もくせいのこうぐばこ",get: get4},
    {category: 1,series: 99,obtain: 5,make: "もくざい x5<br>てっこうせき x1",image: "FtrWoodenMirror_Remake_0_0",name: "もくせいのすがたみ",get: get5},
    {category: 1,series: 99,obtain: 0,make: "ほん x5<br>もくざい x10",image: "FtrBookshelf_Remake_0_0",name: "もくせいのほんだな",get: get0},
    {category: 1,series: 99,obtain: 3,make: "もくざい x3<br>てっこうせき x1",image: "FtrBucketWood",name: "もくせいのバケツ",get: get3},
    {category: 1,series: 99,obtain: 99,make: "もくざい x12",image: "FtrWoodenCloset_Remake_0_0",name: "もくせいクロゼット",get: "たぬきち"},
    {category: 1,series: 99,obtain: 6,make: "もくざい x8",image: "FtrWoodenTableS_Remake_0_0",name: "もくせいサイドテーブル",get: get6},
    {category: 1,series: 99,obtain: 0,make: "もくざい x18",image: "FtrWoodenBedS_Remake_0_0",name: "もくせいシングルベッド",get: get0},
    {category: 1,series: 99,obtain: 5,make: "もくざい x4",image: "FtrWoodenStoolS_Remake_0_0",name: "もくせいスツール",get: get5},
    {category: 1,series: 99,obtain: 3,make: "もくざい x30",image: "FtrWoodenBedW_Remake_0_0",name: "もくせいダブルベッド",get: get3},
    {category: 1,series: 99,obtain: 6,make: "もくざい x6",image: "FtrWoodenChairS_Remake_0_0",name: "もくせいチェア",get: get6},
    {category: 1,series: 99,obtain: 0,make: "もくざい x16",image: "FtrWoodenChest_Remake_0_0",name: "もくせいチェスト",get: get0},
    {category: 1,series: 99,obtain: 7,make: "もくざい x15",image: "FtrWoodenTableL_Remake_0_0",name: "もくせいテーブル",get: get7},
    {category: 2,series: 99,obtain: 7,make: "もくざい x3<br>てっこうせき x1",image: "FtrWoodenMirrorS_Remake_0_0",name: "もくせいテーブルミラー",get: get7},
    {category: 1,series: 99,obtain: 7,make: "もくざい x6",image: "FtrWoodenTableMini_Remake_0_0",name: "もくせいミニテーブル",get: get7},
    {category: 1,series: 99,obtain: 3,make: "もくざい x10",image: "FtrWoodenTableM_Remake_0_0",name: "もくせいローテーブル",get: get3},
    {category: 1,series: 99,obtain: 4,make: "やわらかいもくざい x5",image: "FtrRockinghorse_Remake_0_0",name: "もくば",get: get4},
    {category: 1,series: 99,obtain: 2,make: "きのえだ x10",image: "FtrClothesline_Remake_0_0",name: "ものほしロープ",get: get2},
    {category: 5,series: 6,obtain: 12,make: "もみじのはっぱ x7",image: "UmbrellaAutumn0Cropped",name: "もみじのかさ",get: balloon,option: "[北] 11/16～11/25<br>[南] 5/16～5/25"},
    {category: 5,series: 6,obtain: 12,make: "もみじのはっぱ x6",image: "BagShoulderMaple0",name: "もみじのポシェット",get: balloon,option: "[北] 11/16～11/25<br>[南] 5/16～5/25"},
    {category: 2,series: 6,obtain: 12,make: "どんぐり x4<br>かたいもくざい x2",image: "FtrBalancingtoy",name: "やじろべえ",get: balloon,option: "[北] 9/1～12/10<br>[南] 3/1～6/10"},
    {category: 1,series: 99,obtain: 10,make: "もくざい x12",image: "FtrFloat_Remake_0_0",name: "やたい",get: get10},
    {category: 6,series: 99,obtain: 10,make: "かたいもくざい x3<br>てっこうせき x2",image: "ItemFenceBarbedWire",name: "ゆうしてっせん",get: get10},
    {category: 1,series: 11,obtain: 13,make: "ほしのかけら x10<br>てっこうせき x20",image: "FtrSpacecraft",name: "ゆうじんうちゅうせん",get: get13},
    {category: 5,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x5",image: "CapCostumeSnowball0",name: "ゆきだるまのぼうし",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 3,series: 7,obtain: 12,make: "ゆきのけっしょう x4",image: "FtrDoorOrnamentWreathIce",name: "ゆきのけっしょうのリース",get: balloon,option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 1,series: 8,obtain: 12,make: "あおいオーナメント x9<br>きんこうせき x3",image: "FtrIllumiSnow_Remake_0_0",name: "ゆきのイルミネーション",get: balloon,option: "12/15～1/6"},
    {category: 6,series: 99,obtain: 10,make: "いし x6<br>てっこうせき x3",image: "ItemFenceIronAndStone",name: "ようふうのさく",get: get10},
    {category: 1,series: 99,obtain: 4,make: "いし x30",image: "FtrGravestoneEuropean_Remake_0_0",name: "ようふうのはかいし",get: get4},
    {category: 1,series: 99,obtain: 1,make: "ハチのす x3<br>もくざい x5",image: "FtrBeekeepingbox_Remake_0_0",name: "ようほうばこ",get: get1},
    {category: 1,series: 99,obtain: 0,make: "いし x15",image: "FtrGardenrock",name: "よくあるにわいし",get: get0},
    {category: 6,series: 99,obtain: 10,make: "もくざい x6",image: "ItemFenceHorizontalWood",name: "よこいたのさく",get: get10},
    {category: 4,series: 99,obtain: 4,make: "もくざい x15",image: "RoomTexWallMixPlankWood00",name: "よせぎのかべ",get: get4},
    {category: 4,series: 7,obtain: 12,make: "ゆきのけっしょう x10",image: "RoomSpFloorIceFloe00",name: "りゅうひょうのゆか",get: balloon,option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 1,series: 99,obtain: 10,make: "いし x20<br>スコップ x1",image: "FtrOpenairbath_Remake_0_0",name: "ろてんぶろ",get: get10},
    {category: 2,series: 99,obtain: 9,make: "もくざい x2<br>やわらかいもくざい x2",image: "FtrQuoits_Remake_0_0",name: "わなげ",get: get9},
    {category: 6,series: 99,obtain: 10,make: "てっこうせき x3<br>ねんど x3<br>いし x3",image: "ItemFenceJapanese",name: "わふうのさく",get: get10},
    {category: 1,series: 99,obtain: 0,make: "いし x30",image: "FtrGravestoneJapan_Remake_0_0",name: "わふうのはかいし",get: get0},
    {category: 6,series: 99,obtain: 10,make: "ざっそう x10<br>もくざい x3",image: "ItemFenceDriedStraw",name: "わらぼしのさく",get: get10},
    {category: 3,series: 99,obtain: 7,make: "てっこうせき x2",image: "FtrDoorOrnamentIron_Remake_0_0",name: "アイアンなドアプレート",get: get7},
    {category: 5,series: 99,obtain: 2,make: "てっこうせき x8",image: "TopsTexOnepieceOverallLPlatearmorIron",name: "アイアンアーマー",get: get2},
    {category: 5,series: 99,obtain: 2,make: "てっこうせき x4",image: "ShoesKneeKnightIron",name: "アイアンアーマーシューズ",get: get2},
    {category: 5,series: 99,obtain: 2,make: "てっこうせき x5",image: "CapFullfaceKnightIron",name: "アイアンアーマーヘルメット",get: get2},
    {category: 3,series: 99,obtain: 3,make: "てっこうせき x3<br>ねんど x1",image: "FtrIronShelfW_Remake_0_0",name: "アイアンウォールラック",get: get3},
    {category: 3,series: 99,obtain: 9,make: "てっこうせき x4<br>ねんど x2",image: "FtrIronLampW_Remake_0_0",name: "アイアンウォールランプ",get: get9},
    {category: 1,series: 99,obtain: 2,make: "もくざい x12<br>てっこうせき x6<br>ちいさなDIYさぎょうだい x1",image: "FtrWorkbenchIronwood_Remake_0_0",name: "アイアンウッドDIYテーブル",get: get2},
    {category: 1,series: 99,obtain: 6,make: "もくざい x12<br>てっこうせき x6<br>アイアンウッドチェスト x1",image: "FtrIronwoodCupboard_Remake_0_0",name: "アイアンウッドカップボード",get: get6},
    {category: 1,series: 99,obtain: 9,make: "もくざい x4<br>てっこうせき x3<br>アイアンウッドチェスト x1<br>カッティングボード x1",image: "FtrIronwoodKitchen_Remake_0_0",name: "アイアンウッドキッチン",get: get9},
    {category: 3,series: 99,obtain: 3,make: "もくざい x2<br>てっこうせき x2",image: "FtrIronwoodClockW_Remake_0_0",name: "アイアンウッドクロック",get: get3},
    {category: 1,series: 99,obtain: 3,make: "もくざい x3<br>てっこうせき x2",image: "FtrIronwoodChairS_Remake_0_0",name: "アイアンウッドチェア",get: get3},
    {category: 1,series: 99,obtain: 6,make: "もくざい x7<br>てっこうせき x4",image: "FtrIronwoodChest_Remake_0_0",name: "アイアンウッドチェスト",get: get6},
    {category: 1,series: 99,obtain: 2,make: "もくざい x12<br>てっこうせき x6",image: "FtrIronwoodTableL_Remake_0_0",name: "アイアンウッドテーブル",get: get2},
    {category: 1,series: 99,obtain: 3,make: "もくざい x20<br>てっこうせき x10",image: "FtrIronwoodBedS_Remake_0_0",name: "アイアンウッドベッド",get: get3},
    {category: 1,series: 99,obtain: 6,make: "もくざい x6<br>てっこうせき x4",image: "FtrIronwoodTableM_Remake_0_0",name: "アイアンウッドローテーブル",get: get6},
    {category: 1,series: 99,obtain: 3,make: "もくざい x6<br>てっこうせき x4",image: "FtrIronwoodServingcart_Remake_0_0",name: "アイアンウッドワゴン",get: get3},
    {category: 1,series: 99,obtain: 7,make: "てっこうせき x3",image: "FtrIrongardenChair_Remake_0_0",name: "アイアンガーデンチェア",get: get7},
    {category: 1,series: 99,obtain: 7,make: "てっこうせき x5",image: "FtrIrongardenTable_Remake_0_0",name: "アイアンガーデンテーブル",get: get7},
    {category: 1,series: 99,obtain: 7,make: "てっこうせき x8",image: "FtrIrongardenBench_Remake_0_0",name: "アイアンガーデンベンチ",get: get7},
    {category: 1,series: 99,obtain: 7,make: "てっこうせき x12",image: "FtrIronClosetLR_Remake_0_0",name: "アイアンクロゼット",get: get7},
    {category: 1,series: 99,obtain: 7,make: "てっこうせき x14",image: "FtrIronShelf_Remake_0_0",name: "アイアンシェルフ",get: get7},
    {category: 1,series: 99,obtain: 2,make: "てっこうせき x3",image: "FtrIronHanger_Remake_0_0",name: "アイアンハンガースタンド",get: get2},
    {category: 1,series: 99,obtain: 7,make: "てっこうせき x10",image: "FtrIronTableM_Remake_0_0",name: "アイアンワークテーブル",get: get7},
    {category: 4,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x8",image: "RoomSpWallIce00",name: "アイスなかべがみ",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 4,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x8",image: "RoomSpFloorIce00",name: "アイスなゆか",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 2,series: 7,obtain: 99,make: "ゆきのだいけっしょう x1<br>ゆきのけっしょう x1",image: "FtrIceCandy_Remake_0_0",name: "アイスキャンディー",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 1,series: 10,obtain: 13,make: "ほしのかけら x3<br>みずがめざのかけら x2<br>きんこうせき x2<br>いし x5",image: "FtrZodiacAquarius",name: "アクエリアスのみずがめ",get: get13},
    {category: 1,series: 99,obtain: 3,make: "やわらかいもくざい x8<br>てっこうせき x3",image: "FtrAcorsticguitar_Remake_0_0",name: "アコースティックギター",get: get3},
    {category: 1,series: 11,obtain: 13,make: "ほしのかけら x5<br>てっこうせき x5",image: "FtrSpacesuit",name: "アストロノーツ",get: get13},
    {category: 5,series: 99,obtain: 8,make: "あかいアネモネ x2<br>オレンジのアネモネ x2<br>しろいアネモネ x2",image: "CapOrnamentAnemone1",name: "アネモネのかんむり",get: get8},
    {category: 5,series: 99,obtain: 8,make: "あおいアネモネ x3<br>ピンクのアネモネ x3",image: "CapOrnamentAnemone2",name: "アネモネのかんむり・クール",get: get8},
    {category: 5,series: 99,obtain: 8,make: "むらさきのアネモネ x6",image: "CapOrnamentAnemone3",name: "アネモネのかんむり・パープル",get: get8},
    {category: 2,series: 99,obtain: 0,make: "あかいアネモネ x3<br>てっこうせき x2",image: "FtrFlowerFan_Remake_0_0",name: "アネモネのせんぷうき",get: get0},
    {category: 0,series: 99,obtain: 13,make: "オレンジのアネモネ x1<br>ほしのかけら x3",image: "ToolStickAnemones",name: "アネモネのステッキ",get: get13},
    {category: 3,series: 99,obtain: 8,make: "あかいアネモネ x3<br>しろいアネモネ x3<br>オレンジのアネモネ x3",image: "FtrDoorOrnamentWreathAnemone",name: "アネモネのリース",get: get8},
    {category: 1,series: 10,obtain: 13,make: "ほしのかけら x3<br>おひつじざのかけら x2<br>きんこうせき x1<br>いし x5",image: "FtrZodiacAries",name: "アリエスのもくば",get: get13},
    {category: 2,series: 99,obtain: 6,make: "ねんど x3",image: "FtrAlomapot_Remake_0_0",name: "アロマポット",get: get6},
    {category: 4,series: 0,obtain: 12,make: "じめんのたまご x2<br>いわのたまご x2<br>はっぱのたまご x2<br>ウッディなたまご x2<br>そらとぶたまご x2<br>サカナのたまご x2",image: "RoomTexWallEaster00",name: "イースターなかべがみ",get: balloon,option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 8,make: "じめんのたまご x1<br>いわのたまご x1<br>はっぱのたまご x1<br>ウッディなたまご x1<br>そらとぶたまご x1<br>サカナのたまご x1",image: "CapOrnamentCEgg0",name: "イースターなかんむり",get: get8+"<br>(季節限定)",option: "4/1～4/12"},
    {category: 6,series: 0,obtain: 12,make: "じめんのたまご x1<br>いわのたまご x1<br>はっぱのたまご x1<br>ウッディなたまご x1<br>そらとぶたまご x1<br>サカナのたまご x1",image: "ItemFenceEgg",name: "イースターなさく",get: balloon,option: "4/1～4/12"},
    {category: 4,series: 0,obtain: 12,make: "じめんのたまご x2<br>いわのたまご x2<br>はっぱのたまご x2<br>ウッディなたまご x2<br>そらとぶたまご x2<br>サカナのたまご x2",image: "RoomTexFloorEaster00",name: "イースターなゆか",get: balloon,option: "4/1～4/12"},
    {category: 1,series: 0,obtain: 99,make: "じめんのたまご x2<br>いわのたまご x2<br>はっぱのたまご x2<br>ウッディなたまご x2<br>そらとぶたまご x2<br>サカナのたまご x2",image: "FtrEggArch",name: "イースターなアーチ",get: "ぴょんたろう",option: "4/1～4/12"},
    {category: 3,series: 0,obtain: 12,make: "そらとぶたまご x3",image: "FtrEggClock",name: "イースターなウォールクロック",get: balloon,option: "4/1～4/12"},
    {category: 1,series: 0,obtain: 12,make: "いわのたまご x4",image: "FtrEggClosetLR",name: "イースターなクロゼット",get: balloon,option: "4/1～4/12"},
    {category: 1,series: 0,obtain: 12,make: "サカナのたまご x3",image: "FtrEggStool",name: "イースターなスツール",get: balloon,option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "ぴょんたろうのおきあがりこぼし x1<br>ほしのかけら x3",image: "ToolStickEgg",name: "イースターなステッキ",get: "ぴょんたろう",option: "4/1～4/12"},
    {category: 1,series: 0,obtain: 12,make: "じめんのたまご x4",image: "FtrEggTableS",name: "イースターなテーブル",get: balloon,option: "4/1～4/12"},
    {category: 1,series: 0,obtain: 12,make: "はっぱのたまご x4",image: "FtrEggDresser",name: "イースターなドレッサー",get: balloon,option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 8,make: "じめんのたまご x1<br>いわのたまご x1<br>はっぱのたまご x1<br>ウッディなたまご x1<br>そらとぶたまご x1<br>サカナのたまご x1",image: "BagBackpackEgg0",name: "イースターなバッグ",get: get8+"<br>(季節限定)",option: "4/1～4/12"},
    {category: 1,series: 0,obtain: 12,make: "じめんのたまご x1<br>はっぱのたまご x1<br>そらとぶたまご x1",image: "FtrEggBalloonA",name: "イースターなバルーンA",get: balloon,option: "4/1～4/12"},
    {category: 1,series: 0,obtain: 12,make: "いわのたまご x1<br>ウッディなたまご x1<br>サカナのたまご x1",image: "FtrEggBalloonB",name: "イースターなバルーンB",get: balloon,option: "4/1～4/12"},
    {category: 1,series: 0,obtain: 12,make: "じめんのたまご x1<br>いわのたまご x1<br>はっぱのたまご x1<br>ウッディなたまご x1<br>そらとぶたまご x1<br>サカナのたまご x1",image: "FtrEggBedW",name: "イースターなベッド",get: balloon,option: "4/1～4/12"},
    {category: 3,series: 0,obtain: 12,make: "じめんのたまご x1<br>いわのたまご x1<br>はっぱのたまご x1<br>ウッディなたまご x1<br>そらとぶたまご x1<br>サカナのたまご x1",image: "FtrEggLampWall",name: "イースターなライトガーランド",get: balloon,option: "4/1～4/12"},
    {category: 4,series: 0,obtain: 12,make: "じめんのたまご x1<br>いわのたまご x1<br>はっぱのたまご x1<br>ウッディなたまご x1<br>そらとぶたまご x1<br>サカナのたまご x1",image: "RugOtherEasterM00",name: "イースターなラグ",get: balloon,option: "4/1～4/124/1～4/12"},
    {category: 2,series: 0,obtain: 12,make: "ウッディなたまご x4",image: "FtrEggLamp",name: "イースターなランプ",get: balloon,option: "4/1～4/12"},
    {category: 3,series: 0,obtain: 12,make: "じめんのたまご x1<br>いわのたまご x1<br>はっぱのたまご x1<br>ウッディなたまご x1<br>そらとぶたまご x1<br>サカナのたまご x1",image: "FtrDoorOrnamentWreathEaster",name: "イースターなリース",get: balloon,option: "4/1～4/12"},
    {category: 6,series: 99,obtain: 99,make: "てっこうせき x5<br>やわらかいもくざい x3",image: "ItemFenceJuneBride",name: "ウェディングなさく",get: "パニエル",option: "6/1〜6/30"},
    {category: 0,series: 99,obtain: 99,make: "ウェディングなフラワースタンド x1<br>ほしのかけら x3",image: "ToolStickJune",name: "ウェディングなステッキ",get: "カイゾー",option: "6/1〜6/30"},
    {category: 2,series: 99,obtain: 3,make: "かたいもくざい x5",image: "FtrUkulele_Remake_0_0",name: "ウクレレ",get: get3},
    {category: 4,series: 99,obtain: 1,make: "かたいもくざい x15",image: "RoomTexWallFireWood00",name: "ウッディなかべ",get: get1},
    {category: 5,series: 0,obtain: 99,make: "ウッディなたまご x2",image: "CapHatEggforest0",name: "ウッディなたまごのから",get: "ウッディなたまごを集める",option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "ウッディなたまご x2",image: "ShoesLowcutEggforest0",name: "ウッディなたまごのくつ",get: "ウッディなたまごを集める",option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "ウッディなたまご x3",image: "TopsTexOnepieceRibNEggforest0",name: "ウッディなたまごのふく",get: "ウッディなたまごを集める",option: "4/1～4/12"},
    {category: 3,series: 99,obtain: 3,make: "てっこうせき x4",image: "FtrDoorOrnamentCrest_Remake_0_0",name: "エンブレムなドアプレート",get: get3},
    {category: 0,series: 99,obtain: 9,make: "ねんど x5",image: "ToolOcarina",name: "オカリナ",get: get9},
    {category: 0,series: 99,obtain: 10,make: "ショボいオノ x1<br>もくざい x3<br>てっこうせき x1",image: "ToolAxe",name: "オノ",get: get10},
    {category: 6,series: 99,obtain: 10,make: "もくざい x6<br>やわらかいもくざい x4",image: "ItemFenceChinese",name: "オリエンタルなさく",get: get10},
    {category: 5,series: 99,obtain: 0,make: "オレンジ x7",image: "UmbrellaOrange0Cropped",name: "オレンジのかさ",get: get0},
    {category: 3,series: 99,obtain: 0,make: "オレンジ x10<br>もくざい x2",image: "FtrFruitsClockW_Remake_0_0",name: "オレンジのかべかけどけい",get: get0},
    {category: 4,series: 99,obtain: 0,make: "オレンジ x20",image: "RoomTexWallOrange00",name: "オレンジのかべがみ",get: get0},
    {category: 5,series: 99,obtain: 0,make: "オレンジ x8",image: "TopsTexOnepieceAlineNOrange",name: "オレンジのふく",get: get0},
    {category: 5,series: 99,obtain: 0,make: "オレンジ x5",image: "CapHatOrange",name: "オレンジのぼうし",get: get0},
    {category: 1,series: 99,obtain: 0,make: "オレンジ x10<br>もくざい x4",image: "FtrFruitsTableS_Remake_0_0",name: "オレンジのサイドテーブル",get: get0},
    {category: 4,series: 99,obtain: 0,make: "オレンジ x6",image: "RugOtherOrangeM00",name: "オレンジのラグ",get: get0},
    {category: 3,series: 8,obtain: 12,make: "あかいオーナメント x1<br>あおいオーナメント x1<br>きんのオーナメント x1<br>きのえだ x4",image: "FtrOrnamentMobile_Remake_0_0",name: "オーナメントのモビール",get: balloon,option: "12/15～1/6"},
    {category: 3,series: 8,obtain: 12,make: "あおいオーナメント x6<br>きんのオーナメント x2",image: "FtrDoorOrnamentWreathOrnament_Remake_0_0",name: "オーナメントのリース",get: balloon,option: "12/15～1/6"},
    {category: 2,series: 99,obtain: 4,make: "かたいもくざい x2<br>てっこうせき x1",image: "FtrCuttingboard_Remake_0_0",name: "カッティングボード",get: get4},
    {category: 1,series: 10,obtain: 13,make: "ほしのかけら x3<br>やぎざのかけら x2<br>きんこうせき x2<br>いし x12",image: "FtrZodiacCapricornus",name: "カプリコーンのおきもの",get: get13},
    {category: 1,series: 99,obtain: 6,make: "もくざい x12<br>てっこうせき x4",image: "FtrParkbenche_Remake_0_0",name: "ガーデンベンチ",get: get6},
    {category: 5,series: 99,obtain: 8,make: "あかいキク x2<br>きいろいキク x2<br>しろいキク x2",image: "CapOrnamentMum1",name: "キクのかんむり",get: get8},
    {category: 5,series: 99,obtain: 8,make: "むらさきのキク x3<br>ピンクのキク x3",image: "CapOrnamentMum2",name: "キクのかんむり・シック",get: get8},
    {category: 5,series: 99,obtain: 8,make: "みどりのキク x6",image: "CapOrnamentMum3",name: "キクのかんむり・シンプル",get: get8},
    {category: 1,series: 99,obtain: 5,make: "きいろいキク x3<br>ざっそう x10",image: "FtrFlowerStoolS_Remake_0_0",name: "キクのクッション",get: get5},
    {category: 0,series: 99,obtain: 13,make: "きいろいキク x1<br>ほしのかけら x3",image: "ToolStickChrysanthemum",name: "キクのステッキ",get: get13},
    {category: 3,series: 99,obtain: 8,make: "しろいキク x3<br>きいろいキク x3<br>あかいキク x3",image: "FtrDoorOrnamentWreathMum",name: "キクのリース",get: get8},
    {category: 5,series: 5,obtain: 12,make: "ひらたいキノコ x3",image: "UmbrellaMushroom0Cropped",name: "キノコのかさ",get: balloon,option: "[北] 11/1～11/30<br>[南] 5/1～5/31"},
    {category: 4,series: 5,obtain: 12,make: "りっぱなキノコ x1<br>まるいキノコ x1<br>ほそいキノコ x1<br>ひらたいキノコ x1",image: "RoomTexWallMush00",name: "キノコのかべがみ",get: balloon,option: "[北] 11/1～11/30<br>[南] 5/1～5/31"},
    {category: 1,series: 5,obtain: 12,make: "ほそいキノコ x2<br>まるたのスツール x1",image: "FtrMushroomPulpwood_Remake_0_0",name: "キノコのげんぼく",get: balloon,option: "[北] 11/1～11/30<br>[南] 5/1～5/31"},
    {category: 4,series: 5,obtain: 12,make: "りっぱなキノコ x2<br>まるいキノコ x2<br>ほそいキノコ x2<br>ひらたいキノコ x2<br>もくざい x10",image: "RoomTexWallMushForest00",name: "キノコのもりのかべ",get: balloon,option: "[北] 11/1～11/30<br>[南] 5/1～5/31"},
    {category: 4,series: 5,obtain: 12,make: "めずらしいキノコ x1<br>まるいキノコ x2<br>ほそいキノコ x2<br>ひらたいキノコ x2<br>ざっそう x10",image: "RoomTexFloorMushForest00",name: "キノコのもりのゆか",get: balloon,option: "[北] 11/1～11/30<br>[南] 5/1～5/31"},
    {category: 1,series: 5,obtain: 12,make: "ほそいキノコ x3",image: "FtrMushroomScreen_Remake_0_0",name: "キノコのスクリーン",get: balloon,option: "[北] 11/1～11/30<br>[南] 5/1～5/31"},
    {category: 1,series: 5,obtain: 12,make: "まるいキノコ x2",image: "FtrMushroomChairS_Remake_0_0",name: "キノコのスツール",get: balloon,option: "[北] 11/1～11/30<br>[南] 5/1～5/31"},
    {category: 0,series: 5,obtain: 12,make: "ほそいキノコ x3<br>ほしのかけら x3",image: "ToolStickMushroom_Remake_0_0",name: "キノコのステッキ",get: balloon,option: "[北] 11/1～11/30<br>[南] 5/1～5/31"},
    {category: 1,series: 5,obtain: 12,make: "ひらたいキノコ x2<br>もくざい x6",image: "FtrMushroomTableL_Remake_0_0",name: "キノコのテーブル",get: balloon,option: "[北] 11/1～11/30<br>[南] 5/1～5/31"},
    {category: 1,series: 5,obtain: 12,make: "ひらたいキノコ x3",image: "FtrMushroomParasol_Remake_0_0",name: "キノコのパラソル",get: balloon,option: "[北] 11/1～11/30<br>[南] 5/1～5/31"},
    {category: 1,series: 5,obtain: 12,make: "ほそいキノコ x1<br>ねんど x5",image: "FtrMushroomLamp_Remake_0_0",name: "キノコのランプ",get: balloon,option: "[北] 11/1～11/30<br>[南] 5/1～5/31"},
    {category: 3,series: 5,obtain: 12,make: "きのえだ x10<br>まるいキノコ x1<br>ほそいキノコ x1<br>ひらたいキノコ x1",image: "FtrDoorOrnamentWreathMushroom",name: "キノコのリース",get: balloon,option: "[北] 11/1～11/30<br>[南] 5/1～5/31"},
    {category: 1,series: 10,obtain: 13,make: "ほしのかけら x3<br>かにざのかけら x2<br>きんこうせき x2<br>いし x3",image: "FtrZodiacCancer",name: "キャンサーのテーブル",get: get13},
    {category: 1,series: 99,obtain: 2,make: "たきび x1<br>もくざい x10",image: "FtrCampfire",name: "キャンプファイア",get: get2},
    {category: 3,series: 99,obtain: 8,make: "オレンジのコスモス x3<br>ピンクのコスモス x3<br>あかいコスモス x3",image: "FtrDoorOrnamentWreathCosmosMix",name: "キュートなコスモスのリース",get: get8},
    {category: 3,series: 99,obtain: 8,make: "オレンジのチューリップ x3<br>ピンクのチューリップ x3<br>むらさきチューリップ x3",image: "FtrDoorOrnamentWreathTulipMix",name: "キュートなチューリップのリース",get: get8},
    {category: 3,series: 99,obtain: 7,make: "もくざい x3<br>てっこうせき x1",image: "FtrKeyhanger_Remake_0_0",name: "キーハンガー",get: get7},
    {category: 4,series: 8,obtain: 12,make: "あかいオーナメント x5<br>あおいオーナメント x5<br>きんのオーナメント x5<br>ねんど x5",image: "RoomSpWallXmas00",name: "クリスマスなかべ",get: balloon,option: "12/15～1/6"},
    {category: 2,series: 8,obtain: 12,make: "あかいオーナメント x5<br>ざっそう x5",image: "FtrCandleXmas_Remake_0_0",name: "クリスマスキャンドル",get: balloon,option: "12/15～1/6"},
    {category: 3,series: 99,obtain: 8,make: "あおいアネモネ x3<br>ピンクのアネモネ x3<br>しろいアネモネ x3",image: "FtrDoorOrnamentWreathAnemoneMix",name: "クールなアネモネのリース",get: get8},
    {category: 3,series: 99,obtain: 8,make: "むらさきのパンジー x10",image: "FtrDoorOrnamentWreathPansyRare",name: "クールなパンジーのリース",get: get8},
    {category: 3,series: 99,obtain: 8,make: "オレンジのヒヤシンス x3<br>あおいヒヤシンス x3<br>ピンクのヒヤシンス x3",image: "FtrDoorOrnamentWreathHyacinthMix",name: "クールなヒヤシンスのリース",get: get8},
    {category: 2,series: 99,obtain: 1,make: "てっこうせき x5",image: "FtrKettlebell_Remake_0_0",name: "ケトルベル",get: get1},
    {category: 4,series: 7,obtain: 99,make: "ゆきのけっしょう x8",image: "RoomSpWallGelande00",name: "ゲレンデなかべがみ",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 4,series: 7,obtain: 99,make: "ゆきのけっしょう x8",image: "RoomTexFloorGelande00",name: "ゲレンデのゆか",get: "ゆきだるま",option: "[北] 12/11～2/24<br>[南] 6/11～8/24"},
    {category: 2,series: 99,obtain: 6,make: "ヤシのみ x1",image: "FtrCoconutjuice",name: "ココナッツジュース",get: get6},
    {category: 5,series: 99,obtain: 8,make: "あかいコスモス x2<br>きいろいコスモス x2<br>しろいコスモス x3",image: "CapOrnamentCosmos1",name: "コスモスのかんむり",get: get8},
    {category: 5,series: 99,obtain: 8,make: "くろいコスモス x7",image: "CapOrnamentCosmos3",name: "コスモスのかんむり・ダーク",get: get8},
    {category: 5,series: 99,obtain: 8,make: "ピンクのコスモス x3<br>オレンジのコスモス x3",image: "CapOrnamentCosmos2",name: "コスモスのかんむり・ラブリー",get: get8},
    {category: 1,series: 99,obtain: 6,make: "ピンクのコスモス x5<br>てっこうせき x3",image: "FtrFlowerShower_Remake_0_0",name: "コスモスのシャワー",get: get6},
    {category: 0,series: 99,obtain: 13,make: "しろいコスモス x1<br>ほしのかけら x3",image: "ToolStickCosmos",name: "コスモスのステッキ",get: get13},
    {category: 3,series: 99,obtain: 8,make: "きいろいコスモス x3<br>しろいコスモス x3<br>あかいコスモス x3",image: "FtrDoorOrnamentWreathCosmos",name: "コスモスのリース",get: get8},
    {category: 4,series: 99,obtain: 11,make: "あきカン x2<br>ながぐつ(ゴミ) x2<br>タイヤ x2",image: "RoomTexWallGarbage00",name: "ゴミのやまなかべ",get: "ゴミを釣る"},
    {category: 1,series: 99,obtain: 11,make: "あきカン x1<br>ながぐつ(ゴミ) x1<br>タイヤ x1",image: "FtrGarbagebag_Remake_0_0",name: "ゴミぶくろ",get: "すべてのゴミを釣る"},
    {category: 5,series: 99,obtain: 3,make: "きんこうせき x8",image: "TopsTexOnepieceOverallLPlatearmorGold",name: "ゴールデンアーマー",get: get3},
    {category: 5,series: 99,obtain: 3,make: "きんこうせき x4",image: "ShoesKneeKnightGold",name: "ゴールデンアーマーシューズ",get: get3},
    {category: 5,series: 99,obtain: 3,make: "きんこうせき x5",image: "CapFullfaceKnightGold",name: "ゴールデンアーマーヘルメット",get: get3},
    {category: 1,series: 99,obtain: 10,make: "てっこうせき x12<br>かたいもくざい x6<br>ねんど x12<br>いし x12",image: "FtrSilo_Remake_0_0",name: "サイロ",get: get10},
    {category: 1,series: 99,obtain: 0,make: "いし x6<br>てっこうせき x3<br>もくざい x3",image: "FtrStoveSauna",name: "サウナストーブ",get: get0},
    {category: 5,series: 0,obtain: 99,make: "サカナのたまご x2",image: "CapHatEggfish0",name: "サカナのたまごのから",get: "サカナのたまごを集める",option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "サカナのたまご x2",image: "CapHatEggfish0",name: "サカナのたまごのくつ",get: "サカナのたまごを集める",option: "4/1～4/12"},
    {category: 5,series: 0,obtain: 99,make: "サカナのたまご x3",image: "TopsTexOnepieceRibNEggfish0",name: "サカナのたまごのふく",get: "サカナのたまごを集める",option: "4/1～4/12"},
    {category: 6,series: 99,obtain: 99,make: "アサリ x1",image: "FishBait",name: "サカナのまきエサ",get: "あさりを手に入れる"},
    {category: 3,series: 10,obtain: 13,make: "ほしのかけら x3<br>いてざのかけら x2<br>きんこうせき x2",image: "FtrZodiacSagittarius",name: "サジタリアスのや",get: get13},
    {category: 3,series: 99,obtain: 8,make: "むらさきのアネモネ x10",image: "FtrDoorOrnamentWreathAnemoneRare",name: "シックなアネモネのリース",get: get8},
    {category: 3,series: 99,obtain: 8,make: "くろいコスモス x10",image: "FtrDoorOrnamentWreathCosmosRare",name: "シックなコスモスのリース",get: get8},
    {category: 0,series: 99,obtain: 99,make: "きのえだ x5",image: "ToolNet",name: "ショボいあみ",get: "たぬきち"},
    {category: 0,series: 99,obtain: 99,make: "きのえだ x5",image: "ToolFishingrodWood",name: "ショボいつりざお",get: "たぬきち"},
    {category: 0,series: 99,obtain: 99,make: "きのえだ x5<br>いし x1",image: "ToolAxeStone",name: "ショボいオノ",get: "たぬきち"},
    {category: 0,series: 99,obtain: 99,make: "やわらかいもくざい x5",image: "ToolWateringWood",name: "ショボいジョウロ",get: "たぬきち"},
    {category: 0,series: 99,obtain: 99,make: "かたいもくざい x5",image: "ToolShovelWood",name: "ショボいスコップ",get: "ふーた"},
    {category: 1,series: 99,obtain: 10,make: "いし x15<br>ショボいスコップ x1",image: "FtrWell",name: "シンプルないど",get: get10},
    {category: 1,series: 10,obtain: 13,make: "ほしのかけら x3<br>ふたござのかけら x2<br>きんこうせき x2<br>いし x6",image: "FtrZodiacGemini",name: "ジェミニのクロゼット",get: get13},
    {category: 4,series: 99,obtain: 1,make: "ざっそう x15<br>もくざい x3<br>かたいもくざい x3<br>やわらかいもくざい x3",image: "RoomTexWallJungle00",name: "ジャングルのかべがみ",get: get1},
    {category: 4,series: 99,obtain: 1,make: "ざっそう x10<br>ねんど x10",image: "RoomTexFloorJungle00",name: "ジャングルのゆか",get: get1},
    {category: 0,series: 99,obtain: 10,make: "ショボいジョウロ x1<br>てっこうせき x1",image: "ToolWatering_Remake_0_0",name: "ジョウロ",get: get10},
    {category: 0,series: 99,obtain: 10,make: "ショボいスコップ x1<br>てっこうせき x1",image: "ToolScoop_Remake_0_0",name: "スコップ",get: get10},
    {category: 2,series: 10,obtain: 13,make: "ほしのかけら x3<br>さそりざのかけら x2<br>きんこうせき x2<br>いし x5",image: "FtrZodiacScorpio",name: "スコーピオのランプ",get: get13},
    {category: 1,series: 99,obtain: 7,make: "あかいバラ x1<br>ピンクのバラ x2<br>オレンジのバラ x2<br>しろいユリ x2<br>きいろいユリ x1<br>むらさきのアネモネ x4",image: "FtrStandflower_Remake_0_0",name: "スタンドフラワー",get: get7},
    {category: 4,series: 11,obtain: 13,make: "ほしのかけら x5<br>おおきなほしのかけら x1",image: "RoomSpWallStarPrint00",name: "スターなかべ",get: get13}
  ];
  function convertStr(str) {
    return str.replace(/[ァ-ン]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0x60);
    });
  }

  var itemHTML = `
  <tr class="item">
  <td class="get-if"><div>未取得</div></td>
  <td class="dist-if"><div>不可</div></td>
  <td class="nos">
  <select>
  <option>--</option>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  </select>
  </td>
  <td class="item-main-container">
  <div class="item-main">
  <img src="image/${info[0].image}.png">
  <div class="info-name">${info[0].name}</div>
  </div>
  </td>
  <td class="howtoget">${info[0].get}</td>
  </tr>
  `;
  for (var i=1; i < info.length; i++) {
    itemHTML += `
    <tr class="item">
      <td class="get-if"><div>未取得</div></td>
      <td class="dist-if"><div>不可</div></td>
      <td class="nos">
        <select>
          <option>--</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
      </td>
      <td class="item-main-container">
        <div class="item-main">
          <img src="image/${info[i].image}.png">
          <div class="info-name">${info[i].name}</div>
        </div>
      </td>
      <td class="howtoget">${info[i].get}</td>
    </tr>
    `;
  };
  $("table").append(itemHTML);

  $(".item-main").click(function() {
    $("#detail-container").show();
    var index = $(".item-main").index(this);
    function category(data) {
      return $("#category-list").find(`option[value="${data}"]`).text();
    }
    function series(data) {
      return $("#series-list").find(`option[value="${data}"]`).text();
    }
    function option(data) {
      if (data == undefined) {
        return '';
      } else {
        return data;
      }
    }

    $("#item-name").text(info[index].name);
    $("#detail-img").attr("src",`image/${info[index].image}.png`);
    $("#detail-category").text(category(info[index].category));
    $("#detail-series").text(series(info[index].series));
    $("#detail-get").text(info[index].get.replace("<br>(季節限定)",''));
    $("#detail-option").html(`<p style="color: rgb(231, 151, 67)">${option(info[index].option)}</p>`);
    $("#making").html(`<p>${info[index].make}</p>`);
  });

  $(".fa-times").click(function() {
    $("#detail-container").hide();
  });

});
