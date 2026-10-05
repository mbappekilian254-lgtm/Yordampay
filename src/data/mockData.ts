import { Project, UserProfile, Contribution } from '../types';

export const INITIAL_USER: UserProfile = {
  id: 'usr_sarvar_01',
  name: 'Sarvar Olimov',
  email: 'sarvar.olimov@example.uz',
  role: 'donor',
  totalDonated: 2400000,
  projectsFundedCount: 4,
  beneficiariesImpacted: 127,
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj_school_comp_01',
    title: 'Maktab uchun 10 ta zamonaviy kompyuter va dasturlash sinfi',
    tagline: 'Yunusobod tumanidagi 272-sonli maktab o‘quvchilari uchun IT savodxonlik sinfini jihozlash',
    type: 'social',
    category: 'education',
    status: 'funding',
    location: {
      region: 'Toshkent shahri',
      city: 'Toshkent',
      mahalla: 'Yunusobod, Qadrdon mahallasi',
      coordinates: [41.365, 69.288]
    },
    organization: {
      name: '272-sonli umumta’lim maktabi Vasiylik kengashi',
      type: 'school',
      contactPerson: 'Gulnora Karimova',
      registrationNumber: 'V-2024-9182',
      phone: '+998 71 224-55-10'
    },
    imageUrl: '/src/assets/images/project_school_computers_1790947074384.jpg',
    requiredAmount: 25000000,
    raisedAmount: 19200000,
    supportersCount: 128,
    daysRemaining: 14,
    createdAt: '2026-09-01',
    
    problemStatement: '272-sonli maktabda 600 dan ortiq o‘quvchi ta’lim oladi. Maktabdagi eski kompyuterlar 2012-yilda o‘rnatilgan bo‘lib, zamonaviy dasturlash (Python, Web) va robototexnika darsliklarini yuklay olmaydi. O‘quvchilar amaliy IT ko‘nikmalarisiz qolmoqda.',
    whyItMatters: 'Zamonaviy bilim — bolalar uchun eng katta imkoniyat. 10 ta sifatli kompyuter haftasiga 342 nafar yuqori sinf o‘quvchisiga amaliy dasturlash va raqamli kasblarni o‘rganish imkonini beradi.',
    detailedDescription: 'Loyiha doirasida litsenziyalangan operatsion tizim va ta’lim dasturlariga ega 10 ta tizim bloki va monitorlar, maxsus ergonomik stollar va lokal tarmoq uskunasi o‘rnatiladi. Barcha xaridlar ochiq tijorat takliflari asosida amalga oshiriladi.',
    
    budget: [
      {
        id: 'b1',
        name: '10 ta kompyuter jamlanmasi (Core i5, 16GB, SSD 512GB, 24" IPS)',
        category: 'Uskunalar',
        plannedAmount: 18000000,
        spentAmount: 17200000,
        supplierName: 'SmartTech Solutions MCHJ (INN: 308492011)',
        receiptUrl: '/docs/invoices/comp_inv_01.pdf',
        verified: true,
        notes: 'Ulgurji narx bo‘yicha 800,000 so‘m tejaldi.'
      },
      {
        id: 'b2',
        name: 'Maxsus ergonomik kompyuter stollari va stullar (10 to‘plam)',
        category: 'Mebel va jihozlar',
        plannedAmount: 4000000,
        spentAmount: 4000000,
        supplierName: 'MebelServis Samara XK',
        receiptUrl: '/docs/invoices/furniture_inv_02.pdf',
        verified: true
      },
      {
        id: 'b3',
        name: 'Lokal tarmoq, xavfsiz elektr tarmoqlari va montaj',
        category: 'O‘rnatish va tarmoq',
        plannedAmount: 2000000,
        spentAmount: 1800000,
        supplierName: 'NetMaster Pro MCHJ',
        receiptUrl: '/docs/invoices/network_inv_03.pdf',
        verified: true
      },
      {
        id: 'b4',
        name: 'Xavfsiz yetkazib berish va sug‘urtalash',
        category: 'Yetkazib berish',
        plannedAmount: 1000000,
        spentAmount: 730000,
        supplierName: 'Express Cargo Trans',
        receiptUrl: '/docs/invoices/cargo_inv_04.pdf',
        verified: true
      }
    ],

    milestones: [
      {
        id: 'm1',
        order: 1,
        title: 'Kompyuter va monitorlarni xarid qilish',
        targetAmount: 18000000,
        releasedAmount: 18000000,
        status: 'completed',
        completedDate: '2026-09-18',
        description: '10 ta kompyuter to‘plami to‘liq sotib olindi va maktab omboriga qabul qilindi.',
        evidenceNotes: 'Kafolat talonlari, schyot-faktura va qabul qilish dalolatnomasi ekspertlar tomonidan tekshirildi.',
        evidenceFiles: ['faktura_smarttech.pdf', 'qabul_dalolatnomasi.jpg'],
        verifierName: 'Jamshid Rahimov (Mustaqil audit)'
      },
      {
        id: 'm2',
        order: 2,
        title: 'Mebel jihozlarini keltirish va sinfni tayyorlash',
        targetAmount: 4000000,
        releasedAmount: 1200000,
        status: 'in_progress',
        description: 'Stol va stullarni keltirib sinfxonaga joylashtirish.',
        evidenceNotes: 'Mebellar yetkazib berilmoqda, o‘rnatish jarayoni boshlandi.'
      },
      {
        id: 'm3',
        order: 3,
        title: 'Tarmoq tortish, dasturlarni sozlash va foydalanishga topshirish',
        targetAmount: 3000000,
        releasedAmount: 0,
        status: 'pending',
        description: 'Kabel kanallari, router sozlash, Python va Scratch muhitlarini o‘rnatish.'
      }
    ],

    timeline: [
      {
        id: 't1',
        date: '01 Sentabr 2026',
        title: 'Ariza topshirildi',
        description: 'Maktab vasiylik kengashi tomonidan ehtiyoj hujjati yuklandi.',
        type: 'submission',
        completed: true
      },
      {
        id: 't2',
        date: '03 Sentabr 2026',
        title: 'Shaxsiyat va muassasa tekshirildi',
        description: 'Maktab direktori va komissiya a’zolari guvohnomalari tasdiqlandi.',
        type: 'verification',
        completed: true
      },
      {
        id: 't3',
        date: '05 Sentabr 2026',
        title: 'Byudjet va narxlar tekshiruvi tasdiqlandi',
        description: 'Bozor narxlari o‘rganilib, smeta optimallashtirildi.',
        type: 'verification',
        completed: true
      },
      {
        id: 't4',
        date: '07 Sentabr 2026',
        title: 'Mablag‘ yig‘ish boshlandi',
        description: 'Platformada ommaviy yig‘im ochildi.',
        type: 'funding_start',
        completed: true
      },
      {
        id: 't5',
        date: '18 Sentabr 2026',
        title: '1-bosqich: Kompyuterlar xarid qilindi',
        description: '18,000,000 so‘m to‘g‘ridan-to‘g‘ri ta’minotchi hisob raqamiga o‘tkazildi.',
        type: 'milestone',
        completed: true
      },
      {
        id: 't6',
        date: 'Kutilmoqda',
        title: '2 va 3-bosqich: O‘rnatish va ochilish',
        description: 'To‘liq summani yig‘ish va yakuniy ta’sir hisobotini e’lon qilish.',
        type: 'completion',
        completed: false
      }
    ],

    trustEngine: {
      verificationCompleteness: 94,
      trustStatus: 'VERIFIED',
      riskLevel: 'LOW',
      verifierName: 'Dilshod To‘rayev',
      verifierOrganization: 'YordamPay Tekshiruv Kengashi',
      verifiedAt: '2026-09-05',
      checklist: {
        identityVerified: true,
        projectVerified: true,
        organizationVerified: true,
        budgetReviewed: true,
        documentsChecked: true,
        supplierChecked: true,
        onSiteInspection: true
      },
      transparencyPledgeSigned: true
    },

    aiRiskAnalysis: {
      riskLevel: 'LOW',
      score: 95,
      lastAnalyzedAt: '2026-09-20',
      summary: 'Loyiha hujjatlari to‘liq va shaffof. Narxlar IT bozorining o‘rtacha kotirovkalariga mos keladi. Hech qanday takroriy hisob raqam yoki soxta ma’lumot aniqlanmadi.',
      riskFactors: [
        {
          id: 'rf1',
          type: 'price_deviation',
          title: 'Narx mutanosibligi',
          description: 'Kompyuterlar narxi Toshkent ulgurji bozoridan 4.2% arzonroq kelishilgan.',
          severity: 'LOW'
        }
      ],
      recommendedAction: 'Standart monitoring: 2-bosqich dalolatnomasi yuklangach navbatdagi tranzaksiya tasdiqlansin.',
      budgetInsights: [
        'Uskunalar umumiy byudjetning 72% qismini tashkil qiladi (ijtimoiy loyihalar uchun namunali ko‘rsatkich).',
        'Ta’minotchi 3 yillik rasmiy servis kafolatini taqdim etgan.'
      ]
    },

    impactMetrics: {
      overallScore: 89,
      communityReach: 92,
      urgency: 84,
      transparency: 96,
      measurability: 85,
      beneficiariesCount: 342,
      beneficiariesDescription: 'Har yili 342 nafar maktab o‘quvchisi zamonaviy IT ko‘nikmalariga ega bo‘ladi',
      measurableOutcomes: [
        '10 ta to‘liq jihozlangan ish o‘rni',
        'Haftasiga 24 soat amaliy laboratoriya darslari',
        'Yillik 50+ o‘quvchining dasturlash olimpiadalariga tayyorgarligi'
      ],
      unSustainableDevGoals: ['Sifatli ta’lim (SDG 4)', 'Tengsizlikni qisqartirish (SDG 10)']
    },

    updates: [
      {
        id: 'up1',
        date: '2026-09-19',
        title: 'Kompyuterlar sinfga keltirildi!',
        content: 'Hurmatli saxovatpesha do‘stlar, 10 ta tizim bloki va monitorlar maktabga keltirildi. Mebellar yetib kelishi bilan stollarga montaj qilinadi. Barcha cheklar va kafolat qog‘ozlari hisobot bo‘limiga qo‘shildi.',
        author: 'Gulnora Karimova (Vasiylik kengashi)',
        imageUrl: '/src/assets/images/project_school_computers_1790947074384.jpg'
      }
    ],

    documents: [
      {
        id: 'd1',
        title: 'Maktab rahbariyati va Vasiylik kengashi buyrug‘i',
        type: 'official_letter',
        fileSize: '1.4 MB',
        verified: true
      },
      {
        id: 'd2',
        title: 'SmartTech Solutions MCHJ tijorat taklifi va schyot',
        type: 'invoice',
        fileSize: '840 KB',
        verified: true
      },
      {
        id: 'd3',
        title: 'Audit va narxlar ekspertizasi xulosasi',
        type: 'budget_estimate',
        fileSize: '620 KB',
        verified: true
      }
    ]
  },

  {
    id: 'proj_young_bakery_02',
    title: 'Mahallada yangi avlod oilaviy mini-novvoyxonasi',
    tagline: 'Samarqand shahrida yosh tadbirkor tomonidan tabiiy va arzon non mahsulotlari ishlab chiqarish',
    type: 'business',
    category: 'business',
    status: 'funding',
    location: {
      region: 'Samarqand viloyati',
      city: 'Samarqand',
      mahalla: 'So‘g‘diyona mahallasi',
      coordinates: [39.654, 66.975]
    },
    organization: {
      name: '“Nurli Non” xususiy korxonasi',
      type: 'business',
      contactPerson: 'Azizbek Rahmonov',
      registrationNumber: 'YK-481920',
      phone: '+998 90 441-12-88'
    },
    imageUrl: '/src/assets/images/project_young_bakery_1790947090721.jpg',
    requiredAmount: 8000000,
    raisedAmount: 5800000,
    supportersCount: 46,
    daysRemaining: 18,
    createdAt: '2026-09-08',
    
    problemStatement: 'So‘g‘diyona mahallasida 4,000 dan ortiq aholi istiqomat qiladi, ammo yaqin atrofda faqat muzlatilgan yarimtayyor mahsulotlar sotadigan do‘konlar bor. Yangi pishirilgan issiq non uchun aholi 2 km uzoqdagi bozorga borishga majbur.',
    whyItMatters: 'Yosh tadbirkor Azizbek (23 yosh) hunar o‘rganib, mahallada sifatli va hamyonbop non sexini tashkil etmoqda. Bu orqali 3 ta doimiy ish o‘rni yaratiladi va mahalla iqtisodiyoti rivojlanadi.',
    detailedDescription: 'Loyiha uchun elektr aylanma pech, xamir qoruvchi uskuna va birinchi oylik xomashyo talab etiladi. Bu qarz yoki xayriya emas, balki shaffof mikromoliyalashtirish — har bir tushum va xarajat platformada ochiq ko‘rsatib boriladi.',
    
    budget: [
      {
        id: 'b21',
        name: 'Energiya tejamkor elektr non pishirish pechi',
        category: 'Asosiy vositalar',
        plannedAmount: 4000000,
        spentAmount: 0,
        supplierName: 'O‘zOshxonaJihoz MCHJ',
        verified: true
      },
      {
        id: 'b22',
        name: 'Professional xamir qorish uskunasi (35 kg)',
        category: 'Asosiy vositalar',
        plannedAmount: 2000000,
        spentAmount: 0,
        supplierName: 'TexnoSamarkand Savdo',
        verified: true
      },
      {
        id: 'b23',
        name: 'Dastlabki xomashyo (1-navli un, xamirturush, kunjut)',
        category: 'Aylanma mablag‘',
        plannedAmount: 1000000,
        spentAmount: 0,
        supplierName: 'Samarqand Don Kombinati',
        verified: true
      },
      {
        id: 'b24',
        name: 'Sex binosini yong‘in va sanitariya talablariga moslash',
        category: 'Ta’mirlash va moslash',
        plannedAmount: 1000000,
        spentAmount: 0,
        supplierName: 'Lokal usta brigadasi',
        verified: true
      }
    ],

    milestones: [
      {
        id: 'm21',
        order: 1,
        title: 'Pech va xamir qorgich uskunalarini xarid qilish',
        targetAmount: 6000000,
        releasedAmount: 0,
        status: 'pending',
        description: 'Uskunalarni yetkazib berish va o‘rnatish.'
      },
      {
        id: 'm22',
        order: 2,
        title: 'Xona sanitariya tayyorgarligi va sinov partiyasi',
        targetAmount: 2000000,
        releasedAmount: 0,
        status: 'pending',
        description: 'SES ruxsatnomasini olish va dastlabki non mahsulotlarini pishirish.'
      }
    ],

    timeline: [
      {
        id: 't21',
        date: '08 Sentabr 2026',
        title: 'Biznes reja va ariza topshirildi',
        description: 'Yosh tadbirkor platformada ro‘yxatdan o‘tdi.',
        type: 'submission',
        completed: true
      },
      {
        id: 't22',
        date: '11 Sentabr 2026',
        title: 'Mahalla qo‘mitasi tavsiyanomasi tasdiqlandi',
        description: 'Joyida o‘rganish o‘tkazildi va binoning mavjudligi tekshirildi.',
        type: 'verification',
        completed: true
      },
      {
        id: 't23',
        date: '14 Sentabr 2026',
        title: 'Moliyalashtirish boshlandi',
        description: 'Loyiha ochiq platformaga chiqarildi.',
        type: 'funding_start',
        completed: true
      }
    ],

    trustEngine: {
      verificationCompleteness: 91,
      trustStatus: 'VERIFIED',
      riskLevel: 'LOW',
      verifierName: 'Sanjar Saidov',
      verifierOrganization: 'Samarqand Tadbirkorlik Markazi',
      verifiedAt: '2026-09-12',
      checklist: {
        identityVerified: true,
        projectVerified: true,
        organizationVerified: true,
        budgetReviewed: true,
        documentsChecked: true,
        supplierChecked: true,
        onSiteInspection: true
      },
      transparencyPledgeSigned: true
    },

    aiRiskAnalysis: {
      riskLevel: 'LOW',
      score: 88,
      lastAnalyzedAt: '2026-09-22',
      summary: 'Hisob-kitoblar real mahalliy narxlarga muvofiq. Uskunalar smetasi tijorat kataloglariga to‘liq mos. Daromad bashoratlari mo‘tadil va ortiqcha oshirilmagan.',
      riskFactors: [
        {
          id: 'rf21',
          type: 'price_deviation',
          title: 'Un xarajatlari tebranishi',
          description: 'Un narxi mavsumiy o‘zgarishi mumkin; tadbirkor zaxira rejaga ega bo‘lishi tavsiya etiladi.',
          severity: 'LOW'
        }
      ],
      recommendedAction: 'Mablag‘ to‘plangach 1-bosqich uskuna yetkazib beruvchisiga to‘g‘ridan-to‘g‘ri to‘lov amalga oshirilsin.',
      budgetInsights: [
        'Kapital xarajatlar umumiy summaning 75% qismini tashkil etadi.',
        'Kutilayotgan o‘zini oqlash muddati: 7-9 oy (ehtimoliy stsenariy).'
      ]
    },

    impactMetrics: {
      overallScore: 82,
      communityReach: 85,
      urgency: 78,
      transparency: 91,
      measurability: 84,
      beneficiariesCount: 850,
      beneficiariesDescription: 'Mahallaning 850+ xonadoni har kuni yangi non mahsulotlari bilan ta’minlanadi',
      measurableOutcomes: [
        '3 ta doimiy yangi ish o‘rni (yoshlar bandligi)',
        'Kuniga 600 dona sifatli non ishlab chiqarish quvvati',
        'Bozor narxidan 10-15% arzonroq mahsulot'
      ],
      unSustainableDevGoals: ['Munosib ish o‘rinlari (SDG 8)', 'Barqaror shaharlar va jamoalar (SDG 11)']
    },

    businessPlan: {
      concept: 'Aholi gavjum mahalla hududida energiya tejamkor pechlarda tabiiy non, patir va milliy pishiriqlar pishirish.',
      targetAudience: 'Mahalla oilalari, yaqin atrofdagi maktab va poliklinika xodimlari.',
      monthlyRevenueProjected: 18500000,
      monthlyExpensesProjected: 12200000,
      breakEvenMonths: 8,
      jobsCreated: 3,
      assumptions: [
        'Kunlik o‘rtacha savdo: 450-500 dona non',
        'O‘rtacha non narxi: 3,500 so‘m',
        'Xomashyo va elektr xarajati: tushumning ~55-60%'
      ],
      marketRisks: [
        'Un narxining qisqa muddatli ko‘tarilishi',
        'Mahalladagi elektr ta’minotidagi ehtimoliy uzilishlar (generator rejalashtirilgan)'
      ],
      founderBio: 'Azizbek Rahmonov — Samarqand Kasb-hunar kolleji oshpazlik yo‘nalishi bitiruvchisi, 3 yil novvoyxonada usta yordamchisi bo‘lib ishlagan.',
      disclaimer: 'Diqqat: Ko‘rsatilgan moliyaviy raqamlar kafolatlangan daromad emas, balki dastlabki hisob-kitob va ehtimoliy ssenariylardir.'
    },

    updates: [],
    documents: [
      {
        id: 'd21',
        title: 'Tadbirkorlik davlat ro‘yxatidan o‘tganlik guvohnomasi',
        type: 'id',
        fileSize: '780 KB',
        verified: true
      },
      {
        id: 'd22',
        title: 'Mahalla fuqarolar yig‘ini kafillik xati',
        type: 'official_letter',
        fileSize: '510 KB',
        verified: true
      },
      {
        id: 'd23',
        title: 'Uskunalar tijorat taklifi',
        type: 'invoice',
        fileSize: '1.1 MB',
        verified: true
      }
    ]
  },

  {
    id: 'proj_greenhouse_03',
    title: 'Farg‘ona vodiysida tomchilatib sug‘oriladigan eko-issiqxona',
    tagline: 'Oltiariq tumanida suvni 60% tejovchi aqlli issiqxona va yoshlar agro-kooperativi',
    type: 'business',
    category: 'business',
    status: 'completed',
    location: {
      region: 'Farg‘ona viloyati',
      city: 'Oltiariq',
      mahalla: 'Zilol mahallasi',
      coordinates: [40.386, 71.782]
    },
    organization: {
      name: '“Vodiy Baraka Eko” agro-firmasi',
      type: 'business',
      contactPerson: 'Rustam Qosimov',
      phone: '+998 93 620-33-44'
    },
    imageUrl: '/src/assets/images/project_greenhouse_farming_1790947105909.jpg',
    requiredAmount: 14000000,
    raisedAmount: 14000000,
    supportersCount: 92,
    daysRemaining: 0,
    createdAt: '2026-07-15',

    problemStatement: 'Mintaqada suv tanqisligi ortib bormoqda. An’anaviy sug‘orish usullari orqali 60% suv behuda sarflanardi.',
    whyItMatters: 'Tomchilatib sug‘orish va quyoshdan himoyalovchi to‘r o‘rnatilishi tufayli issiqxona har kvadrat metrdan 2 barobar yuqori hosil oladi va 4 nafar yoshni doimiy daromad bilan ta’minlaydi.',
    detailedDescription: 'Loyiha 100% muvaffaqiyatli yakunlandi. Issiqxona to‘liq qurilib, pomidor va bodring ko‘chatlari ekildi, dastlabki hosil yig‘ib olindi va sotildi.',

    budget: [
      {
        id: 'b31',
        name: 'Avtomatlashtirilgan tomchilatib sug‘orish tizimi va filtrlar',
        category: 'Uskunalar',
        plannedAmount: 6000000,
        spentAmount: 5850000,
        supplierName: 'AgroDrip Farg‘ona',
        verified: true
      },
      {
        id: 'b32',
        name: 'Issiqxona metall konstruksiyasi va maxsus 200 mikron plyonka',
        category: 'Konstruksiya',
        plannedAmount: 5500000,
        spentAmount: 5500000,
        supplierName: 'PolimerPlast Qoqon',
        verified: true
      },
      {
        id: 'b33',
        name: 'Ekotestdan o‘tgan sifatli ko‘chatlar va organik o‘g‘itlar',
        category: 'Xomashyo',
        plannedAmount: 2500000,
        spentAmount: 2390000,
        supplierName: 'Vodiy Urug‘chilik MCHJ',
        verified: true
      }
    ],

    milestones: [
      {
        id: 'm31',
        order: 1,
        title: 'Konstruksiyani montaj qilish',
        targetAmount: 5500000,
        releasedAmount: 5500000,
        status: 'completed',
        completedDate: '2026-08-05',
        description: 'Karkas va maxsus yorug‘lik o‘tkazuvchi qoplama o‘rnatildi.'
      },
      {
        id: 'm32',
        order: 2,
        title: 'Tomchilatib sug‘orish tizimini ulash',
        targetAmount: 6000000,
        releasedAmount: 6000000,
        status: 'completed',
        completedDate: '2026-08-20',
        description: 'Suv filtri, nasos va datchiklar ishga tushirildi.'
      },
      {
        id: 'm33',
        order: 3,
        title: 'Ko‘chat ekish va dastlabki hosil',
        targetAmount: 2500000,
        releasedAmount: 2500000,
        status: 'completed',
        completedDate: '2026-09-15',
        description: 'Ko‘chatlar unib chiqdi, birinchi hosil yig‘ildi.'
      }
    ],

    timeline: [
      {
        id: 't31',
        date: '15 Iyul 2026',
        title: 'Loyiha tasdiqlandi va mablag‘ to‘plandi',
        description: '92 nafar qo‘llab-quvvatlovchi yordamida 14M so‘m jamg‘arildi.',
        type: 'funding_start',
        completed: true
      },
      {
        id: 't32',
        date: '20 Avgust 2026',
        title: 'Barcha uskunalar o‘rnatildi',
        description: 'Agro-muhandislar tekshiruvi ijobiy yakunlandi.',
        type: 'milestone',
        completed: true
      },
      {
        id: 't33',
        date: '15 Sentabr 2026',
        title: 'Loyiha to‘liq yakunlandi va natija hisoboti chiqdi',
        description: 'Yakuniy fotohisobot va cheklar ochiq e’lon qilindi.',
        type: 'completion',
        completed: true
      }
    ],

    trustEngine: {
      verificationCompleteness: 100,
      trustStatus: 'VERIFIED',
      riskLevel: 'LOW',
      verifierName: 'Muzaffar Yoqubov',
      verifierOrganization: 'Mustaqil Ta’sir Ekspertizasi',
      verifiedAt: '2026-07-20',
      checklist: {
        identityVerified: true,
        projectVerified: true,
        organizationVerified: true,
        budgetReviewed: true,
        documentsChecked: true,
        supplierChecked: true,
        onSiteInspection: true
      },
      transparencyPledgeSigned: true
    },

    aiRiskAnalysis: {
      riskLevel: 'LOW',
      score: 98,
      lastAnalyzedAt: '2026-09-16',
      summary: 'Loyiha 100% reja bo‘yicha amalga oshirildi. Rejalashtirilgan byudjetdan 260,000 so‘m tejaldi va hisobotga kiritildi.',
      riskFactors: [],
      recommendedAction: 'Arxivlangan: Loyiha muvaffaqiyatli yakunlangan namunaviy keys sifatida tasdiqlangan.',
      budgetInsights: ['Haqiqiy xarajatlar: 13,740,000 UZS (rejalashtirilgandan 260,000 UZS tejamkorlik bilan).']
    },

    impactMetrics: {
      overallScore: 94,
      communityReach: 88,
      urgency: 90,
      transparency: 99,
      measurability: 96,
      beneficiariesCount: 420,
      beneficiariesDescription: 'Yiliga 420 dan ortiq xonadon sifatli eko-mahsulot oladi',
      measurableOutcomes: [
        'Har mavsumda 4 tonna tabiiy pomidor/bodring',
        'Mavsumiga 180,000 litr suv tejalishi (tomchilatib sug‘orish)',
        '4 nafar yosh agronom doimiy ish bilan band'
      ],
      unSustainableDevGoals: ['Toza suv va sanitariya (SDG 6)', 'Mas’uliyatli iste’mol va ishlab chiqarish (SDG 12)']
    },

    updates: [
      {
        id: 'up31',
        date: '2026-09-16',
        title: 'Birinchi hosil terildi! (Foto va hisobot)',
        content: 'Barcha qo‘llab-quvvatlovchilarga cheksiz minnatdorlik bildiramiz. Birinchi partiya 350 kg organik pomidor terilib, mahalliy bozorga yetkazildi.',
        author: 'Rustam Qosimov',
        imageUrl: '/src/assets/images/project_greenhouse_farming_1790947105909.jpg'
      }
    ],

    documents: [
      {
        id: 'd31',
        title: 'AgroDrip to‘lov kvitansiyalari va schyotlar',
        type: 'receipt',
        fileSize: '2.1 MB',
        verified: true
      },
      {
        id: 'd32',
        title: 'Dalolatnoma va joyida o‘rganish fotosuratlari',
        type: 'official_letter',
        fileSize: '3.4 MB',
        verified: true
      }
    ]
  },

  {
    id: 'proj_wheelchair_04',
    title: 'Buxoroda nogironligi bo‘lgan shaxslar uchun faol aravachalar',
    tagline: 'Og‘ir jismoniy imkoniyati cheklangan 6 nafar yosh uchun maxsus moslashtirilgan aravachalar',
    type: 'social',
    category: 'disability',
    status: 'funding',
    location: {
      region: 'Buxoro viloyati',
      city: 'Buxoro',
      mahalla: 'Dilkush mahallasi',
      coordinates: [39.774, 64.428]
    },
    organization: {
      name: '“Mehrli Qo‘llar” Buxoro nogironlar jamiyati',
      type: 'ngo',
      contactPerson: 'Nodira Salimova',
      registrationNumber: 'NGO-8821B',
      phone: '+998 65 223-19-01'
    },
    imageUrl: '/src/assets/images/project_disability_mobility_1790947119153.jpg',
    requiredAmount: 18000000,
    raisedAmount: 15300000,
    supportersCount: 164,
    daysRemaining: 7,
    createdAt: '2026-09-02',

    problemStatement: 'Standart og‘ir nogironlar aravachalari uy sharoitida harakatlanishga va ko‘chaga mustaqil chiqishga imkon bermaydi. Bolalar va o‘smirlar yillab xonaga qamalib qolmoqda.',
    whyItMatters: 'Yengil alyuminiy qotishmali, tana o‘lchamiga mos aravachalar 6 nafar o‘smirga mustaqil ta’lim olish, ko‘chaga chiqish va jamiyatga integratsiya bo‘lish imkonini beradi.',
    detailedDescription: 'Ortoped-shifokorlar xulosasi asosida har bir bolaning bo‘yi va vazniga mos individual aravachalar to‘g‘ridan-to‘g‘ri litsenziyali tibbiy jihoz ishlab chiqaruvchidan xarid qilinadi.',

    budget: [
      {
        id: 'b41',
        name: '6 dona yengil konstruksiyali faol aravacha (har biri 2,600,000 UZS)',
        category: 'Tibbiy vositalar',
        plannedAmount: 15600000,
        spentAmount: 10400000,
        supplierName: 'MedOpora Tashkent XK',
        verified: true
      },
      {
        id: 'b42',
        name: 'Ortopedik yostiqchalar va xavfsizlik kamarlari',
        category: 'Qo‘shimcha jihoz',
        plannedAmount: 1400000,
        spentAmount: 1400000,
        supplierName: 'OrthoMed Buxoro',
        verified: true
      },
      {
        id: 'b43',
        name: 'Individual sozlash, shifokor maslahati va yetkazish',
        category: 'Xizmat ko‘rsatish',
        plannedAmount: 1000000,
        spentAmount: 0,
        supplierName: 'RehabCare Servis',
        verified: true
      }
    ],

    milestones: [
      {
        id: 'm41',
        order: 1,
        title: 'Dastlabki 4 dona aravachani xarid qilish va topshirish',
        targetAmount: 11800000,
        releasedAmount: 11800000,
        status: 'completed',
        completedDate: '2026-09-17',
        description: '4 nafar o‘smirga aravachalar shaxsan topshirildi va fotosuratlar ilova qilindi.'
      },
      {
        id: 'm42',
        order: 2,
        title: 'Qolgan 2 dona aravachani keltirish va yakuniy sozlash',
        targetAmount: 6200000,
        releasedAmount: 0,
        status: 'in_progress',
        description: 'Yana 2,700,000 so‘m yig‘ilgach to‘lov o‘tkaziladi.'
      }
    ],

    timeline: [
      {
        id: 't41',
        date: '02 Sentabr 2026',
        title: 'Tibbiy dalolatnomalar va talabnomalar qabul qilindi',
        description: 'Har bir bemorning tibbiy ma’lumotnomasi ekspertlar ko‘rigidan o‘tkazildi.',
        type: 'verification',
        completed: true
      },
      {
        id: 't42',
        date: '17 Sentabr 2026',
        title: '1-bosqich: 4 nafar bolaga aravachalar topshirildi',
        description: 'Shifokor nazorati ostida erkin harakatlanish mashg‘ulotlari o‘tkazildi.',
        type: 'milestone',
        completed: true
      }
    ],

    trustEngine: {
      verificationCompleteness: 96,
      trustStatus: 'VERIFIED',
      riskLevel: 'LOW',
      verifierName: 'Dr. Shahnoza Boboyeva',
      verifierOrganization: 'Buxoro Viloyat Tibbiy Ekspertiza Komissiyasi',
      verifiedAt: '2026-09-04',
      checklist: {
        identityVerified: true,
        projectVerified: true,
        organizationVerified: true,
        budgetReviewed: true,
        documentsChecked: true,
        supplierChecked: true,
        onSiteInspection: true
      },
      transparencyPledgeSigned: true
    },

    aiRiskAnalysis: {
      riskLevel: 'LOW',
      score: 96,
      lastAnalyzedAt: '2026-09-24',
      summary: 'Bemorlarning tibbiy kartalari va shifokor tavsiyanomalari to‘liq tasdiqlangan. Xaridlar bevosita rasmiy diler orqali amalga oshirilmoqda.',
      riskFactors: [],
      recommendedAction: '2-bosqich to‘lovi qoldiq mablag‘ yig‘ilgach to‘liq o‘tkazilsin.',
      budgetInsights: ['Uskunalar narxi davlat tibbiy xaridlari katalogidan 12% arzonroq kelishilgan.']
    },

    impactMetrics: {
      overallScore: 92,
      communityReach: 86,
      urgency: 98,
      transparency: 95,
      measurability: 89,
      beneficiariesCount: 6,
      beneficiariesDescription: '6 nafar jismoniy imkoniyati cheklangan o‘smir va ularning oilalari',
      measurableOutcomes: [
        '6 nafar bolaning mustaqil harakatlanishi ta’minlanadi',
        'Uyda o‘qish o‘rniga maktabga qatnash imkoniyati yaratiladi',
        'Oila a’zolarining parvarishdagi jismoniy yuki sezilarli yengillashadi'
      ],
      unSustainableDevGoals: ['Sog‘liqni saqlash va farovonlik (SDG 3)', 'Tengsizlikni kamaytirish (SDG 10)']
    },

    updates: [
      {
        id: 'up41',
        date: '2026-09-18',
        title: '4 nafar bolamiz birinchi marotaba yangi aravachada ko‘chaga chiqdi!',
        content: 'Bugun Jasur va Madinaning ko‘zidagi quvonchni so‘z bilan ta’riflab bo‘lmaydi. Sizlarning har bir so‘mingiz mo‘jizaga aylandi. Qolgan 2 ta aravacha uchun ozgina mablag‘ qoldi!',
        author: 'Nodira Salimova (Jamiyat rahbari)'
      }
    ],

    documents: [
      {
        id: 'd41',
        title: 'Tibbiy-ijtimoiy ekspertiza xulosalari (anonimlashtirilgan)',
        type: 'official_letter',
        fileSize: '2.8 MB',
        verified: true
      },
      {
        id: 'd42',
        title: 'MedOpora rasmiy yetkazib berish shartnomasi',
        type: 'invoice',
        fileSize: '950 KB',
        verified: true
      }
    ]
  },

  {
    id: 'proj_library_renov_05',
    title: 'Qashqadaryoda mahalliy kutubxona va koworking markazi',
    tagline: 'Kitob tumanidagi eski binoni zamonaviy yoshlar kitobxonlik va ta’lim maydoniga aylantirish',
    type: 'social',
    category: 'community',
    status: 'under_review',
    location: {
      region: 'Qashqadaryo viloyati',
      city: 'Kitob',
      mahalla: 'Urgutliq mahallasi',
      coordinates: [39.117, 66.883]
    },
    organization: {
      name: 'Kitob Yoshlar Tashabbus Guruxi',
      type: 'community',
      contactPerson: 'Farhod Kenjayev',
      phone: '+998 75 542-88-21'
    },
    imageUrl: '/src/assets/images/project_school_computers_1790947074384.jpg',
    requiredAmount: 12000000,
    raisedAmount: 3200000,
    supportersCount: 28,
    daysRemaining: 24,
    createdAt: '2026-09-22',
    problemStatement: 'Mahallada yoshlar uchun dars qilish, kitob o‘qish yoki internetdan foydalanish uchun bitta ham sokin maskan yo‘q.',
    whyItMatters: 'Kutubxona 500 dan ortiq yoshlarni ko‘chada vaqt o‘tkazishdan asraydi, bepul kitob fondi va internet taqdim etadi.',
    detailedDescription: 'Xonani kosmetik ta’mirlash, 6 ta kitob javoni, 4 ta o‘quv stoli, Wi-Fi uskunasi va 300 dona yangi adabiyot xarid qilinadi.',
    budget: [
      {
        id: 'b51',
        name: 'Ta’mirlash materiallari (bo‘yoq, gipsokarton, yoritish)',
        category: 'Ta’mirlash',
        plannedAmount: 4500000,
        spentAmount: 0,
        verified: false,
        notes: 'Ta’minotchi smetasi qo‘shimcha tekshiruvda.'
      },
      {
        id: 'b52',
        name: 'Kitob javonlari va o‘qish stollari',
        category: 'Jihozlar',
        plannedAmount: 4500000,
        spentAmount: 0,
        verified: true
      },
      {
        id: 'b53',
        name: 'Kitob fondi (300 dona badiiy va ilmiy adabiyot)',
        category: 'Kitoblar',
        plannedAmount: 3000000,
        spentAmount: 0,
        verified: true
      }
    ],
    milestones: [
      {
        id: 'm51',
        order: 1,
        title: 'Binoni ta’mirlash va yoritish',
        targetAmount: 4500000,
        releasedAmount: 0,
        status: 'pending',
        description: 'Xona pollari va devorlarini tayyorlash.'
      },
      {
        id: 'm52',
        order: 2,
        title: 'Mebellar va kitoblarni o‘rnatish',
        targetAmount: 7500000,
        releasedAmount: 0,
        status: 'pending',
        description: 'Kutubxonani to‘liq ochilishga shay qilish.'
      }
    ],
    timeline: [
      {
        id: 't51',
        date: '22 Sentabr 2026',
        title: 'Ariza kelib tushdi',
        description: 'Moderatorlar ko‘rigiga yuborildi.',
        type: 'submission',
        completed: true
      }
    ],
    trustEngine: {
      verificationCompleteness: 68,
      trustStatus: 'UNDER_REVIEW',
      riskLevel: 'MEDIUM',
      verifierName: 'Moderator guruhi',
      verifierOrganization: 'YordamPay Tekshiruv',
      verifiedAt: '2026-09-24',
      checklist: {
        identityVerified: true,
        projectVerified: true,
        organizationVerified: false,
        budgetReviewed: false,
        documentsChecked: true,
        supplierChecked: false,
        onSiteInspection: false
      },
      transparencyPledgeSigned: true
    },
    aiRiskAnalysis: {
      riskLevel: 'MEDIUM',
      score: 72,
      lastAnalyzedAt: '2026-09-23',
      summary: 'Ta’mirlash xarajatlari smetasida mualliflik smetasi yetarli darajada detallashtirilmagan. Qurilish mollari do‘konidan rasmiy schyot talab qilinishi tavsiya etiladi.',
      riskFactors: [
        {
          id: 'rf51',
          type: 'missing_document',
          title: 'Qurilish mollarining to‘liq ro‘yxati yetarli emas',
          description: 'Bo‘yoq va materiallar narxi umumiy son bilan yozilgan, alohida pozitsiyalar yo‘q.',
          severity: 'MEDIUM'
        }
      ],
      recommendedAction: 'Qo‘shimcha hujjat kerak: Ta’minotchi smetasini to‘liq ilova qilish so‘ralsin.',
      budgetInsights: ['Ta’mirlash moddasi tafsilotlari to‘ldirilishi lozim.']
    },
    impactMetrics: {
      overallScore: 78,
      communityReach: 82,
      urgency: 70,
      transparency: 75,
      measurability: 85,
      beneficiariesCount: 520,
      beneficiariesDescription: 'Kitob tumani yoshlari va maktab o‘quvchilari',
      measurableOutcomes: [
        '500+ aholi uchun bepul kutubxona',
        'Haftalik kitobxonlik va munozara to‘garaklari'
      ]
    },
    updates: [],
    documents: [
      {
        id: 'd51',
        title: 'Bino ijarasi / tekinga berilganligi haqida dalolatnoma',
        type: 'official_letter',
        fileSize: '1.2 MB',
        verified: true
      }
    ]
  },

  {
    id: 'proj_tailoring_06',
    title: 'Andijonda ayollar tikuvchilik kooperativi va o‘quv sexi',
    tagline: 'Kam ta’minlangan 5 nafar ayolga kasbiy tikuv mashinalari va ish o‘rni yaratish',
    type: 'business',
    category: 'business',
    status: 'funding',
    location: {
      region: 'Andijon viloyati',
      city: 'Asaka',
      mahalla: 'Navro‘z mahallasi',
      coordinates: [40.641, 72.238]
    },
    organization: {
      name: '“Mohir Qo‘llar” ayollar hunarmandlik markazi',
      type: 'business',
      contactPerson: 'Zilola Xolmatova',
      phone: '+998 91 382-77-90'
    },
    imageUrl: '/src/assets/images/project_womens_craft_center_1790947954633.jpg',
    requiredAmount: 11000000,
    raisedAmount: 7150000,
    supportersCount: 61,
    daysRemaining: 12,
    createdAt: '2026-09-10',
    problemStatement: 'Mahallada uyda o‘tirgan, kasbga muhtoj ayollar ko‘p, biroq professional tikuv dastgohlari yo‘qligi sababli buyurtmalar ololmaydi.',
    whyItMatters: '5 ta zamonaviy Jack tikuv mashinasi xarid qilinsa, 5 nafar oila doimiy daromad manbaiga ega bo‘ladi.',
    detailedDescription: 'Jack F4 to‘g‘ri chokli 4 ta dastgoh va 1 ta overlok sotib olinadi. Sex allaqachon mahalliy maktab formasi va trikotaj buyurtmachilari bilan dastlabki shartnoma imzolagan.',
    budget: [
      {
        id: 'b61',
        name: '4 dona sanoat tikuv mashinasi Jack F4',
        category: 'Uskunalar',
        plannedAmount: 7200000,
        spentAmount: 0,
        supplierName: 'Jack Sewing Machinery Tashkent',
        verified: true
      },
      {
        id: 'b62',
        name: '1 dona professional 4-ipli overlok dastgohi',
        category: 'Uskunalar',
        plannedAmount: 2600000,
        spentAmount: 0,
        supplierName: 'Jack Sewing Machinery Tashkent',
        verified: true
      },
      {
        id: 'b63',
        name: 'Bichish stoli va dazmol tizimi',
        category: 'Jihozlar',
        plannedAmount: 1200000,
        spentAmount: 0,
        verified: true
      }
    ],
    milestones: [
      {
        id: 'm61',
        order: 1,
        title: 'Tikuv mashinalarini xarid qilish',
        targetAmount: 9800000,
        releasedAmount: 0,
        status: 'pending',
        description: 'Mashinalarni yetkazib berish va o‘rnatish.'
      },
      {
        id: 'm62',
        order: 2,
        title: 'Dazmol stoli va dastlabki mato xaridi',
        targetAmount: 1200000,
        releasedAmount: 0,
        status: 'pending',
        description: 'Sex faoliyatini boshlash.'
      }
    ],
    timeline: [
      {
        id: 't61',
        date: '10 Sentabr 2026',
        title: 'Ariza tasdiqlandi',
        description: 'Mahalla raisi tavsiyasi bilan platformaga joylandi.',
        type: 'funding_start',
        completed: true
      }
    ],
    trustEngine: {
      verificationCompleteness: 92,
      trustStatus: 'VERIFIED',
      riskLevel: 'LOW',
      verifierName: 'Baxtiyor Karimov',
      verifierOrganization: 'Andijon Yoshlar Ittifoqi',
      verifiedAt: '2026-09-12',
      checklist: {
        identityVerified: true,
        projectVerified: true,
        organizationVerified: true,
        budgetReviewed: true,
        documentsChecked: true,
        supplierChecked: true,
        onSiteInspection: true
      },
      transparencyPledgeSigned: true
    },
    aiRiskAnalysis: {
      riskLevel: 'LOW',
      score: 91,
      lastAnalyzedAt: '2026-09-22',
      summary: 'Tikuv mashinalari rasmiy distribyutor narxlari bilan mos. Buyurtmachi shartnomalari nusxasi ilova qilingan.',
      riskFactors: [],
      recommendedAction: 'Standart monitoring: Uskuna to‘lovi to‘g‘ridan-to‘g‘ri Jack rasmiy dileriga o‘tkazilsin.',
      budgetInsights: ['Uskunalar umumiy summaning 89% qismini tashkil qiladi.']
    },
    impactMetrics: {
      overallScore: 88,
      communityReach: 87,
      urgency: 84,
      transparency: 92,
      measurability: 89,
      beneficiariesCount: 25,
      beneficiariesDescription: '5 nafar xotin-qiz va ularning 20 nafar oila a’zolari',
      measurableOutcomes: [
        '5 ta yangi doimiy ish o‘rni',
        'Oylik o‘rtacha 3,000,000+ so‘m daromad'
      ]
    },
    businessPlan: {
      concept: 'Mahalliy ayollar uchun tikuvchilik kooperativi va maktab formasi buyurtmalarini tikish.',
      targetAudience: 'Mahalliy maktablar, bog‘chalar va kiyim-kechak do‘konlari.',
      monthlyRevenueProjected: 14000000,
      monthlyExpensesProjected: 9500000,
      breakEvenMonths: 6,
      jobsCreated: 5,
      assumptions: ['Oyiga kamida 300 dona kiyim tikish', 'Buyurtmalar oldindan kelishilgan'],
      marketRisks: ['Mato narxi o‘zgarishi'],
      founderBio: 'Zilola Xolmatova — 12 yillik tajribali tikuvchi-usta, Asaka hunarmandlar uyushmasi a’zosi.',
      disclaimer: 'Ko‘rsatkichlar dastlabki hisob-kitoblarga asoslangan bo‘lib, kelgusidagi real bozor talabiga bog‘liq.'
    },
    updates: [],
    documents: [
      {
        id: 'd61',
        title: 'Jack Sewing dilerlik kafolati va schyot',
        type: 'invoice',
        fileSize: '1.4 MB',
        verified: true
      }
    ]
  },

  {
    id: 'proj_clean_water_07',
    title: 'Qoraqalpog‘istonda 1,200 aholi uchun toza ichimlik suvi artezian qudug‘i va filtrlash stansiyasi',
    tagline: 'Taxiatosh tumanidagi Naymanko‘l qishlog‘iga chuqur burg‘ilash va teskari osmos tozalash uskunasi',
    type: 'social',
    category: 'water_eco',
    status: 'funding',
    location: {
      region: 'Qoraqalpog‘iston Respublikasi',
      city: 'Taxiatosh',
      mahalla: 'Naymanko‘l ovul fuqarolar yig‘ini',
      coordinates: [42.341, 59.562]
    },
    organization: {
      name: '“Orol Barqarorlik” ekologik jamoat fondi',
      type: 'ngo',
      contactPerson: 'Kenesbay Nurimov',
      registrationNumber: 'NGO-QR-4109',
      phone: '+998 61 222-44-19'
    },
    imageUrl: '/src/assets/images/project_clean_water_well_1790947906349.jpg',
    requiredAmount: 22000000,
    raisedAmount: 17600000,
    supportersCount: 194,
    daysRemaining: 16,
    createdAt: '2026-09-03',
    problemStatement: 'Qishloqda markazlashgan ichimlik suvi tarmog‘i mavjud emas. 1,200 nafardan ortiq aholi, ayniqsa keksalar va bolalar 6 km uzoqlikdan zang va sho‘rlangan suv tashishga majbur.',
    whyItMatters: 'Toza ichimlik suvi — insonning eng birlamchi huquqi. Artezian qudug‘i va zamonaviy ko‘p bosqichli filtr oshqozon-ichak va buyrak kasalliklarini 85% ga qisqartiradi.',
    detailedDescription: '120 metr chuqurlikdagi artezian qudug‘i burg‘ilanadi, suv nasosi, zanglamas po‘lat rezervuar va soatiga 1,500 litr toza ichimlik suvi beruvchi sanoat filtrlash stansiyasi o‘rnatiladi.',
    budget: [
      {
        id: 'bw1',
        name: '120 metr chuqurlikdagi quduqni burg‘ilash va quvurlar montaji',
        category: 'Burg‘ilash ishlari',
        plannedAmount: 11000000,
        spentAmount: 11000000,
        supplierName: 'QoraqalpoqGidroGeo MCHJ',
        receiptUrl: '/docs/invoices/geo_inv_01.pdf',
        verified: true,
        notes: '1-bosqich burg‘ilash muvaffaqiyatli yakunlandi, suv manbai topildi.'
      },
      {
        id: 'bw2',
        name: 'Sanoat teskari osmos filtri va ultrabinafsha zararsizlantiruvchi',
        category: 'Uskunalar',
        plannedAmount: 7000000,
        spentAmount: 0,
        supplierName: 'AquaPure Uzbekistan Dilerlik',
        verified: true
      },
      {
        id: 'bw3',
        name: 'Gidrofor nasos stansiyasi va 5 tonnalik oziq-ovqat plastmas bak',
        category: 'Infratuzilma',
        plannedAmount: 3000000,
        spentAmount: 0,
        supplierName: 'GidroNasos Nukus',
        verified: true
      },
      {
        id: 'bw4',
        name: 'Aholiga bepul suv tarqatish shoxobchasi va kranlar',
        category: 'Qurilish va tarmoq',
        plannedAmount: 1000000,
        spentAmount: 0,
        supplierName: 'Lokal ustalar',
        verified: true
      }
    ],
    milestones: [
      {
        id: 'mw1',
        order: 1,
        title: 'Geologik qidiruv va chuqur quduq burg‘ilash',
        targetAmount: 11000000,
        releasedAmount: 11000000,
        status: 'completed',
        completedDate: '2026-09-19',
        description: '120 metrdan toza chuchuk suv qatlami ochildi va quvurlar tushirildi.',
        evidenceNotes: 'Geologiya laboratoriyasi tahlili va suv namunasi dalolatnomasi yuklandi.',
        verifierName: 'G‘ayratbek Qutlimurotov (Davlat gidrogeologiya inspektori)'
      },
      {
        id: 'mw2',
        order: 2,
        title: 'Sanoat filtrlash va nasos uskunalarini o‘rnatish',
        targetAmount: 10000000,
        releasedAmount: 0,
        status: 'in_progress',
        description: 'Filtrlar keltirilib, elektr va suv quvurlariga ulanmoqda.'
      },
      {
        id: 'mw3',
        order: 3,
        title: 'Suv sifatini sinovdan o‘tkazish va ochilish',
        targetAmount: 1000000,
        releasedAmount: 0,
        status: 'pending',
        description: 'SES ruxsatnomasi va aholiga doimiy bepul toza suv berish boshlanadi.'
      }
    ],
    timeline: [
      {
        id: 'tw1',
        date: '03 Sentabr 2026',
        title: 'Loyiha arizasi qabul qilindi',
        description: 'Mahalla oqsoqollari murojaati platformaga joylandi.',
        type: 'submission',
        completed: true
      },
      {
        id: 'tw2',
        date: '19 Sentabr 2026',
        title: '1-bosqich: Burg‘ilash ishlari yakunlandi',
        description: '120 metrdan chuchuk suv chiqdi va ekspertlar tekshirdi.',
        type: 'milestone',
        completed: true
      }
    ],
    trustEngine: {
      verificationCompleteness: 97,
      trustStatus: 'VERIFIED',
      riskLevel: 'LOW',
      verifierName: 'Erkin Madraximov',
      verifierOrganization: 'Orolbo‘yi Ekologik Ekspertiza Markazi',
      verifiedAt: '2026-09-08',
      checklist: {
        identityVerified: true,
        projectVerified: true,
        organizationVerified: true,
        budgetReviewed: true,
        documentsChecked: true,
        supplierChecked: true,
        onSiteInspection: true
      },
      transparencyPledgeSigned: true
    },
    aiRiskAnalysis: {
      riskLevel: 'LOW',
      score: 96,
      lastAnalyzedAt: '2026-09-22',
      summary: 'Burg‘ilash kotirovkasi mintaqaviy davlat tariflariga mos. Suv sifati tahlili sertifikatlangan laboratoriya hujjati bilan tasdiqlangan.',
      riskFactors: [],
      recommendedAction: '2-bosqich yakunida SES xulosasi yuklangach so‘nggi tranzaksiya o‘tkazilsin.',
      budgetInsights: ['Burg‘ilash va filtr xarajatlari loyihaning 82% qismini tashkil qiladi.']
    },
    impactMetrics: {
      overallScore: 97,
      communityReach: 98,
      urgency: 99,
      transparency: 96,
      measurability: 95,
      beneficiariesCount: 1200,
      beneficiariesDescription: 'Naymanko‘l qishlog‘ining 1,200 nafar aholisi va maktab o‘quvchilari',
      measurableOutcomes: [
        'Kuniga 15,000 litr toza ichimlik suvi',
        'Suv tashish masofasi 6 km dan 50 metrga qisqaradi',
        'Yuqumli ichak kasalliklarining 85% ga kamayishi'
      ],
      unSustainableDevGoals: ['Toza suv va sanitariya (SDG 6)', 'Yaxshi sog‘liq va farovonlik (SDG 3)']
    },
    updates: [
      {
        id: 'upw1',
        date: '2026-09-20',
        title: 'Quduqdan chuchuk suv chiqdi!',
        content: 'Barcha saxovatpesha vatandoshlarimizga qishloq ahli nomidan cheksiz rahmat. 120 metr chuqurlikda toza suv manbai topildi. Hozirda AquaPure filtrlari montaj qilinmoqda.',
        author: 'Kenesbay Nurimov',
        imageUrl: '/src/assets/images/project_clean_water_well_1790947906349.jpg'
      }
    ],
    documents: [
      {
        id: 'dw1',
        title: 'Davlat gidrogeologiya dalolatnomasi va suv tahlili',
        type: 'official_letter',
        fileSize: '1.8 MB',
        verified: true
      },
      {
        id: 'dw2',
        title: 'Burg‘ilash va uskunalar smetasi',
        type: 'budget_estimate',
        fileSize: '920 KB',
        verified: true
      }
    ]
  },

  {
    id: 'proj_youth_robotics_08',
    title: 'Namanganda iqtidorli yoshlar uchun robototexnika, AI va 3D modellashtirish laboratoriyasi',
    tagline: 'Kam ta’minlangan oilalar farzandlari uchun bepul muhandislik va texnologik kasb markazi',
    type: 'social',
    category: 'youth',
    status: 'funding',
    location: {
      region: 'Namangan viloyati',
      city: 'Namangan',
      mahalla: 'Bobur mahallasi',
      coordinates: [40.998, 71.672]
    },
    organization: {
      name: '“Yosh Muhandis” Ta’lim va Innovatsiya Jamiyati',
      type: 'ngo',
      contactPerson: 'Sardorbek Islomov',
      phone: '+998 69 234-88-12'
    },
    imageUrl: '/src/assets/images/project_youth_robotics_lab_1790947926414.jpg',
    requiredAmount: 16000000,
    raisedAmount: 12800000,
    supportersCount: 142,
    daysRemaining: 10,
    createdAt: '2026-09-07',
    problemStatement: 'Viloyatda texnologiyaga qiziquvchi minglab iqtidorli o‘smirlar bor, ammo pullik xususiy kurslar oyiga 600 ming so‘mdan oshadi. Ko‘plab kam ta’minlangan oilalar farzandlari robototexnika to‘garaklariga qatnay olmaydi.',
    whyItMatters: 'Zamonaviy muhandislik konstruktorlari va 3D printerlar yoshlarni jahon darajasidagi olimpiadalarga tayyorlaydi va yoshlar jinoyatchiligining oldini olib, IT sohasiga yo‘naltiradi.',
    detailedDescription: 'Loyiha doirasida 12 ta Arduino va ESP32 robototexnika komplekti, 2 ta zamonaviy 3D printer, payvandlash stansiyalari va o‘quv laboratoriya stollari xarid qilinadi.',
    budget: [
      {
        id: 'by1',
        name: '12 to‘plam professional Arduino/ESP32 robototexnika konstruktori',
        category: 'O‘quv vositalari',
        plannedAmount: 8400000,
        spentAmount: 8400000,
        supplierName: 'RoboSmart Tashkent',
        verified: true
      },
      {
        id: 'by2',
        name: '2 dona yuqori aniqlikdagi Creality 3D printeri va PLA filamentlar',
        category: 'Uskunalar',
        plannedAmount: 4800000,
        spentAmount: 0,
        supplierName: '3D Lab Uzbekistan',
        verified: true
      },
      {
        id: 'by3',
        name: 'Elektronika payvandlash, datchiklar va o‘lchov asboblari',
        category: 'Laboratoriya vositasi',
        plannedAmount: 1800000,
        spentAmount: 0,
        supplierName: 'RadioElement Namangan',
        verified: true
      },
      {
        id: 'by4',
        name: 'Xavfsiz montaj stollari va yoritish tizimi',
        category: 'Mebel va jihoz',
        plannedAmount: 1000000,
        spentAmount: 0,
        supplierName: 'Namangan Mebel Servis',
        verified: true
      }
    ],
    milestones: [
      {
        id: 'my1',
        order: 1,
        title: 'Robototexnika mikrokontrollerlari va konstruktorlarni xarid qilish',
        targetAmount: 8400000,
        releasedAmount: 8400000,
        status: 'completed',
        completedDate: '2026-09-21',
        description: '12 ta konstruktor to‘liq sotib olindi va sinovdan o‘tkazildi.'
      },
      {
        id: 'my2',
        order: 2,
        title: '3D printerlar va filamentlar yetkazib berilishi',
        targetAmount: 4800000,
        releasedAmount: 0,
        status: 'in_progress',
        description: '3D printerlar yo‘lda, tez kunlarda keltiriladi.'
      },
      {
        id: 'my3',
        order: 3,
        title: 'O‘quv laboratoriyasini bepul darslarga ochish',
        targetAmount: 2800000,
        releasedAmount: 0,
        status: 'pending',
        description: 'Haftada 40 nafar yosh uchun darslar boshlanadi.'
      }
    ],
    timeline: [
      {
        id: 'ty1',
        date: '07 Sentabr 2026',
        title: 'Yoshlar laboratoriyasi loyihasi e’lon qilindi',
        description: 'Namangan Yoshlar ishlari agentligi tomonidan tavsiya etildi.',
        type: 'funding_start',
        completed: true
      },
      {
        id: 'ty2',
        date: '21 Sentabr 2026',
        title: '1-bosqich konstruktorlari topshirildi',
        description: 'Yoshlar dastlabki robot prototiplarini yig‘ishni boshladi.',
        type: 'milestone',
        completed: true
      }
    ],
    trustEngine: {
      verificationCompleteness: 94,
      trustStatus: 'VERIFIED',
      riskLevel: 'LOW',
      verifierName: 'Muhriddin Zokirov',
      verifierOrganization: 'Namangan Innovatsion Rivojlanish Kengashi',
      verifiedAt: '2026-09-09',
      checklist: {
        identityVerified: true,
        projectVerified: true,
        organizationVerified: true,
        budgetReviewed: true,
        documentsChecked: true,
        supplierChecked: true,
        onSiteInspection: true
      },
      transparencyPledgeSigned: true
    },
    aiRiskAnalysis: {
      riskLevel: 'LOW',
      score: 93,
      lastAnalyzedAt: '2026-09-23',
      summary: 'Konstruktorlar va 3D printerlar narxi rasmiy distribyutorlar bilan kelishilgan. Barcha ta’lim bepul berilishi kafolatlangan.',
      riskFactors: [],
      recommendedAction: '2-bosqich to‘lovi to‘g‘ridan-to‘g‘ri 3D Lab rasmiy distribyutoriga o‘tkazilsin.',
      budgetInsights: ['O‘quv uskunalari umumiy byudjetning 83% qismini tashkil qiladi.']
    },
    impactMetrics: {
      overallScore: 91,
      communityReach: 90,
      urgency: 87,
      transparency: 95,
      measurability: 92,
      beneficiariesCount: 280,
      beneficiariesDescription: 'Yiliga 280 nafar iqtidorli o‘quvchi va talabalar bepul muhandislik bilimiga ega bo‘ladi',
      measurableOutcomes: [
        '12 ta doimiy jihozlangan muhandislik stansiyasi',
        'Oyiga 30+ tayyor robototexnika loyihalari',
        'Respublika robototexnika tanlovlarida ishtirok'
      ],
      unSustainableDevGoals: ['Sifatli ta’lim (SDG 4)', 'Sanoat, innovatsiya va infratuzilma (SDG 9)']
    },
    updates: [
      {
        id: 'upy1',
        date: '2026-09-22',
        title: 'Birinchi elektronika darslari boshlandi!',
        content: 'Konstruktorlar yetib keldi va yoshlar ilk datchiklarni ulab ko‘rishdi. Bolalarning ko‘zidagi intilish va qiziqish cheksiz.',
        author: 'Sardorbek Islomov',
        imageUrl: '/src/assets/images/project_youth_robotics_lab_1790947926414.jpg'
      }
    ],
    documents: [
      {
        id: 'dy1',
        title: 'Yoshlar ishlari agentligi hamkorlik memorandumi',
        type: 'official_letter',
        fileSize: '1.1 MB',
        verified: true
      }
    ]
  },

  {
    id: 'proj_solar_clinic_09',
    title: 'Surxondaryoda chekka qishloq poliklinikasiga uzluksiz quyosh elektr stansiyasi',
    tagline: 'Boysun tumanidagi Inkobod qishlog‘i tibbiyot punktiga 5 kVt quvvatli avtonom quyosh panellari',
    type: 'social',
    category: 'health',
    status: 'completed',
    location: {
      region: 'Surxondaryo viloyati',
      city: 'Boysun',
      mahalla: 'Inkobod mahallasi',
      coordinates: [38.204, 67.201]
    },
    organization: {
      name: '“Salomatlik va Hayot” qishloq tibbiyotini rivojlantirish markazi',
      type: 'ngo',
      contactPerson: 'Dr. Alisher Chariyev',
      phone: '+998 76 332-15-70'
    },
    imageUrl: '/src/assets/images/project_solar_panels_mahalla_1790947940769.jpg',
    requiredAmount: 15000000,
    raisedAmount: 15000000,
    supportersCount: 118,
    daysRemaining: 0,
    createdAt: '2026-08-01',
    problemStatement: 'Tog‘li qishloqda qish va bahor oylarida elektr energiyasi kuniga 6-8 soat uzilib qolardi. Poliklinikadagi emlash vaksinalari, bolalar dori-darmonlari va shoshilinch EKG apparati ishlamay qolish xavfi mavjud edi.',
    whyItMatters: 'Quyosh energiyasi 1,800 nafar qishloq aholisi, 300 dan ziyod chaqaloq va homilador ayollarga 24/7 uzluksiz tibbiy xizmat va vaksinalar xavfsizligini ta’minlaydi.',
    detailedDescription: 'Loyiha 100% muvaffaqiyatli yakunlandi. Poliklinika tomiga 10 dona yuqori samarali monokristall quyosh paneli, 5 kVt quvvatli gibrid invertor va litiy-temir-fosfat batareyalari o‘rnatildi.',
    budget: [
      {
        id: 'bs1',
        name: '10 dona 550 Vt monokristall quyosh panellari',
        category: 'Quyosh tizimi',
        plannedAmount: 7500000,
        spentAmount: 7350000,
        supplierName: 'SurxonSolar MCHJ',
        verified: true
      },
      {
        id: 'bs2',
        name: '5 kVt gibrid quyosh invertori va LiFePO4 batareyalar',
        category: 'Akkumulyator va boshqaruv',
        plannedAmount: 5500000,
        spentAmount: 5500000,
        supplierName: 'GreenPower Termiz',
        verified: true
      },
      {
        id: 'bs3',
        name: 'Himoyalangan kabel, avtomatika va tomga montaj ishlari',
        category: 'O‘rnatish',
        plannedAmount: 2000000,
        spentAmount: 1920000,
        supplierName: 'EnergoServis Boysun',
        verified: true
      }
    ],
    milestones: [
      {
        id: 'ms1',
        order: 1,
        title: 'Quyosh panellari va invertor xaridi',
        targetAmount: 13000000,
        releasedAmount: 13000000,
        status: 'completed',
        completedDate: '2026-08-15',
        description: 'Barcha jihozlar yetkazib berildi va tekshirildi.'
      },
      {
        id: 'ms2',
        order: 2,
        title: 'Tomga o‘rnatish va avtonom elektr tarmog‘iga ulash',
        targetAmount: 2000000,
        releasedAmount: 2000000,
        status: 'completed',
        completedDate: '2026-08-28',
        description: 'Tizim sinovdan o‘tdi, poliklinika uzluksiz elektr bilan ta’minlandi.'
      }
    ],
    timeline: [
      {
        id: 'ts1',
        date: '01 Avgust 2026',
        title: 'Loyiha boshlandi',
        description: '118 nafar saxovatpesha yordamida 15M so‘m yig‘ildi.',
        type: 'funding_start',
        completed: true
      },
      {
        id: 'ts2',
        date: '28 Avgust 2026',
        title: 'Stansiya to‘liq ishga tushdi',
        description: 'Qishloq shifokorlik punkti 24/7 yashil energiyaga o‘tdi.',
        type: 'completion',
        completed: true
      }
    ],
    trustEngine: {
      verificationCompleteness: 100,
      trustStatus: 'VERIFIED',
      riskLevel: 'LOW',
      verifierName: 'Muhandis Mansur Xidirov',
      verifierOrganization: 'Energetika va Sog‘liqni Saqlash Inspeksiyasi',
      verifiedAt: '2026-08-05',
      checklist: {
        identityVerified: true,
        projectVerified: true,
        organizationVerified: true,
        budgetReviewed: true,
        documentsChecked: true,
        supplierChecked: true,
        onSiteInspection: true
      },
      transparencyPledgeSigned: true
    },
    aiRiskAnalysis: {
      riskLevel: 'LOW',
      score: 99,
      lastAnalyzedAt: '2026-09-01',
      summary: 'Loyiha to‘liq amalga oshirildi. Rejalashtirilgan byudjetdan 230,000 so‘m tejaldi. Shifoxonadagi barcha muzlatkichlar va EKG uzluksiz ishlamoqda.',
      riskFactors: [],
      recommendedAction: 'Muvaffaqiyatli yakunlangan eko-tibbiyot keysi sifatida tasdiqlangan.',
      budgetInsights: ['Haqiqiy sarf: 14,770,000 so‘m. Tejamkorlik to‘liq hisobotga kiritilgan.']
    },
    impactMetrics: {
      overallScore: 98,
      communityReach: 95,
      urgency: 99,
      transparency: 99,
      measurability: 97,
      beneficiariesCount: 1800,
      beneficiariesDescription: 'Inkobod qishlog‘ining 1,800 nafar aholisi va 300+ yosh bolalar',
      measurableOutcomes: [
        'Poliklinikada 24/7 uzluksiz elektr ta’minoti',
        'Vaksinalar va dorilar xavfsizligi 100% kafolatlangan',
        'Yiliga 4,200 kVt/soat toza yashil energiya ishlab chiqarish'
      ],
      unSustainableDevGoals: ['Yaxshi sog‘liq va farovonlik (SDG 3)', 'Arzon va toza energiya (SDG 7)']
    },
    updates: [
      {
        id: 'ups1',
        date: '2026-08-30',
        title: 'Quyosh stansiyasi to‘liq ishga tushirildi! (Hisobot)',
        content: 'Inkobod qishlog‘i poliklinikasi endi elektr uzilishlaridan butunlay mustaqil. Emlash vaksinalari va laboratoriya apparatlari kechayu-kunduz ishlamoqda. Rahmat barchangizga!',
        author: 'Dr. Alisher Chariyev',
        imageUrl: '/src/assets/images/project_solar_panels_mahalla_1790947940769.jpg'
      }
    ],
    documents: [
      {
        id: 'ds1',
        title: 'Qabul dalolatnomasi va kafolat sertifikatlari',
        type: 'receipt',
        fileSize: '2.4 MB',
        verified: true
      }
    ]
  },

  {
    id: 'proj_womens_craft_10',
    title: 'Marg‘ilonda ehtiyojmand xotin-qizlar uchun ipakchilik, milliy suzani va to‘qimachilik kooperativi',
    tagline: 'Kam ta’minlangan 8 nafar ayolga milliy hunarmandchilik dastgohlari va kafolatlangan xarid tizimi',
    type: 'business',
    category: 'youth',
    status: 'funding',
    location: {
      region: 'Farg‘ona viloyati',
      city: 'Marg‘ilon',
      mahalla: 'O‘sh mahallasi',
      coordinates: [40.472, 71.721]
    },
    organization: {
      name: '“Hunarmand Ipak” ayollar arteli',
      type: 'business',
      contactPerson: 'Dilbarxon Mahmudova',
      phone: '+998 90 531-20-40'
    },
    imageUrl: '/src/assets/images/project_womens_craft_center_1790947954633.jpg',
    requiredAmount: 9500000,
    raisedAmount: 6800000,
    supportersCount: 54,
    daysRemaining: 15,
    createdAt: '2026-09-11',
    problemStatement: 'Marg‘ilon qadimiy ipakchilik va suzando‘zlik markazi bo‘lsa-da, ko‘plab yosh qizlar va yolg‘iz onalarda dastlabki ip, mato va maxsus to‘quv dastgohlarini sotib olishga imkoniyat yo‘q.',
    whyItMatters: 'Kooperativ orqali 8 nafar ayol o‘z uyida yoki umumiy ustaxonada daromad topadi. Tayyor mahsulotlar turizm markazlariga shartnoma asosida yetkazib beriladi.',
    detailedDescription: '4 ta milliy yog‘och to‘quv dastgohi, 2 ta kashtachilik mashinasi, tabiiy ipak iplari va xomashyo xarid qilinadi.',
    budget: [
      {
        id: 'bmc1',
        name: '4 dona an’anaviy yog‘och ipak to‘quv dastgohi',
        category: 'Dastgohlar',
        plannedAmount: 4200000,
        spentAmount: 0,
        supplierName: 'Marg‘ilon Usta Hunarmandlari',
        verified: true
      },
      {
        id: 'bmc2',
        name: '2 dona professional kashtachilik mashinasi',
        category: 'Uskunalar',
        plannedAmount: 3200000,
        spentAmount: 0,
        supplierName: 'Farg‘ona Tikuv Jihoz',
        verified: true
      },
      {
        id: 'bmc3',
        name: 'Tabiiy ipak iplar, bo‘yoqlar va mato xomashyosi',
        category: 'Aylanma xomashyo',
        plannedAmount: 2100000,
        spentAmount: 0,
        supplierName: 'Yodgorlik Ipak Fabrikasi',
        verified: true
      }
    ],
    milestones: [
      {
        id: 'mmc1',
        order: 1,
        title: 'To‘quv va kashta dastgohlarini o‘rnatish',
        targetAmount: 7400000,
        releasedAmount: 0,
        status: 'pending',
        description: 'Dastgohlarni keltirish va 8 nafar xotin-qizni o‘qitish.'
      },
      {
        id: 'mmc2',
        order: 2,
        title: 'Xomashyo xaridi va birinchi suzanilar partiyasi',
        targetAmount: 2100000,
        releasedAmount: 0,
        status: 'pending',
        description: 'Tayyor mahsulotlar ko‘rgazmaga qo‘yiladi.'
      }
    ],
    timeline: [
      {
        id: 'tmc1',
        date: '11 Sentabr 2026',
        title: 'Ariza tasdiqlandi',
        description: 'Marg‘ilon Hunarmandlar uyushmasi kafolati bilan joylashtirildi.',
        type: 'funding_start',
        completed: true
      }
    ],
    trustEngine: {
      verificationCompleteness: 93,
      trustStatus: 'VERIFIED',
      riskLevel: 'LOW',
      verifierName: 'Shoira Rustamova',
      verifierOrganization: 'Farg‘ona Oila va Xotin-qizlar Boshqarmasi',
      verifiedAt: '2026-09-13',
      checklist: {
        identityVerified: true,
        projectVerified: true,
        organizationVerified: true,
        budgetReviewed: true,
        documentsChecked: true,
        supplierChecked: true,
        onSiteInspection: true
      },
      transparencyPledgeSigned: true
    },
    aiRiskAnalysis: {
      riskLevel: 'LOW',
      score: 92,
      lastAnalyzedAt: '2026-09-22',
      summary: 'Dastgohlar va ipak xomashyosi narxi Marg‘ilon fabrikasi ulgurji narxlariga to‘liq mos keladi.',
      riskFactors: [],
      recommendedAction: 'Mablag‘ to‘plangach 1-bosqich dileriga to‘lov o‘tkazilsin.',
      budgetInsights: ['Dastgohlar umumiy summaning 78% qismini tashkil qiladi.']
    },
    impactMetrics: {
      overallScore: 89,
      communityReach: 88,
      urgency: 82,
      transparency: 94,
      measurability: 91,
      beneficiariesCount: 40,
      beneficiariesDescription: '8 nafar hunarmand ayol va ularning 32 nafar oila a’zolari',
      measurableOutcomes: [
        '8 ta yangi uy sharoitidagi doimiy ish o‘rni',
        'Har bir ayolga oyiga 2.5 - 3.5 mln so‘m daromad',
        'Milliy madaniy merosni saqlab qolish va yoshlarga o‘rgatish'
      ],
      unSustainableDevGoals: ['Gender tengligi (SDG 5)', 'Munosib mehnat va iqtisodiy o‘sish (SDG 8)']
    },
    businessPlan: {
      concept: 'Marg‘ilonda ayollar uchun ipak suzani va atlas to‘qimachilik kooperativi tashkil etish.',
      targetAudience: 'Mahalliy va xorijiy sayyohlar, suvenir va brend kiyim do‘konlari.',
      monthlyRevenueProjected: 16500000,
      monthlyExpensesProjected: 10800000,
      breakEvenMonths: 7,
      jobsCreated: 8,
      assumptions: ['Oyiga kamida 40 dona suzani va ipak ro‘mollar sotilishi', 'Turizm mavsumida talab 2 barobar ortishi'],
      marketRisks: ['Xomashyo ipak narxining mavsumiy o‘zgarishi'],
      founderBio: 'Dilbarxon Mahmudova — 18 yillik usta suzando‘z, Marg‘ilon “Hunarmand” uyushmasi a’zosi.',
      disclaimer: 'Daromad hisob-kitoblari ehtimoliy tahlillarga asoslangan bo‘lib, qat’iy kafolat hisoblanmaydi.'
    },
    updates: [],
    documents: [
      {
        id: 'dmc1',
        title: 'Hunarmandlar uyushmasi tavsiyanomasi va tijorat shartnomalari',
        type: 'official_letter',
        fileSize: '1.6 MB',
        verified: true
      }
    ]
  }
];

