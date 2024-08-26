import { Routes, Route } from 'react-router';
import './App.css'
import UserDashboard from './dashboards/user/pages';
import { RootLayout } from './layouts/root-layout/RootLayout';

function App() {

  return <Routes>
    <Route index path="/*" element={<RootLayout />} />
    <Route index path="/account/*" element={<UserDashboard />} />
  </Routes>
}

export default App
