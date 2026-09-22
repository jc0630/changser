import { MethodCategory, MethodItem } from '../types';

export const METHOD_CATEGORIES: MethodCategory[] = [
  {
    id: 'curtain-wall',
    name: '外牆帷幕式系統',
    enName: 'Curtain Wall Systems',
    coverImage: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg',
    description: '鋁複合板、實厚鋁單板、通風雨幕工法。高平整度、抗風壓與現代建築立面幾何包覆。',
    count: 3,
  },
  {
    id: 'wall-panels',
    name: '橫式／直式牆板系統',
    enName: 'Horizontal / Vertical Wall Panels',
    coverImage: '/src/assets/images/wall_coating_work_1789547612563.jpg',
    description: '經典波型與幾何斷面鋼板，支援橫向延展或垂直挺拔線條，施工迅捷、高性價比。',
    count: 3,
  },
  {
    id: 'standing-seam',
    name: '直立式絞合系統',
    enName: 'Standing Seam Systems',
    coverImage: '/src/assets/images/anodized_aluminum_1789547570311.jpg',
    description: '360° 機械咬合無釘孔立邊工法，適應大曲面與低洩水坡度，國際公認頂級防水等級。',
    count: 3,
  },
  {
    id: 'tongue-groove',
    name: '企口式系統',
    enName: 'Tongue & Groove Systems',
    coverImage: '/src/assets/images/color_steel_detail_1789547480465.jpg',
    description: '三明治板與金屬公母企口精密自扣，隱藏螺栓固定，阻斷冷熱橋，外觀無瑕連續。',
    count: 3,
  },
  {
    id: 'snap-lock',
    name: '扣合式系統',
    enName: 'Snap-Lock Systems',
    coverImage: '/src/assets/images/frp_skylight_roof_1789547542265.jpg',
    description: '高彈力自扣咬接機構，免機具現場滾咬，組裝極為敏捷，扣合緊密兼具微幅熱膨脹滑移。',
    count: 2,
  },
  {
    id: 'flat-lock',
    name: '平扣式系統',
    enName: 'Flat-Lock Tile Systems',
    coverImage: '/src/assets/images/metal_louvers_facade_1789547511954.jpg',
    description: '四邊摺邊互扣工藝，呈現精緻菱格或矩形鱗片紋理，適用於精品別墅、文化地標與複雜異形面。',
    count: 2,
  },
  {
    id: 'stepped-system',
    name: '階梯式系統',
    enName: 'Stepped Roof & Cladding',
    coverImage: '/src/assets/images/metal_roof_construction_1789545922655.jpg',
    description: '仿瓦階梯高低斷面，排水路徑立體分流，抗強風吹襲，兼具傳統屋頂陰影層次與現代耐候。',
    count: 2,
  },
  {
    id: 'roof-seam',
    name: '屋頂絞合式系統',
    enName: 'Roof Seam Heavy Systems',
    coverImage: '/src/assets/images/metal_wall_fire_system_1789545864095.jpg',
    description: '重載工業大跨距屋頂專用，雙重 540° 嚴密鎖死絞合，內嵌連續性防水止水膠條，抗特大暴雨強襲。',
    count: 2,
  },
];

