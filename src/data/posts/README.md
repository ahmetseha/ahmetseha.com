# Blog Yazıları Klasörü

Bu klasör, blog için MDX formatında yazılmış içerikleri barındırır. Her bir MDX dosyası bir blog yazısını temsil eder.

## Dosya Yapısı

Her bir blog yazısı aşağıdaki yapıya sahip olmalıdır:

```md
---
title: 'Yazı Başlığı'
description: 'Yazının kısa açıklaması'
date: 'YYYY-MM-DD'
tags: ['etiket1', 'etiket2', 'etiket3']
---

Yazı içeriği buraya gelir...
```

## Yazı Yazma Kuralları

1. **Samimi ve Doğal Dil**: Yazılarınızda robot gibi değil, samimi ve doğal bir dil kullanın. Okuyucuyla konuşuyormuş gibi yazın.

2. **Başlık Hiyerarşisi**: Başlıkları doğru bir hiyerarşi ile kullanın (h1 > h2 > h3...).

3. **Kod Örnekleri**: Kod örneklerini uygun şekilde belirtin:

```js
// JavaScript kodu
const hello = 'Merhaba Dünya';
console.log(hello);
```

4. **Erişilebilirlik**: Görseller için alt metinleri ekleyin ve erişilebilirlik prensiplerine uyun.

5. **Etiketler**: İlgili etiketleri ekleyin, bu sayede yazılarınız kategorize edilebilir.

## MDX Özellikleri

MDX, Markdown'a JSX ekleme imkanı sunar. Bu sayede yazılarınızda React bileşenleri kullanabilirsiniz:

```jsx
import { Button } from 'components/ui/button';

# Interaktif İçerik

<Button>Tıkla Bana</Button>
```

## Yazı Ekleme Süreci

1. Bu klasöre yeni bir `.mdx` dosyası ekleyin
2. Yukarıdaki yapıya uygun şekilde içeriği oluşturun
3. Yazınızı test edin ve gerekli düzeltmeleri yapın
4. Değişiklikleri commit edin

## Mevcut Yazılar

- `my-portfolio-project.mdx`: Portfolio projesi hakkında bilgiler
- `web-accessibility-guide.mdx`: Web erişilebilirliği rehberi
- `advanced-web-accessibility.mdx`: İleri seviye web erişilebilirliği teknikleri

---

Bu README dosyası, blog yazılarının tutarlı bir şekilde oluşturulması ve yönetilmesi için bir kılavuz olarak hazırlanmıştır.
