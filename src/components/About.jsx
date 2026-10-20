import SectionTitle from './ui/SectionTitle.jsx'

export default function About() {
  return (
    <section id="hakkimda" className="py-20 md:py-28">
      <div className="shell">
        <SectionTitle num="01." title="Hakkımda" />

        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14" data-reveal>
          <div className="space-y-5 text-[1.02rem] leading-relaxed text-base-content/60">
            <p>
              AI Engineer ve AI Context Manager olarak, büyük dil modellerini gerçek ürünlere
              dönüştüren sistemler üzerinde çalışıyorum. Odak noktam, LLM&apos;lerin yalnızca etkileyici
              demo&apos;lar değil; güvenilir, ölçülebilir ve sürdürülebilir iş çıktıları üretmesini
              sağlamak. Prompt engineering&apos;den başlayan yolculuğum, bugün context engineering,
              retrieval mimarileri ve çok adımlı agent sistemlerini kapsıyor.
            </p>
            <p>
              RAG pipeline&apos;ları, vektör tabanlı bilgi erişimi ve tool kullanan otonom agent&apos;lar
              günlük işimin merkezinde yer alıyor. Bir modelin ne söylediği kadar, ona hangi bağlamın,
              hangi sırayla ve hangi bütçeyle verildiğinin sonucu belirlediğine inanıyorum — bu yüzden
              context tasarımını ayrı bir mühendislik disiplini olarak ele alıyorum.
            </p>
            <p>
              OpenAI ve Anthropic ekosistemleriyle üretim ortamında entegrasyonlar geliştirdim;
              değerlendirme (eval) süreçleri, maliyet optimizasyonu ve guardrail tasarımı da
              projelerimin doğal parçası. Amacım basit: AI&apos;ı pazarlama cümlesi olmaktan çıkarıp
              ekibin en çalışkan üyesi yapmak.
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-white/5 bg-base-200/40 p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
              Odak alanları
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ['Context Engineering', 'Bağlam bütçesi ve bellek tasarımı'],
                ['RAG Sistemleri', 'Retrieval kalitesi ve kaynak gösterimi'],
                ['Agent Mimarileri', 'Tool kullanımı ve çok adımlı akışlar'],
                ['Üretim & Ölçüm', 'Eval, maliyet ve izleme'],
              ].map(([title, desc]) => (
                <li key={title} className="border-t border-white/5 pt-3 first:border-t-0 first:pt-0">
                  <p className="font-semibold text-base-content">{title}</p>
                  <p className="mt-0.5 text-base-content/55">{desc}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
