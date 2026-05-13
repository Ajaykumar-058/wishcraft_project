# README.md

````md
# 🎉 WishCraft

WishCraft is a full-stack personalized greetings and wishes application that allows users to create custom greeting images using their profile name and photo.

Users can:
- Sign Up / Sign In
- Continue as Guest
- Upload Profile Images
- View Greeting Templates
- Generate Personalized Greetings
- Share Images directly to social platforms

Built using **React**, **Node.js**, **Express**, **Neon PostgreSQL**, and **Cloudinary**.

---

# 🚀 Features

## 🔐 Authentication
- Email Sign Up & Sign In
- Google Authentication
- Guest Access
- JWT Authentication
- Secure Password Hashing

---

## 👤 User Features
- Profile Setup
- Upload Profile Picture
- Personalized Greeting Cards
- Live Preview
- Share Greetings
- Responsive UI

---

## 🖼️ Image Features
- Greeting Templates
- Dynamic Name Overlay
- Profile Image Overlay
- Cloudinary Image Storage
- Optimized CDN Delivery

---

## 💎 Premium Features
- Premium Greeting Templates
- Subscription Popup
- Free vs Premium Content Separation

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS / CSS
- Vite

## Backend
- Node.js
- Express.js
- PostgreSQL
- Neon Database
- JWT
- bcryptjs
- Multer

## Cloud Services
- Neon PostgreSQL
- Cloudinary

---

# ☁️ Services Used

## 🐘 Neon PostgreSQL
Used for:
- User Authentication
- User Profiles
- Template Data
- Premium Status

### Advantages
- Serverless PostgreSQL
- Fast & Scalable
- Reliable Cloud Database

---

## 🖼️ Cloudinary
Used for:
- Profile Image Uploads
- Greeting Template Storage
- Image Optimization
- CDN Delivery

### Advantages
- Secure Cloud Storage
- Fast Image Delivery
- Automatic Optimization

---

# 📁 Project Structure

```bash
wishcraft/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   ├── utils/
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── wishcraft_client/
│   ├── node_modules/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
│
├── README.md
└── package.json
````

---

# ⚡ Getting Started

# 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/wishcraft.git
cd wishcraft
```

---

# 2️⃣ Backend Setup

```bash
cd backend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

DATABASE_URL=your_neon_database_url

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# ▶️ Start Backend Server

```bash
npm run dev
```

Backend runs at:

```bash
http://localhost:5000
```

---

# 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd wishcraft_client
npm install
```

---

# ▶️ Start Frontend

```bash
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

---

# 🔐 Authentication Flow

```text
First Time User
    ↓
Sign Up
    ↓
Profile Setup
    ↓
Home Page

Returning User
    ↓
Sign In
    ↓
Home Page

Google User
    ↓
Google Authentication
    ↓
Home Page

Guest User
    ↓
Skip Authentication
    ↓
Home Page
```

---

# 📡 API Endpoints

## Authentication Routes

| Method | Endpoint             | Description      |
| ------ | -------------------- | ---------------- |
| POST   | `/api/auth/register` | Register User    |
| POST   | `/api/auth/login`    | Login User       |
| GET    | `/api/auth/me`       | Get Current User |

---

## Image Routes

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| POST   | `/api/upload`    | Upload Image    |
| GET    | `/api/templates` | Fetch Templates |

---

# 🖼️ Personalized Greeting Flow

```text
User Selects Template
        ↓
Profile Name + Photo Loaded
        ↓
Overlay Applied Dynamically
        ↓
Final Greeting Generated
        ↓
Share to Social Media
```

---

# 📤 Sharing Features

Users can share generated greetings using:

* WhatsApp
* Instagram
* Email
* Native Share Sheet

---

# 🚀 Deployment

## Frontend

* Vercel
* Netlify

## Backend

* Render
* Railway

## Database

* Neon PostgreSQL

## Image Storage

* Cloudinary

---

# 🔒 Security Features

* JWT Authentication
* Password Encryption
* Protected Routes
* Environment Variables
* Secure Image Uploads
* CORS Protection

---

# 🧠 Challenges Faced

* Dynamic image overlay rendering
* Responsive greeting positioning
* Secure image uploads with Cloudinary
* Managing authentication flow
* Optimizing image loading speed

---

# 🔮 Future Improvements

* AI Greeting Generator
* Video Greetings
* Payment Integration
* Admin Dashboard
* User Analytics
* Multi-language Support

---

# 🧪 Available Scripts

## Backend

```bash
npm run dev
npm start
```

## Frontend

```bash
npm run dev
npm run build
```

---

# 📸 Screenshots

Add screenshots inside:

```bash
/public/screenshots/
```

---

# 🤝 Contributing

Contributions are welcome!

```bash
git checkout -b feature/NewFeature
git commit -m "Added New Feature"
git push origin feature/NewFeature
```

Then open a Pull Request 🚀

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Developed with ❤️ by Your Name

GitHub:
[https://github.com/your-username](https://github.com/your-username)

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub!

```
```
