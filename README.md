## Hyper Teknoloji - Frontend Case

[Canlı Demo](fe-task-mu.vercel.app/)

# Kurulum

- Projeyi bilgisayarımıza klonladıktan sonra gerekli kütüphaneleri yüklemek için proje dizininde `npm install` komutunu çalıştırıyoruz. (bilgisayarda node kurulu olmalıdır)
- Yine proje dizininde `.env` dosyamızı oluşturup `.example.env` formatında `API_TOKEN` tanımlamasını yapıyoruz.
- `npm run dev` komutu ile sunucuyu başlattıktan  `http://localhost:3000` tarayıcıda bu adrese gidip sonucu görebiliriz


# Proje Açıklaması

Hyper Teknoloji API'sini kullanarak ürünleri listeleme uygulaması. Kullanılan teknolojiler: Next.js, Redux, MUI, SCSS

- Header ve footer mobil ekranlarda da uyumlu olacak şekilde entegre edildi.
- Ürünler sayfasında SSR kullanıldı bu sayede SEO yapılabilecek duruma geldi.
- Ürün bulunamadı uyarısı eklendi ve ürünler sayfasına infinite scroll entegre edildi.

