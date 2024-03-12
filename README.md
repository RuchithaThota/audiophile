# Audiophile React Typescript App

![preview](/public/images/preview.png)

This is a React web application built for audiophiles, featuring a collection of audio products. Users can browse products, authenticate via phone number with Firebase, manage app state with Redux Toolkit, and benefit from lazy loading for optimized performance. The project was bootstrapped with Vite and TypeScript.

## Preview

https://rt-audiophile.netlify.app/

## Features

- Authentication via phone number with Firebase
- Redux Toolkit & Context API for app state management
- Lazy loading for optimized performance
- Audiophile-themed UI design

## Technologies Used

- React
- Vite
- TypeScript
- Firebase (for phone number authentication)
- Redux Toolkit
- Tailwind CSS
- Material UI Components

## Getting Started

1. **Clone the repository**

   ```
   git clone https://github.com/RuchithaThota/audiophile.git
   ```

2. **Install dependencies**

```
cd audiophile
npm install
```

3. **Set up Firebase**

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. **Start the development server**

```
npm run dev
```

5. **Open the app in your browser**

Open http://localhost:3000 to view it in your browser.
