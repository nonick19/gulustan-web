---
lang: tr
slug: agentic-rag-tek-adimli-retrievaldan-arastirma-ajanlarina
title: "Agentic RAG: tek adımlı retrieval'dan araştırma ajanlarına"
description: "2025-2026'nın RAG araştırması tek adımlı pipeline'lardan çok adımlı, karar veren sistemlere kaydı. Bu neyi değiştiriyor, ne zaman buna değiyor?"
date: 2026-10-22
tags: [RAG, AI Agents, Retrieval, Research]
translationKey: agentic-rag
---

İki yıl önce "RAG" dediğimiz şey çoğunlukla tek adımlı bir hattı: sorgu → embedding → en iyi N parça → cevap. 2025-2026 araştırması bu resmi belirgin şekilde değiştirdi. Retrieval artık bir ön işleme değil, **sistemin yürüttüğü çok adımlı bir karar süreci**. Literatürde buna agentic RAG deniyor ve 2026'da bu alanda bir sistemleştirme (SoK) bile yayınlandı: [SoK: Agentic RAG (arXiv:2603.07379)](https://arxiv.org/abs/2603.07379).

## Ne değişti?

- **Retrieval bir politika haline geldi.** Model ne zaman sorgu yapacağını, hangi kaynağı kullanacağını, durup durmayacağını kendisi belirliyor. 2025-2026'nın öne çıkan teknikleri arasında pekiştirmeli öğrenmeyle eğitilmiş retrieval politikaları ve "deep research" tarzı ajanlar var; agentic RAG'in alan haritası için [survey (arXiv:2501.09136)](https://arxiv.org/abs/2501.09136) iyi bir başlangıç.
- **Kendi kendini düzeltme standartlaştı.** [CRAG (arXiv:2401.15884)](https://arxiv.org/abs/2401.15884) gibi yaklaşımlar retrieval sonucunu "değerlendirip" yetersizse yeniden arama ya da web'e açılma yoluna gidiyor; Self-RAG ise cevabı üretirken kendi kaynağını yeterli bulup bulmadığını sorguluyor.
- **Arayüzler katmanlandı.** [A-RAG (arXiv:2602.03442)](https://arxiv.org/abs/2602.03442), modele hiyerarşik retrieval arayüzleri açarak "ne zaman, neyi, hangi ayrıntıda arayacağına" karar vermesini sağlıyor — tek bir `search()` fonksiyonu yerine araç kutusu.

## Ne zaman buna değer?

Agentic RAG her sorun için doğru araç değil. Maliyeti net: her ek retrieval turu ek gecikme, ek token ve ek hata yüzeyi demek. Pratik bir kademe:

1. **Önce basit hat.** Sorgu genişletme + hibrit arama + reranking çoğu iç kullanım için yeterlidir.
2. **Düzeltme katmanı ekle.** Retrieval sonucu yetersizse yeniden deneyen (corrective) bir adım, en iyi fiyat/performans oranına sahiptir.
3. **Tam agentic akışa ancak görev zorunlu kılıyorsa geç.** Çok hop'lu sorular ("bu üç belgedeki çelişkileri bul"), değişken kaynaklar ve araştırma tarzı görevler tam da bunun için.

## Ne zaman işe yaramaz?

- **Soru tek hop ise:** agentic akış aynı cevabı 3-5 kat maliyetle üretir.
- **Değerlendirme yoksa:** çok adımlı sistemlerde hata birikir; her adımı ölçmeden "daha iyi" hissi yanıltıcıdır. Bu yüzden ajan değerlendirme 2026'nın ayrı bir araştırma konusu haline geldi — [Ajan değerlendirmesi 2026](/blog/ajan-degerlendirme-2026-benchmark-yanilmasinin-otesinde/) yazısında ele alıyorum.
- **Kaynaklar kirliyse:** ajan yanlış bilgiyi bulmakta daha iyi olabilir ama bulduğunu doğrulamıyorsa hızla yanlış sonuca ulaşır.

## Pratik sonuç

Hiyerarşiyi kademeli kurun: önce iyi bir tek adımlı hat, sonra düzeltme döngüsü, en sonda tam ajan. Her kademe geçişinde ölçülebilir bir gerekçe olsun. Konunun temelleri için [RAG nedir ve ne zaman işe yaramaz?](/blog/rag-nedir-ve-ne-zaman-ise-yaramaz/) yazısına, uçtan uca bir uygulama örneğine ise [RAG Tabanlı Doküman Asistanı](/projeler/rag-dokuman-asistani/) vaka çalışmasına bakabilirsiniz.