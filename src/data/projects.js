// Projeler buradan yönetilir.
// - Gerçek demo / repo linklerini `links` alanına ekleyin; boş olanlar arayüzde gizlenir.
// - Ölçülebilir bir sonucunuz varsa `highlights` yerine
//   `metrics: [{ label: 'Yanıt doğruluğu', value: '+38%' }]` kullanabilirsiniz.

export const categories = [
  { key: 'all', label: 'Tümü' },
  { key: 'RAG', label: 'RAG' },
  { key: 'Agent', label: 'Agent' },
  { key: 'Pipeline', label: 'Pipeline' },
  { key: 'Memory', label: 'Memory' },
]

export const projects = [
  {
    slug: 'rag-dokuman-asistani',
    title: 'RAG Tabanlı Doküman Asistanı',
    category: 'RAG',
    year: '2025',
    role: 'Solo — AI Engineer',
    featured: true,
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
    tags: ['RAG', 'OpenAI', 'Qdrant', 'FastAPI', 'React'],
    links: {},
  },
  {
    slug: 'ai-agent-otomasyon',
    title: 'AI Agent Otomasyon Sistemi',
    category: 'Agent',
    year: '2025',
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
    tags: ['AI Agents', 'Anthropic', 'Tool Use', 'Python'],
    links: {},
  },
  {
    slug: 'icerik-pipeline',
    title: 'LLM Destekli İçerik Pipeline’ı',
    category: 'Pipeline',
    year: '2024',
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
    tags: ['LLM Pipeline', 'Prompt Engineering', 'Eval', 'Node.js'],
    links: {},
  },
  {
    slug: 'context-memory',
    title: 'Context Memory Katmanı',
    category: 'Memory',
    year: '2024',
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
    tags: ['Context Engineering', 'Memory', 'pgvector', 'Python'],
    links: {},
  },
]
