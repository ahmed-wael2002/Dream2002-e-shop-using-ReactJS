import React from 'react'

export const ProductInvItem = (props) => {
    const data = props.data;
    const photo = require(`../Assets/${data.category}/${data.id}.jpg`);

    return (
        <div className={'item'}>
            <img src={photo} alt="product image"/>
            <p>Category: {data.category}</p>
            <p>Name: {data.name}</p>
            <p>Quantity: {data.quantity}</p>
        </div>
    )
}
