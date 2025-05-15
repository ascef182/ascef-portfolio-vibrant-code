
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Adiciona a fonte Poppins
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Aplica a fonte em todo o documento
document.body.style.fontFamily = "'Poppins', sans-serif";

createRoot(document.getElementById("root")!).render(<App />);
