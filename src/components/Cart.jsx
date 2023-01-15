import React from 'react'
import { Cartstate } from '../context/Context.jsx'
import Total from './Total.jsx'
import Rating from './Rating'
import { Form } from 'react-bootstrap'
import  {RiDeleteBinFill} from 'react-icons/ri'
function Cart() {
  const {state:{cart},dispatch}=Cartstate()
  return (
    <div className='home total'>
      <Total/>
      <div className='cartitem'>
        {
          cart.map(val=>(<div key={val.id} className="single_cart_item"><img src={val.image} alt={val.name} /> {val.name} {val.price.split('.')[0]} <span><Rating rate={val.rating}/></span> <Form.Control as='select' value={val.qty} onChange={(e)=>dispatch(
            {
              type:"qty",
              payload:{
                id:val.id,
                qty: e.target.value
              }
            }
          )} style={{width:`100px`}}>{
            [...Array(val.instock).keys()].map(val=>(<option key={val}>{val+1}</option>))
        }</Form.Control><RiDeleteBinFill fontSize='25px' onClick={()=>dispatch({type:'remove',payload:val})}/></div>))
        }
      </div>
    </div>
  )
}

export default Cart