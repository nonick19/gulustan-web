export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-base-200/40 py-8">
      <div className="shell flex flex-wrap items-center justify-between gap-3 text-sm text-base-content/55">
        <p>© {new Date().getFullYear()} Ali Gülüstan — AI Engineer & AI Context Manager</p>
        <a href="#hero" className="text-secondary transition-colors hover:text-accent">
          Yukarı dön ↑
        </a>
      </div>
    </footer>
  )
}
