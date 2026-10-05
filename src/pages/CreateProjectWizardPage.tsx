import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Project, ProjectType, ProjectCategory } from '../types';
import { formatUzs } from '../utils/formatters';
import { 
  Bot, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Plus, 
  Trash2, 
  Upload, 
  FileText,
  AlertCircle
} from 'lucide-react';

export const CreateProjectWizardPage: React.FC = () => {
  const { addNewProject, setCurrentView, showToast } = useApp();

  const [step, setStep] = useState<number>(1);
  const totalSteps = 7; // Consolidated into 7 rich, intuitive steps for streamlined UX

  // AI Assistant prompt state
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGeneratingWithAi, setIsGeneratingWithAi] = useState(false);

  // Form State
  const [type, setType] = useState<ProjectType>('social');
  const [category, setCategory] = useState<ProjectCategory>('education');
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [problemStatement, setProblemStatement] = useState('');
  const [whyItMatters, setWhyItMatters] = useState('');
  const [detailedDescription, setDetailedDescription] = useState('');

  // Location
  const [region, setRegion] = useState('Toshkent shahri');
  const [city, setCity] = useState('Toshkent');
  const [mahalla, setMahalla] = useState('');

  // Org / Initiator
  const [orgName, setOrgName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('+998 ');

  // Budget Items
  const [budgetItems, setBudgetItems] = useState<{ name: string; category: string; plannedAmount: number; supplierName: string }[]>([
    { name: 'Asosiy moddiy uskunalar', category: 'Uskunalar', plannedAmount: 12000000, supplierName: 'Rasmiy yetkazib beruvchi' },
    { name: 'Yetkazib berish va o‘rnatish', category: 'Logistika', plannedAmount: 1500000, supplierName: 'Yuk tashish xizmati' }
  ]);

  // Milestones
  const [milestonesList, setMilestonesList] = useState<{ title: string; targetAmount: number; description: string }[]>([
    { title: 'Uskunalarni sotib olish va omborga qabul qilish', targetAmount: 12000000, description: 'Barcha kafolat va schyotlar taqdim etiladi.' },
    { title: 'Montaj qilish va foydalanishga topshirish', targetAmount: 1500000, description: 'Yakuniy qabul dalolatnomasi.' }
  ]);

  // Beneficiaries
  const [beneficiariesCount, setBeneficiariesCount] = useState<number>(250);
  const [beneficiariesDescription, setBeneficiariesDescription] = useState('Mahalla o‘quvchilari va oilalari');

  const totalBudget = budgetItems.reduce((acc, item) => acc + (Number(item.plannedAmount) || 0), 0);

  // AI Assistant auto-fill simulation
  const handleAiAutoFill = (presetPrompt?: string) => {
    const promptToUse = presetPrompt || aiPrompt;
    if (!promptToUse.trim()) return;

    setIsGeneratingWithAi(true);

    setTimeout(() => {
      setIsGeneratingWithAi(false);

      if (promptToUse.toLowerCase().includes('kompyuter') || promptToUse.toLowerCase().includes('maktab') || promptToUse.toLowerCase().includes('school')) {
        setType('social');
        setCategory('education');
        setTitle('Chilonzor tumanidagi 184-maktab uchun IT laboratoriya');
        setTagline('700 dan ziyod o‘quvchilarga dasturlash va robototexnikani o‘rgatish');
        setProblemStatement('Maktabdagi mavjud kompyuterlar eskirgan va zamonaviy ta’lim dasturlarini qo‘llab-quvvatlamaydi. O‘quvchilar amaliy IT darslaridan orqada qolmoqda.');
        setWhyItMatters('Zamonaviy IT ko‘nikmalari o‘quvchilarga kelajakda yuqori daromadli kasblarga yo‘l ochadi.');
        setDetailedDescription('10 ta yangi kompyuter jamlanmasi, tarmoq uskunalari va litsenziyalangan ta’lim dasturlari xarid qilinadi.');
        setCity('Toshkent');
        setMahalla('Chilonzor 19-mavze');
        setOrgName('184-sonli maktab Vasiylik Kengashi');
        setContactPerson('Rustam Alimov');
        setBeneficiariesCount(420);
        setBeneficiariesDescription('Har o‘quv yilida 400 dan ortiq 8-11 sinf o‘quvchilari');
        setBudgetItems([
          { name: '10 ta kompyuter to‘plami (Core i5, 16GB, SSD)', category: 'Uskunalar', plannedAmount: 18000000, supplierName: 'SmartPC Tashkent' },
          { name: 'Maxsus stol va stullar', category: 'Mebel', plannedAmount: 4000000, supplierName: 'ComfortMebel XK' },
          { name: 'Tarmoq sozlash va o‘rnatish', category: 'Xizmatlar', plannedAmount: 1500000, supplierName: 'IT Servis Pro' }
        ]);
        setMilestonesList([
          { title: 'Kompyuterlarni xarid qilish', targetAmount: 18000000, description: 'Tovarlar yetkazilib, kafolat talonlari olinadi.' },
          { title: 'Mebel va tarmoq o‘rnatish', targetAmount: 5500000, description: 'Sinf to‘liq shay holatga keltiriladi.' }
        ]);
      } else if (promptToUse.toLowerCase().includes('novvoy') || promptToUse.toLowerCase().includes('bakery') || promptToUse.toLowerCase().includes('non')) {
        setType('business');
        setCategory('business');
        setTitle('Mahallada yangi avlod non va qandolatchilik sexi');
        setTagline('Yosh usta tomonidan arzon va sifatli mahsulotlar ishlab chiqarish');
        setProblemStatement('Mahalla aholisi yangi pishirilgan non uchun uzoqdagi bozorga borishga majbur.');
        setWhyItMatters('3 nafar yosh uchun doimiy ish o‘rni va aholiga hamyonbop non ta’minoti.');
        setDetailedDescription('Energiya tejamkor aylanma pech va xamir qorgich uskunalari sotib olinadi.');
        setCity('Samarqand');
        setMahalla('Temiryo‘lchilar mahallasi');
        setOrgName('“Zarafshon Non” YaTT');
        setContactPerson('Javohir Saidov');
        setBeneficiariesCount(600);
        setBeneficiariesDescription('Mahalladagi 600 dan ortiq xonadon');
        setBudgetItems([
          { name: 'Elektr aylanma pech', category: 'Asosiy vosita', plannedAmount: 5500000, supplierName: 'O‘zPechTexnika' },
          { name: 'Xamir qoruvchi mashina', category: 'Asosiy vosita', plannedAmount: 2500000, supplierName: 'TechnoSam' },
          { name: 'Dastlabki un va xomashyo', category: 'Aylanma', plannedAmount: 1500000, supplierName: 'Don Kombinat' }
        ]);
        setMilestonesList([
          { title: 'Uskunalarni o‘rnatish', targetAmount: 8000000, description: 'Sexga pech va qorgichni keltirish.' },
          { title: 'Sinov pishirig‘i va ochilish', targetAmount: 1500000, description: 'Dastlabki partiyani mahalla do‘konlariga yetkazish.' }
        ]);
      } else {
        // Generic smart fill
        setTitle('Mahalliy ijtimoiy tashabbus: ' + promptToUse);
        setTagline('Mahalla aholisi uchun qulaylik va yangi imkoniyatlar yaratish');
        setProblemStatement('Ushbu ehtiyoj ko‘plab xonadonlar hayotiga bevosita ta’sir ko‘rsatmoqda.');
        setWhyItMatters('Jamoat manfaatlariga xizmat qiladi va hayot sifatini oshiradi.');
        setDetailedDescription('Barcha xaridlar va ishlar ochiq smeta asosida olib boriladi.');
      }

      showToast('AI taklifi shakllantirildi! Barcha maydonlarni o‘zgartirishingiz mumkin.');
      setStep(2); // Jump to review filled details
    }, 1000);
  };

  const handleAddBudgetItem = () => {
    setBudgetItems([...budgetItems, { name: '', category: 'Boshqa', plannedAmount: 0, supplierName: '' }]);
  };

  const handleRemoveBudgetItem = (idx: number) => {
    setBudgetItems(budgetItems.filter((_, i) => i !== idx));
  };

  const handleSubmit = () => {
    if (!title || !problemStatement || totalBudget <= 0) {
      showToast('Iltimos, barcha majburiy maydonlarni to‘ldiring.');
      return;
    }

    const newId = addNewProject({
      title,
      tagline: tagline || title,
      type,
      category,
      status: 'pending_verification',
      location: {
        region,
        city,
        mahalla: mahalla || 'Markaziy mahalla'
      },
      organization: {
        name: orgName || 'Fuqarolar tashabbus guruhi',
        type: type === 'business' ? 'business' : 'community',
        contactPerson: contactPerson || 'Loyiha Tashabbuskori',
        phone: phone || '+998 90 000-00-00'
      },
      imageUrl: '/src/assets/images/project_school_computers_1790947074384.jpg',
      requiredAmount: totalBudget,
      daysRemaining: 30,
      problemStatement,
      whyItMatters,
      detailedDescription,
      budget: budgetItems.map((b, i) => ({
        id: `b_new_${i}`,
        name: b.name || 'Xarajat moddasi',
        category: b.category,
        plannedAmount: Number(b.plannedAmount) || 0,
        spentAmount: 0,
        supplierName: b.supplierName,
        verified: false
      })),
      milestones: milestonesList.map((m, i) => ({
        id: `m_new_${i}`,
        order: i + 1,
        title: m.title,
        targetAmount: Number(m.targetAmount) || 0,
        releasedAmount: 0,
        status: 'pending',
        description: m.description
      })),
      trustEngine: {
        verificationCompleteness: 70,
        trustStatus: 'PENDING',
        riskLevel: 'LOW',
        verifierName: 'Kengash moderatorlari',
        verifierOrganization: 'YordamPay Ekspertiza',
        verifiedAt: new Date().toISOString().substring(0, 10),
        checklist: {
          identityVerified: true,
          projectVerified: false,
          organizationVerified: false,
          budgetReviewed: false,
          documentsChecked: true,
          supplierChecked: false,
          onSiteInspection: false
        },
        transparencyPledgeSigned: true
      },
      aiRiskAnalysis: {
        riskLevel: 'LOW',
        score: 85,
        lastAnalyzedAt: new Date().toISOString().substring(0, 10),
        summary: 'Loyiha arizasi birlamchi AI filtrlardan o‘tdi. Narxlar bozor o‘rtachasiga mos keladi. Inson eksperti tekshiruviga yuborildi.',
        riskFactors: [],
        recommendedAction: 'Ekspert ko‘rigi va hujjatlarni tasdiqlash.',
        budgetInsights: ['Asosiy xarajatlar uskunalar va vositalarga to‘g‘ri taqsimlangan.']
      },
      impactMetrics: {
        overallScore: 82,
        communityReach: 80,
        urgency: 78,
        transparency: 88,
        measurability: 82,
        beneficiariesCount,
        beneficiariesDescription,
        measurableOutcomes: [
          'Rejadagi uskunalar to‘liq xarid qilinadi',
          'Belgilangan maqsadli guruhga to‘liq yetkaziladi'
        ]
      },
      documents: [
        {
          id: 'doc_1',
          title: 'Dastlabki ehtiyoj hujjati va ariza',
          type: 'official_letter',
          fileSize: '650 KB',
          verified: true
        }
      ]
    });

    setCurrentView('project-detail', newId);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Wizard Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">
          <span>YordamPay Project Builder</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Yangi Loyiha Yaratish va Tekshiruvga Topshirish
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          AI yordamchisi orqali g‘oyani to‘liq strukturaviy loyihaga aylantiring va platforma standartlariga muvofiq byudjet tuzing.
        </p>
      </div>

      {/* AI Assistant Quick Generator Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          <span>AI Loyiha Yordamchisi (AI Project Assistant)</span>
        </div>
        <h3 className="text-lg font-bold tracking-tight">
          Ehtiyojingizni qisqa yozing — AI to‘liq byudjet va bosqichlarni tayyorlab beradi
        </h3>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Masalan: “Maktab uchun 10 ta kompyuter kerak” yoki “Mahallada kichik novvoyxona”..."
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button
            onClick={() => handleAiAutoFill()}
            disabled={isGeneratingWithAi}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer shrink-0"
          >
            <Bot className="w-4 h-4" />
            <span>{isGeneratingWithAi ? 'Generatsiya qilinmoqda...' : 'AI bilan to‘ldirish'}</span>
          </button>
        </div>

        {/* Quick prompt templates */}
        <div className="flex items-center gap-2 flex-wrap text-[11px] text-slate-300 pt-1">
          <span>Tezkor namunalar:</span>
          <button
            onClick={() => handleAiAutoFill('Maktab uchun kompyuter')}
            className="bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer transition-colors"
          >
            Maktab kompyuter sinfi
          </button>
          <button
            onClick={() => handleAiAutoFill('Mahallada mini novvoyxona')}
            className="bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer transition-colors"
          >
            Mini-novvoyxona
          </button>
        </div>
      </div>

      {/* Multi-step progress indicators */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-xs">
        <span className="font-bold text-slate-900">
          Qadam {step} / {totalSteps}: {step === 1 ? 'Loyiha turi va yo‘nalishi' : step === 2 ? 'Muammo va maqsad' : step === 3 ? 'Joylashuv va tashabbuskor' : step === 4 ? 'Smeta va byudjet' : step === 5 ? 'Bosqichlar (Milestones)' : step === 6 ? 'Benefisiarlar va natijalar' : 'Tekshirish va topshirish'}
        </span>
        <span className="text-slate-400 font-mono">{Math.round((step / totalSteps) * 100)}%</span>
      </div>

      {/* Form Content Cards */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        
        {/* Step 1: Type and Category */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                1. Loyiha turini tanlang:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  onClick={() => setType('social')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    type === 'social'
                      ? 'border-emerald-700 bg-emerald-50/60 ring-1 ring-emerald-700'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <h4 className="text-sm font-bold text-slate-900">Ijtimoiy Loyiha (Social)</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Maktab, nogironlik vositasi, mahalla kutubxonasi, tibbiy ko‘mak yoki jamoat obyekti.
                  </p>
                </div>

                <div
                  onClick={() => setType('business')}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    type === 'business'
                      ? 'border-emerald-700 bg-emerald-50/60 ring-1 ring-emerald-700'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <h4 className="text-sm font-bold text-slate-900">Yosh Tadbirkor / Biznes</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Mini-novvoyxona, issiqxona, tikuv sexi, mahalliy xizmatlar yoki ishlab chiqarish.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                Kategoriya:
              </label>
              <select
                value={category}
                onChange={(e: any) => setCategory(e.target.value)}
                className="w-full py-2.5 px-3 text-xs rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-600"
              >
                <option value="education">Ta’lim va maktablar</option>
                <option value="disability">Nogironlik va reabilitatsiya</option>
                <option value="community">Mahalla va jamoat infratuzilmasi</option>
                <option value="business">Yosh tadbirkorlik</option>
                <option value="social">Ijtimoiy yordam</option>
                <option value="emergency">Favqulodda yordam</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 2: Problem & Goal */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                Loyiha Nomi:
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Masalan: 272-sonli maktab uchun 10 ta kompyuter"
                className="w-full p-2.5 text-xs rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                Qisqa shior (Tagline):
              </label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="Masalan: Yunusobod yoshlari uchun dasturlash sinfi"
                className="w-full p-2.5 text-xs rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                Mavjud Muammo Bayoni:
              </label>
              <textarea
                rows={3}
                value={problemStatement}
                onChange={(e) => setProblemStatement(e.target.value)}
                placeholder="Muammo nima va u kimga ta’sir qilmoqda?"
                className="w-full p-2.5 text-xs rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                Nima Uchun Bu Muhim?
              </label>
              <textarea
                rows={2}
                value={whyItMatters}
                onChange={(e) => setWhyItMatters(e.target.value)}
                placeholder="Bu loyiha amalga oshsa jamiyatga nima beradi?"
                className="w-full p-2.5 text-xs rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>
        )}

        {/* Step 3: Location and Contact */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">Viloyat / Hudud:</label>
                <input
                  type="text"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-lg border border-slate-200 text-slate-900"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">Shahar / Tuman:</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-lg border border-slate-200 text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">Mahalla Nomi:</label>
              <input
                type="text"
                value={mahalla}
                onChange={(e) => setMahalla(e.target.value)}
                placeholder="Masalan: Qadrdon mahallasi, 12-uy"
                className="w-full p-2.5 text-xs rounded-lg border border-slate-200 text-slate-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">Tashkilot / Tashabbuskor:</label>
                <input
                  type="text"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="Maktab yoki YaTT nomi"
                  className="w-full p-2.5 text-xs rounded-lg border border-slate-200 text-slate-900"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">Mas’ul Shaxs:</label>
                <input
                  type="text"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  placeholder="Ism sharif"
                  className="w-full p-2.5 text-xs rounded-lg border border-slate-200 text-slate-900"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">Telefon:</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2.5 text-xs rounded-lg border border-slate-200 text-slate-900"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Budget Builder */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Xarajatlar Smetasi (Har bir so‘m asoslanishi shart)
                </h4>
                <p className="text-[11px] text-slate-500">
                  Ulgurji narxlar va rasmiy ta’minotchi nomi ko‘rsatilsin
                </p>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-slate-400 block uppercase">Jami Byudjet:</span>
                <span className="text-base font-bold font-mono text-emerald-800">{formatUzs(totalBudget)}</span>
              </div>
            </div>

            <div className="space-y-3">
              {budgetItems.map((item, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                    <div className="sm:col-span-6">
                      <input
                        type="text"
                        placeholder="Modda nomi (tovar yoki xizmat)"
                        value={item.name}
                        onChange={(e) => {
                          const updated = [...budgetItems];
                          updated[idx].name = e.target.value;
                          setBudgetItems(updated);
                        }}
                        className="w-full p-2 text-xs rounded-lg border border-slate-200 bg-white"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <input
                        type="number"
                        placeholder="Summa (so‘m)"
                        value={item.plannedAmount || ''}
                        onChange={(e) => {
                          const updated = [...budgetItems];
                          updated[idx].plannedAmount = parseInt(e.target.value) || 0;
                          setBudgetItems(updated);
                        }}
                        className="w-full p-2 text-xs rounded-lg border border-slate-200 bg-white font-mono"
                      />
                    </div>
                    <div className="sm:col-span-3 flex items-center gap-1">
                      <input
                        type="text"
                        placeholder="Ta’minotchi (INN/Korxona)"
                        value={item.supplierName}
                        onChange={(e) => {
                          const updated = [...budgetItems];
                          updated[idx].supplierName = e.target.value;
                          setBudgetItems(updated);
                        }}
                        className="w-full p-2 text-xs rounded-lg border border-slate-200 bg-white"
                      />
                      {budgetItems.length > 1 && (
                        <button
                          onClick={() => handleRemoveBudgetItem(idx)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleAddBudgetItem}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Yangi xarajat moddasi qo‘shish</span>
            </button>
          </div>
        )}

        {/* Step 5: Milestones */}
        {step === 5 && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Bosqichma-bosqich Escrow Rejasi
            </h4>
            <p className="text-xs text-slate-500">
              Mablag‘lar faqat har bir bosqich mustaqil tekshiruvdan o‘tgandan so‘ng yetkazib beruvchiga o‘tkaziladi
            </p>

            <div className="space-y-3">
              {milestonesList.map((m, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span>{idx + 1}-Bosqich</span>
                    <span className="font-mono text-emerald-800">{formatUzs(m.targetAmount)}</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Bosqich nomi"
                    value={m.title}
                    onChange={(e) => {
                      const updated = [...milestonesList];
                      updated[idx].title = e.target.value;
                      setMilestonesList(updated);
                    }}
                    className="w-full p-2 text-xs rounded-lg border border-slate-200 bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Qanday natija va cheklar taqdim etiladi?"
                    value={m.description}
                    onChange={(e) => {
                      const updated = [...milestonesList];
                      updated[idx].description = e.target.value;
                      setMilestonesList(updated);
                    }}
                    className="w-full p-2 text-xs rounded-lg border border-slate-200 bg-white text-slate-600"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Beneficiaries & Impact */}
        {step === 6 && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Benefisiarlar va Kutilayotgan Natija
            </h4>

            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                Yordam oluvchi aholi / bolalar soni (nafar):
              </label>
              <input
                type="number"
                value={beneficiariesCount}
                onChange={(e) => setBeneficiariesCount(parseInt(e.target.value) || 0)}
                className="w-full p-2.5 text-xs rounded-lg border border-slate-200 text-slate-900 font-mono"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                Guruh tavsifi:
              </label>
              <input
                type="text"
                value={beneficiariesDescription}
                onChange={(e) => setBeneficiariesDescription(e.target.value)}
                placeholder="Masalan: Maktab o‘quvchilari va mahalladagi kam ta’minlangan oilalar"
                className="w-full p-2.5 text-xs rounded-lg border border-slate-200 text-slate-900"
              />
            </div>
          </div>
        )}

        {/* Step 7: Preview & Submit */}
        {step === 7 && (
          <div className="space-y-5">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Loyiha topshirishga tayyor!</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                YordamPay Trust Engine ushbu arizani qabul qiladi. 24 soat ichida mutaxassislar ta’minotchi va narxlarni tekshirib ommaviy yig‘imga ruxsat beradi.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Loyiha Nomi:</span>
                <span className="font-bold text-slate-900">{title || 'Nomsiz'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Umumiy Byudjet:</span>
                <span className="font-mono font-bold text-emerald-800">{formatUzs(totalBudget)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Joylashuv:</span>
                <span className="text-slate-700">{region}, {city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Qamrov:</span>
                <span className="text-slate-700">{beneficiariesCount} nafar fuqaro</span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Orqaga</span>
            </button>
          ) : <div />}

          {step < totalSteps ? (
            <button
              onClick={() => setStep(step + 1)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg cursor-pointer shadow-xs"
            >
              <span>Keyingi qadam</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg cursor-pointer shadow-md"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Tekshiruvga topshirish</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
