import React from 'react';
import css from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.frienditem}>
    <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
    <img
      className={css.avatar}
      src={avatar}
      alt="User avatar"
      width="48"
    />
    <p className={css.friendname}>{name}</p>
  </li>
);


export default FriendListItem;
