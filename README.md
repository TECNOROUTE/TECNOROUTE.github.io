# TECNOROUTE — Kurumsal Web Sitesi

TEKNOFEST 2024 Akıllı Şehirler ve Ulaşım kategorisi Türkiye birincisi TECNOROUTE
ekibinin, kurumsal bir yazılım ve yapay zekâ şirketine dönüşümünü anlatan modern,
tek sayfalık tanıtım sitesi.

## Klasör yapısı

```
tecnoroute/
├── index.html          → Sayfa içeriği (tüm bölümler)
├── css/
│   └── style.css       → Tasarım sistemi ve tüm stiller
├── js/
│   └── script.js       → Mobil menü, kaydırma animasyonu, iletişim formu
├── assets/
│   └── favicon.svg      → Site ikonu
└── README.md
```

## Nasıl çalıştırılır

Herhangi bir kurulum ya da derleme adımı gerekmez.

1. `tecnoroute` klasörünü bilgisayarınıza indirin / açın.
2. `index.html` dosyasına çift tıklayarak tarayıcıda açın.

Daha sağlıklı bir deneyim için (özellikle form ve font yüklemeleri açısından)
klasörü basit bir yerel sunucuyla çalıştırmanız önerilir:

```bash
# Klasörün içindeyken
python3 -m http.server 8000
# ardından tarayıcıda http://localhost:8000 adresini açın
```

VS Code kullanıyorsanız "Live Server" eklentisiyle de doğrudan açabilirsiniz.

## Öne çıkan tasarım kararları

- **Tema:** Site, "rota" fikrini görsel imza olarak kullanır. Hero bölümündeki
  animasyonlu SVG rota çizgisi, ekibin akıllı şehir/ulaşım kökeninden yazılım
  ve yapay zekâya uzanan dönüşümünü temsil eder.
- **Renk paleti:** Koyu asfalt tonları (`#0A0C10`, `#12151C`) üzerine rota
  şeridi ambar sarısı (`#FFC53D`) ve sinyal/veri teali (`#35D6C0`) vurgu
  renkleri.
- **Tipografi:** Başlıklarda **Sora**, gövde metinde **IBM Plex Sans**,
  istatistik/etiket gibi veri unsurlarında **IBM Plex Mono** kullanılmıştır
  (Google Fonts üzerinden, internet bağlantısı gerektirir).
- **Hizmetler bölümü:** Şirketin altı çözüm alanı, gerçek bir "rota"
  metaforuyla dikey bir zaman çizelgesi (waypoint) olarak sunulmuştur.

## Düzenlemeniz gerekenler

Site; TECNOROUTE'un gerçek GitHub profilindeki bilgiler (TEKNOFEST 2024
başarısı, kurucular Ferhat Akalan ve Betül Mumcu) temel alınarak
hazırlanmıştır. Yayına almadan önce aşağıdaki yer tutucuları kendi
bilgilerinizle güncellemenizi öneririz:

- `index.html` içindeki `info@tecnoroute.com.tr` e-posta adresi
- Ekip kartlarındaki LinkedIn bağlantıları
- İletişim formu şu anda yalnızca istemci taraflı bir demodur (gerçek
  gönderim yapmaz). Gerçek e-posta iletimi için `js/script.js` içindeki
  `contact-form` submit olayını Formspree, EmailJS ya da kendi backend
  servisinizle entegre etmeniz gerekir.
- Şirket unvanı, adres, vergi/ticaret bilgileri gibi yasal detaylar eklenmemiştir.

## Tarayıcı desteği

Modern tarayıcılarda (Chrome, Edge, Firefox, Safari — güncel sürümler) test
edilecek şekilde yazılmıştır. `offset-path` ile hareket eden rota noktası,
çok eski tarayıcılarda görünmeyebilir; bu durumda sayfa geri kalanı
etkilenmeden normal şekilde çalışmaya devam eder.
