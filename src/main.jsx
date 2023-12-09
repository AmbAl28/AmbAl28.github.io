import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Canvas} from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="container">
        <div className="panel">
          Какие то показатели
          {/* Отладка */}
        </div>
        <div className="panel_2">
          Какие то показатели
          {/* Отладка */}
        </div>
        <div className="aim">
          {/* Прицел */}
        </div>
        {/* Камера */}
        <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 5, 0] }}>
          {/* Основная сфена */}
            <App />
        </Canvas>
    </div>
  </React.StrictMode>,
)