import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import toast, { Toaster } from 'react-hot-toast'
import App from './routes';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient({
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
);


reportWebVitals();
