import { Routes, Route } from 'react-router';
import './App.css'
import UserDashboard from './dashboards/user/pages';
import { auth } from './firebase/firebase.config'
import { RootLayout } from './layouts/root-layout/RootLayout';

function App() {
  const { currentUser } = auth;

  return <Routes>
    <Route index path="/*" element={<RootLayout />} />
    <Route index path="/account/*" element={<UserDashboard />} />
  </Routes>
}

export default App
