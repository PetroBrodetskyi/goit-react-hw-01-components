import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './components/Profile/Profile.jsx';
import user from './components/user.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="App">
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