export const INITIAL_CONTRIBUTIONS: Contribution[] = [
  {
    id: 'cnt_01',
    projectId: 'proj_school_comp_01',
    projectTitle: 'Maktab uchun 10 ta zamonaviy kompyuter va dasturlash sinfi',
    amount: 1000000,
    supporterName: 'Sarvar Olimov',
    isAnonymous: false,
    timestamp: '2026-09-12 14:32',
    paymentMethod: 'UzCard',
    allocatedBreakdown: [
      { category: 'Uskunalar (Kompyuterlar)', amount: 720000, percentage: 72 },
      { category: 'Mebel va jihozlar', amount: 160000, percentage: 16 },
      { category: 'O‘rnatish va tarmoq', amount: 80000, percentage: 8 },
      { category: 'Yetkazib berish', amount: 40000, percentage: 4 }
    ]
  },
  {
    id: 'cnt_02',
    projectId: 'proj_wheelchair_04',
    projectTitle: 'Buxoroda nogironligi bo‘lgan shaxslar uchun faol aravachalar',
    amount: 500000,
    supporterName: 'Sarvar Olimov',
    isAnonymous: false,
    timestamp: '2026-09-14 09:15',
    paymentMethod: 'HUMO',
    allocatedBreakdown: [
      { category: 'Tibbiy vositalar (Aravachalar)', amount: 433000, percentage: 86.6 },
      { category: 'Qo‘shimcha jihozlar', amount: 39000, percentage: 7.8 },
      { category: 'Individual sozlash', amount: 28000, percentage: 5.6 }
    ]
  },
  {
    id: 'cnt_03',
    projectId: 'proj_young_bakery_02',
    projectTitle: 'Mahallada yangi avlod oilaviy mini-novvoyxonasi',
    amount: 400000,
    supporterName: 'Sarvar Olimov',
    isAnonymous: false,
    timestamp: '2026-09-16 18:40',
    paymentMethod: 'Payme',
    allocatedBreakdown: [
      { category: 'Elektr non pishirish pechi', amount: 200000, percentage: 50 },
      { category: 'Xamir qorish uskunasi', amount: 100000, percentage: 25 },
      { category: 'Dastlabki xomashyo', amount: 50000, percentage: 12.5 },
      { category: 'Sexni moslash', amount: 50000, percentage: 12.5 }
    ]
  },
  {
    id: 'cnt_04',
    projectId: 'proj_greenhouse_03',
    projectTitle: 'Farg‘ona vodiysida tomchilatib sug‘oriladigan eko-issiqxona',
    amount: 500000,
    supporterName: 'Sarvar Olimov',
    isAnonymous: false,
    timestamp: '2026-08-10 11:20',
    paymentMethod: 'Click',
    allocatedBreakdown: [
      { category: 'Sug‘orish tizimi', amount: 214000, percentage: 42.8 },
      { category: 'Konstruksiya', amount: 196000, percentage: 39.2 },
      { category: 'Xomashyo va ko‘chatlar', amount: 90000, percentage: 18.0 }
    ]
  }
];

