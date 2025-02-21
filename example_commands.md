 curl -X POST http://10.230.1.79:3123/api/auth/login      -H "Content-Type: application/json"      -d '{
           "username": "AsisAdmin",
           "password": "Asisguard123!*nij$./AsIsGuArD"
         }'


curl -X GET http://10.230.0.70:3123/api/auth/verify \
     -H "Authorization: Bearer <TOKEN>"
