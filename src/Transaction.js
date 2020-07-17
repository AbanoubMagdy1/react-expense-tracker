import React from 'react'
import './Transaction.css'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';

export default function Transaction({text, value, id, remove}){
    const style = {borderRight : `4px solid ${value>=0 ? "green" : "red"}`}
    return (
        <div className='Transaction' style={style}>
            <IconButton onClick={() => remove(id)}>
                <DeleteIcon/>
            </IconButton>
            <span className='Text'>{text}</span>
            <span className='Value'>{value}$</span>
        </div>
    )
}