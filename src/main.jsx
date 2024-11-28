import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// Define the routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} />
  )
);

function Root() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

// Render the application
createRoot(document.getElementById('root')).render(<Root />);
