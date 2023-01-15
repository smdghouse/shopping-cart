import React, { Children, createContext, useContext, useEffect, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import {productreducer, reducer} from "../reducer/reducer"
const createcart=createContext()
const Context=({children})=> {
  faker.seed(100)
  const products =[...Array(30)].map(()=>({
    id:faker.datatype.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.image.food(),
    instock:Math.floor(Math.random()*10),
    fastDelivery:faker.datatype.boolean(),
    rating:Math.ceil(Math.random()*5)
  }))
   const [state,dispatch]=useReducer(reducer,{
    products,
    cart:[]
   })
   const [productstate, productDispatch]=useReducer(productreducer,{
    bystock:false,
    byfastdelivery:false,
    byrating:0,
    searchQuery:''

   })
  return (
    <createcart.Provider value={{state,dispatch,productstate, productDispatch}}  >{children}</createcart.Provider>
  )
}

export default Context
export const Cartstate=()=>
{
    return useContext(createcart)
}