export const METHOD_ITEMS: MethodItem[] = [
  // --- 1. 外牆帷幕式系統 ---
  {
    id: 'open-ventilated-curtain',
    categoryId: 'curtain-wall',
    categoryName: '外牆帷幕式系統',
    title: '開放式通風雨幕鋁複合板工法',
    subtitle: 'Rainscreen 開放式等壓腔節能構造，牆體自潔與永不冷凝',
    coverImage: '/src/assets/images/renovation_before_after_1789545891892.jpg',
    gallery: [
      '/src/assets/images/roof_accessories_set_1789547523831.jpg',
      '/src/assets/images/roof_steel_tile_1789547590738.jpg'
    ],
    overview: '開放式通風雨幕系統（Rainscreen Cladding）利用等壓腔（Pressure Equalization）物理原理，在金屬外覆板與結構牆面之間形成 30~50mm 的空氣導流夾層。板材接縫處不施打矽利康膠，外側雨水依靠重力排出，而藉由熱壓煙囪效應帶走內部熱能與濕氣，徹底避免矽利康老化泛黃污染壁面，為當代高等級綠建築帷幕的黃金標準工法。',
    features: [
      '無矽利康乾式接縫：擺脫膠條吐油與灰塵吸附，外立面歷久彌新不留黑垢水痕',
      '煙囪對流通風散熱：外壁阻擋陽光直射，氣流帶走熱能，降低建築空調耗電達 20%',
      '吸震滑動次結構：三維可調式鋁合金掛件，能有效吸收地震剪力與熱脹冷縮變形',
      '等壓防水機制：消除外牆內外氣壓差，暴雨無法藉由風壓壓入結構牆內',
    ],
    specs: [
      { label: '適用面材', value: '4.0~6.0mm 鋁複合板 (ACP) / 2.5~3.0mm 鋁單板' },
      { label: '抗風壓能力', value: '通過 ASTM E330 測試，極限達 5.8 kPa' },
      { label: '通風腔厚度', value: '30 ~ 60 mm 循環通風空氣層' },
      { label: '防火安全', value: '背襯 A1 級不燃保溫岩棉 + 防火隔離屏障' },
    ],
    applications: [
      '高科技研發總部、生技企業大樓',
      '大型公共圖書館、文化中心、美術館',
      '高端商業綜合體、名車展示中心',
    ],
    constructionSteps: [
      { step: '01', title: '高精度雷射 3D 空間放樣', desc: '以全站儀進行三維坐標測量，設定基底水平與垂直基準墨線，平整度公差控制在 1mm 內。' },
      { step: '02', title: '熱浸鍍鋅/鋁合金次結構安裝', desc: '固定不鏽鋼化學錨栓，架設主龍骨與橫樑次結構，並配置三維微調角件。' },
      { step: '03', title: '高密度防水透氣膜鋪設', desc: '結構背牆滿鋪耐候抗 UV 透氣膜，阻絕雨水同時讓牆體內部濕氣自然向外逸散。' },
      { step: '04', title: '單元金屬板掛裝與縫隙校正', desc: '板件背面預鎖鋁掛勾，自下而上卡入橫向導軌，以專用治具固定 10~15mm 開放均勻縫隙。' },
    ],
    structureDetails: [
      { name: '面層板材', desc: 'Kynar 500 氟碳烤漆鋁板，具備極高耐衝擊抗褪色能力' },
      { name: '背襯等壓腔', desc: '保持上下暢通之空氣流動道，設防蟲防鳥不鏽鋼格網' },
      { name: '防水透氣層', desc: '耐水壓 >10,000mm，透氣阻抗 Sd <0.05m' },
      { name: '斷熱冷橋隔離墊', desc: '次結構與牆體間加裝 EPDM 隔熱墊，隔絕熱傳導' },
    ],
    applicableMaterials: ['A2 級礦物芯鋁複合板', '3.0mm 實厚 AA5005 鋁單板', '陽極氧化鋁板'],
  },
  {
    id: 'solid-aluminum-facade',
    categoryId: 'curtain-wall',
    categoryName: '外牆帷幕式系統',
    title: '單層實厚鋁單板密閉式帷幕工法',
    subtitle: '高剛性折邊加強肋構造，耐候密封膠填縫，極致立體雕塑感',
    coverImage: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg',
    gallery: [
      '/src/assets/images/wall_coating_work_1789547612563.jpg'
    ],
    overview: '實厚鋁單板（2.5mm~3.0mm）具備絕佳的延展性與塑形力，四邊採 CNC 剪折一體成形，背面植入焊接加強筋。本工法採用高等級耐候中性矽利康嵌縫，氣密與水密性極高，適合複雜曲折造形、深凹造型窗框與轉角懸挑雨棚。',
    features: [
      '可客製雙曲面與特殊折角造型，體現前衛建築立面美學',
      '植焊螺柱背部補強筋，超大板面依然保持極致平整、抗風無波紋',
      '100% 可回收綠色金屬，符合 LEED 與台灣綠建築高標準',
    ],
    specs: [
      { label: '板材厚度', value: '2.5mm / 3.0mm 鋁合金單板 (AA3003-H14)' },
      { label: '表面塗裝', value: '三塗二烤氟碳塗層 (膜厚 ≥ 40µm)' },
      { label: '水密性能', value: '通過 CNS 11528 測試達到 1,000 Pa 無滲水' },
      { label: '氣密性能', value: '最高等級氣密等級' },
    ],
    applications: ['商業總部大樓、車站大廳雨棚、品牌旗艦館'],
    constructionSteps: [
      { step: '01', title: '鋼結構基底除鏽與底漆噴塗', desc: '確保預埋件與骨架焊接強度牢靠，焊道經探傷檢測。' },
      { step: '02', title: '鋁板折邊螺栓固定', desc: '以不鏽鋼螺栓將鋁單板角碼緊固於橫豎龍骨上。' },
      { step: '03', title: '泡沫發泡條塞縫', desc: '於接縫處填入發泡聚乙烯圓棒，控制密封膠厚度為縫寬一半。' },
      { step: '04', title: '耐候矽利康施打刮平', desc: '表面貼遮蔽膠帶，一次性均勻注膠並專用括刀修整平滑。' },
    ],
    structureDetails: [
      { name: '板材本體', desc: '厚度 3.0mm 防鏽鋁合金板，角隅全弧焊接研磨' },
      { name: '抗風加強肋', desc: '背面間距 400~500mm 植螺柱固定鋁合金 U 型補強筋' },
      { name: '嵌縫耐候膠', desc: 'Dow Corning / GE 高級建築耐候結構矽利康' },
    ],
    applicableMaterials: ['AA3003 鋁合金單板', 'AA5005 陽極氧化板'],
  },
  {
    id: 'titanium-zinc-curtain',
    categoryId: 'curtain-wall',
    categoryName: '外牆帷幕式系統',
    title: '德國純鈦鋅板自癒外牆工法',
    subtitle: '天然純金屬歲月氧化鈍化層，歷久彌新，極致百年質感',
    coverImage: '/src/assets/images/anodized_aluminum_1789547570311.jpg',
    gallery: [
      '/src/assets/images/color_steel_detail_1789547480465.jpg'
    ],
    overview: '純鈦鋅金屬板是由 99.995% 高純度電解鋅添加微量鈦和銅冶煉而成。安裝於外立面後，表面在大氣環境中會自然生成一層緻密的碳酸鋅保護層（鈍化層）。該鈍化層具備驚人的自我修復刮痕能力，經得起百年歲月洗禮。',
    features: [
      '刮痕自動修復：表面細微劃痕在雨水與氧氣作用下會自動鈍化復原',
      '80~100 年極長使用壽命：終身免維護、免重新刷漆',
      '優異延展性：極小彎折半徑無微裂紋，適合各種特殊幾何立面',
    ],
    specs: [
      { label: '金屬成份', value: 'Zn 99.995% + Ti 0.06~0.2% + Cu 0.08~1.0%' },
      { label: '標準厚度', value: '0.7mm / 0.8mm / 1.0mm' },
      { label: '防火分類', value: 'A1 級不可燃材料' },
      { label: '耐酸雨指數', value: 'pH 4~9 環境均具極高耐受度' },
    ],
    applications: ['藝術展覽館、歷史風貌建築翻新、頂級私人隱世會館'],
    constructionSteps: [
      { step: '01', title: '底層結構木夾板/金屬底板安裝', desc: '鋪設乾燥無腐蝕性之木質底板或鍍鋅基板。' },
      { step: '02', title: '抗冷凝三維立體絲網墊鋪設', desc: '設置立體透氣絲網墊，確保鋅板背面水氣即時排出不產生白鏽。' },
      { step: '03', title: '不銹鋼固定扣件與滑動扣件安裝', desc: '按板長計算熱脹量，合理配置固定扣件區與滑動扣件區。' },
      { step: '04', title: '手動/電動咬邊成型', desc: '立邊雙重折疊扣合，邊角處手工剪折收口。' },
    ],
    structureDetails: [
      { name: '鈍化鈦鋅板', desc: '原色石墨灰或預鈍化灰藍板面' },
      { name: '通風立體網墊', desc: '8mm 厚高彈性立體聚丙烯透氣隔水網' },
      { name: '滑動扣件', desc: 'SUS304 不鏽鋼兩件式熱脹冷縮滑軌扣件' },
    ],
    applicableMaterials: ['德國 Rheinzink 鈦鋅板', 'VMZINC 鈦鋅合金'],
  },

  // --- 2. 橫式／直式牆板系統 ---
  {
    id: 'horizontal-corrugated-wall',
    categoryId: 'wall-panels',
    categoryName: '橫式／直式牆板系統',
    title: '暗扣式橫向幾何金屬牆板工法',
    subtitle: '水平延展視覺拉長，隱藏式扣釘，工業與商業立面首選',
    coverImage: '/src/assets/images/frp_skylight_roof_1789547542265.jpg',
    gallery: [
      '/src/assets/images/metal_louvers_facade_1789547511954.jpg'
    ],
    overview: '暗扣式橫向金屬外牆系統打破傳統直立式浪板的單調感，以水平線條延伸建築物的寬闊量體。板塊上下緣特製自扣企口，前一片板安裝時鎖固螺絲，後一片板直接扣合覆蓋螺絲部位，達到全牆面 100% 隱藏螺栓的俐落視覺。',
    features: [
      '100% 隱形釘安裝：避免螺栓外露鏽蝕與橡膠墊圈老化滲漏風險',
      '水平陰影折角：特有波峰幾何產生豐富的陽光投影層次',
      '模組化快速吊裝：標準有效寬度 300~500mm，施工進度大幅超前',
    ],
    specs: [
      { label: '板材厚度', value: '0.6mm ~ 0.8mm 高張力鍍鋁鋅彩塗鋼板' },
      { label: '有效寬度', value: '300mm / 350mm / 400mm' },
      { label: '耐候塗層', value: 'SMP 耐候矽改聚酯 / PVDF 氟碳樹脂' },
      { label: '抗風性能', value: '承受風載荷可達 4.5 kPa' },
    ],
    applications: ['現代工業廠房外牆、物流中心辦公棟、體育館外牆'],
    constructionSteps: [
      { step: '01', title: '立柱次結構水平與垂直校驗', desc: '安裝豎向輕鋼 C 型龍骨，依風壓計算設定間距 1,200mm。' },
      { step: '02', title: '防蟲滴水收邊條安裝', desc: '牆體底層安裝帶透氣孔之啟始滴水泛水，確保底部排水順暢。' },
      { step: '03', title: '由下而上逐層卡扣固定', desc: '第一塊板勾住啟始條，上緣以自攻自鑽螺絲固定，下一塊板向下卡扣鎖死。' },
      { step: '04', title: '轉角一體式金屬收邊', desc: '陽角與陰角部位使用同色折彎件緊扣密封。' },
    ],
    structureDetails: [
      { name: '面板槽型', desc: '淺波紋或平平板型，內置抗風加強微折線' },
      { name: '隱蔽固定邊', desc: '預開長橢圓釘孔，允許微幅溫度伸縮位移' },
      { name: '豎向龍骨', desc: '熱浸鍍鋅 Z/C 型鋼，鍍鋅量 Z275' },
    ],
    applicableMaterials: ['PVDF 鍍鋁鋅鋼板', '耐候彩色鍍鋅鋼板'],
  },
  {
    id: 'vertical-box-rib',
    categoryId: 'wall-panels',
    categoryName: '橫式／直式牆板系統',
    title: '直式高筋盒型金屬外牆板工法',
    subtitle: '垂直挺拔線條，超高剛性斷面，抗超大跨距風壓',
    coverImage: '/src/assets/images/metal_roof_construction_1789545922655.jpg',
    gallery: [
      '/src/assets/images/metal_wall_fire_system_1789545864095.jpg'
    ],
    overview: '直式盒型牆板（Box Rib Panel）以高深的垂直凸筋創造出強烈的秩序感與立體光影。深凹的幾何波槽賦予鋼板超凡的截面慣性矩，大幅減少次結構橫樑數量，節省總體結構鋼材成本達 15% 以上。',
    features: [
      '深凹立體波槽：視覺剛勁挺拔，高聳建築更顯大器',
      '超強抗彎抗風強度：支撐跨距可放大至 2.0~2.5 公尺',
      '排水自潔性極佳：垂直直通順暢，灰塵落葉不沉積',
    ],
    specs: [
      { label: '肋高深度', value: '35mm ~ 50mm 深肋盒型' },
      { label: '鋼材降伏強度', value: 'Grade 50 (Fy ≥ 345 MPa)' },
      { label: '跨距能力', value: '連續跨達 2,500mm' },
      { label: '安裝方向', value: '純垂直方向' },
    ],
    applications: ['重工機械廠、高挑高物流立體倉庫、飛機機庫'],
    constructionSteps: [
      { step: '01', title: '水平橫樑間距設定', desc: '按結構計算於柱身鎖裝橫向 C/Z 型鋼檁條。' },
      { step: '02', title: '超長直板吊掛定位', desc: '吊車搭配真空吊具，長板垂直對齊鉛垂線。' },
      { step: '03', title: '不鏽鋼自攻螺栓鎖固', desc: '帶 EPDM 雙層防水墊片螺栓緊固於波谷部位。' },
    ],
    structureDetails: [
      { name: '盒型深肋', desc: '深達 40mm 的直角多折邊結構' },
      { name: '搭接防滲槽', desc: '側向搭接配置專利防虹吸隔槽' },
    ],
    applicableMaterials: ['0.6mm~0.75mm 高拉力鍍鋁鋅鋼板'],
  },
  {
    id: 'perforated-acoustic-wall',
    categoryId: 'wall-panels',
    categoryName: '橫式／直式牆板系統',
    title: '微孔吸音金屬複合牆板工法',
    subtitle: '內置吸音無紡布與防火玻璃棉，兼具外牆防護與室內降噪',
    coverImage: '/src/assets/images/renovation_before_after_1789545891892.jpg',
    gallery: [
      '/src/assets/images/roof_accessories_set_1789547523831.jpg'
    ],
    overview: '針對高分貝噪音作業之大型廠房與體育場館設計。內襯鋼板表面進行精密微孔沖孔（開孔率 18~25%），背面貼合德國進口 Soundtex 吸音無紡布並充填吸音棉，有效吸收中低頻噪音，吸音率 NRC 高達 0.85。',
    features: [
      '高達 NRC 0.85 吸音係數：顯著改善室內回音與機械噪音困擾',
      '雙層鋼板包覆結構：外層防候、內層吸音，一體化施作省工時',
      '全不燃等級：符合建築技術規則防焰耐燃一級規範',
    ],
    specs: [
      { label: '穿孔率', value: '18% ~ 23% 微孔排列' },
      { label: '吸音等級', value: 'NRC 0.85 / 隔音量 Rw 34dB' },
      { label: '防火安全', value: 'CNS 14705 耐燃一級認證' },
      { label: '適用厚度', value: '整體複合厚度 100~150mm' },
    ],
    applications: ['發電廠發電機房、壓縮機房、室內體育館、捷運維修廠'],
    constructionSteps: [
      { step: '01', title: '內襯微穿孔鋼板鋪裝', desc: '先於骨架內側鋪設穿孔吸音板，背面已預貼吸音無紡布。' },
      { step: '02', title: '高密度吸音岩棉填塞', desc: '填充 60kg/m³ 憎水性吸音岩棉，並安裝隔音斷橋卡件。' },
      { step: '03', title: '外層實厚耐候鋼板安裝', desc: '外層施作高強度 PVDF 耐候鋼板，完成全密閉外防護。' },
    ],
    structureDetails: [
      { name: '內襯孔板', desc: '直徑 2.5mm 間距 5mm 菱形排列微孔' },
      { name: '吸音無紡布', desc: '阻燃透氣 Soundtex 聲學布' },
      { name: '外防護板', desc: '0.6mm 彩塗耐候鋼板' },
    ],
    applicableMaterials: ['鍍鋅穿孔板', '高密度聲學岩棉'],
  },

  // --- 3. 直立式絞合系統 ---
  {
    id: 'double-lock-standing-seam',
    categoryId: 'standing-seam',
    categoryName: '直立式絞合系統',
    title: '直立式 360° 雙重機械咬合屋面工法',
    subtitle: '低坡度屋面極致防水之王，零螺絲穿透，承受 17 級強颱風壓',
    coverImage: '/src/assets/images/roof_steel_tile_1789547590738.jpg',
    gallery: [
      '/src/assets/images/titanium_zinc_wall_1789547498027.jpg'
    ],
    overview: '直立式雙咬合系統（Double Lock Standing Seam）是現代公共建築與低坡度屋面的頂級工藝。鋼板邊緣在工廠或現場軋製出 65mm 高立肋，透過專利不鏽鋼滑動鋁扣件固定於屋頂次結構。最後由電動自動咬合機沿立邊連續完成 360 度兩次全封閉捲曲咬合，立邊內置特製防虹吸丁基密封膠條，徹底杜絕毛細現象與負風壓滲水。',
    features: [
      '360° 機械咬合立肋：板面無任何外露穿孔釘，徹底消除釘孔漏水死角',
      '超低洩水坡度適應力：最小可適用至 1.5° (1/40) 坡度，不回水不倒灌',
      '專利滑動式熱脹扣件：吸收單片最長達 60 公尺板件因溫差引起的熱脹冷縮位移',
      '高立邊擋水高度達 65mm：即使遇上超大豪雨淹沒屋面，雨水也無法越過立邊',
    ],
    specs: [
      { label: '立邊高度', value: '65mm (Super Seam)' },
      { label: '有效寬度', value: '400mm ~ 430mm' },
      { label: '咬合方式', value: '電動咬合機 360° 雙絞合 (Double Lock)' },
      { label: '抗負風壓', value: 'ASTM E1592 測試達 6.5 kPa' },
    ],
    applications: ['半導體科技廠、國際機場航站、高鐵車站、大型綜合巨蛋'],
    constructionSteps: [
      { step: '01', title: '次結構防結露層鋪設', desc: '安裝高抗拉防水透氣膜與抗凝露防音隔墊。' },
      { step: '02', title: '長板現場連續軋製吊掛', desc: '出動行動式成型車將單片超長鋼板一次軋出並吊裝至屋頂。' },
      { step: '03', title: '專利滑動不鏽鋼扣件鎖定', desc: '底扣固定於檁條，上滑塊夾入鋼板母肋內。' },
      { step: '04', title: '電動雙咬合機全自動密合', desc: '啟動電動走行機具，連續將公母邊以 360 度完全捲折緊鎖。' },
    ],
    structureDetails: [
      { name: '高立肋折邊', desc: '65mm 高度，內藏預置丁基止水膠' },
      { name: '滑動基座', desc: '不鏽鋼滑塊，允許軸向滑動量 ±35mm' },
      { name: '不穿透固定', desc: '所有固定螺釘皆在板體下方受完全保護' },
    ],
    applicableMaterials: ['0.7mm~0.8mm PVDF 鍍鋁鋅鋼板', '0.8mm 鈦鋅合金板', '0.9mm 鋁鎂錳合金板'],
  },
  {
    id: 'single-lock-standing-seam',
    categoryId: 'standing-seam',
    categoryName: '直立式絞合系統',
    title: '直立式 180° 單咬合金屬屋面工法',
    subtitle: '適用於較大洩水坡度，兼具優異防水與更經濟之工期效率',
    coverImage: '/src/assets/images/wall_coating_work_1789547612563.jpg',
    gallery: [
      '/src/assets/images/anodized_aluminum_1789547570311.jpg'
    ],
    overview: '直立式單咬合系統（Single Lock 180°）採用 180 度單道折疊鎖定。其施工速度比雙咬合提高約 30%，同時保留了無穿透釘、隱形扣件固定與優良的抗風抗漏優點，非常適用於坡度大於 5° 的工業廠房與倉儲設施。',
    features: [
      '施工速度快，人力成本與安裝時程顯著降低',
      '板面無外露螺釘，防漏安全性遠優於傳統穿孔螺釘浪板',
      '立邊造型洗鍊，維持高規格現代建築視覺',
    ],
    specs: [
      { label: '立邊高度', value: '54mm / 65mm' },
      { label: '適用坡度', value: '坡度 ≥ 5° (1/12)' },
      { label: '安裝速度', value: '約 800~1,200 ㎡/日/班組' },
    ],
    applications: ['物流倉儲園區、一般工業廠房、商業賣場屋頂'],
    constructionSteps: [
      { step: '01', title: '鋪設下層金屬底板與保溫岩棉', desc: '安裝整體隔熱層及隔汽防潮膜。' },
      { step: '02', title: '定位立扣件並鎖定', desc: '精準鎖扣固定在屋面檁條。' },
      { step: '03', title: '180° 機械單次捲合', desc: '以電動咬邊機完成 180 度封口。' },
    ],
    structureDetails: [
      { name: '180° 翻卷邊', desc: '單次 180 度彎折，結構扎實' },
      { name: '抗風夾座', desc: '鍍鋅鋼抗風卡碼' },
    ],
    applicableMaterials: ['0.5mm~0.6mm 彩塗鍍鋁鋅鋼板'],
  },
  {
    id: 'curved-standing-seam',
    categoryId: 'standing-seam',
    categoryName: '直立式絞合系統',
    title: '立邊絞合大曲面弧形屋面特殊工法',
    subtitle: '連續三維曲面自然過渡，現場電腦數控弧度預彎與咬合',
    coverImage: '/src/assets/images/color_steel_detail_1789547480465.jpg',
    gallery: [
      '/src/assets/images/frp_skylight_roof_1789547542265.jpg'
    ],
    overview: '面對起伏流暢如波浪般的前衛弧型建築，強實引進專業曲面彎弧機，可直接將立邊直板順應鋼構弧度進行正向或反向預彎（最小曲率半徑可達 R=3.5m），完全解決傳統板材強制彎折時立邊爆裂或波面起皺變形的難題。',
    features: [
      '平滑極限彎弧：正曲、反曲、S 型雙向彎折一體成型',
      '無痕接縫連續延伸：由屋頂流暢過渡至外牆，實現「屋牆一體化」',
      '結合 3D 雷射掃描放樣，曲率吻合率高達 99.5%',
    ],
    specs: [
      { label: '最小彎弧半徑', value: 'R = 3.5 米 (凸弧) / R = 5.0 米 (凹弧)' },
      { label: '板材延展等級', value: '深衝級柔軟合金' },
      { label: '曲率控制', value: '數控電腦伺服滾輪連續調節' },
    ],
    applications: ['波浪造型展演館、圓頂天文館、高鐵曲面月台雨棚'],
    constructionSteps: [
      { step: '01', title: '現場 3D 骨架鐳射逆向建模', desc: '確認實際安裝鋼構曲率誤差值。' },
      { step: '02', title: '專用彎弧機段落軋彎', desc: '調校數控彎弧滾輪，分段彎出設計曲率。' },
      { step: '03', title: '雙向滑動扣座安裝', desc: '安裝可多維擺動之不鏽鋼滑動扣件。' },
      { step: '04', title: '曲面自走咬合機封邊', desc: '輕量化曲面專用咬合機沿弧度順暢咬邊。' },
    ],
    structureDetails: [
      { name: '多軸調節滑碼', desc: '具備左右微角度擺動機能之專利夾座' },
      { name: '預應力消解槽', desc: '板底設應力微溝，確保曲面不回彈' },
    ],
    applicableMaterials: ['AA3004 鋁鎂錳合金板', '純鈦鋅板'],
  },

  // --- 4. 企口式系統 ---
  {
    id: 'sandwich-tongue-groove',
    categoryId: 'tongue-groove',
    categoryName: '企口式系統',
    title: '高效阻燃三明治板雙企口防毛細工法',
    subtitle: 'PIR/岩棉雙企口隱藏螺栓接合，零冷橋斷熱，高氣密冷鏈標準',
    coverImage: '/src/assets/images/metal_louvers_facade_1789547511954.jpg',
    gallery: [
      '/src/assets/images/metal_roof_construction_1789545922655.jpg'
    ],
    overview: '企口式金屬三明治板工法是當代潔淨工業與冷鏈建築的主力核心。公母邊精密切割出雙重迷宮式密封槽，母口內置出廠預塗之高彈性 EPDM 止水密封膠帶。螺栓鎖固於公口隱蔽翼，下一塊板母口插入時自動覆蓋螺絲，完全杜絕外部雨水接觸固定件，並有效截斷金屬熱傳導冷橋。',
    features: [
      '雙企口迷宮密封：破除毛細管虹吸滲水路徑，氣密性達 ASTM E283 最高標準',
      '零冷橋斷熱設計：內外金屬皮在企口處完全物理隔離，室內不結露、不滴水',
      '超低熱傳導係數 λ=0.021 W/m·K：高保溫效能大幅縮減製冷電費',
      '隱蔽釘孔：螺栓深埋企口內，外立面清爽無釘痕',
    ],
    specs: [
      { label: '芯材厚度', value: '50mm / 75mm / 100mm / 150mm / 200mm' },
      { label: '芯材種類', value: 'B1 級阻燃 PIR / A 級高密玄武岩棉' },
      { label: '導熱係數', value: 'PIR ≤ 0.022 W/m·K / 岩棉 ≤ 0.040 W/m·K' },
      { label: '防火時效', value: 'CNS 12514 認證 1 ~ 2 小時防火時效' },
    ],
    applications: ['智慧低溫物流中心、食品藥品 GMP 潔淨車間、大型現代工廠'],
    constructionSteps: [
      { step: '01', title: '基底阻氣密封帶黏貼', desc: '次結構表面預貼閉孔 EPDM 減震密封帶。' },
      { step: '02', title: '首塊三明治板定位校準', desc: '以專用板夾將板材提升就位，調整水平度。' },
      { step: '03', title: '專用抗拔帶壓墊螺栓隱形固定', desc: '於公口預設釘槽每隔 300~500mm 鎖固自攻螺栓。' },
      { step: '04', title: '相鄰板母口緊密卡入', desc: '以緊板器均勻加壓推進，確保公母槽完全咬合無縫隙。' },
    ],
    structureDetails: [
      { name: '雙重迷宮企口', desc: '特殊幾何折角阻止雨水滲透' },
      { name: '預置密封條', desc: '工廠預壓連續密封彈性體' },
      { name: '隱蔽釘座', desc: '沉頭鎖固區，受下一塊板母口完全包覆' },
    ],
    applicableMaterials: ['PIR 聚異氰脲酸酯三明治板', '高密度岩棉三明治防火板'],
  },
  {
    id: 'cleanroom-interlocking',
    categoryId: 'tongue-groove',
    categoryName: '企口式系統',
    title: '生技醫療 GMP 潔淨室專用企口板工法',
    subtitle: '抗菌抗靜電塗層，平整微接縫微打膠，易清潔消毒無塵死角',
    coverImage: '/src/assets/images/metal_wall_fire_system_1789545864095.jpg',
    gallery: [
      '/src/assets/images/renovation_before_after_1789545891892.jpg'
    ],
    overview: '滿足生技製藥、半導體無塵室、醫療手術室等嚴苛潔淨環境。板材邊緣以極小微 R 角企口拼接，接縫處落差小於 0.5mm，填補醫藥級防霉密封膠後完全平順，耐過氧化氫（VHP）空間熏蒸消毒，不起塵、不吸附微粒。',
    features: [
      '接縫完全平齊微倒角，不積灰、極易抹拭清潔',
      '表面塗佈奈米級抗菌抗靜電抗化學塗層',
      '具備優異正負壓氣密性，維持潔淨室壓差平衡',
    ],
    specs: [
      { label: '潔淨度等級', value: '符合 ISO Class 1~5 規範' },
      { label: '接縫落差', value: '< 0.5 mm 奈米級齊平' },
      { label: '耐消毒性', value: '耐 VHP / 酒精 / 次氯酸消毒劑反覆擦拭' },
    ],
    applications: ['生技疫苗藥廠、醫院無菌手術室、精密光學元件廠'],
    constructionSteps: [
      { step: '01', title: '地面與頂部鋁合金 U 型導槽安裝', desc: '使用雷射調平導軌，加貼氣密雙面膠墊。' },
      { step: '02', title: '板件企口垂直滑入固定', desc: '公母口扣入並進行板面平整度儀器微調。' },
      { step: '03', title: '圓弧陰陽角鋁型材包覆', desc: '所有直角交接處以 R50 圓弧鋁材過渡。' },
      { step: '04', title: '食品醫藥級專用中性防霉膠注膠', desc: '施打耐老化防霉矽膠並以專用平刮刀壓平。' },
    ],
    structureDetails: [
      { name: '微縫企口', desc: '接縫微度 1.5mm 極窄企口' },
      { name: '抗菌塗層', desc: '銀離子添加氟碳漆膜' },
    ],
    applicableMaterials: ['SUS304 霧面不鏽鋼板', '高平整抗靜電彩鋼板'],
  },
  {
    id: 'acoustic-tongue-groove',
    categoryId: 'tongue-groove',
    categoryName: '企口式系統',
    title: '企口式高隔音阻尼金屬複合外牆工法',
    subtitle: '多層複合阻尼隔音夾層，超低頻震動消散與環境降噪',
    coverImage: '/src/assets/images/roof_accessories_set_1789547523831.jpg',
    gallery: [
      '/src/assets/images/roof_steel_tile_1789547590738.jpg'
    ],
    overview: '在板芯內部夾入高比重黏彈性高分子阻尼膜，結合玄武岩棉纖維的多孔吸音結構。企口接頭設有多道橡膠阻氣密封層，防止聲音經由板縫漏音，整體外牆隔音量達到 Rw=42dB，能有效阻隔交通幹線與高分貝工業噪音。',
    features: [
      '高達 Rw 42dB 隔音量：隔絕外部重型車輛與飛機噪音',
      '阻尼消震機能：大幅衰減金屬板雨滴敲擊撞擊聲',
      '兼具保溫防火兩大標準',
    ],
    specs: [
      { label: '隔音量', value: 'Rw = 42 dB (CNS 3816)' },
      { label: '板厚度', value: '120mm / 150mm' },
      { label: '防火時效', value: '2 小時防火' },
    ],
    applications: ['高噪音測試中心、機場鄰近辦公區、高端錄音演藝中心'],
    constructionSteps: [
      { step: '01', title: '次結構防震橡膠襯墊安裝', desc: '避免結構傳導固體震動。' },
      { step: '02', title: '阻尼企口板安裝', desc: '壓入專利阻尼母口，鎖扣固定。' },
      { step: '03', title: '邊界聲學密封封堵', desc: '周邊伸縮縫以高密度聲學密封膠密封。' },
    ],
    structureDetails: [
      { name: '黏彈性阻尼層', desc: '吸收板材共振動能' },
      { name: '雙重阻氣條', desc: '杜絕空氣漏音' },
    ],
    applicableMaterials: ['厚板彩鋼', '阻尼複合鋼板'],
  },

  // --- 5. 扣合式系統 ---
  {
    id: 'snap-lock-fast-roof',
    categoryId: 'snap-lock',
    categoryName: '扣合式系統',
    title: '免機具彈力自扣型金屬屋面板工法',
    subtitle: '手壓快速扣合，無須電動機械咬合，施工速度提升 50%',
    coverImage: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg',
    gallery: [
      '/src/assets/images/wall_coating_work_1789547612563.jpg'
    ],
    overview: '扣合式系統（Snap-Lock System）是兼顧安裝效率與美觀現代感的熱門選擇。公肋與母肋設計有特製的倒刺鎖定彈片，安裝時工人僅需自上而下腳踩或手壓即可「喀噠」一聲自動緊扣鎖定。完全免除笨重咬合機組的高空拖行施工，既安全又大幅縮短工期。',
    features: [
      '無機具手壓自扣：免租用或操作電動咬合機，不受高空電力與狹小作業面限制',
      '暗藏式夾碼固定：屋面同樣 100% 無穿透外露螺釘，防漏性能高',
      '扣接內建熱位移餘裕：公母接合處允許微量縱向自由滑移，不因膨脹而拱起',
    ],
    specs: [
      { label: '肋高高度', value: '25mm ~ 38mm 簡約立肋' },
      { label: '適用坡度', value: '建議坡度 ≥ 3° (1/20)' },
      { label: '抗風壓能力', value: '達 4.2 kPa 負風壓' },
      { label: '施工效率', value: '傳統雙絞合工法之 1.5 倍' },
    ],
    applications: ['斜屋頂別墅、商業休閒園區、汽車展示中心、學校運動場雨遮'],
    constructionSteps: [
      { step: '01', title: '次結構防潮防水底膜鋪設', desc: '全面黏貼自粘性防滑高分子防水膜。' },
      { step: '02', title: '首塊扣合板定位與夾碼固定', desc: '對齊簷口邊線，以不銹鋼專用夾片每隔 600mm 緊固。' },
      { step: '03', title: '下一片板垂直扣壓就位', desc: '母肋對準公肋，施加垂直壓力完成彈簧卡扣鎖定。' },
      { step: '04', title: '屋脊與簷口摺疊收水', desc: '末端手工向上彎折 30mm 形成阻水翻邊。' },
    ],
    structureDetails: [
      { name: '彈性自扣肋', desc: '預沖彈性卡簧構造' },
      { name: '暗碼扣片', desc: '預開長條滑孔不鏽鋼暗扣' },
    ],
    applicableMaterials: ['0.6mm~0.7mm 鍍鋁鋅彩塗鋼板', '0.7mm 鋁鎂錳板'],
  },
  {
    id: 'snap-lock-facade',
    categoryId: 'snap-lock',
    categoryName: '扣合式系統',
    title: '扣合式縱向修長金屬牆面工法',
    subtitle: '極簡細立肋陰影分割線，直挺垂直流線，當代極簡建築首選',
    coverImage: '/src/assets/images/anodized_aluminum_1789547570311.jpg',
    gallery: [
      '/src/assets/images/color_steel_detail_1789547480465.jpg'
    ],
    overview: '應用於外牆的扣合板系統具備極細緻的 25mm 垂直立肋，在日光照射下為大面牆體刻劃出條理分明、比例優雅的細緻陰影線。安裝方向靈活，可垂直、水平甚至傾斜 45 度鋪裝，深受當代極簡派建築師喜愛。',
    features: [
      '洗鍊極簡立肋：25mm 纖細線條，呈現高階現代設計語彙',
      '無外露螺栓：純粹金屬光澤無破綻，無膠條乾式立面',
      '高抗衝擊性：板體多道加強小折線，避免陽光反射水波紋',
    ],
    specs: [
      { label: '立肋高度', value: '25mm 纖細肋' },
      { label: '板面寬度', value: '300mm / 400mm 可選' },
      { label: '表面消光度', value: '15~25% 低眩光微消光' },
    ],
    applications: ['當代美術館、精品文創園區、私人莊園別墅、接待會所'],
    constructionSteps: [
      { step: '01', title: '水平次龍骨架設', desc: '安裝熱浸鍍鋅防鏽方管龍骨。' },
      { step: '02', title: '啟始邊條精密校正', desc: '鉛垂線校對後固定起始扣件。' },
      { step: '03', title: '逐片扣合推進', desc: '板邊互扣並於釘翼處固定暗螺絲。' },
    ],
    structureDetails: [
      { name: '微折線板底', desc: '微細鉛筆筋增加剛度防起浪' },
      { name: '倒鉤自鎖', desc: '精準 CNC 沖壓防脫扣倒鉤' },
    ],
    applicableMaterials: ['PVDF 氟碳消光鋼板', '鈦鋅板'],
  },

  // --- 6. 平扣式系統 ---
  {
    id: 'flat-lock-tiles-rhombus',
    categoryId: 'flat-lock',
    categoryName: '平扣式系統',
    title: '菱形鱗片式金屬平扣板工法',
    subtitle: '四邊摺邊互扣，龍鱗般立體交錯紋理，適應各種複雜曲面',
    coverImage: '/src/assets/images/frp_skylight_roof_1789547542265.jpg',
    gallery: [
      '/src/assets/images/metal_louvers_facade_1789547511954.jpg'
    ],
    overview: '平扣式菱形鱗片系統（Flat-Lock Rhombus Tiles）源自歐洲百年經典手工金屬工藝。每一片板材四邊均經過精密切角反向折邊（兩邊向上折 180°、兩邊向下折 180°）。安裝時相互搭扣咬合，以隱藏式固定扣夾固定在底層基板上。其微小的單元尺寸使其能夠輕易包覆球體、錐體或不規則流線自由曲面。',
    features: [
      '自由曲面包覆力：單元靈活拼接，完美順應雙曲面與球形建築幾何',
      '四向互扣超強抗風：四面咬接形成一體化咬合格網，風載均勻分散',
      '光影層次豐富：不同角度日光照射下，猶如波光粼粼的藝術雕塑',
      '隱蔽式夾片固定：釘頭被上層瓦片完全覆蓋，保證百年防水',
    ],
    specs: [
      { label: '單元尺寸', value: '300x300mm / 400x400mm / 500x500mm 菱形' },
      { label: '四邊折邊寬度', value: '25mm 相互反扣折疊' },
      { label: '適用曲率', value: '多軸自由曲面均可包覆' },
      { label: '抗風拉拔', value: '單塊固定拉拔力 > 1.2 kN' },
    ],
    applications: ['藝術中心外觀、頂級莊園塔樓、圓頂穹頂教堂、標誌性文化地標'],
    constructionSteps: [
      { step: '01', title: '基底木板或平整底板鋪設', desc: '鋪設 18mm 耐水膠合板或鍍鋅底鋼板。' },
      { step: '02', title: '自粘性抗候防水膜滿鋪', desc: '搭接 100mm 以上，徹底密封釘孔。' },
      { step: '03', title: '網格放線基準定位', desc: '以 45 度角彈放對角基準網格線，確保每塊瓦片排線筆直。' },
      { step: '04', title: '自下而上菱形互扣固定', desc: '將瓦片鉤入下層，上角以 2 枚不鏽鋼扣片打釘固定，依序向上鋪設。' },
    ],
    structureDetails: [
      { name: '四向 180° 折邊', desc: '四邊互咬防脫鉤折口' },
      { name: '不鏽鋼固定扣片', desc: '0.6mm SUS304 預沖孔暗夾片' },
    ],
    applicableMaterials: ['純鈦鋅板 (0.7~0.8mm)', '陽極氧化鋁板', '紫銅板'],
  },
  {
    id: 'flat-lock-rectangular',
    categoryId: 'flat-lock',
    categoryName: '平扣式系統',
    title: '矩形交錯式金屬平扣板工法',
    subtitle: '磚石般水平交錯疊砌，大塊面極致平整，純粹金屬砌築感',
    coverImage: '/src/assets/images/metal_roof_construction_1789545922655.jpg',
    gallery: [
      '/src/assets/images/metal_wall_fire_system_1789545864095.jpg'
    ],
    overview: '以大矩形金屬板進行 1/2 或 1/3 磚砌式交錯疊砌，四邊平折暗扣。相較於帷幕大板，矩形平扣板具備更豐富的手工砌築細節，並能自然吸收板材因受熱產生的微量鼓脹，整體外觀穩重典雅。',
    features: [
      '經典砌磚比例：規整大方，賦予建築厚重沉穩的歷史底蘊',
      '全暗藏固定系統：無任何螺栓穿孔暴露',
      '板件輕巧便於人工安裝：無須大型吊裝機械',
    ],
    specs: [
      { label: '規格尺寸', value: '400x800mm / 500x1000mm 矩形' },
      { label: '四邊折邊', value: '25mm 正反折鉤' },
      { label: '耐久性', value: '50~80 年' },
    ],
    applications: ['企業總部外牆、文教設施、音樂廳、外立面局部裝飾'],
    constructionSteps: [
      { step: '01', title: '彈線定位水平基準', desc: '以雷射水平儀標註每一皮板塊上緣線。' },
      { step: '02', title: '起始底鉤安裝', desc: '固定底部起始連續扣板。' },
      { step: '03', title: '逐皮交錯咬合鋪設', desc: '橫向交錯半塊板縫，上緣打扣釘固定。' },
    ],
    structureDetails: [
      { name: '矩形平扣體', desc: 'CNC 沖角四折邊' },
      { name: '暗固定扣碼', desc: '不鏽鋼專用卡扣' },
    ],
    applicableMaterials: ['鈦鋅板', '特種耐候鋼板', '消光烤漆鋁板'],
  },

  // --- 7. 階梯式系統 ---
  {
    id: 'stepped-steel-tile',
    categoryId: 'stepped-system',
    categoryName: '階梯式系統',
    title: '階梯式高抗風金屬屋頂鋼瓦工法',
    subtitle: '立體階梯高低跌落，立體導流迅速排洪，耐 17 級強颱與防冰雹',
    coverImage: '/src/assets/images/renovation_before_after_1789545891892.jpg',
    gallery: [
      '/src/assets/images/roof_accessories_set_1789547523831.jpg'
    ],
    overview: '階梯式系統（Stepped Roofing）將傳統斜屋頂的排水智慧與現代高張力金屬材料完美結合。板面縱向每隔 250~400mm 壓製出一道 20~35mm 的高低落差階梯跌水斷面。在狂風暴雨吹襲時，強風沿階梯波浪躍升，大幅消減負風壓剝離力，同時階梯跌水槽將雨水強力導向下游，絕無積水回溢之虞。',
    features: [
      '立體階梯跌水排洪：超強雨量即時層層跌落排出，排水效率提高 40%',
      '強颱抗風阻流幾何：階梯結構擾亂風場，通過 17 級超強陣風嚴苛風洞測試',
      '重量僅傳統瓦 1/6：極大幅度減輕屋架地震載重負擔，抗震安全性極佳',
      '抗冰雹與樹枝墜落：高強度基鋼具備超凡韌性，不破裂、不粉碎',
    ],
    specs: [
      { label: '階梯落差高度', value: '25mm ~ 35mm 跌水階梯' },
      { label: '階梯步距', value: '300mm / 350mm / 400mm' },
      { label: '自重', value: '僅 4.8 ~ 6.5 kg/㎡' },
      { label: '耐抗衝擊', value: 'Class 4 最高等級抗衝擊認證' },
    ],
    applications: ['斜屋頂學校建築、渡假飯店度假村、別墅莊園、斜面工業廠房屋頂'],
    constructionSteps: [
      { step: '01', title: '屋面防水透氣底膜鋪設', desc: '全斷面鋪設高分子阻水膜，搭接壓實。' },
      { step: '02', title: '掛瓦副骨架定位安裝', desc: '按階梯步距精準排列鍍鋅橫向掛瓦條。' },
      { step: '03', title: '自下而上階梯扣鎖', desc: '由屋簷向屋脊逆向鋪設，階梯下端緊扣前片上緣，螺釘隱蔽於階梯陰影處。' },
      { step: '04', title: '通風型屋脊蓋瓦安裝', desc: '屋脊頂部安裝具備氣孔之防雨通風脊瓦，排出熱氣。' },
    ],
    structureDetails: [
      { name: '階梯跌水唇', desc: '立體反折防風滴水鼻' },
      { name: '抗側漏毛細溝', desc: '側搭接雙重密封排水槽' },
    ],
    applicableMaterials: ['高耐候鍍鋁鋅消光金屬鋼瓦', '天然彩砂金屬鋼瓦'],
  },
  {
    id: 'stepped-cladding-louvers',
    categoryId: 'stepped-system',
    categoryName: '階梯式系統',
    title: '階梯式層疊外牆遮陽百葉工法',
    subtitle: '橫向層疊出簷，阻擋陽光直射，引導自然微風氣流',
    coverImage: '/src/assets/images/roof_steel_tile_1789547590738.jpg',
    gallery: [
      '/src/assets/images/titanium_zinc_wall_1789547498027.jpg'
    ],
    overview: '在建築外牆立面採用階梯式層疊外傾造型（Stepped Cladding），猶如百葉窗般一片片自上向下微度傾斜覆蓋。不僅完全遮蔽夏季高角度烈日射入窗內，亦能在雨天保持開窗通風，賦予建築強烈的立體遮陽層次感。',
    features: [
      '物理性自然遮陽：阻絕 45% 以上日射熱能，兼具採光與節能',
      '防潑雨通風機能：階梯出簷形成雨棚效應，開窗通風雨水不倒灌',
      '立面立體感極強：打破大平板牆體的單調，創造律動陰影',
    ],
    specs: [
      { label: '外傾角度', value: '15° ~ 30° 階梯傾角' },
      { label: '板材材質', value: '鋁擠型 / 彩塗鋼板' },
      { label: '遮陽率', value: '遮擋 45% 直射日照' },
    ],
    applications: ['綠建築辦公樓、學校教學樓、南向與西向外立面遮陽'],
    constructionSteps: [
      { step: '01', title: '階梯斜向角碼固定', desc: '依設計角度安裝專用斜向支架。' },
      { step: '02', title: '逐層金屬階梯板安裝', desc: '自下而上重疊 50mm 扣接緊固。' },
      { step: '03', title: '側向封口與洩水收邊', desc: '兩側安裝隱藏式導水槽。' },
    ],
    structureDetails: [
      { name: '傾斜階梯板', desc: '剛性高抗風折邊' },
      { name: '角度固定卡座', desc: '熱浸鍍鋅角鋼支架' },
    ],
    applicableMaterials: ['AA6063-T5 鋁擠型', '0.7mm 彩鋼板'],
  },

  // --- 8. 屋頂絞合式系統 ---
  {
    id: 'heavy-roof-seam-540',
    categoryId: 'roof-seam',
    categoryName: '屋頂絞合式系統',
    title: '540° 超極限重載屋頂密封絞合工法',
    subtitle: '全密閉三次折疊極限鎖死，內嵌持續止水膠，極端氣候防護王',
    coverImage: '/src/assets/images/wall_coating_work_1789547612563.jpg',
    gallery: [
      '/src/assets/images/anodized_aluminum_1789547570311.jpg'
    ],
    overview: '屋頂絞合式系統（Roof Seam Heavy System）針對台灣長年面臨的夏季劇烈颱風與極端強降雨氣候。板縫經過多道滾輪以 540 度進行極限密合折疊，公母肋完全交織為一體，使整個屋頂形成宛如一整張鋼板的連續密閉防護層。即便整座屋頂遭遇短延時強降雨積水淹沒，也絕無任何滲透可能。',
    features: [
      '540° 嚴密三次絞合：超越一般 360° 雙咬合，抗拉脫力提高 65%',
      '出廠預注無溶劑高彈性丁基膠條：隨絞合受擠壓填滿所有微孔隙',
      '承受近 8.0 kPa 毀滅性負風壓測試依然完好如初',
      '單片跨距長達 70 公尺連續軋型施工，整棟廠房屋面零搭接橫縫',
    ],
    specs: [
      { label: '絞合角度', value: '540° 三次全封閉極限咬合' },
      { label: '極限負風壓', value: 'ASTM E1592 實測達 7.8 kPa' },
      { label: '單片長度', value: '現場軋型最長達 70 公尺' },
      { label: '保固承諾', value: '防水防滲 15 年品質保固' },
    ],
    applications: ['國家戰略物流樞紐、精密晶圓科技總廠、重型發電廠房、海港大跨度貨庫'],
    constructionSteps: [
      { step: '01', title: '高空現場連續軋型機作業', desc: '大型吊車將貨櫃型軋型機吊升至屋脊平台，直接吐出超長鋼板。' },
      { step: '02', title: '重型抗拔滑動夾座緊固', desc: '每根檁條均以雙不銹鋼螺栓鎖緊特製重載卡碼。' },
      { step: '03', title: '預塗丁基膠條激活檢查', desc: '確保公母肋內部連續止水膠無斷點或污染。' },
      { step: '04', title: '四道次自動重型絞合機走行', desc: '機器自動行走完成三次反覆折疊至 540 度完全鎖死。' },
    ],
    structureDetails: [
      { name: '540° 咬合立邊', desc: '三次深層捲曲鎖死結構' },
      { name: '連續丁基密封芯', desc: '隨絞合填滿縫隙之防流淌膠體' },
      { name: '重載抗風滑座', desc: '承載拉力 > 3.5 kN/座' },
    ],
    applicableMaterials: ['0.75mm~0.8mm 特厚高強度鍍鋁鋅鋼板', '0.9mm AA3004 鋁合金'],
  },
  {
    id: 'solar-integrated-seam',
    categoryId: 'roof-seam',
    categoryName: '屋頂絞合式系統',
    title: '屋頂絞合式免鑽孔光伏一體化工法',
    subtitle: '專利高強鋁夾具直咬立肋，零穿孔安裝太陽能，保證建築結構安全',
    coverImage: '/src/assets/images/color_steel_detail_1789547480465.jpg',
    gallery: [
      '/src/assets/images/frp_skylight_roof_1789547542265.jpg'
    ],
    overview: '企業追求 ESG 與屋頂綠能發電的完美解答。傳統太陽能支架鑽孔安裝必然導致金屬屋頂日後漏水與保固失效。強實採用專利航空級鋁合金夾具，直接強力夾固在屋頂立邊絞合肋上，免鑽任何孔洞、不破壞防腐鍍層，每座夾具抗拔拉力超過 2,500 公斤。',
    features: [
      '100% 免穿孔免破壞屋面：徹底保有原廠金屬屋面漏水防護承諾',
      '高承載抗拔夾緊力：每座夾具抗拉脫力超過 2.5 噸，安度強颱考驗',
      '電偶腐蝕隔離：夾具與鋼板間配置專用防電解腐蝕墊圈',
      '兼顧通風降溫：太陽能板遮擋日光，使廠房屋內溫度下降 3~5°C',
    ],
    specs: [
      { label: '單夾具抗拉力', value: '> 25 kN (2.5 噸)' },
      { label: '夾具材質', value: '6005-T5 航太鋁合金 + SUS304 螺栓' },
      { label: '安裝速度', value: '雙人組每日可安裝 500+ 個點位' },
      { label: '降溫效益', value: '屋頂降溫 8~12°C / 室內降溫 3~5°C' },
    ],
    applications: ['工業廠房屋頂太陽能電廠、物流倉儲 ESG 綠電工程、公有建築光電屋頂'],
    constructionSteps: [
      { step: '01', title: '立肋承載力與排布放樣', desc: '配合光伏組件尺寸精確標定夾具點位。' },
      { step: '02', title: '專利夾具定位與扭矩鎖固', desc: '以扭力扳手緊固至標準 18 N·m，緊咬立邊不滑移。' },
      { step: '03', title: '太陽能鋁支架導軌安裝', desc: '固定橫向鋁導軌與接地線路。' },
      { step: '04', title: '太陽能光伏組件裝載', desc: '以快速壓塊將太陽能板牢牢鎖定。' },
    ],
    structureDetails: [
      { name: 'S-5! 認證專利夾塊', desc: '圓頭緊定螺釘不穿透金屬表皮' },
      { name: '防電解絕緣墊片', desc: '杜絕異種金屬電位差腐蝕' },
    ],
    applicableMaterials: ['絞合立邊鋼板', '鋁鎂錳合金板'],
  },
];
