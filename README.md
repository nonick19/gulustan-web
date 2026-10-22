# gulustan.net

Kişisel portfolyo sitesi — Astro 5 (statik, iki dilli), Tailwind CSS 4 ve daisyUI 5.

## Komutlar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
npm run preview
```

## Sayfa yapısı

| Sayfa | TR | EN |
| --- | --- | --- |
| Ana sayfa | `/` | `/en/` |
| Vaka çalışması | `/projeler/[slug]/` | `/en/projects/[slug]/` |
| 404 | `/404.html` | — |

Her sayfanın `hreflang` (tr/en/x-default) ve canonical bağlantısı
`src/layouts/BaseLayout.astro` üzerinden otomatik üretilir. `robots.txt` ve
`sitemap-index.xml` build çıktısına dahildir.

## İçerik nereden düzenlenir?

| Ne? | Dosya |
| --- | --- |
| Projeler (vaka çalışması içerikleri, iki dil) | `src/data/projects.js` |
| Yetenek grupları, araç kutusu, süreç adımları (iki dil) | `src/data/skills.js` |
| Arayüz metinleri ve SEO başlıkları (iki dil) | `src/i18n/ui.js` |
| Blog yazıları (markdown, iki dil) | `src/content/blog/*.md` |
| Marka renkleri, daisyUI teması, fontlar | `src/styles/global.css` |
| Bölüm bileşenleri | `src/components/` |

Her metin `tr` / `en` bloklarıyla yazılır; yeni bir metin eklerken iki dili de
güncelleyin.

### Blog yazısı ekleme

`src/content/blog/` altına iki markdown dosyası ekleyin (biri `tr`, biri `en`) ve
frontmatter'da aynı `translationKey`i paylaşın; `slug` dil bazında yerelleştirilmiş
URL'i belirler. Yazılar `npm run build` ile otomatik listelenir ve sitemap'e girer.

### Projeye gerçek link ekleme

`src/data/projects.js` içindeki ilgili projenin `links` alanını doldurun:

```js
links: {
  demo: 'https://...',
  repo: 'https://github.com/...',
},
```

Boş bırakılan linkler arayüzde görünmez.

### Ölçülebilir sonuç ekleme

Somut bir metriğiniz varsa `highlights` alanının yanına `metrics` ekleyip vaka
sayfası bileşeninde (`src/components/CaseStudy.astro`) kullanabilirsiniz.
Uydurma sayı yazmamak için mevcut sürümde yalnızca nitel sonuçlar gösteriliyor.

## Tasarım sistemi

- Tema: `gulustan` (daisyUI custom theme), varsayılan ve koyu.
- Ana renkler: `#d96c45` (primary / terracotta), `#e9b44c` (secondary / amber), `#17140f` (base-100 / sıcak mürekkep).
- Yazı tipleri: başlıklarda Fraunces, gövde metinde Public Sans — fontsource
  ile self-hosted (harici istek yok, GDPR dostu).
- Bileşenler: `card`, `btn`, `badge`, `tabs`, `steps`.
- 3D hero sahnesi ayrı chunk'ta yüklenir (`src/scripts/hero-scene.js`, dinamik import).

## SEO durumu

- Teknik: canonical + hreflang + Open Graph + JSON-LD (`Person`, `WebSite`,
  vaka sayfalarında `CreativeWork` + `BreadcrumbList`), robots.txt, sitemap.
- Yapılacak (hesap gerektirir): Google Search Console'a domain doğrulaması ve
  `sitemap-index.xml` gönderimi; Bing Webmaster Tools aynı sitemap ile.
- Eksik: `og:image` (paylaşım görseli) — istenirse eklenebilir.

## Yayın

`main` dalına push edildiğinde `.github/workflows/deploy.yml` GitHub Pages'e
yayınlar. Özel domain `public/CNAME` içinde tanımlı.