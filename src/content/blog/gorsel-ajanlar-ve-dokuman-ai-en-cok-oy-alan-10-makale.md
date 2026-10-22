---
lang: tr
slug: gorsel-ajanlar-ve-dokuman-ai-en-cok-oy-alan-10-makale
title: "Görsel ajanlar ve doküman AI'ında en çok oy alan 10 makale (HF Daily Papers)"
description: "Hugging Face Daily Papers'ta AI ve görüntü alanında en yüksek puanı alan makalelerden ajan tarafı: görsel bilgisayar kullanımı, GUI ajanları, robotik dünya modelleri, OCR ve doküman ayrıştırma."
date: 2026-10-22
tags: [Research, AI Agents, Computer Vision, OCR, Robotics]
translationKey: hf-vision-agents
---

Bu, [HF Daily Papers'ın en çok oy alan görüntü/AI makaleleri](/blog/goruntu-ve-video-uretiminde-en-cok-oy-alan-10-makale/) derlemesinin ikinci bölümü: üretim tarafı yerine **görsel ajanlar, robotik ve doküman AI'ı**. Oy sayıları 22 Ekim 2026 anlık görüntüsüdür; her makalenin kendi HF sayfasına başlıktan ulaşabilirsiniz.

## 1. [Has GPT-6-Astra Achieved Embodied Intelligence?](https://huggingface.co/papers/2610.22471) — 460 oy

Listenin en yüksek puanlı makalesi bir başarı bildirimi değil, bir **sorgulama**: GPT-6-Astra'nın manipülasyon ve navigasyondaki yetkinliği, "görev başına özel model" paradigmasını sorgulatacak düzeyde; 12 temsili benchmark'ta büyük ölçekli değerlendirme var. Ama raporun asıl bulgusu boşluklar: gösterim maliyeti, yürütme süresi ve gerçek dünya dağıtımındaki pratik sınırlar. "Genel model her şeyi çözer mi?" sorusuna en iyi biçimlendirilmiş cevaplardan biri.

## 2. [OpenGCUA: Toward a Fully Open Stack for Generalist Computer Use](https://huggingface.co/papers/2610.22200) — 331 oy

Bilgisayar kullanımı görsel arayüzlerden **görsel + programatik** arayüzlere kayıyor. OpenGCUA, modelin nasıl gözlemleyeceğine, eyleyeceğine ve işini nasıl düzenleyeceğine karar verdiği genel amaçlı bir bilgisayar ajanı için açık bir yığın sunuyor: harness'tan modele karar aktarımı ve kod çalıştırma dahil. Kapalı sistemlerin (GPT-6 Astra'nın bilgisayar kullanımı gibi) açık karşılığı arayanlar için referans nokta.

## 3. [Focused Omni-Modal GUI Agents](https://huggingface.co/papers/2610.26203)

GUI ajanları ekran görüntüleri, ses, video, etkileşim geçmişi ve cihaz durumundan oluşan akışkan bir bağlamla çalışıyor, ama bu bağlamı her adımda aynen sunmak, ilgililik geçici ve seyrekken gürültü üretiyor. Makalenin tezi net: bir eylemi belirleyen sinyal bir sonraki adımda kirlilik olabilir ve hatalar bağlama geri beslendiği için **birikiyor**. Çözüm, bağlamı odaklanarak sunmak.

## 4. [Ropedia W0: Scaling Loco-Manipulation World Models across Embodiments with Human Experience](https://huggingface.co/papers/2610.26855) — 184 oy

Dünya modelleri ajanların eylem sonuçlarını öngörmesini sağlıyor ama yürüme + manipülasyonu farklı gövdelerle birlikte modellemek, heterojen eylem uzayları yüzünden zor. Ropedia W0, insan ve robotlar arasında ilk egosantrik loco-manipülasyon dünya temel modeli; 10 bin saatlik egosantrik veriden derlenmiş Xp-Data ile eğitilmiş. Robotikte **insan deneyimini ölçek** olarak kullanmanın güncel örneği.

## 5. [OpenVLHarness: Real World Visual Agentic Tool-Use with Multimodal Memory](https://huggingface.co/papers/2610.26860) — 104 oy

