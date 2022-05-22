import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import './index.css'

import App from './App'
import HappyBirthday from "./routes/HappyBirthday/HappyBirthday";
import Animation from "./routes/animation/Animation";

ReactDOM.createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                <Route path="happy-birthday" element={<HappyBirthday />} />
                <Route path="animation" element={<Animation />} />
                <Route path="/" element={<Navigate replace to="/happy-birthday" />} />
                <Route path="*" element={<Navigate replace to="/happy-birthday" />} />
              </Route>
          </Routes>
      </BrowserRouter>
)
