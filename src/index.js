import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Profile from '../src/components/profile.jsx';
import user from '../src/components/user.json';

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  )
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

