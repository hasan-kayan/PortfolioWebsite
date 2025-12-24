# Portfolio Website - Full Stack Application

Bu proje, frontend ve backend'in tek bir uygulamada birleştirildiği bir portfolio web sitesidir.

## 🚀 Özellikler

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Express.js + TypeScript + Firebase
- **Database**: Firebase Firestore (NoSQL)
- **Storage**: Firebase Storage (fotoğraf, video, PDF desteği)
- **Authentication**: JWT token tabanlı kimlik doğrulama
- **Admin Panel**: Proje, blog ve portfolio yönetimi
- **File Upload**: Fotoğraf, video ve PDF yükleme desteği

## 📁 Proje Yapısı

```
PortfolioWebsite/
├── src/                    # Frontend kaynak kodları
│   ├── components/         # React bileşenleri
│   ├── pages/             # Sayfa bileşenleri
│   └── ...
├── server/                 # Backend kaynak kodları
│   ├── src/
│   │   ├── models/        # Firestore modelleri
│   │   ├── routes/        # API route'ları
│   │   ├── services/      # Firestore ve Storage servisleri
│   │   ├── config/        # Firebase yapılandırması
│   │   ├── middleware/    # Middleware'ler
│   │   └── index.ts       # Server entry point
│   └── ...
└── ...
```

## 🛠️ Kurulum

### 1. Bağımlılıkları Yükle

```bash
npm run install:all
```

Bu komut hem frontend hem de backend bağımlılıklarını yükler.

### 2. Firebase Kurulumu

Detaylı kurulum için `FIREBASE_SETUP.md` dosyasına bakın. Özet:

1. Firebase Console'da Firestore Database ve Storage'ı etkinleştirin
2. Service Account Key oluşturun ve `server/serviceAccountKey.json` olarak kaydedin
3. `server/.env` dosyasını oluşturun:

```bash
cd server
cp .env.example .env
```

`.env` dosyasını düzenleyin:

```env
PORT=5000
FIREBASE_SERVICE_ACCOUNT_PATH=./serviceAccountKey.json
FIREBASE_PROJECT_ID=hasankayan-d818c
FIREBASE_STORAGE_BUCKET=hasankayan-d818c.appspot.com
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### 3. Admin Kullanıcısı Oluştur

```bash
cd server
npm run create-admin
# veya özel kullanıcı adı/şifre ile:
npx tsx scripts/create-admin-user.ts admin mypassword
```

## 🚀 Çalıştırma

### Development Mode

Frontend ve backend'i birlikte çalıştırmak için:

```bash
npm run dev:all
```

Sadece frontend:
```bash
npm run dev
```

Sadece backend:
```bash
npm run dev:server
```

### Production Build

```bash
npm run build:all
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/login` - Kullanıcı girişi
- `GET /api/auth/verify` - Token doğrulama (protected)

### Projects
- `GET /api/projects/get-all-projects` - Tüm projeleri getir (public)
- `POST /api/projects/create-project` - Proje oluştur (protected)
- `PUT /api/projects/update-projectby/:id` - Proje güncelle (protected)
- `DELETE /api/projects/delete-projectby/:id` - Proje sil (protected)

### Blogs
- `GET /api/blogs/get-all-blogs` - Tüm blogları getir (public)
- `POST /api/blogs/create-blog` - Blog oluştur (protected)
- `PUT /api/blogs/update-blogby/:id` - Blog güncelle (protected)
- `DELETE /api/blogs/delete-blogby/:id` - Blog sil (protected)

### Portfolio
- `GET /api/portfolio/download` - Portfolio PDF indir (public)
- `POST /api/portfolio/upload` - Portfolio PDF yükle (protected)
- `DELETE /api/portfolio/delete` - Portfolio PDF sil (protected)

## 🔐 Authentication

Admin paneline erişmek için `/login` sayfasından giriş yapın. Token localStorage'da saklanır ve 7 gün geçerlidir.

## 📝 Notlar

- Backend port: `5000`
- Frontend port: `5173` (Vite default)
- Database: Firebase Firestore
- Storage: Firebase Storage (fotoğraf, video, PDF)
- Tüm dosyalar Firebase Storage'da saklanır

## 🐛 Sorun Giderme

### Port 5000 zaten kullanımda
```bash
lsof -ti:5000 | xargs kill -9
```
veya `.env` dosyasında `PORT` değişkenini değiştirin.

### Firebase bağlantı hatası
- Service account key dosyasının doğru yüklendiğinden emin olun
- `FIREBASE_SERVICE_ACCOUNT_PATH` veya `FIREBASE_SERVICE_ACCOUNT_KEY` değişkenini kontrol edin
- Firebase Console'da Firestore ve Storage'ın etkin olduğundan emin olun
- `FIREBASE_PROJECT_ID` ve `FIREBASE_STORAGE_BUCKET` değişkenlerini kontrol edin

### API endpoint'leri çalışmıyor / Veriler yüklenmiyor
1. **Backend'in çalıştığından emin olun:**
   ```bash
   curl http://localhost:5000/health
   ```
   `{"status":"ok","message":"Server is running"}` dönmeli

2. **MongoDB bağlantısını kontrol edin:**
   - Backend console'da "✅ Connected to MongoDB" mesajını görmelisiniz
   - Eğer hata varsa MongoDB'yi başlatın

3. **Browser console'u kontrol edin:**
   - Network tab'ında API çağrılarını kontrol edin
   - Hata mesajlarını okuyun

4. **Vite proxy ayarlarını kontrol edin:**
   - `vite.config.ts` dosyasında proxy ayarları doğru olmalı

### Token hatası
- JWT_SECRET'in doğru ayarlandığından emin olun
- Token'ın süresi dolmuş olabilir, tekrar giriş yapın
- Admin kullanıcısı oluşturduğunuzdan emin olun

## 📄 Lisans

Bu proje özel bir projedir.

