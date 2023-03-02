import { Routes, Route } from 'react-router-dom'
import './App.css'
import BuildingAdd from './components/dashboard/BuildingAdd'
import Buildings from './components/dashboard/Buildings'
import ClientAdd from './components/dashboard/ClientAdd'
import Clients from './components/dashboard/Clients'
import EachClient from './components/dashboard/EachClient'
import Main from './components/dashboard/Main'
import Statistics from './components/dashboard/Statistics'
import Login from './components/login/Login'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="main" element={<Main />}>
          <Route path="statistics" element={<Statistics />} />
          <Route path="buildings" element={<Buildings />} />
          <Route path="building-add" element={<BuildingAdd />} />
          <Route path="clients" element={<Clients />} />
          <Route path="client-add" element={<ClientAdd />} />
          <Route path="clients/client/:id" element={<EachClient />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
