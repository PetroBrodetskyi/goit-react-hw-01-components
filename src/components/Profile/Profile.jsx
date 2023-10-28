import React from 'react';
import css from "./Profile.module.css"

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt={username}
        className={css.avatar}
      />
      <h1 className={css.name}>{username}</h1>
      <h2 className={css.tag}>@{tag}</h2>
      <h3 className={css.location}>{location}</h3>
    </div>

    <ul className={css.stats}>
      <li className={css.statsflex}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li className={css.statsflex}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li className={css.statsflex}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;
