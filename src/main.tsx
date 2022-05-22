import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import Expenses from "./routes/expenses/Expenses";
import Invoices from "./routes/invoices/Invoices";
import Animation from "./routes/animation/Animation";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="animation" element={<Animation />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
