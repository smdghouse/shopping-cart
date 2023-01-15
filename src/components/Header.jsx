import React from 'react'
import {Container,Navbar,Dropdown ,Badge, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { Cartstate } from '../context/Context'
import {RiDeleteBin6Fill} from 'react-icons/ri'
function Header() {
    const{state:{cart},dispatch,productDispatch}=Cartstate()
  return (
    <Navbar bg="dark" variant="dark" style={{height:`100px`}}>
        <Container>
            <Navbar.Brand>
               <Link to='/'>Ghouse-cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl placeholder='search products'onChange={(e)=>productDispatch(
                    {
                        type:"search",
                        payload:e.target.value
                    }
                )} style={{width:500}} className="m-auto"/>
            </Navbar.Text>
            <Dropdown className='dropmenu' >
                <Dropdown.Toggle variant="success">  <FaShoppingCart color="white" fontSize="25px" />
                <span>{cart.length}</span ></Dropdown.Toggle>
                <Dropdown.Menu  style={{minWidth:370} } alignRight>
                    {
                        cart.length>0?(<>
                        {
                            cart.map(val=>(<span className='dropcart' key={val.id}><img src={val.image} alt={val.name} />
                            <div className='description'>
                                <span>{val.name}</span>
                                <br />
                                <span>{val.price.split(".")[0]}rs</span>
                            </div>
                            <span onClick={()=>dispatch({type:"remove",payload:val})}><RiDeleteBin6Fill fontSize='20px' cursor="pointer"  /></span>
                            </span>))
                        }
                       <Link to="/cart"><Button style={{width:'95%',margin:"0 10px"}}>Go to cart</Button></Link>
                        </>):(<span style={{padding:10}}>cart is empty</span>)
                    }
                    
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Navbar>
  )
}

export default Header