// Importa los módulos necesarios de Firebase
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC1qhpF76v1FaVZojd2as0xOdzhpMQF1cU",
  authDomain: "senvit-c4e83.firebaseapp.com",
  projectId: "senvit-c4e83",
  storageBucket: "senvit-c4e83.firebasestorage.app",
  messagingSenderId: "176069402229",
  appId: "1:176069402229:android:fb9a39295d23795644223c",
  measurementId: "10029501789"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exporta las instancias que usarás en tu app
export { auth }; // Para Authentication
export default app; // Si necesitas usar `app` directamente