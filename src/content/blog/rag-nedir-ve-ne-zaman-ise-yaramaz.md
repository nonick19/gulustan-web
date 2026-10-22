---
lang: tr
slug: rag-nedir-ve-ne-zaman-ise-yaramaz
title: RAG nedir ve ne zaman işe yaramaz?
description: Retrieval-Augmented Generation'ın ne olduğunu, üretimde ne zaman işe yaradığını ve hangi sorunlarda yanlış araç olduğunu anlatan pratik bir rehber.
date: 2026-10-22
tags: [RAG, Retrieval, LLM, Vector Databases]
translationKey: rag-fundamentals
---

RAG (Retrieval-Augmented Generation) kısaca şudur: modelin cevap vermeden önce, soruya ilgili belgelerden bir bağlam toplaması. Modelin ağırlıklarına bilgi gömmek yerine, bilgiyi her istekte dışarıdan getirirsiniz. Bu kadar basit tanım, ama üretimde çalışan bir RAG hattı bundan çok daha fazlasıdır.

## Bir RAG hattının parçaları

- **Belge hazırlığı:** PDF, HTML, tablo ve doküman tiplerini tek tip metne indirgerken yapıyı (başlıklar, bölümler, tablo ilişkileri) kaybetmemek. Çoğu hatanın kökü burada.
- **Chunking:** Parçalama stratejisi doküman tipine göre değişmeli. Sözleşmelerde madde bütünlüğü, teknik dokümanlarda bölüm başlığı korunarak bölünmek gerekir.
- **Embedding + indeksleme:** Vektör veritabanı (Qdrant, pgvector, Pinecone) seçimi çoğu zaman ikinci derecede; metadata tasarımı daha önemli.
- **Hibrit arama:** BM25 (anahtar kelime) + vektör (anlam) aramasının birleşimi. Özel isimler, kod parçaları ve ürün kodlarında tek başına vektör araması zayıf kalır.
- **Reranking:** İlk 50 adayı alıp cross-encoder ile yeniden sıralamak, ilk-5 doğruluğunu gözle görülür şekilde artırır.
- **Kaynak gösterimi:** Her cevabın hangi parçaya dayandığını döndürmek, hem güven hem de hata ayıklama için zorunlu.

Bu yapıyı uçtan uca bir örnekle görmek isterseniz [RAG Tabanlı Doküman Asistanı](/projeler/rag-dokuman-asistani/) vaka çalışmasına bakabilirsiniz.

## RAG ne zaman işe yarar?

- Bilgi **sık değişir** ve modelin bilgi kesim tarihinden bağımsız olması gerekir (ürün dokümanları, politikalar, SSS).
- **Kaynak gösterimi** şarttır: "bu cevabı nereden çıkardın?" sorusuna cevap vermeniz gerekiyorsa.
- Alan bilgisi **özel** ve modelin eğitim verisinde yok ya da seyrek.
- Kurum içi veriye erişim **yetkilendirmeyle** sınırlanmalı: her kullanıcı aynı modeli görse de farklı bağlam almalı.

## RAG ne zaman işe yaramaz?

1. **Sayısal akıl yürütme ve toplama:** "Bu tabloya göre geçen çeyrek büyüme neydi?" sorusu, doğru parçayı bulsa da hesaplama gerektirir. Çözüm retrieval değil, kod çalıştırma ya da SQL üretimidir.
2. **Çok belge sentezi:** "Bu 40 dokümandaki tüm çelişkileri bul" gibi görevler tek seferlik retrieval ile çözülmez; haritalama-indirgeme (map-reduce) tarzı bir akış gerekir.
3. **Belirsiz sorgular:** "Şu iptal politikası" gibi kısa sorgularda retrieval yanlış parçayı getirir. Çözüm sorgu genişletme (query expansion) ya da konuşma bağlamını sorguya eklemedir.
4. **Modelin genel bilgisi yeterliyse:** "Python'da dict nasıl filtrelenir?" gibi sorularda retrieval maliyeti ekler, değer katmaz.
5. **Kirli ya da çelişkili kaynaklar:** Kaynaklardaki yanlış bilgi, modelin cevabına doğrudan taşınır. Retrieval kalitesi olmadan RAG, halüsinasyonu gizler ama ortadan kaldırmaz.

## RAG yerine ne?

- **Uzun bağlam penceresi:** Küçük sayıda uzun doküman varsa, retrieval yerine tamamını koymak daha basit ve daha doğru olabilir.
- **Fine-tuning:** Üslup, format ve davranış öğretmek için. Gerçekleri güncel tutmak için değil.
- **Yapılandırılmış veri + araç kullanımı:** Soruların çoğu "veri üzerinde hesap" ise, LLM'i doğrudan veritabanına ya da API'ye bağlamak retrieval'den daha güvenilirdir.

## Sonuç: eval ile başlayın

RAG'ın işe yarayıp yaramadığını sezgiyle değil, küçük bir eval setiyle ölçün: 20–30 gerçek soru, beklenen kaynaklar ve kabul edilebilir cevap kriterleri. Önce baseline'ı ölçün, sonra chunking'i, sonra reranking'i değiştirin. Her adımın etkisini görmeden yapılan "iyileştirme", çoğu zaman gürültüden ibarettir.

Konuşma geçmişi ve bağlam yönetimi tarafını merak edenler için [Context Memory Katmanı](/projeler/context-memory/) vaka çalışmasına da bakabilirsiniz.