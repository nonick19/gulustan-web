// Arayüz metinleri ve SEO sözlüğü. Yeni bir metin eklendiğinde iki dil de
// burada güncellenmelidir.

export const languages = ['tr', 'en']

export function homePath(lang) {
  return lang === 'tr' ? '/' : '/en/'
}

export function blogPath(lang) {
  return lang === 'tr' ? '/blog/' : '/en/blog/'
}

export const levelLabels = {
  tr: {
    prod: 'Üretimde',
    project: 'Projede',
    familiar: 'Aşina',
  },
  en: {
    prod: 'In production',
    project: 'In projects',
    familiar: 'Familiar',
  },
}

// Telefon/WhatsApp/Telegram bilgileri dillerden bağımsızdır.
export const contactChannels = [
  {
    key: 'phone',
    href: 'tel:+905324843395',
    external: false,
    icon: 'phone',
    tr: { title: 'Telefon', value: '+90 532 484 33 95' },
    en: { title: 'Phone', value: '+90 532 484 33 95' },
  },
  {
    key: 'whatsapp',
    href: 'https://wa.me/905324843395',
    external: true,
    icon: 'chat',
    tr: { title: 'WhatsApp', value: 'wa.me üzerinden yaz' },
    en: { title: 'WhatsApp', value: 'Message me on wa.me' },
  },
  {
    key: 'telegram',
    href: 'https://t.me/+905324843395',
    external: true,
    icon: 'plane',
    tr: { title: 'Telegram', value: 't.me üzerinden yaz' },
    en: { title: 'Telegram', value: 'Message me on t.me' },
  },
  {
    key: 'email',
    href: 'mailto:a.gulustan@live.de',
    external: false,
    icon: 'mail',
    tr: { title: 'E-posta', value: 'a.gulustan@live.de' },
    en: { title: 'Email', value: 'a.gulustan@live.de' },
  },
]

