const channels = [
  {
    title: 'Telefon',
    value: '+90 532 484 33 95',
    href: 'tel:+905324843395',
    icon: '✆',
  },
  {
    title: 'WhatsApp',
    value: 'wa.me üzerinden yaz',
    href: 'https://wa.me/905324843395',
    icon: '◔',
  },
  {
    title: 'Telegram',
    value: 't.me üzerinden yaz',
    href: 'https://t.me/+905324843395',
    icon: '➤',
  },
  {
    title: 'E-posta',
    value: 'a.gulustan@live.de',
    href: 'mailto:a.gulustan@live.de',
    icon: '✉',
  },
]

export default function Contact() {
  return (
    <section id="iletisim" className="section container">
      <h2 className="section__title">
        <span className="section__num">04.</span> İletişim
      </h2>
      <p className="contact__lead">
        Bir AI projesi, danışmanlık ya da iş birliği fikriniz mi var? Aşağıdaki kanallardan
        bana ulaşabilirsiniz — genellikle aynı gün dönüş yaparım.
      </p>
      <div className="contact__grid">
        {channels.map((c) => (
          <a
            key={c.title}
            href={c.href}
            className="card contact"
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <span className="contact__icon" aria-hidden="true">{c.icon}</span>
            <span className="contact__title">{c.title}</span>
            <span className="contact__value">{c.value}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
