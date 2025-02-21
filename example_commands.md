curl -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/json" -d '{
       "username": "hasankayan2000@hotmail.com",
       "password": "IamFeelingGood!@"
     }'



curl -X GET http://10.230.0.70:3000/api/auth/verify \
     -H "Authorization: Bearer <TOKEN>"



curl -X POST http://localhost:3000/api/portfolio/upload \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhhc2Fua2F5YW4yMDAwQGhvdG1haWwuY29tIiwiaWF0IjoxNzQwMTYzMjk4LCJleHAiOjE3NDAxNjY4OTh9.GRfjzFipUyyz0fvgXoxQBdaDw50oAA3HPpY816035Ak" \
-H "Content-Type: multipart/form-data" \
-F "pdf=@/home/hasankayan/Downloads/portfolio.pdf"


curl -X POST http://localhost:3000/api/portfolio/download \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhhc2Fua2F5YW4yMDAwQGhvdG1haWwuY29tIiwiaWF0IjoxNzQwMTc1MDI3LCJleHAiOjE3NDAxNzg2Mjd9.VXCYZ5nFE0XaSfcG53tEN7y_R3Yv-L3TGJLxw0ehR6c" \
-H "Content-Type: multipart/form-data" \
-F "pdf=@/home/hasankayan/Downloads/portfolio.pdf"
