# 🌐 Hasan Kayan - Portfolio Website

Welcome to the **Portfolio Website of Hasan Kayan** – a personal website showcasing projects, blogs, and interactive 3D animations.

🔗 **Live Website**: [www.hasankayan.com](https://www.hasankayan.com)  

---

## 📌 Features

- 🏠 **Home Page**:
  - Showcases 3D interactive animations built with **React Three Fiber (R3F)**.
  - Smooth animations and immersive UI design.

- 📖 **About Page**:
  - A detailed introduction about Hasan Kayan.
  - Includes a PDF portfolio viewer with the ability to download the portfolio.

- 🛠️ **Projects Page**:
  - Displays personal and professional projects.
  - Dynamically fetches projects and showcases them with images and descriptions.

- 📝 **Blogs Page**:
  - Fetches and displays blog posts dynamically.
  - Blog posts include a **Medium link** for further reading.

---

## 🏗️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **3D Animations**: React Three Fiber (R3F)
- **UI Components**: Material UI (MUI)
- **PDF Viewer**: `pdf-viewer-reactjs`
- **State Management**: React Hooks
- **Routing**: React Router
- **Backend**: Node.js, Express.js, MongoDB
- **Deployment**:Google Cloud 

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/hasan-kayan/PortfolioWebsite
cd portfolio-website


---

Project Structure


├──📂PortfolioWebsite
.
├── eslint.config.js
├── firebase.json
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── 📂public
│   ├── index.html
│   ├── 📂models
│   │   ├── bionic_arm.glb
│   │   ├── camera
│   │   │   ├── AO_S_305_MT_02_4k.jpg
│   │   │   ├── AO_S_305_MT_1_4k.jpg
│   │   │   ├── S_305_MT.mtl
│   │   │   ├── S_305_MT.obj
│   │   │   ├── S_305_MT_phot1_BaseColor_4k.jpg
│   │   │   ├── S_305_MT_phot1_Metallic_4k.jpg
│   │   │   ├── S_305_MT_phot1_Normal_4k.jpg
│   │   │   ├── S_305_MT_phot1_Roughness_4k.jpg
│   │   │   ├── S_305_MT_phot2_BaseColor_4k.jpg
│   │   │   └── S_305_MT_phot2_Normal_4k.jpg
│   │   ├── cartoonish_clouds.glb
│   │   ├── cloud.glb
│   │   ├── esp32.glb
│   │   ├── ivy.glb
│   │   ├── laptop.glb
│   │   ├── stacks
│   │   │   ├── cloud.glb
│   │   │   ├── gopher.glb
│   │   │   ├── javascript.glb
│   │   │   ├── linux-char.glb
│   │   │   ├── python.glb
│   │   │   └── react_logo.glb
│   │   └── yellow_flower.glb
│   ├── texture.png
│   └── vite.svg
├── README.md
├── 📂src
│   ├── App.css
│   ├── App.jsx
│   ├── 📂assets
│   │   ├── car.png
│   │   ├── logo.jpg
│   │   └── 📂tech
│   │       ├── git.png
│   │       └── react.png
│   ├──📂 Components
│   │   ├── CustomCursor.jsx
│   │   ├── Footer.jsx
│   │   ├── 📂ModelComponents
│   │   │   ├── CameraModel.jsx
│   │   │   ├── ESP32Model.jsx
│   │   │   └── LaptopModel.jsx
│   │   ├── Navbar.jsx
│   │   ├── PrivateRoute.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProtectedPage.jsx
│   │   ├── RoadScene.jsx
│   │   └── Typer.jsx
│   ├── 📂context
│   │   └── AuthContext.jsx
│   ├── 📂hooks
│   │   └── useIsTouchDevice.js
│   ├── index.css
│   ├── main.jsx
│   └──📂 Pages
│       ├── About.jsx
│       ├── 📂AdminPanel
│       │   ├── 📂AboutManager
│       │   │   └── AboutManager.jsx
│       │   ├── 📂BlogManager
│       │   │   └── BlogManager.jsx
│       │   ├── 📂Dashboard.jsx
│       │   └── 📂ProjectManager
│       │       └── ProjectManager.jsx
│       ├── 📂Blogs
│       │   └── Blogs.jsx
│       ├── Home.jsx
│       ├── Login.jsx
│       └── 📂Projects
│           └── Projects.jsx
├── tailwind.config.js
└── vite.config.js