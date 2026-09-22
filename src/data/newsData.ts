export interface NewsArticle {
  id: string;
  date: string;
  category: '工程實績' | '新品發佈' | '企業動態' | '技術研討';
  title: string;
  subtitle?: string;
  desc: string;
  coverImage: string;
  gallery?: string[];
  author?: string;
  readTime?: string;
  content: {
    lead: string;
    sections: {
      heading?: string;
      paragraphs: string[];
      image?: string;
      caption?: string;
      bulletPoints?: string[];
    }[];
  };
  tags: string[];
  relatedMethodId?: string;
  relatedPortfolioId?: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'tech-park-a-facade-completion',
    date: '2024-05-12',
    category: '工程實績',
    title: '科技園區 A 廠辦大樓金屬外牆帷幕工程圓滿完工驗收',
    subtitle: '高規格微氣候雙層外牆系統 打造低碳節能智慧廠辦立面',
    desc: '本案採用雙層微氣候通風外牆系統，結合高耐候氟碳烤漆複合鋁板與企口鋼板，有效降低室內空調能耗達28%，展現強實企業在大型高科技廠辦外覆工程的卓越執行力。',
    coverImage: '/src/assets/images/metal_louvers_facade_1789547511954.jpg',
    gallery: [
      '/src/assets/images/metal_roof_construction_1789545922655.jpg',
      '/src/assets/images/metal_wall_fire_system_1789545864095.jpg',
      '/src/assets/images/renovation_before_after_1789545891892.jpg'
    ],
    author: '強實企業 工程技術專案組',
    readTime: '4 分鐘閱讀',
    tags: ['外牆工程', '廠辦大樓', '微氣候通風', '氟碳烤漆鋁板', '工程驗收'],
    content: {
      lead: '歷經 14 個月的縝密規劃與嚴謹施工，坐落於新竹科學園區之科技園區 A 廠辦大樓金屬外牆帷幕新建工程，於本月初順利通過業主與監造單位之全數嚴苛性能測試，正式宣告圓滿完工驗收並移交業主進駐運營。',
      sections: [
        {
          heading: '工程背景與專案挑戰',
          paragraphs: [
            '本案建築外觀總面積超過 22,000 平方公尺，建築師設計理念強調流暢的幾何立面與現代科技質感。然而，基地鄰近沿海開闊地帶，常年面臨強勁季風與鹽霧侵蝕的極端考驗，對外牆構造的結構強度、耐風壓能級與耐候防蝕能力皆提出了前所未有的高規格技術門檻。',
            '強實團隊在工期初期即導入 BIM 建築資訊模型進行三維全景放樣，針對各轉角、天溝與帷幕節點進行毫米級精密受力分析與水密氣密模擬。'
          ]
        },
        {
          heading: '關鍵技術：雙層微氣候通風外牆技術整合',
          paragraphs: [
            '為達成綠建築黃金級標章標準，外牆全面採用強實團隊自主開發之「GB 系列雙層微氣候通風帷幕系統」。透過外層高耐候氟碳烤漆複合鋁板遮蔽直射強光，內層結合高密度斷熱保溫心材，於兩層構造間預留 80mm 之對流空氣層。',
            '此項構造設計能有效帶走太陽輻射熱能，經台大綠建築性能量測團隊實測，能有效降低夏季室內空調負荷達 28%，為企業客戶帶來顯著的能源費用節約效益。'
          ],
          bulletPoints: [
            '採用進口 PVDF 氟碳三塗三烤鋁複合板，保證 25 年不褪色、不粉化。',
            '無穿透式浮動扣件固定設計，徹底消除熱脹冷縮產生的立面形變與應力破壞。',
            '通過 ASTM E330 風壓測試達到 5,000 Pa（相當於抗 17 級超強颱風強度）。'
          ]
        },
        {
          heading: '追求極致工藝 樹立業界工程典範',
          paragraphs: [
            '「每一道接縫的平整度、每一個密封膠條的彈性年限，都關乎一座企業總部未來數十年的營運品質。」強實專案總監在驗收典禮上表示。強實企業始終堅持「科學工法、嚴選建材、匠心施工」之最高原則，未來將持續攜手各大建築師與業主，為台灣產業建築立面注入永續美學力量。'
          ]
        }
      ]
    }
  },
  {
    id: 'wind-resistant-roofing-system-launch',
    date: '2024-03-28',
    category: '新品發佈',
    title: '全新極端氣候專用「高抗風壓隱藏式屋頂系統」正式上市',
    subtitle: '抗風壓能級提升 40% 通過 ASTM E1592 國際權威實驗室測試',
    desc: '針對近年全球頻繁發生的極端強風降雨氣候，強實金屬建材研發中心歷時兩年推出新一代專利屋面系統，抗風壓能力大幅提升 40%，以無釘孔機械雙咬合專利技術徹底終結屋面滲水隱患。',
    coverImage: '/src/assets/images/roof_accessories_set_1789547523831.jpg',
    gallery: [
      '/src/assets/images/roof_steel_tile_1789547590738.jpg',
      '/src/assets/images/titanium_zinc_wall_1789547498027.jpg',
      '/src/assets/images/wall_coating_work_1789547612563.jpg'
    ],
    author: '強實企業 建材研發中心',
    readTime: '3 分鐘閱讀',
    tags: ['產品上市', '隱藏式屋頂', '抗風壓測試', 'ASTM E1592', '金屬屋面'],
    content: {
      lead: '面對全球極端氣候常態化，強颱強度與暴雨降雨量不斷刷新歷史紀錄，傳統固定釘穿透式或簡易卡扣屋頂系統面臨巨大的掀頂與滲水風險。強實建材研發中心今日隆重宣布，新一代「GB-Roof Master 極端抗風隱藏式立縫屋頂系統」正式在台上市。',
      sections: [
        {
          heading: '突破傳統瓶頸：360度機械立邊咬合工藝',
          paragraphs: [
            '本系統核心亮點在於捨棄任何外露自攻螺釘穿透金屬面板，全面採用獨家可滑動式熱膨脹固定座，面板邊緣透過專用電動咬合機現場進行 360 度雙重機械立邊鎖死（Double Lock Standing Seam）。',
            '即便遭遇連續 16 級以上的強烈陣風吹襲，立縫結構亦不會發生脫扣或位移，徹底解決傳統屋面釘孔橡膠圈日曬老化碎裂後引發的長年漏水頑疾。'
          ]
        },
        {
          heading: '權威認證：通過美國 ASTM E1592 嚴酷結構測試',
          paragraphs: [
            '在送交國家級風洞實驗室與國際認證機構測試中，本系統在動態風壓極限測試中錄得負風壓承載力超越 6,800 Pa 之傲人成績，相較於市售同級產品抗風強度提升逾 40%。'
          ],
          bulletPoints: [
            '板底預貼高分子防結露消音氈，大幅降低暴雨拍打室內噪音達 18dB。',
            '採用 55% 鍍鋁鋅高張力鋼板（G550），基材抗拉強度遠超一般結構建材。',
            '適用於大跨距工業廠房、物流倉儲、體育場館與公共運輸樞紐大坡度或平緩屋頂。'
          ]
        },
        {
          heading: '全方位技術支援與工程保固',
          paragraphs: [
            '強實企業即日起提供全台建築師與工程顧問事務所免費索取 CAD/BIM 剖面節點手冊與物理試樣板，並提供原廠長達 15 年之防水抗風工程保固承諾。'
          ]
        }
      ]
    }
  },
  {
    id: 'iso-14001-environmental-certification',
    date: '2024-01-15',
    category: '企業動態',
    title: '強實企業榮獲 ISO 14001:2015 國際環境管理系統認證',
    subtitle: '踐行 ESG 綠色施工承諾 邁向低碳金屬建築產業新標竿',
    desc: '為具體落實 ESG 企業永續發展與綠色低碳轉型目標，強實企業全面優化施工工法、廢料高比例回收機制與工區能耗管控，歷經嚴格審查，正式取得國際權威機構之 ISO 14001 環境管理體系認證。',
    coverImage: '/src/assets/images/anodized_aluminum_1789547570311.jpg',
    gallery: [
      '/src/assets/images/color_steel_detail_1789547480465.jpg',
      '/src/assets/images/frp_skylight_roof_1789547542265.jpg'
    ],
    author: '強實企業 永續發展委員會',
    readTime: '3 分鐘閱讀',
    tags: ['ISO 14001', 'ESG', '環境管理', '綠色施工', '企業永續'],
    content: {
      lead: '全球供應鏈對低碳足跡與綠色營造的要求與日俱增。強實企業在持續追求施工品質與技術突破的同時，始終將環境保護視為企業核心營運準則。日前，強實企業正式通過全球領先檢驗機構之嚴格複核，獲頒 ISO 14001:2015 環境管理系統認證證書。',
      sections: [
        {
          heading: '深植於全體員工日常的綠色實踐',
          paragraphs: [
            '此次 ISO 14001 認證涵蓋了金屬建材加工製造、工區物流調度、施工裝配程序至廢棄物回收再利用的完整生命週期。在推動認證的過程中，強實全體部門通力協作，針對施工各環節建立具體量化的碳排減量指標與環境風險評估機制。'
          ]
        },
        {
          heading: '具體落實三大環境友善政策',
          paragraphs: [
            '強實企業總經理在頒證儀式中強調：「取得認證不是終點，而是我們對土地與社會許下更堅定承諾的起點。」'
          ],
          bulletPoints: [
            '工地金屬裁切餘料回收率達到 98.5% 以上，落實鋼鋁建材完全循環再製。',
            '全面推行裝配式無火乾式工法，大幅減少施工現場噪音、揚塵與水污染。',
            '物流運輸最佳化排程系統，有效縮減專案運送里程與燃油排放量 15%。'
          ]
        },
        {
          heading: '攜手產業鏈夥伴共創永續未來',
          paragraphs: [
            '未來強實將進一步評估產品碳足跡（ISO 14067）與組織溫室氣體盤查（ISO 14064），協助更多半導體、高科技製造業及政府公共工程客戶達成淨零排放（Net Zero）願景。'
          ]
        }
      ]
    }
  },
  {
    id: 'taiwan-architecture-facade-forum-2023',
    date: '2023-11-20',
    category: '技術研討',
    title: '受邀出席「2023 台灣金屬建築帷幕與耐震科技高峰論壇」發表專題演講',
    subtitle: '分享次結構多維度微調抗震工法 獲得產學界熱烈迴響',
    desc: '強實技術長受邀於全國建築工程年會分享「高層金屬立面微調抗震結構與風洞試驗整合實務」，與國內外百餘位頂尖建築師與結構技師深入交流。',
    coverImage: '/src/assets/images/metal_louvers_facade_1789547511954.jpg',
    gallery: [
      '/src/assets/images/metal_roof_construction_1789545922655.jpg',
      '/src/assets/images/metal_wall_fire_system_1789545864095.jpg'
    ],
    author: '強實企業 技術發展處',
    readTime: '4 分鐘閱讀',
    tags: ['技術論壇', '耐震工法', '風洞試驗', '建築帷幕', '產學交流'],
    content: {
      lead: '由台灣建築學會與結構工程工會共同舉辦之「2023 台灣金屬建築帷幕與耐震科技高峰論壇」於台北圓滿落幕。強實企業技術團隊受邀擔任大會專題主講嘉賓，與來自全台逾三百位建築業界先進同場探討新一代金屬外牆之抗震與耐候新趨勢。',
      sections: [
        {
          heading: '抗震新思維：三維彈性位移吸收機構',
          paragraphs: [
            '台灣地處環太平洋地震帶，傳統外牆次結構鋼架在遭遇強烈地表震動時，常因剛性過大或缺少位移緩衝餘裕，導致金屬板面扭曲變形、螺栓剪斷甚至面板脫落傷人。',
            '強實團隊在演講中首次公開展示自主專利研發之「3D 浮動多向可微調抗震連接扣件」，此機構允許外牆板片在面內與面外產生精密控制之彈性微位移，在吸收地震層間變形角的同時，維持絕佳的水密與氣密連續性。'
          ]
        },
        {
          heading: '理論結合實務 獲廣泛好評',
          paragraphs: [
            '現場演講搭配多組實際大型廠辦抗震測試影片與風洞實驗室數據對比，引發諸多知名聯合建築師事務所主持建築師的高度興趣與熱烈提問。強實企業將持續透過技術分享與同業精進，共同提升台灣金屬營建工程的整體水準。'
          ]
        }
      ]
    }
  }
];
