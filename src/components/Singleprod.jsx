import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Cartstate } from '../context/Context'
import Rating from './Rating'

function Singleprod({prod}) {
  const{state:{cart},dispatch}=Cartstate()
  return (
    <div className='singleprod'>
        <Card className='mycard'>
          <Card.Img variant='top' src={prod.image}/>
          <Card.Body>
            <Card.Title><span>{prod.name}</span></Card.Title>
            <Card.Subtitle><span>{prod.price.split('.')[0]}rs</span></Card.Subtitle>
            {
              prod.fastDelivery?(<span>fastDelivery</span>):(<span>4days delivery</span>)
            }
            <Rating rate={prod.rating} />
            <br />
            {cart.some(c=>c.id==prod.id)?( <Button variant='danger' onClick={()=>dispatch({type:"remove",payload:prod})}>Remove from cart</Button>):( <Button variant='success' onClick={()=>dispatch({type:'add',payload:prod})} disabled={!prod.instock}>{prod.instock?("Add to cart"):("outofstock")}</Button>)}
           
           
          </Card.Body>
        </Card>
    </div>
  )
}

export default Singleprod