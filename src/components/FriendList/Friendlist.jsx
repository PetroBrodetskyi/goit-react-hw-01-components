import React from 'react';
import FriendListItem from './FriendListItem.jsx';
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <section className={css.friendlist}>
    <h2 className={css.friendstitle}>Friends</h2>
    <ul className={css.list}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
    </ul>
    </section>
);

export default FriendList;

