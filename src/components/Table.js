import React from 'react'
import './TableStyle.css';

import { useState,useEffect } from 'react';

function Table() {

    

    const [items, setData] = useState([]);
    
    useEffect (() => {
        fetch('http://localhost:3000/items')
        .then(response => response.json())
        .then(items => setData(items))

        }, []);

    const handleDelete = (id) => {
        
        setData((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const result = items.map((item) => {
    return(
        <div key={item.id} className='table-body'>
                <hr className='table-line-two' />
                <div>
                    <p>{item.firstName}</p>
                    <p>{item.lastName}</p>
                    <p>{item.category}</p>
                    <p>{item.date}</p>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            </div>
    )
    })
    return (
        <form>
            <h1>My Info</h1>
            <hr className='table-line-one' />
            <div className='table-heading'>
                <h3>FirstName</h3>
                <h3>LastName</h3>
                <h3>Category</h3>
                <h3>Date</h3>
                <div></div>
            </div>
            
            {result}

        </form>
    )
}

export default Table