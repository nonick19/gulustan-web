# gulustan.net

Kişisel portfolyo sitesi — React + Vite, Tailwind CSS 4 ve daisyUI 5.

## Komutlar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
npm run preview
```

## İçerik nereden düzenlenir?

| Ne? | Dosya |
| --- | --- |
| Projeler, kategoriler, linkler, metrikler | `src/data/projects.js` |
| Yetenek grupları, araç kutusu, süreç adımları | `src/data/skills.js` |
| Marka renkleri ve daisyUI teması | `src/index.css` |
| Bölüm bileşenleri | `src/components/` |

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

Somut bir metriğiniz varsa `highlights` alanının yanına `metrics` ekleyip
`ProjectModal` ve `Projects` bileşenlerinde kullanabilirsiniz. Uydurma sayı
yazmamak için mevcut sürümde yalnızca nitel sonuçlar gösteriliyor.

## Tasarım sistemi

- Tema: `gulustan` (daisyUI custom theme), varsayılan ve koyu.
- Ana renkler: `#d96c45` (primary / terracotta), `#e9b44c` (secondary / amber), `#17140f` (base-100 / sıcak mürekkep).
- Yazı tipleri: başlıklarda [Fraunces](https://fonts.google.com/specimen/Fraunces), gövde metinde [Public Sans](https://fonts.google.com/specimen/Public+Sans) (Google Fonts üzerinden yükleniyor).
- Bileşenler: `card`, `btn`, `badge`, `tabs`, `modal`, `steps`.
- 3D hero sahnesi ayrı pakette yüklenir (`HeroScene` lazy import).

## Yayın

`main` dalına push edildiğinde `.github/workflows/deploy.yml` GitHub Pages'e
yayınlar. Özel domain `public/CNAME` içinde tanımlı.
