
import { useState } from 'react'
import './App.css'
import Buy from './components/Buy/Buy'
import Carts from './components/Carts/Carts'

function App() {
 
  const [buys, setBuys] = useState([])

  const handleAddtoCart=(cart)=>{
   const newbuy = [...buys, cart]
    const isExist = buys.find(c=>c.id==cart.id)
    if(!isExist){
      setBuys(newbuy)
    }
  }

  const handleRemove=(id)=>{
    // console.log('thie is remove', id)
    const selectedId = buys.filter(r=>r.id!=id)
    setBuys(selectedId)
  //  console.log(selectedId,'selected id')
  }
  // console.log(buys)
  return (
    <>
      <h1 className="text-5xl font-bold text-center mb-8">
      <span className='text-pink-400 text-center'>Rafa</span>-shop
    </h1>
     <div className='max-w-7xl mx-auto flex justify-between'>
       <div className='w-[70%]'>
       <Carts handleAddtoCart={handleAddtoCart}></Carts>
       </div>
      <div className='w-[30%]'>
      <Buy buys={buys} handleRemove={handleRemove}></Buy>
     </div>
     
     </div>
    </>
  )
}

export default App
