import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from '../src/components/profile.jsx';
import user from '../src/components/user.json';
import { App } from '../src/components/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="App">
      <App />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  </React.StrictMode>
);
