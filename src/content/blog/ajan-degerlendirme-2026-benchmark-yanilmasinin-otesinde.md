---
lang: tr
slug: ajan-degerlendirme-2026-benchmark-yanilmasinin-otesinde
title: "Ajan değerlendirme 2026: benchmark yanılsamasının ötesinde"
description: "Ajan sistemlerini benchmark skoruyla ölçmek neden yanıltıcı? 2026'nın değerlendirme araştırması üç katman, log analizi ve simülasyon uyarıları söylüyor."
date: 2026-10-22
tags: [AI Agents, Evaluation, Benchmarks, Research]
translationKey: agent-evaluation
---

Bir ajan demosu yüzde 80 başarı gösteriyor, üretimde aynı ajan işe yaramıyor. 2026'nın değerlendirme literatürü bu boşluğun nedenini üç başlıkta topluyor: benchmark'ın ölçtüğü şey, ölçülmesi gereken şey değil; log'suz değerlendirme güvenilir değil; ve simüle edilmiş kullanıcılar gerçek kullanıcıların yerini tutmuyor.

## 1. Benchmark skoru tek katman

[Ajan değerlendirmesi üzerine güncel anket (arXiv:2503.16416, ACL Findings 2026)](https://arxiv.org/abs/2503.16416) alandaki çerçeveleri sınıflandırırken, üretim ekiplerinin fiilen kullandığı ayrım üç katmanlı:

- **Sonuç katmanı:** son cevap doğru mu? (benchmark'ların ölçtüğü tek şey)
- **Yörünge katmanı:** adım sırası, araç çağrıları ve kararlar doğru mu? Gereksiz 20 adım atıp doğru cevaba ulaşan ajan, üretimde maliyet ve risk demektir.
- **Tur katmanı:** her etkileşim doğru mu, kullanıcı doğru anlaşıldı mı?

SWE-bench, WebArena, BrowseComp, Mind2Web 2 ve tau-bench gibi güncel ajan benchmark'ları ilk katmanda ilerliyor; ama üretim sinyali üçüncü katmanda. [Online-Mind2Web incelemesi (arXiv:2504.01382, COLM 2025)](https://arxiv.org/abs/2504.01382) tam bu uyarıyı yapıyor: 300 gerçekçi web görevi üzerinde insan değerlendirmesiyle ölçülen en iyi ajanların çoğu görevlerin yalnızca ~%30'unu tamamlayabiliyor; önceki raporlar aşırı iyimser kalmış.

## 2. Log analizi olmadan değerlendirme olmaz

2026'nın en net savunulan tezlerinden biri, *ajan değerlendirmesinin kanıta dayalı olabilmesi için log analizinin gerekli olduğu* ([Kirgis ve ark., Mayıs 2026](https://sage.cs.princeton.edu/trends/emerging-trends-paper.pdf)). Yani: yalnızca "başarılı/başarısız" etiketi değil, **her adımın girdisi, çıktısı ve kararı** kaydedilmeden hata nedeni bulunamıyor. Bu, [AI agent mimarisi](/blog/ai-agent-mimarisi-tool-use-planlama-hata-yonetimi/) yazısında anlattığım gözlemlenebilirlik şartının değerlendirme karşılığı.

## 3. Simüle kullanıcı ≠ gerçek kullanıcı

[Lost in Simulation (arXiv:2601.17087)](https://arxiv.org/abs/2601.17087) uyarısı önemli: ajan değerlendirmelerinde LLM'le simüle edilmiş kullanıcılar, gerçek kullanıcı davranışının güvenilir vekili değil. Simülasyon hız ve ucuzluk getiriyor ama davranış dağılımını daraltıyor; özellikle geri bildirim veren, kararsız kalan ya da bağlamı eksik anlatan gerçek kullanıcı davranışını temsil etmiyor.

## Pratik değerlendirme yığını

1. **Küçük ve gerçek bir görev seti** — 20-30 gerçek görev, beklenen davranış, kabul edilebilir sapma.
2. **Yörünge etiketleri** — her tur için araç çağrısı doğru mu, gerekli mi, tekrar var mı?
3. **LLM-as-judge, insan doğrulamasıyla** — yargıç modelin yanlılığı bilinen bir sorun; örneklem üzerinde insan kontrolü şart.
4. **Log + maliyet takibi** — doğruluk artışı maliyet patlamasıyla geldyse iyileştirme değildir.

Konunun mimari tarafı için [AI agent mimarisi: tool use, planlama ve hata yönetimi](/blog/ai-agent-mimarisi-tool-use-planlama-hata-yonetimi/), üretimdeki bir uygulama için [AI Agent Otomasyon Sistemi](/projeler/ai-agent-otomasyon/) vaka çalışmasına bakabilirsiniz.