// Importa los módulos necesarios de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmXIdr4bA7KAXCNoYduY0vgHnK2enZnnQ",
  authDomain: "senvit-a4009.firebaseapp.com",
  projectId: "senvit-a4009",
  storageBucket: "senvit-a4009.firebasestorage.app",
  messagingSenderId: "194740284635",
  appId: "1:194740284635:web:50a36bc8d84cb1bd5730fe",
  measurementId: "G-NDHBKXKKLT"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exporta las instancias que usarás en tu app
export { auth }; // Para Authentication
export default app; // Si necesitas usar `app` directamente
