// Projeler buradan yönetilir.
// - Gerçek demo / repo linklerini `links` alanına ekleyin; boş olanlar arayüzde gizlenir.
// - Ölçülebilir bir sonucunuz varsa `highlights` yerine
//   `metrics: [{ label: 'Yanıt doğruluğu', value: '+38%' }]` kullanabilirsiniz.
// - Her proje `tr` ve `en` bloklarıyla iki dilde yazılır; slug dillerden bağımsızdır.

export const categories = [
  { key: 'all', tr: 'Tümü', en: 'All' },
  { key: 'RAG', tr: 'RAG', en: 'RAG' },
  { key: 'Agent', tr: 'Agent', en: 'Agent' },
  { key: 'Pipeline', tr: 'Pipeline', en: 'Pipeline' },
  { key: 'Memory', tr: 'Memory', en: 'Memory' },
]

export const projects = [
  {
    slug: 'rag-dokuman-asistani',
    category: 'RAG',
    year: '2025',
    featured: true,
    tags: ['RAG', 'OpenAI', 'Qdrant', 'FastAPI', 'React'],
    links: {},
    tr: {
      title: 'RAG Tabanlı Doküman Asistanı',
      role: 'Solo — AI Engineer',
      summary:
        'Kurumsal PDF ve bilgi bankaları üzerinde doğal dille soru yanıtlayan, kaynak gösteren asistan.',
      problem:
        'Dağınık dokümanlar arasında doğru bilgiye ulaşmak dakikalar alıyor, verilen yanıtların hangi kaynağa dayandığı ise çoğu zaman belirsiz kalıyordu.',
      approach: [
        'Chunking ve embedding stratejisi doküman tipine göre ayrıştırıldı.',
        'Hibrit arama (BM25 + vektör) ve reranking ile bağlam kalitesi artırıldı.',
        'Her yanıta kaynak gösterimi eklendi, halüsinasyon oranı ölçülebilir hâle geldi.',
      ],
      highlights: ['Kaynak gösterimli yanıt', 'Hibrit arama + reranking'],
    },
    en: {
      title: 'RAG-Powered Document Assistant',
      role: 'Solo — AI Engineer',
      summary:
        'An assistant that answers questions in natural language over corporate PDFs and knowledge bases, always citing its sources.',
      problem:
        'Finding the right information across scattered documents took minutes, and the sources behind each answer were usually unclear.',
      approach: [
        'Chunking and embedding strategies were split by document type.',
        'Hybrid search (BM25 + vectors) and reranking improved context quality.',
        'Every answer now cites its sources, making the hallucination rate measurable.',
      ],
      highlights: ['Cited answers', 'Hybrid search + reranking'],
    },
  },
  {
    slug: 'ai-agent-otomasyon',
    category: 'Agent',
    year: '2025',
    tags: ['AI Agents', 'Anthropic', 'Tool Use', 'Python'],
    links: {},
    tr: {
      title: 'AI Agent Otomasyon Sistemi',
      role: 'Solo — AI Engineer',
      summary:
        'E-posta triyajı, takvim planlama ve raporlamayı tool kullanan agent’larla otomatikleştiren orkestrasyon katmanı.',
      problem:
        'Tekrarlayan operasyonel işler her gün elle yapılıyor, karar süreçleri kişiye bağımlı hâle geliyordu.',
      approach: [
        'Her görev için sınırlı yetkili, tek amaçlı tool’lar tanımlandı.',
        'Çok adımlı akışlar durum makinesiyle yönetildi; hatalı adımlar yeniden denendi.',
        'İnsan onayı gerektiren noktalar akışın içine yerleştirildi.',
      ],
      highlights: ['Tool kullanan agent’lar', 'İnsan onaylı akış'],
    },
    en: {
      title: 'AI Agent Automation System',
      role: 'Solo — AI Engineer',
      summary:
        'An orchestration layer that automates email triage, calendar planning and reporting with tool-using agents.',
      problem:
        'Repetitive operational tasks were done by hand every day, and decision making depended on a single person.',
      approach: [
        'Each task got its own narrowly scoped, least-privilege tool.',
        'Multi-step flows were driven by a state machine; failed steps were retried.',
        'Human approval checkpoints were built into the flow itself.',
      ],
      highlights: ['Tool-using agents', 'Human-in-the-loop flows'],
    },
  },
  {
    slug: 'icerik-pipeline',
    category: 'Pipeline',
    year: '2024',
    tags: ['LLM Pipeline', 'Prompt Engineering', 'Eval', 'Node.js'],
    links: {},
    tr: {
      title: 'LLM Destekli İçerik Pipeline’ı',
      role: 'Solo — AI Engineer',
      summary:
        'Brief’ten yayına: araştırma, taslak, editoryal kontrol ve SEO uyumluluğunu tek akışta birleştiren üretim hattı.',
      problem:
        'İçerik üretimi parçalı araçlarla yürüyor, kalite kontrolü kişisel deneyime kalıyordu.',
      approach: [
        'Araştırma, taslak ve düzenleme adımları ayrı ajanlara bölündü.',
        'Çıktılar yapılandırılmış şemalarla doğrulandı.',
        'Editoryal kontrol, yayın öncesi zorunlu insan adımı olarak korundu.',
      ],
      highlights: ['Yapılandırılmış çıktı', 'İnsan onaylı yayın'],
    },
    en: {
      title: 'LLM-Powered Content Pipeline',
      role: 'Solo — AI Engineer',
      summary:
        'From brief to publication: a production line combining research, drafting, editorial review and SEO checks in one flow.',
      problem:
        'Content production ran on fragmented tools, and quality control depended on personal experience.',
      approach: [
        'Research, drafting and editing steps were split into separate agents.',
        'Outputs were validated against structured schemas.',
        'Editorial review was kept as a mandatory human step before publishing.',
      ],
      highlights: ['Structured output', 'Human-approved publishing'],
    },
  },
  {
    slug: 'context-memory',
    category: 'Memory',
    year: '2024',
    tags: ['Context Engineering', 'Memory', 'pgvector', 'Python'],
    links: {},
    tr: {
      title: 'Context Memory Katmanı',
      role: 'Solo — AI Engineer',
      summary:
        'Uzun süreli sohbetlerde tutarlılığı koruyan, özetleme ve vektör geri çağırma tabanlı bellek servisi.',
      problem:
        'Uzun konuşmalarda model bağlam penceresini aşıyor, önceki kararlar ve tercihler kayboluyordu.',
      approach: [
        'Konuşma geçmişi önem derecesine göre özetlenip katmanlandı.',
        'İlgili anılar vektör aramayla geri çağrıldı.',
        'Bellek, mevcut sohbet uygulamalarına servis olarak entegre edildi.',
      ],
      highlights: ['Katmanlı bellek', 'Vektör geri çağırma'],
    },
    en: {
      title: 'Context Memory Layer',
      role: 'Solo — AI Engineer',
      summary:
        'A memory service based on summarization and vector recall that keeps long-running chats consistent.',
      problem:
        'In long conversations the model exceeded its context window, and earlier decisions and preferences were lost.',
      approach: [
        'Conversation history was summarized and layered by importance.',
        'Relevant memories were recalled via vector search.',
        'Memory was integrated into existing chat apps as a service.',
      ],
      highlights: ['Layered memory', 'Vector recall'],
    },
  },
]

export function projectPath(lang, slug) {
  return lang === 'tr' ? `/projeler/${slug}/` : `/en/projects/${slug}/`
}