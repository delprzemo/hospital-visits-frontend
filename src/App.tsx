import React from 'react'
import './App.scss'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Hospitals from './pages/Hospitals/Hospitals'
import Visits from './pages/Visits/Visits'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hospitals />} />
          <Route path="/hospital-list" element={<Hospitals />} />
          <Route path="/visits/:hospitalId" element={<Visits />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
