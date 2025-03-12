import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-right" // Position of the toast
      autoClose={3000} // Auto-close after 3 seconds
      hideProgressBar={false} // Show progress bar
      newestOnTop={false} // Older toasts stay on top
      closeOnClick // Close toast on click
      rtl={false} // Left-to-right text
      pauseOnFocusLoss // Pause timer when window loses focus
      draggable // Allow dragging to dismiss
      pauseOnHover // Pause timer on hover
    />
  </StrictMode>
);