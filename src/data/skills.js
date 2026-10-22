// Yetenekler alanlara göre gruplanır. `filter` alanı, ilgili projeleri
// bulmak için kullanılan etiketle eşleşir (proje tags veya category değeri).
// Dilden bağımsızdır; görünen metinler `tr` / `en` bloklarında yer alır.
// `level`: prod (Üretimde / In production), project (Projede / In projects),
// familiar (Aşina / Familiar).

export const skillGroups = [
  {
    key: 'model',
    tr: {
      title: 'Model & Prompting',
      blurb: 'Modelin ne söylediği kadar, neye göre söylediğini tasarlıyorum.',
    },
    en: {
      title: 'Model & Prompting',
      blurb: 'I design not just what the model says, but what it says it based on.',
    },
    skills: [
      {
        filter: 'Prompt Engineering',
        level: 'prod',
        tr: {
          name: 'Prompt Engineering',
          desc: 'Sistem prompt tasarımı, few-shot stratejileri ve yapılandırılmış çıktı.',
        },
        en: {
          name: 'Prompt Engineering',
          desc: 'System prompt design, few-shot strategies and structured output.',
        },
        tags: ['System Prompts', 'Few-shot', 'Structured Output'],
      },
      {
        filter: 'Context Engineering',
        level: 'prod',
        tr: {
          name: 'Context Engineering',
          desc: 'Bağlam bütçelemesi, bellek tasarımı ve dinamik bağlam derleme.',
        },
        en: {
          name: 'Context Engineering',
          desc: 'Context budgeting, memory design and dynamic context assembly.',
        },
        tags: ['Context Windows', 'Memory', 'Compaction'],
      },
      {
        filter: 'OpenAI',
        level: 'prod',
        tr: {
          name: 'LLM Entegrasyonları',
          desc: 'OpenAI ve Anthropic API’leriyle streaming ve function calling.',
        },
        en: {
          name: 'LLM Integrations',
          desc: 'Streaming and function calling with the OpenAI and Anthropic APIs.',
        },
        tags: ['OpenAI', 'Anthropic', 'Function Calling'],
      },
      {
        filter: 'Eval',
        level: 'project',
        tr: {
          name: 'Değerlendirme (Eval)',
          desc: 'Çıktı kalitesini ölçen test setleri ve regresyon kontrolleri.',
        },
        en: {
          name: 'Evaluation (Eval)',
          desc: 'Test sets and regression checks that measure output quality.',
        },
        tags: ['Eval Sets', 'Regresyon', 'Kalite Ölçümü'],
      },
    ],
  },
  {
    key: 'retrieval',
    tr: {
      title: 'Retrieval & Veri',
      blurb: 'Doğru bilgiyi, doğru anda, doğru miktarda bağlama taşıyorum.',
    },
    en: {
      title: 'Retrieval & Data',
      blurb: 'I move the right information into the context, at the right time and in the right amount.',
    },
    skills: [
      {
        filter: 'RAG',
        level: 'prod',
        tr: {
          name: 'RAG Sistemleri',
          desc: 'Chunking, embedding, hibrit arama ve reranking ile üretim seviyesinde pipeline’lar.',
        },
        en: {
          name: 'RAG Systems',
          desc: 'Production pipelines with chunking, embeddings, hybrid search and reranking.',
        },
        tags: ['Embeddings', 'Hybrid Search', 'Reranking'],
      },
      {
        filter: 'Qdrant',
        level: 'prod',
        tr: {
          name: 'Vektör Veritabanları',
          desc: 'Qdrant, pgvector ve Pinecone ile indeksleme ve arama altyapıları.',
        },
        en: {
          name: 'Vector Databases',
          desc: 'Indexing and search infrastructure with Qdrant, pgvector and Pinecone.',
        },
        tags: ['Qdrant', 'pgvector', 'Pinecone'],
      },
      {
        filter: 'Memory',
        level: 'project',
        tr: {
          name: 'Veri Hazırlama',
          desc: 'Doküman ayrıştırma, temizleme ve metadata ile zenginleştirme.',
        },
        en: {
          name: 'Data Preparation',
          desc: 'Document parsing, cleaning and metadata enrichment.',
        },
        tags: ['Parsing', 'Metadata', 'Temizleme'],
      },
    ],
  },
  {
    key: 'agents',
    tr: {
      title: 'Agent Sistemleri',
      blurb: 'Planlayan, araç kullanan ve gerektiğinde durmasını bilen akışlar.',
    },
    en: {
      title: 'Agent Systems',
      blurb: 'Flows that plan, use tools and know when to stop.',
    },
    skills: [
      {
        filter: 'AI Agents',
        level: 'project',
        tr: {
          name: 'AI Agents',
          desc: 'Çok adımlı görevleri yürüten otonom agent mimarileri.',
        },
        en: {
          name: 'AI Agents',
          desc: 'Autonomous agent architectures that carry out multi-step tasks.',
        },
        tags: ['Orchestration', 'Multi-step', 'Planning'],
      },
      {
        filter: 'Tool Use',
        level: 'project',
        tr: {
          name: 'Tool Use',
          desc: 'Sınırlı yetkili, tek amaçlı araç tasarımı ve hata yönetimi.',
        },
        en: {
          name: 'Tool Use',
          desc: 'Least-privilege, single-purpose tool design and error handling.',
        },
        tags: ['Tool Use', 'Function Calling', 'Retry'],
      },
      {
        filter: 'Anthropic',
        level: 'project',
        tr: {
          name: 'Guardrail Tasarımı',
          desc: 'İnsan onayı, çıktı doğrulama ve maliyet sınırları.',
        },
        en: {
          name: 'Guardrail Design',
          desc: 'Human approval, output validation and cost limits.',
        },
        tags: ['Human-in-the-loop', 'Validation', 'Maliyet'],
      },
    ],
  },
  {
    key: 'engineering',
    tr: {
      title: 'Mühendislik & Teslim',
      blurb: 'Demo’dan üretime: servis, arayüz ve izleme tarafı.',
    },
    en: {
      title: 'Engineering & Delivery',
      blurb: 'From demo to production: services, interfaces and monitoring.',
    },
    skills: [
      {
        filter: 'Python',
        level: 'prod',
        tr: {
          name: 'Python / FastAPI',
          desc: 'AI backend’leri, veri pipeline’ları ve LLM servisleri.',
        },
        en: {
          name: 'Python / FastAPI',
          desc: 'AI backends, data pipelines and LLM services.',
        },
        tags: ['FastAPI', 'LangChain', 'Data Pipelines'],
      },
      {
        filter: 'React',
        level: 'prod',
        tr: {
          name: 'JavaScript / React',
          desc: 'Streaming tabanlı sohbet ve AI destekli arayüzler.',
        },
        en: {
          name: 'JavaScript / React',
          desc: 'Streaming chat interfaces and AI-powered UIs.',
        },
        tags: ['React', 'Vite', 'Streaming UI'],
      },
      {
        filter: 'Node.js',
        level: 'project',
        tr: {
          name: 'Node.js',
          desc: 'İçerik ve otomasyon akışları için sunucu tarafı geliştirme.',
        },
        en: {
          name: 'Node.js',
          desc: 'Server-side development for content and automation flows.',
        },
        tags: ['Node.js', 'API', 'Otomasyon'],
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
    tr: {
      title: 'Keşif',
      desc: 'Kullanım senaryosu, veri kaynakları ve başarı kriterleri netleşir.',
    },
    en: {
      title: 'Discovery',
      desc: 'Use case, data sources and success criteria are made explicit.',
    },
  },
  {
    tr: {
      title: 'Ölçüm',
      desc: 'Eval seti ve temel metrikler belirlenir; iyileşme ölçülebilir olur.',
    },
    en: {
      title: 'Measurement',
      desc: 'An eval set and baseline metrics are defined so improvement becomes measurable.',
    },
  },
  {
    tr: {
      title: 'Geliştirme',
      desc: 'Retrieval, prompt ve agent akışları küçük adımlarla kurulur.',
    },
    en: {
      title: 'Development',
      desc: 'Retrieval, prompting and agent flows are built in small steps.',
    },
  },
  {
    tr: {
      title: 'İzleme',
      desc: 'Maliyet, gecikme ve kalite üretimde takip edilir.',
    },
    en: {
      title: 'Monitoring',
      desc: 'Cost, latency and quality are tracked in production.',
    },
  },
]