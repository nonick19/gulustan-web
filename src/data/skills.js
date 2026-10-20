// Yetenekler alanlara göre gruplanır. `filter` alanı, ilgili projeleri
// bulmak için kullanılan etiketle eşleşir (proje tags veya category değeri).

export const skillGroups = [
  {
    key: 'model',
    title: 'Model & Prompting',
    blurb: 'Modelin ne söylediği kadar, neye göre söylediğini tasarlıyorum.',
    skills: [
      {
        name: 'Prompt Engineering',
        level: 'Üretimde',
        desc: 'Sistem prompt tasarımı, few-shot stratejileri ve yapılandırılmış çıktı.',
        tags: ['System Prompts', 'Few-shot', 'Structured Output'],
        filter: 'Prompt Engineering',
      },
      {
        name: 'Context Engineering',
        level: 'Üretimde',
        desc: 'Bağlam bütçelemesi, bellek tasarımı ve dinamik bağlam derleme.',
        tags: ['Context Windows', 'Memory', 'Compaction'],
        filter: 'Context Engineering',
      },
      {
        name: 'LLM Entegrasyonları',
        level: 'Üretimde',
        desc: 'OpenAI ve Anthropic API’leriyle streaming ve function calling.',
        tags: ['OpenAI', 'Anthropic', 'Function Calling'],
        filter: 'OpenAI',
      },
      {
        name: 'Değerlendirme (Eval)',
        level: 'Projede',
        desc: 'Çıktı kalitesini ölçen test setleri ve regresyon kontrolleri.',
        tags: ['Eval Sets', 'Regresyon', 'Kalite Ölçümü'],
        filter: 'Eval',
      },
    ],
  },
  {
    key: 'retrieval',
    title: 'Retrieval & Veri',
    blurb: 'Doğru bilgiyi, doğru anda, doğru miktarda bağlama taşıyorum.',
    skills: [
      {
        name: 'RAG Sistemleri',
        level: 'Üretimde',
        desc: 'Chunking, embedding, hibrit arama ve reranking ile üretim seviyesinde pipeline’lar.',
        tags: ['Embeddings', 'Hybrid Search', 'Reranking'],
        filter: 'RAG',
      },
      {
        name: 'Vektör Veritabanları',
        level: 'Üretimde',
        desc: 'Qdrant, pgvector ve Pinecone ile indeksleme ve arama altyapıları.',
        tags: ['Qdrant', 'pgvector', 'Pinecone'],
        filter: 'Qdrant',
      },
      {
        name: 'Veri Hazırlama',
        level: 'Projede',
        desc: 'Doküman ayrıştırma, temizleme ve metadata ile zenginleştirme.',
        tags: ['Parsing', 'Metadata', 'Temizleme'],
        filter: 'Memory',
      },
    ],
  },
  {
    key: 'agents',
    title: 'Agent Sistemleri',
    blurb: 'Planlayan, araç kullanan ve gerektiğinde durmasını bilen akışlar.',
    skills: [
      {
        name: 'AI Agents',
        level: 'Projede',
        desc: 'Çok adımlı görevleri yürüten otonom agent mimarileri.',
        tags: ['Orchestration', 'Multi-step', 'Planning'],
        filter: 'AI Agents',
      },
      {
        name: 'Tool Use',
        level: 'Projede',
        desc: 'Sınırlı yetkili, tek amaçlı araç tasarımı ve hata yönetimi.',
        tags: ['Tool Use', 'Function Calling', 'Retry'],
        filter: 'Tool Use',
      },
      {
        name: 'Guardrail Tasarımı',
        level: 'Projede',
        desc: 'İnsan onayı, çıktı doğrulama ve maliyet sınırları.',
        tags: ['Human-in-the-loop', 'Validation', 'Maliyet'],
        filter: 'Anthropic',
      },
    ],
  },
  {
    key: 'engineering',
    title: 'Mühendislik & Teslim',
    blurb: 'Demo’dan üretime: servis, arayüz ve izleme tarafı.',
    skills: [
      {
        name: 'Python / FastAPI',
        level: 'Üretimde',
        desc: 'AI backend’leri, veri pipeline’ları ve LLM servisleri.',
        tags: ['FastAPI', 'LangChain', 'Data Pipelines'],
        filter: 'Python',
      },
      {
        name: 'JavaScript / React',
        level: 'Üretimde',
        desc: 'Streaming tabanlı sohbet ve AI destekli arayüzler.',
        tags: ['React', 'Vite', 'Streaming UI'],
        filter: 'React',
      },
      {
        name: 'Node.js',
        level: 'Projede',
        desc: 'İçerik ve otomasyon akışları için sunucu tarafı geliştirme.',
        tags: ['Node.js', 'API', 'Otomasyon'],
        filter: 'Node.js',
      },
    ],
  },
]

export const tools = [
  'OpenAI',
  'Anthropic',
  'Python',
  'FastAPI',
  'React',
  'Node.js',
  'Qdrant',
  'pgvector',
  'Docker',
  'GitHub Actions',
]

export const processSteps = [
  {
    title: 'Keşif',
    desc: 'Kullanım senaryosu, veri kaynakları ve başarı kriterleri netleşir.',
  },
  {
    title: 'Ölçüm',
    desc: 'Eval seti ve temel metrikler belirlenir; iyileşme ölçülebilir olur.',
  },
  {
    title: 'Geliştirme',
    desc: 'Retrieval, prompt ve agent akışları küçük adımlarla kurulur.',
  },
  {
    title: 'İzleme',
    desc: 'Maliyet, gecikme ve kalite üretimde takip edilir.',
  },
]
