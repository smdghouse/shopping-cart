import React from 'react'
import {AiTwotoneStar,AiOutlineStar} from 'react-icons/ai'
function Rating({rate,set,style}) {
    const mystars=[...Array(5)]
  return (  <>
      {
        mystars.map((val,i)=>(<span key={i} onClick={()=>set(i+1)} style={style}>
        {
            rate>i?(<AiTwotoneStar/>):(<AiOutlineStar/>)
}</span>))
      }
    </>)
  
   
  
}

export default Rating