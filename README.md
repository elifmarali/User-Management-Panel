# User Management Panel (Mock API)

User Management Panel, kullanıcıların yönetimini kolaylaştıran bir web uygulamasıdır. Bu panel, kullanıcıların kaydını yapmak, profillerini düzenlemek, rollerini atamak ve diğer yönetim işlemlerini gerçekleştirmek için kullanılır. Sistem responsive ve kullanıcı dostu bir tasarıma sahiptir.

## Ana Özellikler

- **Kullanıcı İsmine Göre Otomatik Değişkenleri Oluşturma:** Sistem, Mock API kullanılarak yapıldığı için create işlemleri dışında mock API ile random name değişkenleri oluşturur. Oluşturulan isim değişkenine göre sistem, otomatik olarak username, email ve random avatar imgeleri ve random roller atar.
- **Kullanıcı Yönetimi:** Yeni kullanıcılar ekleyin, mevcut kullanıcıları düzenleyin veya silebilirsiniz.
- **Rol Atama:** Kullanıcılara farklı roller atayın (admin, editör, kullanıcı vb.).
- **Role Göre Filtreleme:** Kullanıcılar rollerine göre filtrelenabilir (admin, editör, kullanıcı vb.).
- **Arama Yapma:** Kullanıcılar username ve email değişkenlerine göre aratılabilir.
- **Tümünü veya Seçilen Kullanıcıları Toplu Silebilme:** Sistem seçilmiş olan kullanıcıları tek işlem ile silebilir.
- **Sayfalama:** Sistemin performansını ve kullanıcı deneyimini artırmak için pagenation özelliği eklenmiştir.
- **Kullanıcı Bilgilerini Düzenleme:** Kullanıcıların bilgilerini düzenlemelerine olanak tanıyın (isim, e-posta, profil resmi vb.).

## Fonksiyonel Olmayan Özellikler

- **Kullanıcı Dostu Arayüz:** Kullanıcıların kolayca anlayabileceği ve kullanabileceği sezgisel bir arayüz sunar. Arayüz tasarımı, kullanıcı deneyimini en üst düzeye çıkarmak için özenle hazırlanmıştır. Menüler, düğmeler, formlar ve diğer etkileşim öğeleri, kullanıcıların istedikleri işlemleri hızlı ve kolay bir şekilde gerçekleştirmelerini sağlar.

- **Modüler Yapı:** Geliştiriciler, ihtiyaçlarına göre yeni özellikler ekleyebilir veya mevcut özellikleri çıkarabilir. Proje, modüler bir yapıya sahiptir, bu da geliştirme sürecini esnek ve ölçeklenebilir hale getirir. Modüller birbirinden bağımsızdır ve değişikliklerin diğer modüllere minimum etkisi vardır.

- **Ölçeklenebilirlik:** Büyük ölçekli projeler için optimize edilmiştir ve yüksek performans gereksinimlerini karşılayabilecek şekilde ölçeklenebilir. Artan kullanıcı sayısı veya iş yüküne göre sistem, kaynakları etkin bir şekilde kullanarak istikrarlı bir performans sağlar. Ölçeklenebilirlik, projenin uzun vadeli başarısı için kritik bir öneme sahiptir.

- **Esnek Yapı:** Farklı teknolojilerle entegre edebilir ve uygulamanın özelliklerini özelleştirebilir. Proje, farklı teknolojileri bir araya getirerek geniş bir yelpazede özellikleri destekler. Bu, projenin genişlemesini ve farklı gereksinimlere uyum sağlamasını sağlar.

- **Mikro Frontend Özelliği:** Proje, mikro frontend mimarisine uygun olarak tasarlanmıştır. Bu yaklaşım, projeyi bağımsız ve yeniden kullanılabilir parçalara böler. Her parça, kendi geliştirme ekibine sahiptir ve bağımsız olarak dağıtılabilir. Bu, ekip üyelerinin daha hızlı çalışmasını ve farklı parçaları aynı anda geliştirmesini sağlar.

- **Gereksiz Kod Tekrarı Yoktur:** Kod tekrarı önlenerek, kod tabanı temiz ve bakımı kolay hale getirilmiştir. Bu, geliştirme sürecini hızlandırır ve kodun daha tutarlı olmasını sağlar.

## Kurulum

1. **Projeyi Kopyalayın:** İlk olarak, projeyi yerel bilgisayarınıza kopyalamak için GitHub'dan klonlayın:
   ```bash
   git clone https://github.com/username/user-management-panel.git
   cd user-management-panel
   ```

## Proje Gorselleri

### Sayfa Tasarımı
<img width="1440" alt="Ekran Resmi 2024-05-18 17 57 01" src="https://github.com/elifmarali/User-Managment-Panel/assets/71133148/08c312f3-e3f7-405d-8c67-82f2671000d9">

### Role Göre Listeleme
<img width="1440" alt="Ekran Resmi 2024-05-18 17 56 56" src="https://github.com/elifmarali/User-Managment-Panel/assets/71133148/3fc54e71-c1d8-4d79-9218-428311fad6ba">

### Tümünü Seçme
Silme işlemi yapılabilir.
<img width="1440" alt="Ekran Resmi 2024-05-18 17 57 08" src="https://github.com/elifmarali/User-Managment-Panel/assets/71133148/84866849-cb32-4480-8d27-a12390ccabb5">

### Sayfalama Kısmı
<img width="1440" alt="Ekran Resmi 2024-05-18 18 16 32" src="https://github.com/elifmarali/User-Managment-Panel/assets/71133148/cbe660ac-c2f9-4bc9-aed2-67f4114b7c16">

### Düzenleme Formu
<img width="1440" alt="Ekran Resmi 2024-05-18 18 22 45" src="https://github.com/elifmarali/User-Managment-Panel/assets/71133148/e8c22f29-d803-452a-8ca4-c8ba045f74f4">

### Yeni Kullanıcı Ekleme Formu
<img width="1440" alt="Ekran Resmi 2024-05-18 18 41 01" src="https://github.com/elifmarali/User-Managment-Panel/assets/71133148/010a5cab-45e7-4883-b6c6-c61ba24fabae">

### Yeni Kullanıcı Ekleme Formundaki Değerlerin Girildiği Görüntüsü
<img width="1440" alt="Ekran Resmi 2024-05-18 18 00 46" src="https://github.com/elifmarali/User-Managment-Panel/assets/71133148/f7616aa6-7304-49bb-bc5c-e756832a96b0">

### Listelenmiş Kullanıcılar Arasından Email ve Username'e Göre Arama Yapılma Durumu
<img width="1440" alt="Ekran Resmi 2024-05-18 18 21 06" src="https://github.com/elifmarali/User-Managment-Panel/assets/71133148/03a2728d-d5d7-4442-8021-2ca638b2fc63"> 
<img width="1440" alt="Ekran Resmi 2024-05-18 18 21 11" src="https://github.com/elifmarali/User-Managment-Panel/assets/71133148/6ee45726-76e8-44ce-9439-17e90bec44dc">
















