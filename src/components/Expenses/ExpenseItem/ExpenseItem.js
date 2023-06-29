import React, { useState } from 'react';
import './ExpenseItem.css'
import Card from '../../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    };

    return (
        <li>
            <Card className="expense-item">
                <div className="expense-item__description">
                    <ExpenseDate date={props.date}/>
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;