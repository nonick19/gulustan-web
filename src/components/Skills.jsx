const skills = [
  {
    title: 'Prompt Engineering',
    desc: 'Sistem prompt tasarımı, few-shot stratejileri, çıktı formatlaması ve davranış tutarlılığı.',
    tags: ['System Prompts', 'Few-shot', 'Structured Output'],
  },
  {
    title: 'Context Engineering',
    desc: 'Context window bütçelemesi, bellek tasarımı, dinamik bağlam derleme ve özetleme stratejileri.',
    tags: ['Context Windows', 'Memory', 'Compaction'],
  },
  {
    title: 'RAG Sistemleri',
    desc: 'Chunking, embedding, hibrit arama ve reranking ile üretim seviyesinde retrieval pipeline\'ları.',
    tags: ['Embeddings', 'Hybrid Search', 'Reranking'],
  },
  {
    title: 'AI Agents',
    desc: 'Tool kullanan, planlayan ve çok adımlı iş akışları yürüten otonom agent mimarileri.',
    tags: ['Tool Use', 'Orchestration', 'Multi-step'],
  },
  {
    title: 'LLM Entegrasyonları',
    desc: 'OpenAI ve Anthropic API\'leri ile streaming, function calling ve maliyet-optimize entegrasyonlar.',
    tags: ['OpenAI', 'Anthropic', 'Function Calling'],
  },
  {
    title: 'Vektör Veritabanları',
    desc: 'Pinecone, Qdrant ve pgvector ile semantik arama altyapıları ve indeksleme stratejileri.',
    tags: ['Pinecone', 'Qdrant', 'pgvector'],
  },
  {
    title: 'Python',
    desc: 'AI backend\'leri, veri pipeline\'ları ve LLM servisleri için FastAPI tabanlı geliştirme.',
    tags: ['FastAPI', 'LangChain', 'Data Pipelines'],
  },
  {
    title: 'JavaScript / React',
    desc: 'AI destekli arayüzler ve streaming tabanlı sohbet deneyimleri için modern frontend geliştirme.',
    tags: ['React', 'Vite', 'Streaming UI'],
  },
]

export default function Skills() {
  return (
    <section id="yetenekler" className="section container">
      <h2 className="section__title">
        <span className="section__num">02.</span> Yetenekler
      </h2>
      <div className="skills__grid">
        {skills.map((s) => (
          <article key={s.title} className="card skill">
            <h3 className="skill__title">{s.title}</h3>
            <p className="skill__desc">{s.desc}</p>
            <div className="tags">
              {s.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
