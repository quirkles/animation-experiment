import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import HappyBirthday from "./routes/HappyBirthday/HappyBirthday";
import Animation from "./routes/animation/Animation";

ReactDOM.createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                <Route path="happy-birthday" element={<HappyBirthday />} />
                <Route path="animation" element={<Animation />} />
              </Route>
          </Routes>
      </BrowserRouter>
)
