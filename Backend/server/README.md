# Backend Server

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Firebase Service Account Key'i alın:
   - Firebase Console > Project Settings > Service accounts
   - "Generate new private key" butonuna tıklayın
   - JSON dosyasını `serviceAccountKey.json` olarak `server/` klasörüne kaydedin

3. `.env` dosyası oluşturun:
```bash
cp .env.example .env
```

4. `.env` dosyasını düzenleyin:
```env
PORT=5001
FIREBASE_SERVICE_ACCOUNT_PATH=./serviceAccountKey.json
FIREBASE_PROJECT_ID=hasankayan-d818c
FIREBASE_STORAGE_BUCKET=hasankayan-d818c.appspot.com
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
GITHUB_TOKEN=your-github-token-here
```

## Firebase Kurulumu

Detaylı kurulum için root dizindeki `FIREBASE_SETUP.md` dosyasına bakın.

## Admin Kullanıcı Oluşturma

```bash
npm run create-admin
# veya özel kullanıcı adı/şifre ile:
npm run create-admin -- admin mypassword
```

## Çalıştırma

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## Sorun Giderme

### Port 5001 zaten kullanımda
```bash
lsof -ti:5001 | xargs kill -9
```

### Firebase bağlantı hatası
- Service account key dosyasının doğru yüklendiğinden emin olun
- `FIREBASE_SERVICE_ACCOUNT_PATH` değişkenini kontrol edin
- Firebase Console'da Firestore ve Storage'ın etkin olduğundan emin olun

### API endpoint'leri çalışmıyor
- Backend'in çalıştığından emin olun: `http://localhost:5001/health`
- Frontend'de Vite proxy ayarlarını kontrol edin
- Browser console'da hataları kontrol edin

### Dosya yükleme hatası
- Firebase Storage bucket'ın oluşturulduğundan emin olun
- Dosya boyutu limitlerini kontrol edin (varsayılan: 10MB)
- Storage güvenlik kurallarını kontrol edin
