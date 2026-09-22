export interface ProductItemData {
  id: string;
  name: string;
  enName: string;
  h1: string;
  heroDesc: string;
  heroImage: string;
  
  // H2-1: 產品特性
  featureH2: string;
  featureDesc: string;
  featureImage: string;
  featureBullets: string[];
  
  // Optional Special Diagram / Visual Module
  specialType?: 'sandwich_cross_section' | 'zinc_vs_galvalume' | 'frp_transmission' | 'louver_diagram' | 'roof_accessory_map' | 'coating_before_after';
  specialData?: {
    title: string;
    desc: string;
    items?: { label: string; value: string; desc?: string }[];
    beforeImg?: string;
    afterImg?: string;
  };

  // H2-2: 規格與應用範圍
  specH2: string;
  specTable: {
    headers: string[];
    rows: string[][];
  };
  applications: {
    title: string;
    desc: string;
  }[];

  // H2-3: 實際應用／搭配方式
  appH2: string;
  appPhotos: {
    title: string;
    desc: string;
    image: string;
  }[];

  // H2-4: 相關產品 (ids)
  relatedProductIds: string[];

  // H2-5: 相關工程實績
  relatedProjects: {
    id: string;
    title: string;
    buildingType: string;
    systemUsed: string;
    image: string;
  }[];

  // CTA
  ctaTitle: string;
  ctaDesc: string;
}

