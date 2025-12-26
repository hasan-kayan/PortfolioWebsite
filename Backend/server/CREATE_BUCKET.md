# Google Cloud Storage Bucket Oluşturma

Firebase Storage bucket'ı oluşturmak için:

## Yöntem 1: Firebase Console (Önerilen)

1. Firebase Console'a gidin: https://console.firebase.google.com/project/hasankayan-d818c/storage
2. "Get started" butonuna tıklayın
3. Storage'ı etkinleştirin
4. Bucket adı: `hasankayan-d818c.appspot.com` (otomatik oluşturulur)

## Yöntem 2: Google Cloud Console

1. Google Cloud Console'a gidin: https://console.cloud.google.com/storage/create-bucket?project=hasankayan-d818c
2. Bucket adı: `hasankayan-d818c.appspot.com`
3. Location: `europe-west1` (veya tercih ettiğiniz bölge)
4. Storage class: `Standard`
5. "Create" butonuna tıklayın

## Yöntem 3: Script ile (İzin varsa)

```bash
cd server
npm run create-gcs-bucket
```

## Bucket Oluşturulduktan Sonra

Bucket oluşturulduktan sonra portfolio yükleme çalışacaktır.

