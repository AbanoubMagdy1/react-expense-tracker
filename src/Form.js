import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default function Form({add}){
    const [value, setValue] = useState(0);
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(value && text) {
            add(text, Number(value))
            setValue(0)
            setText("")
        }
        else alert("Please Enter name and value")
    }
    return (
        <form onSubmit={handleSubmit}>
            <p style={{marginBottom : 0}}>Text : </p>
            <TextField
                value={text}
                type="text"
                fullWidth
                margin="normal"
                variant="filled"
                label="Enter name"
                onChange={({target}) => setText(target.value)}
            />
            <p>Amount</p>
            <p style={{
                marginBottom: 0,
                fontSize : "10px"
            }}>(Negative-expense/positive-income)</p>
            <TextField
                value={value}
                type="number"
                fullWidth
                margin="normal"
                variant="filled"
                label="Enter value"
                onChange={({target}) => setValue(target.value)}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
            >
                Add transaction</Button>
        </form>
    )
}