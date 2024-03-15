import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";


const Carts = ({handleAddtoCart}) => {
    const [carts,setCarts] = useState([])
    useEffect(()=>{
        fetch('/public/fakedata.json')
        .then(res=>res.json())
        .then(data=>setCarts(data))
    },[])
    return (
        <div className="">
          
           <div className="grid grid-cols-3 gap-5">
           {
                carts.map(cart=><Cart cart={cart} handleAddtoCart={handleAddtoCart}></Cart>)
            }
            
           </div>
        </div>
    );
};

export default Carts;