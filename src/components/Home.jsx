import { Cartstate } from '../context/Context'
import Singleprod  from "../components/Singleprod.jsx"
import Filter  from "../components/Filter.jsx"

function Home() {
  const {state:{products},productstate:{sort,bystock,byfastdelivery,byrating,searchQuery}}=Cartstate()
  console.log(products)
  function myprod()
  {
    let sortedprod=products
    if(sort)
    {
      sort==="lowtohigh"?sortedprod.sort((a,b)=>a.price-b.price):sortedprod.sort((a,b)=>b.price-a.price)
    }
    if(!bystock)
    {
     sortedprod= sortedprod.filter(val=>val.instock)
    }
    if(byfastdelivery)
    {
      sortedprod=sortedprod.filter(val=>val.fastDelivery)
    }
    if(byrating)
    {
      sortedprod = sortedprod.filter(val=>val.rating===byrating)
    }
    if(searchQuery)
    {
      sortedprod=sortedprod.filter(val=>val.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    return sortedprod
  }

  return (
    <div className='home'>
      <Filter/>
      <div className='prodcontainer'>
      {
        myprod().map(value=>(<Singleprod key={value.id} prod={value}/>))
      }
      </div>
     
    </div>
  )
}

export default Home