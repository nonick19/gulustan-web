---
lang: tr
slug: ai-agent-mimarisi-tool-use-planlama-hata-yonetimi
title: "AI agent mimarisi: tool use, planlama ve hata yönetimi"
description: "Otonom agent akışlarını üretimde güvenilir yapan üç şey: sınırlı yetkili araç tasarımı, planlama disiplini ve hata yönetimi."
date: 2026-10-15
tags: [AI Agents, Tool Use, Orchestration, LLM]
translationKey: agent-architecture
---

"Agent" kelimesi son iki yılda çok fazla anlam yüklendi. Burada kastettiğim şey net: bir LLM'in, bir hedefe ulaşmak için araç çağırıp sonuçları değerlendirerek çok adımlı bir işi yürüten sistem. Demo'da sihir gibi görünen bu akış, üretimde üç noktada kırılır: araç tasarımı, planlama ve hata yönetimi.

## 1. Araç tasarımı: dar yetki, net sözleşme

Agent'ın kullanabildiği her tool, sistemin saldırı yüzeyidir ve aynı zamanda hata kaynağıdır. Üretimde işe yarayan yaklaşım:

- **Araç başına tek sorumluluk.** "Dosyalarla ilgili her şeyi yapan" tek araç yerine `dosya_oku`, `dosya_yaz`, `dosya_ara` gibi dar araçlar. Model hangi aracı seçeceğini daha doğru belirler.
- **Zorunlu, açık parametreler.** `query: string` yerine `query: string, tarih_araligi: {baslangic, bitis}, limit: number`. Belirsiz parametre = belirsiz davranış.
- **Sınırlı yetki.** Aracın yapabilecekleri agent'ın kararına değil, kimlik ve politikaya bağlı olmalı. Agent "sil" diyebilir; araç, yetki yoksa silmemeli.
- **İdempotentlik.** Aynı araç çağrısının iki kez çalışması zarar vermemeli; aksi hâlde her yeniden deneme riskli olur.

Bu yaklaşımı [AI Agent Otomasyon Sistemi](/projeler/ai-agent-otomasyon/) vaka çalışmasında uçtan uca görebilirsiniz.

## 2. Planlama: serbest keşif değil, kontrollü akış

Sonsuz "düşün-eylem" döngüleri demo videolarında iyi görünür; üretimde maliyet, gecikme ve öngörülemezlik getirir. Bunun yerine:

- **Durum makinesiyle akış.** Hangi adımda olunduğu sistemde tutulmalı, modelin hatırlamasına bırakılmamalı. Böylece yarım kalan işler devam ettirilebilir.
- **Plan-sonra-çalıştır.** Model önce kısa bir plan üretir, plan onaylanır ya da doğrulanır, sonra adımlar çalıştırılır. Plansız doğrudan eylem, uzun görevlerde yönünü kaybeder.
- **Adım bütçesi.** Maksimum araç çağrısı ve maksimum maliyet sınırı. Sınır aşılırsa akış durur ve insan devralır — "sonsuza kadar deneyen" bir agent en pahalı hatadır.

## 3. Hata yönetimi: hata varsayılan senaryodur

Araçlar başarısız olur: ağ düşer, API limiti aşılır, dönen veri beklenen şemada değildir. Dayanıklı bir agent için:

- **Deneme + geri çekilme (retry + backoff):** geçici hatalar için. Kalıcı hatalar için değil — aynı isteği beş kez denemek hatayı büyütür.
- **Çıktı doğrulama:** Araç dönüşlerini şemayla doğrulayın; modelin "herhâlde olmuştur" demesine izin vermeyin.
- **İnsan onayı kapıları:** Geri alınamaz eylemler (ödeme, silme, dışarıya gönderim) akışın içinde zorunlu onay noktaları gerektirir.
- **Gözlemlenebilirlik:** Her adımın girdisi, çıktısı, süresi ve maliyeti kaydedilmeden "neden yanlış yaptı?" sorusu cevaplanamaz.

## Ölçmeden iyileştirme olmaz

Agent akışları da eval gerektirir: tipik görevler, beklenen davranışlar ve kabul edilebilir sapma aralığı. Her prompt değişikliğinde bu set çalıştırılmalı; aksi hâlde dünkü çalışan akış, bugün sessizce bozulur.

Özet: agent'ı zeki bir sohbet olarak değil, **denetlenen bir iş akışı** olarak tasarlayın. Zeka modelde; güvenilirlik sizin mimarinizde.