export const PLATFORM_STATS = {
  totalRaisedUzs: 1284500000, // 1.28B UZS
  totalDisbursedUzs: 940200000, // 940M UZS
  completedProjectsCount: 124,
  activeProjectsCount: 37,
  totalBeneficiariesCount: 18420,
  verificationPassRate: 98.4,
  averageMilestoneReleaseTimeDays: 2.3,
  monthlyFunding: [
    { month: 'Apr 2026', amount: 110000000, count: 18 },
    { month: 'May 2026', amount: 145000000, count: 22 },
    { month: 'Iyun 2026', amount: 195000000, count: 28 },
    { month: 'Iyul 2026', amount: 230000000, count: 32 },
    { month: 'Avgust 2026', amount: 275000000, count: 35 },
    { month: 'Sentabr 2026', amount: 329500000, count: 42 }
  ],
  categoryBreakdown: [
    { name: 'Ta’lim va maktablar', percentage: 34, amount: 436730000, color: '#059669' },
    { name: 'Nogironlik va tibbiyot', percentage: 26, amount: 333970000, color: '#0d9488' },
    { name: 'Yosh tadbirkorlik', percentage: 22, amount: 282590000, color: '#2563eb' },
    { name: 'Mahalla va jamoat infratuzilmasi', percentage: 18, amount: 231210000, color: '#d97706' }
  ]
};

export const SAMPLE_NOTIFICATIONS = [
  {
    id: 'n1',
    title: '1-bosqich yakunlandi!',
    message: 'Siz qo‘llab-quvvatlagan “Maktab uchun 10 ta kompyuter” loyihasida 1-bosqich yakunlandi va 10 ta kompyuter yetkazildi.',
    timestamp: '2 soat oldin',
    read: false,
    projectId: 'proj_school_comp_01'
  },
  {
    id: 'n2',
    title: 'Yangi fotohisobot mavjud',
    message: '“Farg‘ona eko-issiqxona” loyihasida birinchi hosil yig‘ildi va hisobot ochiqlandi.',
    timestamp: '1 kun oldin',
    read: true,
    projectId: 'proj_greenhouse_03'
  },
  {
    id: 'n3',
    title: 'Loyiha 85% ko‘rsatkichga yetdi',
    message: '“Buxoroda nogironligi bo‘lgan shaxslar uchun faol aravachalar” loyihasi yakunlanishiga oz qoldi.',
    timestamp: '2 kun oldin',
    read: true,
    projectId: 'proj_wheelchair_04'
  }
];
