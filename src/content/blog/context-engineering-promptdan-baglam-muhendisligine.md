---
lang: tr
slug: context-engineering-promptdan-baglam-muhendisligine
title: "Context engineering: prompt'dan bağlam mühendisliğine"
description: "Modelin cevabını belirleyen şey yalnızca prompt değildir: hangi bağlamın, hangi sırayla ve hangi bütçeyle verildiği. Context engineering'in pratik çerçevesi."
date: 2026-10-08
tags: [Context Engineering, Prompt Engineering, LLM, Memory]
translationKey: context-engineering
---

Prompt engineering hâlâ önemli, ama yetmiyor. Üretimde çalışan bir LLM sisteminde asıl belirleyici olan şey, modele **hangi bağlamın, hangi sırayla ve hangi bütçeyle** verildiğidir. Buna context engineering (bağlam mühendisliği) diyorum: bağlamı, sistemin girdisi gibi tasarlamak.

## Bağlam bütçesi: pencere dolu değil, pencere değerli

Uzun bağlam pencereleri "her şeyi koy, model seçer" izlenimi yaratıyor. Deneyim tam tersini söylüyor: ilgisiz bilgi bağlamda dururken model dikkatini dağıtır, maliyet artar ve tutarlılık düşer. Pratik yaklaşım:

- **Bütçe ayır.** Sistem talimatları, kullanıcı bağlamı, retrieved belgeler, araç sonuçları ve konuşma geçmişi için ayrı paylar. Hepsini "kalan yere" doldurmak en kötü stratejidir.
- **Sıra önemli.** Modeller bağlamın başını ve sonunu daha güçlü kullanır; ortada kaybolan bilgi çoğu zaman yok sayılır. Kritik bilgi en başta ve en sonda olmalı.
- **Tekrarı temizle.** Aynı bilginin üç farklı özeti bağlamdadırsa, model hangisinin güncel olduğunu bilemez.

## Bağlamı derleme: statik değil, dinamik

İyi bir bağlam katmanı istek anında derlenir:

1. **Kullanıcı niyeti normalize edilir** — konuşmadan bağımsız, tek başına anlamlı bir sorgu üretilir.
2. **Gerekli kaynaklar seçilir** — her şey değil, bu göreve gereken: retrieval sonucu, kullanıcının tercihleri, ilgili araç şemaları.
3. **Biçim standartlaştırılır** — XML/JSON gibi ayrıştırılabilir işaretleyiciler, modelin "bu kısım kaynak, bu kısım talimat" demesini kolaylaştırır.
4. **Girdi doğrulanır** — şemaya uymayan, taşan ya da çelişen parçalar modele ulaşmadan elenir.

## Bellek: her şeyi tutmak değil, doğru anıyı getirmek

Uzun sohbetlerde ve agent sistemlerinde bellek, geçmişin kopyası değil, **seçilmiş geri çağırma** olmalı:

- **Katmanlı özetleme:** Ham geçmiş → dönem özetleri → kalıcı tercihler. Her katmanın farklı ömrü var.
- **Önem tabanlı saklama:** Her karar ya da tercih aynı değerde değil; silinen detay, korunan karar olmalı.
- **Vektör geri çağırma + doğrulama:** İlgili anı getirilir, ama getirilen anının güncelliği ve kaynağı kontrol edilir.

Bu yaklaşımın çalışan bir örneği olan [Context Memory Katmanı](/projeler/context-memory/) vaka çalışmasına bakabilirsiniz.

## Prompt hâlâ önemli — ama artık bir katman

Sistem talimatı, few-shot örnekler ve yapılandırılmış çıktı formatı birer *araç*; ama bunların etrafındaki bağlam mimarisi olmadan etkileri sınırlı kalır. Bir prompt'u iyileştirmek bazen 5 puan kazandırır; yanlış bağlamı düzeltmek 30 puan.

## Nasıl başlanır

- Her isteğin modele giden nihai bağlamını **loglayın**. Görmeyen sistem düzeltilmez.
- Küçük bir eval setiyle **kaldırma deneyleri** yapın: bir bağlam parçasını çıkarınca cevap bozuluyorsa değerlidir; bozulmuyorsa gürültüdür.
- Bağlamı kod içinde değil, **tasarım dokümanı** gibi düşünün: ne, neden, hangi sırayla ve hangi bütçeyle.

İlgili bir sonraki adım maliyet tarafı: [LLM maliyet optimizasyonu](/blog/llm-maliyet-optimizasyonu-caching-model-secimi-batching/) yazısında caching, model seçimi ve batching'i ele alıyorum.