---
lang: tr
slug: goruntu-ve-video-uretiminde-en-cok-oy-alan-10-makale
title: "Görüntü ve video üretiminde en çok oy alan 10 makale (HF Daily Papers)"
description: "Hugging Face Daily Papers'ta AI ve görüntü alanında en yüksek puanı alan makalelerden üretim tarafı: oynanabilir oyun dünyaları, metinli görsel üretimi, video akışı, difüzyon hızlandırma ve 3D."
date: 2026-10-22
tags: [Research, Video Generation, Image Generation, 3D, Diffusion]
translationKey: hf-vision-generation
---

Hugging Face'in [Daily Papers](https://huggingface.co/papers) listesi, AI araştırmasının en hızlı akan vitrini. Bu yazıda (22 Ekim 2026 anlık görüntüsüne göre) **görüntü ve yapay zekâ** alanında en yüksek puanı alan makalelerden üretim tarafını topladım — ikinci bölümde [görsel ajanlar ve doküman AI'ı](/blog/gorsel-ajanlar-ve-dokuman-ai-en-cok-oy-alan-10-makale/) var. Oy sayıları zamanla değişir; sabit bir sıralama değil, anlık bir popülerlik göstergesi.

## 1. [Matrix-Game 4.0: Harnessing Video Models for Real-Time Playable Game Worlds](https://huggingface.co/papers/2610.27999)

Kontrollü videodan gerçekten *oynanabilir* dünyalara geçişin üç şartı var: kalıcı dünya durumu, çalıştırılabilir oyun kuralları ve düşük gecikmeli etkileşim. Matrix-Game 4.0, görsel üretimi oyun motorundan ayıran bir "oyun harnesi" öneriyor: hafif bir motor dünya durumunu tutarken video modeli yalnızca görselden sorumlu. Mimari ders burada genel: **durumu kod tutmalı, model görüntülemeli.**

## 2. [MOSS-Image Technical Report](https://huggingface.co/papers/2610.23374) — 91 oy

