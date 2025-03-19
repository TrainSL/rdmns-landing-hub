
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add custom animation for the loading screen
import './styles/animations.css';

createRoot(document.getElementById("root")!).render(<App />);