export const ui = {
  tr: {
    htmlLang: 'tr',
    nav: [
      { id: 'hero', label: 'Ana Sayfa' },
      { id: 'about', label: 'Hakkımda' },
      { id: 'skills', label: 'Yetenekler' },
      { id: 'projects', label: 'Projeler' },
      { id: 'contact', label: 'İletişim' },
    ],
    navBlog: 'Yazılar',
    menuOpen: 'Menüyü aç',
    menuClose: 'Menüyü kapat',
    switchLang: 'English',
    switchLangLabel: 'Switch to English',
    hero: {
      eyebrow: 'Merhaba, ben',
      role: 'AI Engineer',
      roleAlt: 'AI Context Manager',
      desc:
        'LLM tabanlı ürünler, RAG sistemleri ve otonom AI agent’lar geliştiriyorum. Modellerin doğru bağlamla doğru işi yapmasını sağlamak benim işim.',
      ctaPrimary: 'Projelerimi Gör',
      ctaSecondary: 'İletişime Geç',
      scroll: 'Aşağı kaydır',
    },
    about: {
      num: '01.',
      title: 'Hakkımda',
      paragraphs: [
        'AI Engineer ve AI Context Manager olarak, büyük dil modellerini gerçek ürünlere dönüştüren sistemler üzerinde çalışıyorum. Odak noktam, LLM’lerin yalnızca etkileyici demo’lar değil; güvenilir, ölçülebilir ve sürdürülebilir iş çıktıları üretmesini sağlamak. Prompt engineering’den başlayan yolculuğum, bugün context engineering, retrieval mimarileri ve çok adımlı agent sistemlerini kapsıyor.',
        'RAG pipeline’ları, vektör tabanlı bilgi erişimi ve tool kullanan otonom agent’lar günlük işimin merkezinde yer alıyor. Bir modelin ne söylediği kadar, ona hangi bağlamın, hangi sırayla ve hangi bütçeyle verildiğinin sonucu belirlediğine inanıyorum — bu yüzden context tasarımını ayrı bir mühendislik disiplini olarak ele alıyorum.',
        'OpenAI ve Anthropic ekosistemleriyle üretim ortamında entegrasyonlar geliştirdim; değerlendirme (eval) süreçleri, maliyet optimizasyonu ve guardrail tasarımı da projelerimin doğal parçası. Amacım basit: AI’ı pazarlama cümlesi olmaktan çıkarıp ekibin en çalışkan üyesi yapmak.',
      ],
      focusTitle: 'Odak alanları',
      focus: [
        ['Context Engineering', 'Bağlam bütçesi ve bellek tasarımı'],
        ['RAG Sistemleri', 'Retrieval kalitesi ve kaynak gösterimi'],
        ['Agent Mimarileri', 'Tool kullanımı ve çok adımlı akışlar'],
        ['Üretim & Ölçüm', 'Eval, maliyet ve izleme'],
      ],
    },
    skills: {
      num: '02.',
      title: 'Yetenekler',
      lead:
        'Alanlara göre gruplanmış yetkinlikler ve her birinin arkasındaki projeler. İlgili projeler bağlantısıyla o yeteneğin işlerine geçebilirsiniz.',
      related: (count) => `İlgili projeler (${count})`,
      processTitle: 'Nasıl çalışırım',
    },
    projects: {
      num: '03.',
      title: 'Projeler',
      lead:
        'Üretim odaklı AI sistemleri: problem, yaklaşım ve sonuç. Bir karta tıklayarak vaka detayını okuyabilirsiniz.',
      featuredBadge: 'Öne çıkan',
      caseCta: 'Vaka detayı',
      liveDemo: 'Canlı demo',
      repo: 'GitHub',
      empty: 'Bu filtreye uygun proje bulunamadı.',
      countOne: '1 proje',
      countMany: '{n} proje',
      removeFilter: '{filter} filtresini kaldır',
      case: {
        problem: 'Problem',
        approach: 'Yaklaşım',
        highlights: 'Öne çıkanlar',
        stack: 'Teknolojiler',
        role: 'Rol',
        year: 'Yıl',
        back: '← Tüm projeler',
        contactCta: 'Benzer bir proje mi var?',
      },
    },
    contact: {
      num: '04.',
      title: 'İletişim',
      lead:
        'Bir AI projesi, danışmanlık ya da iş birliği fikriniz mi var? Aşağıdaki kanallardan bana ulaşabilirsiniz — genellikle aynı gün dönüş yaparım.',
    },
    footer: {
      top: 'Yukarı dön ↑',
    },
    blog: {
      num: '05.',
      title: 'Yazılar',
      lead: 'RAG, agent sistemleri, context engineering ve LLM operasyonları üzerine notlar.',
      home: '← Ana sayfa',
      back: '← Tüm yazılar',
      postCta: 'Yazıyı oku',
      empty: 'Henüz yazı yok.',
      tags: 'Etiketler',
    },
    seo: {
      homeTitle: 'Ali Gülüstan — AI Engineer | RAG, AI Agent & Context Engineering',
      blogTitle: 'Yazılar — Ali Gülüstan | AI Engineer',
      blogDescription:
        'RAG, AI agent mimarileri, context engineering ve LLM maliyet optimizasyonu üzerine teknik yazılar.',
      homeDescription:
        'Ali Gülüstan — AI Engineer ve AI Context Manager. RAG pipeline’ları, AI agent sistemleri, context engineering ve LLM entegrasyonları üzerine projeler, yetenekler ve iletişim.',
      caseSuffix: 'Vaka Çalışması',
      caseDescription: (title) =>
        `${title} vaka çalışması: problem, yaklaşım ve sonuçlar. Ali Gülüstan — AI Engineer.`,
    },
  },

  en: {
    htmlLang: 'en',
    nav: [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    navBlog: 'Writing',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    switchLang: 'Türkçe',
    switchLangLabel: 'Türkçe sürüme geç',
    hero: {
      eyebrow: 'Hi, I am',
      role: 'AI Engineer',
      roleAlt: 'AI Context Manager',
      desc:
        'I build LLM-powered products, RAG systems and autonomous AI agents. My job is to make models do the right thing with the right context.',
      ctaPrimary: 'See my work',
      ctaSecondary: 'Get in touch',
      scroll: 'Scroll down',
    },
    about: {
      num: '01.',
      title: 'About',
      paragraphs: [
        'As an AI Engineer and AI Context Manager, I work on systems that turn large language models into real products. My focus is making LLMs produce reliable, measurable and sustainable output — not just impressive demos. What started with prompt engineering today covers context engineering, retrieval architectures and multi-step agent systems.',
        'RAG pipelines, vector-based information retrieval and tool-using autonomous agents are at the core of my daily work. I believe the outcome is shaped not only by what a model says, but by which context it is given, in which order and within which budget — which is why I treat context design as its own engineering discipline.',
        'I have built production integrations with the OpenAI and Anthropic ecosystems; evaluation (eval) processes, cost optimization and guardrail design are a natural part of my projects. The goal is simple: turn AI from a marketing line into the hardest-working member of the team.',
      ],
      focusTitle: 'Focus areas',
      focus: [
        ['Context Engineering', 'Context budgeting and memory design'],
        ['RAG Systems', 'Retrieval quality and source citation'],
        ['Agent Architectures', 'Tool use and multi-step flows'],
        ['Production & Measurement', 'Evals, cost and monitoring'],
      ],
    },
    skills: {
      num: '02.',
      title: 'Skills',
      lead:
        'Capabilities grouped by area, with the projects behind each one. The related-projects link takes you straight to that work.',
      related: (count) => `Related projects (${count})`,
      processTitle: 'How I work',
    },
    projects: {
      num: '03.',
      title: 'Projects',
      lead:
        'Production-focused AI systems: the problem, the approach and the outcome. Click any card to read the full case study.',
      featuredBadge: 'Featured',
      caseCta: 'Case study',
      liveDemo: 'Live demo',
      repo: 'GitHub',
      empty: 'No projects match this filter.',
      countOne: '1 project',
      countMany: '{n} projects',
      removeFilter: 'Remove the {filter} filter',
      case: {
        problem: 'Problem',
        approach: 'Approach',
        highlights: 'Highlights',
        stack: 'Stack',
        role: 'Role',
        year: 'Year',
        back: '← All projects',
        contactCta: 'Have a similar project?',
      },
    },
    contact: {
      num: '04.',
      title: 'Contact',
      lead:
        'Have an AI project, a consulting question or an idea to collaborate on? Reach me through any channel below — I usually reply the same day.',
    },
    footer: {
      top: 'Back to top ↑',
    },
    blog: {
      num: '05.',
      title: 'Writing',
      lead: 'Notes on RAG, agent systems, context engineering and LLM operations.',
      home: '← Home',
      back: '← All posts',
      postCta: 'Read the post',
      empty: 'No posts yet.',
      tags: 'Tags',
    },
    seo: {
      homeTitle: 'Ali Gülüstan — AI Engineer | RAG, AI Agents & Context Engineering',
      blogTitle: 'Writing — Ali Gülüstan | AI Engineer',
      blogDescription:
        'Technical articles on RAG, AI agent architectures, context engineering and LLM cost optimization.',
      homeDescription:
        'Ali Gülüstan — AI Engineer and AI Context Manager. Projects, skills and contact around RAG pipelines, AI agent systems, context engineering and LLM integrations.',
      caseSuffix: 'Case Study',
      caseDescription: (title) =>
        `${title} case study: the problem, the approach and the outcomes. Ali Gülüstan — AI Engineer.`,
    },
  },
}