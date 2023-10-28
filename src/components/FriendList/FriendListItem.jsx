import React from 'react';
import css from "./FriendListItem.module.css"
import { AiFillHeart, AiFillPushpin, AiFillCloseCircle } from "react-icons/ai";


const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.frienditem}>
    <div className={css.nav}>
    <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
    <img
      className={css.avatar}
      src={avatar}
      alt="User avatar"
      width="48"
    />
      <p className={css.friendname}>{name}</p>
    </div>
    <div className={css.icons}>
    <AiFillHeart className={css.iconheart}/>
    <AiFillPushpin className={css.pin}/>
    <AiFillCloseCircle className={css.circle}/>
    </div>
  </li>
);


export default FriendListItem;
