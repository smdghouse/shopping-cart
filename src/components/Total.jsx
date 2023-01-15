import React, { useEffect, useState } from 'react'
import { Cartstate } from '../context/Context'

function Total() {
    const {state:{cart}}=Cartstate()
    const [total,setTotal]=useState()
    useEffect(() => {
        setTotal(cart.reduce((accu,prod)=>(accu+(Number(prod.price))*prod.qty),0))
    }, [cart])
    
  return (
    <div className='filter totaldiv'>
      <h1>{`Subtotal(${cart.length}) items`}</h1>
        <h3>Total price:{total}rs</h3>
        <p></p>
    </div>
  )
}
export default Total