Açık ağırlıklı görüntü üretimi uzun süredir yoğun metinli, karmaşık düzenli görsellerde kapalı sistemlerin gerisindeydi. OpenMOSS'un 5B'lik tek akışlı difüzyon transformatörü, niyet farkındalıklı kompozisyon eklemesiyle uzun metin ve layout benchmark'larında açık ağırlıkta SOTA'ya ulaşıyor. [GitHub'da](https://github.com/OpenMOSS/MOSS-Image) kodu açık.

## 3. [Looking Ahead: Modeling Future Evolution in Autoregressive Video Generation](https://huggingface.co/papers/2610.29989)

Otokorelatif video difüzyonu parça parça üretim yaparken, "makul görünen devam" gerçekten sahnenin nasıl evrildiğini modellediği anlamına gelmiyor: güçlü zamansal tekrar, yerel görsel sürekliliği bir kısayol hâline getiriyor. Future Chunk Prediction (FCP) adlı yardımcı hedef, modeli bu kısayoldan vazgeçip **sahne evrimini** modellemeye zorluyor.

## 4. [SolarRenderer: Few-Step Generative Reference Rendering](https://huggingface.co/papers/2610.28630) — 48 oy

Oyun motorları ve kod ajanları sahnenin düzenini, hareketini ve kamerasını verebiliyor; asıl zorluk bu kaba yapıyı gerçekçi videoya çevirmek. SolarRenderer, dondurulmuş bir video omurgasına hafif LoRA'lar ekleyerek yapıyı takip eden, kalan görünümü tamamlayan bir render'ı **dört adımda ya da gerçek zamanlı akışta** üretiyor.

## 5. [StreamEval: Evaluating Interactive Streaming Video Generation Models](https://huggingface.co/papers/2610.28402)

Etkileşimli akış video üretimi için birleşik bir benchmark: avatar diyalogu, avatar performansı, dünya üretimi, talimatla düzenleme ve referansla düzenleme olmak üzere beş görev, 300 senaryolu test. Video üretiminde kaliteyi "klip nasıl görünüyor" değil, **etkileşim altında nasıl davrandığı** ölçüyor — [ajan değerlendirme](/blog/ajan-degerlendirme-2026-benchmark-yanilmasinin-otesinde/) yazısındaki katmanlı bakışın video karşılığı.

## 6. [Correction Training for Diffusion Models](https://huggingface.co/papers/2610.14136)

Difüzyon modellerinde adım adım örnekleme hata biriktiriyor: denoiser eğitimde gerçek görüntü + gürültü görürken, çıkarımda kendi kusurlu tahminlerini girdi alıyor (exposure bias). UC Berkeley'den bu çalışma, hatayı düzelten bir eğitim adımı öneriyor ve modellerin CFG'ye neden bu kadar bağımlı olduğuna dair bir açıklama sunuyor.

## 7. [Learning the 4D World through Point Trajectory Forecasting](https://huggingface.co/papers/2610.28594)

Video-Point Model (VPM), çoklu kamera geçmişi ve dil talimatıyla hem farklı bakış açılarından gelecek videoları hem de kalıcı sahne noktalarının 3D yörüngelerini birlikte tahmin ediyor. 4D dünyayı "görüntü akışı" olarak değil, **nokta izdüşümleriyle** modellemek, hareketi ölçelebilir kılıyor.

## 8. [Joints, Camera, Action! Co-Generating 3D Motion and Video for Arbitrary Rigs](https://huggingface.co/papers/2610.28632) (NVIDIA)

Video modelleri inandırıcı hareket üretebiliyor ama bu hareketi piksellerin ötesinde — belirli bir 3D varlığı canlandırmak için — kullanmak zor. Bu model, videoyu ve tekrar oynatılabilir 3D hareketi **herhangi bir rig için birlikte** üretiyor; üretilen animasyon doğrudan 3D sahneye yerleştirilebiliyor.

## 9. [PhysSkin++: Real-Time and Generalizable Physics-Based Animation via Self-Supervised Neural Skinning](https://huggingface.co/papers/2610.26067)

Farklı 3D şekiller ve uzamsal ayrıştırmalar üzerinde gerçek zamanlı fizik tabanlı animasyonun genelleşmesi zor. PhysSkin++, statik geometrilerden sürekli sinirsel "skinning" alanları öğrenip kompakt deformasyon alt uzayları kuruyor; şekil başına yeniden eğitim gerektirmiyor.

## 10. [LLM2R: From Large Language Models to 3D Reassemblers](https://huggingface.co/papers/2610.18604)

3D parça montajı, parçaların her biri için SE(3) dönüşümü tahmin ederek bütünü yeniden kurmak demek; bir parçanın yeri nadiren kendi geometrisiyle belirlenir. LLM2R, tüm parça kümesi üzerinde akıl yürütmeyi büyük dil modellerinin genel çıkarımına devrediyor; çok parçalı nesnelerde ikili ilişkiye dayalı yöntemlerin ölçek sorununu çözüyor.

## Genel resim

Üretim tarafında iki eğilim göze çarpıyor: **böl ve yönet** (Matrix-Game 4.0'ın harnesi, SolarRenderer'ın dondurulmuş omurgası, LLM2R'nin parça mantığı) ve **ölçülebilirlik** (StreamEval'ın etkileşimli testleri, VPM'nin nokta yörüngeleri). Görüntü AI'ı giderek daha az "sihirli model", daha çok **mühendislikle çerçevelenmiş sistem** hâline geliyor; ki bu, [Inference mühendisliği 2026](/blog/inference-muhendisligi-2026-speculative-decoding-batching-nicelendirme/) yazısının da ana tezi.

İkinci bölüm: [Görsel ajanlar ve doküman AI'ında en çok oy alan 10 makale](/blog/gorsel-ajanlar-ve-dokuman-ai-en-cok-oy-alan-10-makale/).