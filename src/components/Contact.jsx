import SectionTitle from './ui/SectionTitle.jsx'

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.9 8.9 0 0 1-4-.9L3 21l1.9-4.6a8.4 8.4 0 0 1-.9-4 8.4 8.4 0 0 1 8.5-8.4A8.4 8.4 0 0 1 21 11.5Z" />
    </svg>
  )
}

function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <path d="M21 3 3 10.5l6 2.5m12-10-5.5 18L10 13m11-10L10 13" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

const channels = [
  {
    title: 'Telefon',
    value: '+90 532 484 33 95',
    href: 'tel:+905324843395',
    Icon: PhoneIcon,
  },
  {
    title: 'WhatsApp',
    value: 'wa.me üzerinden yaz',
    href: 'https://wa.me/905324843395',
    Icon: ChatIcon,
  },
  {
    title: 'Telegram',
    value: 't.me üzerinden yaz',
    href: 'https://t.me/+905324843395',
    Icon: PlaneIcon,
  },
  {
    title: 'E-posta',
    value: 'a.gulustan@live.de',
    href: 'mailto:a.gulustan@live.de',
    Icon: MailIcon,
  },
]

export default function Contact() {
  return (
    <section id="iletisim" className="py-20 md:py-28">
      <div className="shell">
        <SectionTitle
          num="04."
          title="İletişim"
          lead="Bir AI projesi, danışmanlık ya da iş birliği fikriniz mi var? Aşağıdaki kanallardan bana ulaşabilirsiniz — genellikle aynı gün dönüş yaparım."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ title, value, href, Icon }) => {
            const external = href.startsWith('http')
            return (
              <a
                key={title}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                data-reveal
                className="card border border-white/5 bg-base-200/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-base-200/70"
              >
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-secondary/20 bg-secondary/10 text-secondary">
                  <Icon />
                </span>
                <span className="font-semibold">{title}</span>
                <span className="mt-0.5 text-sm text-base-content/55">{value}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
