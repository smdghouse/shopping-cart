export const reducer=(state,action)=>
{
    switch (action.type) {
            case "add":
                return{...state,cart:[...state.cart,{...action.payload,qty:1}]}
            case "remove":
                return {...state,cart:state.cart.filter(v=>(v.id!==action.payload
                    .id))}
            case "qty":
                return  {...state,cart:state.cart.filter(val=>val.id===action.payload.id?val.qty=action.payload.qty:(val.qty))}
    
        default:
            return state
    }
}
export const productreducer=(state,action)=>{
    switch (action.type) {
        case "sort":
            return {...state,sort:action.payload}
        case "stock":
            return {...state,bystock:!state.bystock}
        case "delivery":
            return {...state,byfastdelivery:!state.byfastdelivery}
        case "rating":
            return{...state,byrating:action.payload}
        case "search":
            return {...state,searchQuery:action.payload}
        case "clear":
            return{
                bystock:false,
                byfastdelivery:false,
                byrating:0,
                searchQuery:''
            
            }
        default:
            return state
    }
}