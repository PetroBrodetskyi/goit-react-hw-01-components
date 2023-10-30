import React from 'react';
import css from "./Statistics.module.css"

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statlist}>
      {stats.map(stat => (
        <li className={css.statli} key={stat.id} style={{ backgroundColor: generateRandomColor() }}>
          <span className={css.statlabel}>{stat.label}</span>
          <span className={css.statpercentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);



export default Statistics;
