import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Cartstate } from '../context/Context.jsx'
import Rating from './Rating.jsx'

function Filter() {
  const{productstate:{ bystock,byfastdelivery,byrating,sort,searchQuery},productDispatch}=Cartstate()
  console.log( bystock,byfastdelivery,byrating,sort,searchQuery)
  return (
    <div className='filter'>
        <h5 style={{textAlign:`center`,textTransform:'uppercase'}} className='title'>filter products</h5>
        <span>
            <Form.Check
                inline
                label="Ascending"
                name='group1'
                type="radio"
                id={`inline1`}
                onChange={
                    ()=>productDispatch(
                        {
                            type:"sort",
                            payload:"lowtohigh"
                        }
                    )
                }
                checked={sort==="lowtohigh"?true:false}
                />
        </span>
        <span>
            <Form.Check
                inline
                label="Descending"
                name='group1'
                type="radio"
                id={`inline2`}
                onChange={
                    ()=>productDispatch(
                        {
                            type:"sort",
                            payload:"hightolow"
                        }
                    )
                }
                checked={sort==="hightolow"?true:false}
                />
        </span>
        <span>
            <Form.Check
                inline
                label="include out of stock"
                name='group1'
                type="checkbox"
                id={`inline3`}
                onChange={()=>productDispatch({type:"stock"})}
                checked={bystock}
                />
        </span>
        <span>
            <Form.Check
                inline
                label="Fast delivery"
                name='group1'
                type="checkbox"
                id={`inline1`}
                onChange={()=>productDispatch({type:"delivery"})}
                checked={byfastdelivery}
                />
        </span>
        <span><label >Rating:</label>
        <Rating rate={byrating} set={(i)=>productDispatch({type:"rating",payload:i})} style={{cursor:"pointer"}}/></span>
        <Button variant='light' onClick={()=>productDispatch({type:"clear"})}>clear filter</Button>
    </div>
  )
}

export default Filter