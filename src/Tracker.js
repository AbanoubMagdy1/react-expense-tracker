import React from 'react'
import Transaction from './Transaction'
import Form from './Form'
import useLocalStorage from './Hooks/useLocalStorage'
import { v4 as uuid } from 'uuid';
import './Tracker.css'


export default function Tracker(){
    const starterTransactions = [
        {text : "Good", value : 40, id : uuid()},
        {text : "Bad", value : -40, id : uuid()},
        {text : "Excellent", value : 30, id : uuid()},
        {text : "Awful", value : -6, id : uuid()},
    ]
    const [transactions, setTransactions] = useLocalStorage("transactions", starterTransactions);

    const add = (text, value) => {
        setTransactions([...transactions, {text, value, id : uuid()}])
    }

    const remove = id => {
        const newTransactions = transactions.filter(transaction => transaction.id !== id)
        setTransactions(newTransactions)
    }

    const income = transactions.reduce((acc, {value}) => {
        if(value >= 0) return acc + value
        else return acc
    },0)

    const expense = transactions.reduce((acc, {value}) => {
        console.log(value)
        if(value < 0) return acc + value
        else return acc
    },0)

    const balance = income + expense

    return (
        <div className="Tracker">
            <h1>Expense Tracker</h1>
            <div className="Balance">
                <h4>Your balance</h4>
                <h2 className="Balance">{Number(balance).toFixed(2)}$</h2>
            </div>
            <div className="InAndEx">
                <div className="In">
                    <h4>Income</h4>
                    <p>${Number(income).toFixed(2)}</p>
                </div>
                <div className="Ex">
                    <h4>Expense</h4>
                    <p>${Number(expense).toFixed(2) * -1}</p>
                </div>
            </div>
            <div className="Trans">
                <h3>History</h3>
                {transactions.map(transaction => <Transaction 
                                                    {...transaction}
                                                    remove={remove}
                                                    key={transaction.id} 
                                                 />)}
            </div>
            <div className="Add">
                <h3>Add new transaction</h3>
                <Form add={add}/>
            </div>
        </div>
    )
}