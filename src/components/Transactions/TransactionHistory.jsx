import React from 'react';
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
    <div className={css.transaction}>
        <h2 className={css.storytitle}>Transactions</h2>
    <table className={css.transtable}>
        <thead>
            <tr className={css.transtitle}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody className={css.transstory}>
            {items.map(transaction => (
                <tr className={css.transitems} key={transaction.id}>
                    <td className={css.transtype}>{transaction.type}</td>
                    <td className={css.transamount}>{transaction.amount}</td>
                    <td className={css.transcurrensy}>{transaction.currency}</td>
                </tr>
            ))}
        </tbody>
        </table>
        </div>
);

export default TransactionHistory;