export const PRODUCTS_LIST: ProductItemData[] = [
  // 01 彩色鋼板
  {
    id: 'color-steel',
    name: '彩色鋼板',
    enName: 'Pre-painted Steel Sheet',
    h1: '彩色鋼板｜彩鋼浪板規格與應用介紹',
    heroDesc: '高耐候烤漆鍍面鋼板，具備卓越耐蝕性與多樣化折板型式，廣泛適用於現代工業廠房與倉儲屋牆面。',
    heroImage: '/src/assets/images/color_steel_detail_1789547480465.jpg',
    
    featureH2: '彩鋼浪板產品特性與優勢',
    featureDesc: '嚴選高張力結構鋼捲，結合耐腐蝕鍍鋅／鍍鋁鋅防護層與頂級 PVDF 氟碳烤漆，能長效抵禦紫外線與潮濕環境侵蝕。',
    featureImage: '/src/assets/images/color_steel_detail_1789547480465.jpg',
    featureBullets: [
      '高耐候塗層：長效防褪色與抗粉化，具備 20 年以上耐候實績。',
      '高強度結構：高抗拉降伏強度，能抵抗強烈颱風風壓與地震震動。',
      '豐富板型：提供四溝、五溝、小圓浪及隱藏式企口等多種浪型選擇。',
      '施工高效率：定尺剪裁現場吊裝，鋪設快速縮短整體工期。'
    ],

    specH2: '彩色鋼板規格與應用範圍',
    specTable: {
      headers: ['規格項目', '一般規格參數', '備註說明'],
      rows: [
        ['基材鋼種', '高張力熱浸鍍鋁鋅鋼板 (GL) / 鍍鋅鋼板 (GI)', '符合 CNS 1244 規範'],
        ['鋼板厚度', '0.50 mm / 0.60 mm / 0.75 mm', '可依風壓結構需求指定'],
        ['有效寬度', '750 mm ~ 1000 mm (依板型而定)', '標準工作寬幅'],
        ['表面塗裝', 'PVDF 氟碳樹脂 / SMP 矽改性聚酯', '正面塗膜厚度 20~25 μm'],
        ['適用部位', '大跨距廠房屋頂、外牆立面、遮雨棚、圍籬', '兼具經濟性與結構性']
      ]
    },
    applications: [
      { title: '大型工業廠房', desc: '大面積屋頂鋪設，排水順暢且抗風力強。' },
      { title: '物流轉運倉儲', desc: '外牆立面造型多樣，施工迅速符合交期。' },
      { title: '設備機房遮蔽', desc: '隱藏式扣件工法，外觀無螺絲鑽孔痕跡。' }
    ],

    appH2: '彩色鋼板屋頂與外牆應用',
    appPhotos: [
      {
        title: '科技廠房大跨距屋面系統',
        desc: '採用長尺寸無接縫連續鋪設，配合暗扣工法徹底杜絕漏水隱患。',
        image: '/src/assets/images/renovation_before_after_1789545891892.jpg'
      },
      {
        title: '現代倉儲幾何外牆立面',
        desc: '雙色彩鋼搭配水平垂直交錯線條，賦予工業建築俐落的現代視覺。',
        image: '/src/assets/images/roof_accessories_set_1789547523831.jpg'
      }
    ],

    relatedProductIds: ['sandwich-panel', 'steel-tile', 'frp-skylight'],
    relatedProjects: [
      {
        id: 'taipower-changhua-data-center',
        title: '台電(彰化)雲端資料處理中心',
        buildingType: '公共工程 / 雲端中心',
        systemUsed: 'GB-230 小圓浪企口式彩鋼板立面',
        image: '/src/assets/images/roof_steel_tile_1789547590738.jpg'
      },
      {
        id: 'industrial-machine-plant',
        title: '台中精密機械產業園區廠房',
        buildingType: '工業廠房',
        systemUsed: 'PVDF 直立雙重鎖邊彩鋼屋頂',
        image: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg'
      }
    ],

    ctaTitle: '取得彩色鋼板報價與建議',
    ctaDesc: '提供工程需求與基地風壓條件，我們將協助評估適合的板型厚度與塗料規格。'
  },

  // 02 三明治板
  {
    id: 'sandwich-panel',
    name: '三明治板',
    enName: 'Insulated Sandwich Panel',
    h1: '三明治板｜隔熱複合板材規格與價格',
    heroDesc: '高密度隔熱芯材與雙面金屬面材精密複合成型，兼備優異保溫斷熱、耐燃防火與結構自承載性能。',
    heroImage: '/src/assets/images/metal_wall_fire_system_1789545864095.jpg',
    
    featureH2: '三明治板隔熱複合材料特性',
    featureDesc: '上下表層採用高耐候彩鋼板，中間高壓注聚 PIR / PU 或填塞不燃岩棉芯材，形成強固的三層一體結構，熱傳導率極低。',
    featureImage: '/src/assets/images/metal_wall_fire_system_1789545864095.jpg',
    featureBullets: [
      '極致節能斷熱：導熱係數低，有效阻絕戶外高溫與冬日冷氣外洩。',
      '高階防火時效：岩棉芯材達 CNS 14705-1 耐燃一級與 1~2 小時防火時效。',
      '雙面企口防滲：特製子母榫接合槽，隔絕水氣並阻斷熱橋效應。',
      '自承載大跨距：高抗彎曲強度，減少鋼構次樑用量與基礎荷載。'
    ],

    specialType: 'sandwich_cross_section',
    specialData: {
      title: '板材複合結構透視解構',
      desc: '多層複合壓合製程，結合力學強度與熱物理防護特性。',
      items: [
        { label: '上表層面板', value: '0.5~0.6mm PVDF 烤漆鍍鋁鋅鋼板', desc: '抗 UV、耐候防刮' },
        { label: '核心保溫層', value: '高密度防火玄武岩棉 / PIR 硬質發泡', desc: '隔熱阻燃、吸音降噪' },
        { label: '下表層面板', value: '0.4~0.5mm 聚酯烤漆防潮底板', desc: '耐水氣、室內潔淨明亮' },
        { label: '接縫側嵌槽', value: '專利高氣密斷橋企口插接構造', desc: '防風雨滲透、防結露' }
      ]
    },

    specH2: '三明治板規格與應用範圍',
    specTable: {
      headers: ['規格項目', '岩棉防火三明治板', 'PIR/PU 隔熱三明治板'],
      rows: [
        ['芯材材質', '天然玄武岩高密度不燃棉纖維', '聚異氰脲酸酯 (PIR) / 聚氨酯 (PU)'],
        ['厚度選擇', '50 / 75 / 100 / 125 / 150 mm', '50 / 75 / 100 mm'],
        ['防火等級', '耐燃一級 / 1~2 小時防火時效', '耐燃二級 / 防火自熄性'],
        ['容重密度', '100 ~ 120 kg/m³', '38 ~ 42 kg/m³'],
        ['適用場域', '防火區劃外牆、科技廠房、危險品倉', '冷鏈物流倉儲、食品製程廠、高恆溫恆濕空間']
      ]
    },
    applications: [
      { title: '冷鏈物流倉儲', desc: '恆溫隔熱保冷，降低空調壓縮機運轉能耗。' },
      { title: '防火區劃牆面', desc: '符合法規指定防火時效，保障人員與資產安全。' },
      { title: '高科技電子廠', desc: '內部潔淨度佳，外壁平整美觀兼具吸音降噪。' }
    ],

    appH2: '三明治板隔熱應用與建築搭配',
    appPhotos: [
      {
        title: '低溫冷鏈物流智慧園區',
        desc: '採用 100mm 隱藏式斷橋三明治外牆，打造零冷橋之恆溫倉儲空間。',
        image: '/src/assets/images/wall_coating_work_1789547612563.jpg'
      },
      {
        title: '精密生技園區防火外牆',
        desc: '全區配置岩棉防火三明治系統，通過消防竣工嚴格檢驗標準。',
        image: '/src/assets/images/anodized_aluminum_1789547570311.jpg'
      }
    ],

    relatedProductIds: ['color-steel', 'aluminum-composite', 'roof-accessories'],
    relatedProjects: [
      {
        id: 'taipower-changhua-data-center',
        title: '台電(彰化)雲端資料處理中心',
        buildingType: '公共工程',
        systemUsed: 'GB-1000 複層金屬三明治外牆板',
        image: '/src/assets/images/color_steel_detail_1789547480465.jpg'
      },
      {
        id: 'logistics-smart-hub',
        title: '桃園智慧冷鏈物流轉運中心',
        buildingType: '物流倉儲',
        systemUsed: '100mm 斷橋隔熱複合三明治板',
        image: '/src/assets/images/frp_skylight_roof_1789547542265.jpg'
      }
    ],

    ctaTitle: '取得三明治板報價與建議',
    ctaDesc: '請提供防火時效要求與隔熱厚度需求，工程團隊將為您計算最經濟的材料規格。'
  },

  // 03 鋁複合板
  {
    id: 'aluminum-composite',
    name: '鋁複合板',
    enName: 'Aluminum Composite Panel (ACP)',
    h1: '鋁複合板｜輕量金屬外牆材料規格介紹',
    heroDesc: '高平整度、極輕自重與優異加工曲折性，為商辦大樓與公共地標外觀帷幕的經典材料。',
    heroImage: '/src/assets/images/metal_louvers_facade_1789547511954.jpg',
    
    featureH2: '鋁複合板產品特性與應用',
    featureDesc: '由雙面高純度鋁合金板與低密度無毒防燃芯材在連續高溫下複合而成，具備卓越抗衝擊性與大面積平整度。',
    featureImage: '/src/assets/images/metal_roof_construction_1789545922655.jpg',
    featureBullets: [
      '極致輕量化：重量僅為實心鋁板的一半、玻璃的三分之一，大幅減輕主結構負擔。',
      '超凡平整度：高溫輥壓工藝，大尺寸單板在陽光照射下亦不產生波浪起伏。',
      '易加工成型：可在現場進行開槽、刨折、圓弧捲曲，完美配合各種幾何曲面。',
      '耐候塗裝：採用頂級 Kynar 500 PVDF 氟碳烤漆，耐酸雨防紫外線不易褪色。'
    ],

    specH2: '鋁複合板規格與外牆系統搭配',
    specTable: {
      headers: ['規格項目', '標準參數規格', '特點說明'],
      rows: [
        ['標準板厚', '3 mm / 4 mm / 5 mm / 6 mm', '外牆帷幕推薦 4mm / 5mm'],
        ['鋁皮厚度', '0.30 mm / 0.40 mm / 0.50 mm', '工程帷幕外裝標準為 0.5mm 鋁皮'],
        ['標準寬度', '1220 mm / 1250 mm / 1500 mm', '特殊尺寸可客製定尺生產'],
        ['芯材分類', '耐燃 B1 級 / 不燃 A2 級無機礦物芯材', '符合公共建築消防法規標準'],
        ['安裝工法', '開放式乾式懸掛工法 / 密封填膠工法', '背後搭配鋼鋁副龍骨扣接']
      ]
    },
    applications: [
      { title: '商辦總部帷幕', desc: '大面積幾何板塊拼接，呈現現代俐落風貌。' },
      { title: '舊建築外觀拉皮', desc: '輕量骨架直接包覆老舊建物，工程迅速省力。' },
      { title: '迎賓雨庇與包柱', desc: '優異的弧形加工性，修飾圓柱與曲面天花。' }
    ],

    appH2: '鋁複合板建築應用案例',
    appPhotos: [
      {
        title: '都會頂級企業旗艦總部',
        desc: '香檳銀色氟碳鋁複合板立面，搭配大跨距落地玻璃，打造尊榮商務意象。',
        image: '/src/assets/images/metal_wall_fire_system_1789545864095.jpg'
      },
      {
        title: '公共藝術展館弧形帷幕',
        desc: '利用鋁複合板開槽曲折特性，精準貼合流暢的非對稱幾何曲面。',
        image: '/src/assets/images/renovation_before_after_1789545891892.jpg'
      }
    ],

    relatedProductIds: ['titanium-zinc', 'anodized-aluminum', 'metal-louvers'],
    relatedProjects: [
      {
        id: 'taipower-changhua-data-center',
        title: '台電(彰化)雲端資料處理中心',
        buildingType: '公共工程',
        systemUsed: '客製造型鋁包板收邊與帷幕立面',
        image: '/src/assets/images/roof_accessories_set_1789547523831.jpg'
      },
      {
        id: 'flagship-showroom',
        title: '頂級豪車旗艦中心立面工程',
        buildingType: '交通與商業',
        systemUsed: '開放式乾掛氟碳鋁複合板帷幕',
        image: '/src/assets/images/roof_steel_tile_1789547590738.jpg'
      }
    ],

    ctaTitle: '取得鋁複合板報價與建議',
    ctaDesc: '提供立面分割圖或設計圖說，強實工程團隊為您評估最精準的板材分割與吊掛工法。'
  },

  // 04 鈦鋅板
  {
    id: 'titanium-zinc',
    name: '鈦鋅板',
    enName: 'Titanium Zinc Sheet',
    h1: '鈦鋅板｜特殊金屬建材規格與加工方式',
    heroDesc: '天然自癒氧化保護層與百年耐久壽命，隨時光淬鍊出優雅沉穩的藍灰質感，為高端地標建築首選。',
    heroImage: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg',
    
    featureH2: '鈦鋅板與鋅鋁板材質特性',
    featureDesc: '純度高達 99.995% 的精煉鋅，添加微量鈦與銅元素熔煉而成。表面接觸大氣後會自然形成緻密碳酸鋅鈍化層，具備自我修復輕微刮痕的神奇特性。',
    featureImage: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg',
    featureBullets: [
      '天然氧化自癒：表面鈍化層隨時間熟成，能修復細微刮痕，終生免塗裝保養。',
      '超長使用壽命：在正常大氣環境下使用年限可達 80 至 100 年以上。',
      '極佳延展塑形：常溫下可靈活捲曲、壓延與折疊，能契合任何複雜雙曲面。',
      '環保綠建材：100% 可回收再利用，無毒性物質揮發，符合永續建築標準。'
    ],

    specialType: 'zinc_vs_galvalume',
    specialData: {
      title: '鈦鋅板 vs 鍍鋁鋅彩鋼材質對比',
      desc: '深入解析頂級天然金屬與塗層鋼板的本質差異。',
      items: [
        { label: '表面防護機制', value: '鈍化層自然再生（永久）', desc: '彩鋼：依賴人工化學塗層防護' },
        { label: '耐久年限', value: '80 ~ 100 年以上', desc: '彩鋼：約 20 ~ 30 年需翻修' },
        { label: '外觀隨時間變化', value: '自然熟成天鵝絨霧面藍灰', desc: '彩鋼：維持出廠顏色，後期稍粉化' },
        { label: '雙曲面成形性', value: '極佳延展性，可自由手工咬合', desc: '彩鋼：成型彈性適中，靠機械折邊' }
      ]
    },

    specH2: '鈦鋅板規格與加工方式',
    specTable: {
      headers: ['規格項目', '標準參數規格', '加工工法說明'],
      rows: [
        ['標準厚度', '0.7 mm / 0.8 mm / 1.0 mm', '立面推薦 0.7~0.8mm，屋面推薦 0.8mm'],
        ['板材寬度', '500 mm / 600 mm / 670 mm', '配合雙咬合或單咬合機具成型'],
        ['表面色澤', '原色亮面 / 預鈍化石墨灰 / 石板灰', '預鈍化出廠即可呈現均勻沉穩灰色調'],
        ['接合工法', '雙立邊咬合 (Double Standing Seam)', '隱藏式固定扣座，容許金屬熱脹冷縮'],
        ['底層構造', '中空通風抗冷凝網墊 + 透氣防水膜', '必備通風層以排洩背面冷凝水氣']
      ]
    },
    applications: [
      { title: '特殊幾何屋頂', desc: '雙曲面、圓弧穹頂與不規則流線造型。' },
      { title: '高端文化場館', desc: '自然斑駁質感，營造深厚人文歷史氣息。' },
      { title: '頂級私人莊園', desc: '歷久彌新的天然金屬皮層，免除日後油漆維護。' }
    ],

    appH2: '鈦鋅板建築應用與外觀設計',
    appPhotos: [
      {
        title: '市立文化藝術中心雙曲面屋面',
        desc: '以立邊雙重咬合精工鋪設，流動起伏的石墨灰板塊與自然景致融為一體。',
        image: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg'
      },
      {
        title: '當代精品會所立面鱗片工法',
        desc: '菱形鈦鋅板塊層層交疊，在自然光影照拂下映射細膩金屬微光。',
        image: '/src/assets/images/wall_coating_work_1789547612563.jpg'
      }
    ],

    relatedProductIds: ['aluminum-composite', 'anodized-aluminum', 'steel-tile'],
    relatedProjects: [
      {
        id: 'civic-center-roof',
        title: '新北市立圖書館文化地標',
        buildingType: '公共文化工程',
        systemUsed: '德國進口鈦鋅板雙重立邊咬合系統',
        image: '/src/assets/images/anodized_aluminum_1789547570311.jpg'
      },
      {
        id: 'private-villa-facade',
        title: '陽明山私人莊園頂級金屬外飾面',
        buildingType: '私人建案',
        systemUsed: '鈦鋅板菱形鱗片瓦手工包覆',
        image: '/src/assets/images/color_steel_detail_1789547480465.jpg'
      }
    ],

    ctaTitle: '取得鈦鋅板報價與建議',
    ctaDesc: '鈦鋅板需搭配專屬通風襯墊與膨脹滑動扣件，歡迎提供圖面與我們討論加工收邊細節。'
  },

  // 05 氧化鋁合金板
  {
    id: 'anodized-aluminum',
    name: '氧化鋁合金板',
    enName: 'Anodized Aluminum Alloy Plate',
    h1: '氧化鋁合金板｜陽極處理鋁合金建材',
    heroDesc: '電化學陽極氧化生成堅硬微米氧化鋁皮膜，展現純粹深邃的金屬本質光澤與卓越的耐刮防腐蝕性能。',
    heroImage: '/src/assets/images/anodized_aluminum_1789547570311.jpg',
    
    featureH2: '陽極處理鋁合金板產品特性',
    featureDesc: '不同於一般烤漆僅覆蓋於表面，陽極氧化是讓鋁材表面長出硬質透明氧化晶體層，與鋁基材融為一體，徹底杜絕起泡、脫漆與邊緣白鏽問題。',
    featureImage: '/src/assets/images/anodized_aluminum_1789547570311.jpg',
    featureBullets: [
      '天然金屬光澤：呈現獨特的金屬立體折射質感，非傳統化學油漆塗料所能比擬。',
      '高莫氏硬度：氧化皮膜硬度媲美藍寶石，具備極高耐磨耐刮磨擦防護能力。',
      '絕不剝離粉化：氧化層即為金屬本身分子晶格，無漆膜老化剝落風險。',
      '抗指紋抗靜電：特殊封孔技術不易附著灰塵指紋，雨水沖刷即可自然潔淨。'
    ],

    specH2: '氧化鋁合金板規格與系統搭配',
    specTable: {
      headers: ['規格項目', '一般規格參數', '工法備註'],
      rows: [
        ['合金牌號', 'AA 5005 / AA 5052 陽極專用鋁合金板', '晶粒細緻確保色澤均勻'],
        ['板材厚度', '1.5 mm / 2.0 mm / 2.5 mm / 3.0 mm', '帷幕常用 2.5mm ~ 3.0mm 單層板'],
        ['皮膜厚度', 'AA15 (15μm) / AA20 (20μm) / AA25 (25μm)', '戶外建築外牆規範 AA20 以上'],
        ['外觀色系', '本色霧銀 / 香檳金 / 琥珀銅 / 古銅黑 / 鈦金', '光學干涉著色，持久耐曬不褪色'],
        ['固定系統', '單層鋁板密閉折邊 / 螺栓背栓式乾掛懸吊', '背部加裝鋁合金加強肋確保平整']
      ]
    },
    applications: [
      { title: '企業研發大樓', desc: '簡約純粹的高科技金屬立面，沉穩低調。' },
      { title: '捷運高鐵車站', desc: '高人流量穿堂天花與牆面，抗刮耐撞擊。' },
      { title: '建築遮陽百葉', desc: '陽光下金屬反光柔和自然，不起刺眼眩光。' }
    ],

    appH2: '氧化鋁合金板建築應用',
    appPhotos: [
      {
        title: '科技研發總部金屬帷幕',
        desc: '3.0mm 本色陽極氧化鋁板搭配深色縫線，展現精密工業設計的極致質感。',
        image: '/src/assets/images/frp_skylight_roof_1789547542265.jpg'
      },
      {
        title: '大眾運輸樞紐大廳立面包覆',
        desc: '香檳色陽極處理金屬柱面包覆，長期維持嶄新光亮，極易清潔維護。',
        image: '/src/assets/images/metal_louvers_facade_1789547511954.jpg'
      }
    ],

    relatedProductIds: ['aluminum-composite', 'titanium-zinc', 'metal-louvers'],
    relatedProjects: [
      {
        id: 'taipower-changhua-data-center',
        title: '台電(彰化)雲端資料處理中心',
        buildingType: '公共工程',
        systemUsed: '陽極氧化鋁合金收邊包角與格柵',
        image: '/src/assets/images/metal_roof_construction_1789545922655.jpg'
      },
      {
        id: 'flagship-showroom',
        title: '頂級豪車旗艦中心立面工程',
        buildingType: '交通與商業',
        systemUsed: '陽極處理金屬外牆與迎賓大門雨庇',
        image: '/src/assets/images/metal_wall_fire_system_1789545864095.jpg'
      }
    ],

    ctaTitle: '取得氧化鋁合金板報價與建議',
    ctaDesc: '請提供立面展開尺寸與色樣需求，我們提供陽極氧化樣板比對與節點設計支援。'
  },

  // 06 屋頂鋼瓦系統
  {
    id: 'steel-tile',
    name: '屋頂鋼瓦系統',
    enName: 'Stone-Coated Steel Roofing Tile',
    h1: '屋頂鋼瓦系統｜金屬屋瓦材料介紹',
    heroDesc: '融合傳統瓦片典雅立體造型與高張力鋼板的輕量堅韌，具備抗強震、耐強風與絕不破碎脫落優勢。',
    heroImage: '/src/assets/images/roof_steel_tile_1789547590738.jpg',
    
    featureH2: '金屬屋瓦材料特色',
    featureDesc: '核心以耐蝕鍍鋁鋅鋼板沖壓成立體瓦型，外覆天然高溫燒結玄武岩彩砂與耐候丙烯酸樹脂，抗候吸音且外觀如陶瓦般厚實沉穩。',
    featureImage: '/src/assets/images/roof_steel_tile_1789547590738.jpg',
    featureBullets: [
      '超輕量化：重量僅為傳統水泥瓦或陶土瓦的 1/6，大幅減輕地震屋頂搖晃慣性。',
      '抗風不脫落：採用水平交叉互鎖與側向打釘工法，抗風力可抵禦 17 級超強颱風。',
      '彩砂降噪：天然彩砂表面粗糙多孔，能有效吸收暴雨打擊金屬板產生的噪音。',
      '絕不破裂：高強度鋼板基材，施工踩踏或地震強震皆不會斷裂漏水。'
    ],

    specH2: '屋頂鋼瓦系統規格與應用範圍',
    specTable: {
      headers: ['規格項目', '標準瓦型規格', '備註說明'],
      rows: [
        ['基底鋼材', '0.40 mm ~ 0.50 mm 鍍鋁鋅高張力鋼板 (GL)', '防腐性能超越普通鍍鋅 4 倍'],
        ['表面防護', '天然高溫陶瓷燒結彩石顆粒 + 抗紫外線壓克力面漆', '長效保色不脫落'],
        ['片材尺寸', '長約 1340 mm × 寬約 420 mm (有效約 1280×370 mm)', '雙向搭接鎖固'],
        ['整體重量', '約 6.5 ~ 7.0 kg / ㎡ (傳統陶瓦約 45 kg/㎡)', '輕盈安全符合耐震規範'],
        ['適用屋面坡度', '坡度 15° (約 3/10) 以上之斜屋頂', '各類歐式、日式、木構與鋼構斜屋面']
      ]
    },
    applications: [
      { title: '度假渡假村別墅', desc: '重現陶瓦典雅韻味，輕量免除瓦片掉落風險。' },
      { title: '老舊屋頂換瓦翻修', desc: '可直接覆蓋於既有舊瀝青瓦或石綿瓦上，免拆除。' },
      { title: '校園與公有斜屋頂', desc: '抗強風抗豪雨，具備數十年長效免保養優勢。' }
    ],

    appH2: '金屬屋瓦屋頂應用案例',
    appPhotos: [
      {
        title: '高山休閒渡假山莊斜屋頂工程',
        desc: '採用羅馬深灰立體鋼瓦，兼顧強風豪雪氣候考驗與歐式莊園美學。',
        image: '/src/assets/images/renovation_before_after_1789545891892.jpg'
      },
      {
        title: '日式禪風文化園區斜屋面換裝',
        desc: '典雅黑色鋼瓦搭配精緻收邊脊瓦，呈現純粹工藝美感且無脫落顧慮。',
        image: '/src/assets/images/roof_accessories_set_1789547523831.jpg'
      }
    ],

    relatedProductIds: ['color-steel', 'titanium-zinc', 'roof-accessories'],
    relatedProjects: [
      {
        id: 'mountain-resort-roof',
        title: '宜蘭山林渡假生態園區',
        buildingType: '休閒觀光設施',
        systemUsed: '彩石金屬屋頂鋼瓦系統搭配防潮墊層',
        image: '/src/assets/images/roof_steel_tile_1789547590738.jpg'
      },
      {
        id: 'civic-center-roof',
        title: '新北市立圖書館文化地標',
        buildingType: '公共文化工程',
        systemUsed: '斜屋面金屬屋面系統工程',
        image: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg'
      }
    ],

    ctaTitle: '取得屋頂鋼瓦系統報價與建議',
    ctaDesc: '無論是自地自建斜屋頂規劃，或老舊泥瓦漏水全面翻修，強實為您提供專業瓦量計算與配件清單。'
  },

  // 07 FRP 採光板
  {
    id: 'frp-skylight',
    name: 'FRP 採光板',
    enName: 'FRP Translucent Skylight Sheet',
    h1: 'FRP採光板｜耐候透光建材應用介紹',
    heroDesc: '玻璃纖維強化高分子透光板，漫射柔和自然光線，大幅降低日間照明電力消耗，兼具高強度抗衝擊性。',
    heroImage: '/src/assets/images/frp_skylight_roof_1789547542265.jpg',
    
    featureH2: 'FRP採光板耐候與透光特性',
    featureDesc: '採用不飽和聚酯樹脂融合無鹼玻璃纖維氈高溫固化成型，表面複合耐候抗 UV 薄膜，透光率高且光線漫射均勻，不會在室內產生刺眼光斑。',
    featureImage: '/src/assets/images/frp_skylight_roof_1789547542265.jpg',
    featureBullets: [
      '均勻漫射光線：散射光線使室內明亮柔和無陰影，工作環境舒適不刺眼。',
      '有效阻絕紫外線：表面抗 UV 塗層隔離 99% 紫外線，防止室內物品曬黃褪色。',
      '與金屬浪板同模：波型尺寸與彩鋼浪板精準咬合吻合，接合施工零公差防漏水。',
      '高耐衝擊防裂：纖維交織網狀結構，抗冰雹砸擊與高空輕微掉落物撞擊。'
    ],

    specialType: 'frp_transmission',
    specialData: {
      title: 'FRP 採光自然漫射示意',
      desc: '將刺眼直射陽光轉化為全方位均勻的柔和散射光線。',
      items: [
        { label: '自然透光率', value: '65% ~ 80%', desc: '充足日間照度，有效省電節能' },
        { label: '紫外線阻隔率', value: '99% 以上', desc: '保護室內生產線設備與物料' },
        { label: '熱傳導率', value: '0.15 ~ 0.20 W/m·K', desc: '比普通單層玻璃阻熱效果佳' },
        { label: '耐溫工作範圍', value: '-40℃ ~ +120℃', desc: '高低溫環境下不起泡不變形脆化' }
      ]
    },

    specH2: 'FRP採光板規格與應用範圍',
    specTable: {
      headers: ['規格項目', '標準參數規格', '說明備註'],
      rows: [
        ['厚度選擇', '1.2 mm / 1.5 mm / 2.0 mm / 2.5 mm', '工業屋頂通常採用 1.5mm / 2.0mm'],
        ['板型規格', '與各大廠彩色鋼板（四溝、五溝、浪板等）同模', '可完美縱向橫向重疊密合'],
        ['顏色選擇', '乳白色（漫射柔光最佳）/ 湖水藍 / 透明色', '乳白漫射型最推薦工業廠房採用'],
        ['耐候防護', '雙面複合抗老化 DuPont Melinex 膠膜', '防止纖維裸露與黃化老化'],
        ['防火等級', '阻燃一級 / 阻燃二級（氧指數 ≥ 30）', '可客製符合消防標準之阻燃規格']
      ]
    },
    applications: [
      { title: '大型物流中心屋頂', desc: '帶狀連續配置，滿足日間大面積作業採光。' },
      { title: '高科技鋼構廠房', desc: '穿插於彩鋼板間，大幅縮減室內工廠照明能耗。' },
      { title: '溫室農牧遮雨設施', desc: '光照均勻穿透，提供動植物適宜的生長光環境。' }
    ],

    appH2: 'FRP採光板採光應用案例',
    appPhotos: [
      {
        title: '自動化物流中心帶狀天窗系統',
        desc: '採光板與直立鎖邊屋頂完美整合，室內無需開啟高功率水銀燈具即可明亮作業。',
        image: '/src/assets/images/frp_skylight_roof_1789547542265.jpg'
      },
      {
        title: '重工製造廠房屋頂天幕',
        desc: '均勻光線灑落於機械生產線，消除陰影提高作業精度與工地安全。',
        image: '/src/assets/images/wall_coating_work_1789547612563.jpg'
      }
    ],

    relatedProductIds: ['color-steel', 'sandwich-panel', 'roof-accessories'],
    relatedProjects: [
      {
        id: 'logistics-smart-hub',
        title: '桃園智慧冷鏈物流轉運中心',
        buildingType: '物流倉儲',
        systemUsed: '連續式 FRP 耐候採光天幕搭配彩鋼屋面',
        image: '/src/assets/images/anodized_aluminum_1789547570311.jpg'
      },
      {
        id: 'industrial-machine-plant',
        title: '台中精密機械產業園區廠房',
        buildingType: '工業廠房',
        systemUsed: '屋頂乳白高漫射 FRP 採光板帶',
        image: '/src/assets/images/color_steel_detail_1789547480465.jpg'
      }
    ],

    ctaTitle: '取得 FRP 採光板報價與建議',
    ctaDesc: '請提供搭配的鋼板板型型號與預計採光率面積，我們將計算最合適的採光板厚度與固定五金配件。'
  },

  // 08 金屬隔柵
  {
    id: 'metal-louvers',
    name: '金屬隔柵',
    enName: 'Architectural Metal Louver System',
    h1: '金屬隔柵｜建築通風遮陽格柵系統',
    heroDesc: '兼具節能遮陽、自然通風與俐落光影立面美學，為現代商用綠建築外觀設計的關鍵機能構件。',
    heroImage: '/src/assets/images/metal_louvers_facade_1789547511954.jpg',
    
    featureH2: '金屬隔柵通風與遮陽功能',
    featureDesc: '利用幾何鋁合金擠型或金屬折板，依太陽日照軌跡精密計算遮陽角度，在引進充足自然對流通風的同時，有效阻隔烈日直接輻射熱。',
    featureImage: '/src/assets/images/metal_louvers_facade_1789547511954.jpg',
    featureBullets: [
      '降低建築空調能耗：物理阻絕高達 70% 的太陽輻射熱，顯著減少冷氣負載。',
      '維持優良空氣對流：百葉幾何間隙促進熱氣自然上升排出，保持設備通風。',
      '遮蔽設備美化立面：完美隱藏頂樓冷卻水塔、空調室外機與管線管道。',
      '豐富建築光影層次：日光隨時間角度移動，於室內與外牆投射豐富的韻律光影。'
    ],

    specialType: 'louver_diagram',
    specialData: {
      title: '遮陽百葉節能運作機能',
      desc: '依照太陽仰角阻擋夏日強烈斜射直光，導入冬日低角暖陽與全天候自然通風。',
      items: [
        { label: '夏日高角烈陽', value: '完全遮擋', desc: '阻斷紫外線與高熱穿透玻璃' },
        { label: '自然漫射採光', value: '柔和導入', desc: '維持室內自然明亮度' },
        { label: '氣流自然循環', value: '暢行無阻', desc: '帶走外牆表面聚集的蓄熱' },
        { label: '外觀設備遮蔽', value: '100% 視覺隱蔽', desc: '美化機房通風百葉排氣口' }
      ]
    },

    specH2: '金屬隔柵規格與設計搭配',
    specTable: {
      headers: ['規格項目', '標準參數規格', '設計備註'],
      rows: [
        ['材質選用', '6063-T5 建築級鋁合金擠型 / 鍍鋅鋼板折件', '抗拉強度高，結構剛性優良'],
        ['葉片斷面', '梭型（紡錘形）/ 機翼型 / 矩形管 / L型防雨百葉', '提供水平橫向或垂直縱向配置'],
        ['表面處理', 'PVDF 氟碳烤漆 / 粉體烤漆 / 陽極氧化處理', '豐富木紋轉印或特殊金屬純色可選'],
        ['控制型式', '固定式角度 / 連動手動可調式 / 電腦智慧電動旋轉', '電動系統可串聯天候日照感測系統'],
        ['安裝結構', '結構懸臂支架 + 鋁合金轉接座組裝', '通過風洞模擬測試抗風壓設計']
      ]
    },
    applications: [
      { title: '大型商辦玻璃帷幕外側', desc: '減少大面積玻璃直射熱能，提升室內人員舒適度。' },
      { title: '屋頂設備機房遮蔽', desc: '滿足冷卻散熱排風需求，同時整體美化天際線。' },
      { title: '立體停車場外牆', desc: '高開孔率促進廢氣流通排散，防範豪雨斜潑入內。' }
    ],

    appH2: '金屬隔柵建築應用案例',
    appPhotos: [
      {
        title: '企業研發總部外掛遮陽帷幕',
        desc: '垂直排列之梭型氟碳鋁百葉，營造隨光線變幻的現代科技速度感。',
        image: '/src/assets/images/metal_louvers_facade_1789547511954.jpg'
      },
      {
        title: '公共文化展館頂樓機房遮蔽',
        desc: '水平幾何格柵與主結構無縫銜接，兼具強大排風機能與純粹極簡立面。',
        image: '/src/assets/images/frp_skylight_roof_1789547542265.jpg'
      }
    ],

    relatedProductIds: ['aluminum-composite', 'anodized-aluminum', 'titanium-zinc'],
    relatedProjects: [
      {
        id: 'taipower-changhua-data-center',
        title: '台電(彰化)雲端資料處理中心',
        buildingType: '公共工程',
        systemUsed: '機房通風百葉系統與客製鋁格柵外立面',
        image: '/src/assets/images/metal_louvers_facade_1789547511954.jpg'
      },
      {
        id: 'flagship-showroom',
        title: '頂級豪車旗艦中心立面工程',
        buildingType: '交通與商業',
        systemUsed: '高質感金屬水平遮陽隔柵系統',
        image: '/src/assets/images/metal_roof_construction_1789545922655.jpg'
      }
    ],

    ctaTitle: '取得金屬隔柵報價與建議',
    ctaDesc: '請提供立面設計圖或開孔排風率要求，強實技術團隊將為您計算抗風受力與最優遮陽間距。'
  },

  // 09 屋頂週邊配件
  {
    id: 'roof-accessories',
    name: '屋頂週邊配件',
    enName: 'Roofing Fasteners & Flashing Accessories',
    h1: '屋頂週邊配件｜金屬屋頂系統配套五金',
    heroDesc: '高品質收邊包角、自攻防腐螺絲、天溝落水系統與抗風固定座，為確保金屬屋頂 30 年不漏水的隱形守護者。',
    heroImage: '/src/assets/images/roof_accessories_set_1789547523831.jpg',
    
    featureH2: '金屬屋頂系統配套五金介紹',
    featureDesc: '屋頂漏水超過 90% 發生在收邊接縫與扣件穿透點。強實企業提供全套原廠級別之高品質配件，從螺絲防腐塗層到耐候 EPDM 橡膠墊圈，處處講究。',
    featureImage: '/src/assets/images/roof_accessories_set_1789547523831.jpg',
    featureBullets: [
      'Class 4 頂級防腐螺絲：通過 1500 小時以上鹽霧試驗，絕不因螺絲生鏽導致鋼板穿孔。',
      '耐候 EPDM 密封壓墊：耐高低溫老化與紫外線，長效受壓不硬化龜裂。',
      '客製成型收邊包角：山牆、屋脊、簷口皆採用同材質同色澤鋼板折壓成型。',
      '大容量不鏽鋼排水天溝：精密水力坡度計算，徹底排出暴雨巨量逕流水。'
    ],

    specialType: 'roof_accessory_map',
    specialData: {
      title: '屋頂系統關鍵配件安裝節點分佈',
      desc: '完整的防水防護網絡，需仰賴各專用配件在關鍵位置的緊密配合。',
      items: [
        { label: '屋脊交界處', value: '透氣型屋脊蓋板 + 防蟲阻水透氣網', desc: '排出屋頂濕熱氣，阻擋雨水回灌' },
        { label: '女兒牆與山牆', value: '兩道式泛水收邊板 + 耐候矽膠填縫', desc: '阻斷強風側吹滲透' },
        { label: '浪板穿透緊固', value: '自鑽自攻螺絲 (Class 4 塗層) + 帶墊片', desc: '鎖固均勻不傷鋼板表面保護膜' },
        { label: '屋簷排水區', value: 'SUS 304 不鏽鋼天溝 + 弧形支撐托架', desc: '防止排水溢流與強風下垂變形' }
      ]
    },

    specH2: '屋頂週邊配件規格與系統搭配',
    specTable: {
      headers: ['配件類別', '主要品項名稱', '材料規格與特點'],
      rows: [
        ['緊固扣件', '雙金屬複合自攻螺絲 / 暗扣滑動座', 'Austenitic 304 不銹鋼頭 + 碳鋼硬化鑽尾，超強防腐'],
        ['收邊構件', '屋脊包板 / 山牆泛水板 / 簷口包角', '與屋面主材同色 0.5~0.6mm PVDF 鍍鋁鋅鋼板折製'],
        ['防水密封', '三元乙丙 (EPDM) 發泡填縫膠條 / 丁基雙面膠帶', '高彈性耐老化，長效填補波峰波谷空隙'],
        ['排水系統', '不鏽鋼天溝 / 落水頭 / 喇叭落水斗', '厚度 1.0mm ~ 1.5mm SUS304 / 316 耐腐蝕不鏽鋼'],
        ['通風安全', '屋脊散熱氣樓 / 高空防墜生命線基座', '與鋼瓦直立鎖邊無穿透夾扣安裝']
      ]
    },
    applications: [
      { title: '新設鋼構廠房金屬屋面', desc: '提供全套同品牌同批號收邊配件，色澤完全一致。' },
      { title: '老舊屋頂漏水補強', desc: '更換老化生鏽螺絲與劣化矽利康，加裝防滲泛水板。' },
      { title: '加裝屋頂太陽能支架', desc: '採用專用鋁合金無穿孔夾扣件，不破壞屋面板材保固。' }
    ],

    appH2: '屋頂系統完整配套應用',
    appPhotos: [
      {
        title: '精密天溝與山牆收邊完工實例',
        desc: '平整細緻的雙層不鏽鋼排水系統，結合無外露螺絲的暗扣包角收邊工法。',
        image: '/src/assets/images/roof_accessories_set_1789547523831.jpg'
      },
      {
        title: '大型科技廠房直立鎖邊夾扣系統',
        desc: '於屋面立邊採用專用夾扣安裝支架，零鑽孔保護屋頂長年水密完整性。',
        image: '/src/assets/images/metal_wall_fire_system_1789545864095.jpg'
      }
    ],

    relatedProductIds: ['color-steel', 'sandwich-panel', 'steel-tile'],
    relatedProjects: [
      {
        id: 'taipower-changhua-data-center',
        title: '台電(彰化)雲端資料處理中心',
        buildingType: '公共工程',
        systemUsed: '全客製金屬折板泛水收邊與暗扣系統',
        image: '/src/assets/images/renovation_before_after_1789545891892.jpg'
      },
      {
        id: 'industrial-machine-plant',
        title: '台中精密機械產業園區廠房',
        buildingType: '工業廠房',
        systemUsed: '不銹鋼大流量排水天溝與防颱抗風配件',
        image: '/src/assets/images/roof_accessories_set_1789547523831.jpg'
      }
    ],

    ctaTitle: '取得屋頂週邊配件報價與建議',
    ctaDesc: '請告知您現有的屋頂板型與工程需求，我們為您配置全套耐候五金、收邊折板與密封耗材。'
  },

  // 10 外牆塗料系統
  {
    id: 'wall-coating',
    name: '外牆塗料系統',
    enName: 'Architectural Metal Protective Coating System',
    h1: '外牆塗料系統｜金屬外牆專用防護塗料',
    heroDesc: '專為金屬浪板、浪型外牆與老舊廠房翻新研發之高科技防鏽隔熱彈性防護塗層，徹底阻隔腐蝕並降溫節能。',
    heroImage: '/src/assets/images/wall_coating_work_1789547612563.jpg',
    
    featureH2: '金屬外牆專用塗裝特性',
    featureDesc: '包含底層高滲透金屬專用除鏽防蝕底漆、中層高彈性高反射中塗隔熱層，以及頂層抗紫外線自潔防塵面漆，賦予舊金屬外牆嶄新壽命。',
    featureImage: '/src/assets/images/wall_coating_work_1789547612563.jpg',
    featureBullets: [
      '熱反射隔熱降溫：太陽日光全反射率達 85% 以上，顯著降低浪板表面溫度達 15~25℃。',
      '高效化學防鏽蝕：特殊環氧鋅粉底漆轉化鏽蝕並阻斷氧氣水氣，根絕老舊鐵皮氧化。',
      '超高彈性不龜裂：斷裂伸長率超過 300%，能完全吸收金屬因晝夜熱脹冷縮之變形拉扯。',
      '耐水耐酸雨侵蝕：具備強大緻密防水膜，有效抵抗工業區酸雨與沿海高鹽分腐蝕。'
    ],

    specialType: 'coating_before_after',
    specialData: {
      title: '廠房金屬屋頂外牆塗裝翻新成效',
      desc: '免拆除原鐵皮，以水性高分子防腐隔熱系統施工，外觀煥然一新且大幅降溫。',
      items: [
        { label: '施工前（老舊鐵皮）', value: '表面鏽蝕斑駁、漏水點多、夏季高溫達 65℃', desc: '室內空調電力耗費龐大' },
        { label: '施工後（專用塗層）', value: '純白純淨高反射、全無滲水、金屬表面溫降至 38℃', desc: '室內降溫 4~7℃，延長建物 10~15 年壽命' }
      ]
    },

    specH2: '外牆塗料系統規格與適用範圍',
    specTable: {
      headers: ['塗層道數', '塗料種類與工法', '塗膜乾膜厚度 / 功能'],
      rows: [
        ['第一道：基底防鏽', '高滲透改性環氧防鏽底漆 / 鏽轉化劑', '40 ~ 50 μm（鈍化鋼板鏽斑，提供強大附著力）'],
        ['第二道：隔熱中塗', '水性中空陶瓷微粒隔熱降溫彈性塗料', '100 ~ 150 μm（高效阻斷熱傳導，填補微裂縫隙）'],
        ['第三道：耐候面漆', '脂肪族聚氨酯面漆 / 水性氟碳自潔保護面漆', '50 ~ 60 μm（高耐候抗 UV、耐酸雨、耐沾污）'],
        ['適用基材', '各類鍍鋅鋼板、彩鋼浪板、鋁合金板、不鏽鋼', '新設工廠防腐塗裝或老舊廠房拉皮翻新'],
        ['環保規範', '低 VOC 水性環保無毒配方', '施工無刺鼻溶劑異味，室內人員無須疏散撤離']
      ]
    },
    applications: [
      { title: '老舊工業廠房屋頂降溫', desc: '大幅降低夏季廠房內部悶熱，提高員工工作效率。' },
      { title: '化學工業園區防腐蝕', desc: '耐酸鹼抗化學氣體煙霧侵蝕，避免板材提早穿孔報廢。' },
      { title: '舊商辦外觀改色翻新', desc: '免除拆除外牆的大筆費用與揚塵，快速升級外觀質感。' }
    ],

    appH2: '金屬外牆塗料應用與防護',
    appPhotos: [
      {
        title: '大型傳產廠房金屬外壁噴塗翻新',
        desc: '採用高壓無氣噴塗設備，施工快速且均勻包覆所有浪型起伏與螺絲接點。',
        image: '/src/assets/images/wall_coating_work_1789547612563.jpg'
      },
      {
        title: '沿海工業區防蝕保護塗裝工程',
        desc: '全套重防蝕塗裝系統，提供金屬建築抵禦強烈海風鹽霧的絕佳屏障。',
        image: '/src/assets/images/roof_steel_tile_1789547590738.jpg'
      }
    ],

    relatedProductIds: ['color-steel', 'sandwich-panel', 'roof-accessories'],
    relatedProjects: [
      {
        id: 'renovation-plant-facade',
        title: '新竹老舊傳產廠辦節能改造',
        buildingType: '工業廠房翻新',
        systemUsed: '水性高反射隔熱防水塗料系統',
        image: '/src/assets/images/titanium_zinc_wall_1789547498027.jpg'
      },
      {
        id: 'industrial-machine-plant',
        title: '台中精密機械產業園區廠房',
        buildingType: '工業廠房',
        systemUsed: '重防腐外牆面漆保護工程',
        image: '/src/assets/images/wall_coating_work_1789547612563.jpg'
      }
    ],

    ctaTitle: '取得外牆塗料系統報價與建議',
    ctaDesc: '請提供現場浪板鏽蝕狀況與施工面積，我們將為您規劃最適用的除鏽底漆與隔熱降溫工法。'
  }
];

export function getProductById(id: string): ProductItemData | undefined {
  return PRODUCTS_LIST.find((p) => p.id === id);
}
