 curl -X POST http://localhost:3000/api/auth/login      -H "Content-Type: application/json"      -d '{
           "username": "hasankayan2000@hotmail.com",
           "password": "IamFeelingGood!@"
         }'


curl -X GET http://localhost:3000/api/auth/verify \
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhhc2Fua2F5YW4yMDAwQGhvdG1haWwuY29tIiwiaWF0IjoxNzQwNjY0NDE3LCJleHAiOjE3NDA2NjgwMTd9.rsrDNVQaU84jcxttF3JsWahdgcuTScMeMxYuv2tTCf0"



curl -X POST http://localhost:3000/api/website/blogs/create-blog \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhhc2Fua2F5YW4yMDAwQGhvdG1haWwuY29tIiwiaWF0IjoxNzQwNjUyODg2LCJleHAiOjE3NDA2NTY0ODZ9.3zm8U7CN6k-GnAWHAk1zVqw877f7RkxCeTJ3N-AWJ9o" \
  -d '{
    "id": "blog-001",
    "title": "My First Blog",
    "content": "This is my first blog post!",
    "images": ["https://example.com/image.jpg"],
    "tags": ["introduction", "first post"],
    "url": "https://example.com/my-first-blog"
  }'



curl -X POST http://localhost:3000/api/website/portfolio/upload \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhhc2Fua2F5YW4yMDAwQGhvdG1haWwuY29tIiwiaWF0IjoxNzQwNjY0NjAxLCJleHAiOjE3NDA2NjgyMDF9.3hNwFmV0yBihqZOvOtdj5Fw3Tx0rMITQa7YHmvzlwxs" \
  -F "pdf=@/home/hasankayan/Downloads/portfolio.pdf"




curl -X POST http://localhost:3000/api/website/project/create-project \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhhc2Fua2F5YW4yMDAwQGhvdG1haWwuY29tIiwiaWF0IjoxNzQwNjY0NjAxLCJleHAiOjE3NDA2NjgyMDF9.3hNwFmV0yBihqZOvOtdj5Fw3Tx0rMITQa7YHmvzlwxs" \
  -d '{
    "id": "project-001",
    "title": "My First Project",
    "description": "This is my first project in the portfolio!",
    "technologies": ["Node.js", "Express", "MongoDB"],
    "githubLink": "https://github.com/user/my-project",
    "demoLink": "https://example.com/my-project-demo",
    "images": ["https://example.com/project-image.jpg"]
  }'
