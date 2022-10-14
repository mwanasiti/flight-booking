import { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <Navbar setUser={setUser}/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