Apple imzalı bu çalışma, 22 benchmark üzerinde kontrollü bir deney yapıyor: temel modelin çıkarım bütçesini artırmak tek başına yalnızca **sınırlı** kazanç getiriyor. Gerçek kazanç, kalıcı bellek + heterojen araç arayüzleri + yinelemeli kanıt birleştirmede. Görsel akıl yürütmenin "daha büyük model" değil, **daha iyi harnes** meselesi olduğunu gösteren bulgular, [agent evaluation](/blog/ajan-degerlendirme-2026-benchmark-yanilmasinin-otesinde/) tezini destekliyor.

## 6. [S-Agent 2.0: Spatial Reasoning with a General Coding Agent](https://huggingface.co/papers/2610.28354) — 97 oy

Mekansal akıl yürütmede agentsal VLM'ler 3D algı araçlarıyla kanıt toplayarak büyük ilerleme sağladı; ama birçok soruda araç doğru kanıtı getiriyor, model yine de doğru sonuca varamıyor; yani darboğaz algıda değil, **çıkarımda**. S-Agent 2.0, kod ajanı çerçevesini mekansal akıl yürütmeye uyguluyor ve tam bu boşluğu hedefliyor.

## 7. [SpatialScout: Can VLM Agents Actively Explore and Map 3D Scenes?](https://huggingface.co/papers/2610.26659)

Mekansal zekâ, ajanların görsel kanıtı **aktif olarak** edinip tutarlı bir 3D temsile dönüştürmesini gerektiriyor. SpatialScout, VLM ajanlarını nesne düzeyinde aktif 3D haritalama üzerinden ölçen bir benchmark: otonom keşifle metrik harita kurulabilir mi, sorusuna cevap arıyor.

## 8. [MinerU2.5: A Decoupled Vision-Language Model for Efficient High-Resolution Document Parsing](https://huggingface.co/papers/2509.22186) — 181 oy

1.2B parametreli doküman ayrıştırma VLM'i; küresel layout analizi ile yerel içerik tanımayı **ayıran** iki aşamalı kaba-ince stratejiyle, SOTA tanıma doğruluğunu yüksek verimle birleştiriyor. RAG hatlarında belge hazırlığı adımının (bkz. [RAG nedir](/blog/rag-nedir-ve-ne-zaman-ise-yaramaz/)) doğrudan altyapısı.

## 9. [SmolDocling: An Ultra-Compact Vision-Language Model for End-to-End Multi-Modal Document Conversion](https://huggingface.co/papers/2503.11576) — 179 oy

IBM Granite ekibinden, tüm sayfayı tek geçişte işleyen ultra kompakt bir VLM; sayfa öğelerinin konumlarıyla birlikte tam bağlamını yakalayan yeni bir işaret dili olan **DocTags**'ı üretiyor. Büyük modellerin ve el yapımı boru hatlarının yerine 256M'lik tek modelle uçtan uca doküman dönüşümü.

## 10. [Unlimited OCR Works](https://huggingface.co/papers/2606.23050) — 97 oy

LLM dekoderli uçtan uca OCR modellerinde çıktı uzadıkça KV cache büyüyor ve bellek patlıyor. Baidu'nun Reference Sliding Window Attention yöntemi, uzun dizilerde bellek tüketimini sabit tutarak **onlarca sayfayı tek geçişte** çevirebiliyor. OCR'ın "sınırsız" versiyonu, doküman AI'ı için pratik bir mühendislik kazancı.

## Genel resim

Ajan tarafında tablo net: **perception değil, karar ve bağlam yönetimi** öne çıkıyor (Focused, OpenVLHarness, S-Agent 2.0). Gövde çeşitliliği ve insan verisi robotikte ölçekleniyor (Ropedia W0, GPT-6-Astra incelemesi). Doküman AI'ı ise giderek **küçük, özel ve verimli** modellere kayıyor (MinerU2.5, SmolDocling, Unlimited OCR). Maliyet tarafı için [LLM maliyet optimizasyonu](/blog/llm-maliyet-optimizasyonu-caching-model-secimi-batching/) yazısına bakabilirsiniz.

Bölüm 1: [Görüntü ve video üretiminde en çok oy alan 10 makale](/blog/goruntu-ve-video-uretiminde-en-cok-oy-alan-10-makale/).