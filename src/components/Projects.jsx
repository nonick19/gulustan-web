const projects = [
  {
    title: 'RAG Tabanlı Doküman Asistanı',
    desc: 'Kurumsal PDF ve bilgi bankaları üzerinde doğal dille soru yanıtlayan asistan. Hibrit arama, reranking ve kaynak gösterimi ile halüsinasyonu ölçülebilir şekilde azaltıyor.',
    tags: ['RAG', 'OpenAI', 'Qdrant', 'FastAPI', 'React'],
  },
  {
    title: 'AI Agent Otomasyon Sistemi',
    desc: 'E-posta triyajı, takvim planlama ve raporlama gibi tekrarlayan operasyonları tool kullanan agent\'larla otomatikleştiren çok adımlı orkestrasyon sistemi.',
    tags: ['AI Agents', 'Anthropic', 'Tool Use', 'Python'],
  },
  {
    title: 'LLM Destekli İçerik Pipeline\'ı',
    desc: 'Brief\'ten yayına: konu araştırması, taslak üretimi, editoryal kontrol ve SEO uyumluluğunu tek akışta birleştiren, insan onaylı içerik üretim hattı.',
    tags: ['LLM Pipeline', 'Prompt Engineering', 'Eval', 'Node.js'],
  },
  {
    title: 'Context Memory Katmanı',
    desc: 'Uzun süreli kullanıcı etkileşimlerinde tutarlılığı koruyan, özetleme ve vektör geri çağırma tabanlı sohbet belleği katmanı. Mevcut sohbet uygulamalarına servis olarak entegre ediliyor.',
    tags: ['Context Engineering', 'Memory', 'pgvector', 'Python'],
  },
]

export default function Projects() {
  return (
    <section id="projeler" className="section container">
      <h2 className="section__title">
        <span className="section__num">03.</span> Projeler
      </h2>
      <div className="projects__grid">
        {projects.map((p) => (
          <article key={p.title} className="card project">
            <div className="project__icon" aria-hidden="true">◆</div>
            <h3 className="project__title">{p.title}</h3>
            <p className="project__desc">{p.desc}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
